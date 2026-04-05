import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';

const BlogDetailPage = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const contentRef = useRef(null);

    const HASHNODE_GQL_ENDPOINT = 'https://gql.hashnode.com';
    const QUERY = `
    query Post($slug: String!) {
      publication(host: "blog.aadarshadhakal.com.np") {
        post(slug: $slug) {
          title
          content {
            html
          }
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
    `;

    useEffect(() => {
        const fetchPost = async () => {
            const cacheKey = `hashnode_post_${slug}`;
            const cachedData = sessionStorage.getItem(cacheKey);

            if (cachedData) {
                setPost(JSON.parse(cachedData));
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(HASHNODE_GQL_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: QUERY, variables: { slug } }),
                });
                const result = await response.json();
                const fetchedPost = result.data.publication.post;

                if (fetchedPost) {
                    sessionStorage.setItem(cacheKey, JSON.stringify(fetchedPost));
                }

                setPost(fetchedPost);
            } catch (error) {
                console.error('Error fetching Hashnode post details:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    useEffect(() => {
        if (!post || !contentRef.current) return;

        const preElements = contentRef.current.querySelectorAll('pre');

        preElements.forEach((pre) => {
            if (pre.parentNode.classList.contains('code-block-wrapper')) return;

            const wrapper = document.createElement('div');
            wrapper.className = 'code-block-wrapper';
            wrapper.style.position = 'relative';
            wrapper.style.margin = '1.5rem 0';

            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);
            pre.style.margin = '0';

            const button = document.createElement('button');
            button.className = 'copy-code-btn';
            button.innerText = 'Copy';

            button.addEventListener('click', () => {
                const code = pre.querySelector('code')?.innerText || pre.innerText;
                navigator.clipboard.writeText(code).then(() => {
                    button.innerText = 'Copied!';
                    setTimeout(() => {
                        if (button) button.innerText = 'Copy';
                    }, 2000);
                }).catch(err => console.error('Failed to copy', err));
            });

            wrapper.appendChild(button);
        });
    }, [post]);

    if (loading) {
        return (
            <Section title="Loading..." id="blog-detail-loading">
                <div className="shimmer-wrapper">
                    <div className="shimmer-line" style={{ width: '60%', height: '32px', marginBottom: '1.5rem' }}></div>
                    <div className="shimmer-line" style={{ width: '20%', height: '20px', marginBottom: '2rem' }}></div>
                    <div className="shimmer-box" style={{ width: '100%', height: '300px', marginBottom: '2rem', borderRadius: '8px' }}></div>
                    <div className="shimmer-line" style={{ width: '100%', height: '20px', marginBottom: '0.8rem' }}></div>
                    <div className="shimmer-line" style={{ width: '90%', height: '20px', marginBottom: '0.8rem' }}></div>
                    <div className="shimmer-line" style={{ width: '95%', height: '20px', marginBottom: '0.8rem' }}></div>
                    <div className="shimmer-line" style={{ width: '80%', height: '20px', marginBottom: '2rem' }}></div>
                    <div className="shimmer-line" style={{ width: '100%', height: '20px', marginBottom: '0.8rem' }}></div>
                    <div className="shimmer-line" style={{ width: '85%', height: '20px', marginBottom: '0.8rem' }}></div>
                </div>
            </Section>
        );
    }

    if (!post) {
        return (
            <Section title="Post Not Found" id="blog-detail">
                <p className="secondary-text">The blog post you are looking for does not exist.</p>
                <Link to="/blog" className="mono" style={{ textDecoration: 'underline' }}>Back to Blog</Link>
            </Section>
        );
    }

    return (
        <Section title={post.title} id="blog-detail">
            <Link to="/blog" className="mono secondary-text" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.5rem' }}>← Back to all posts</Link>
            <div style={{ marginBottom: '2rem' }} className="mono secondary-text">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            {post.coverImage && post.coverImage.url && (
                <img src={post.coverImage.url} alt={post.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '2rem', borderRadius: '8px' }} />
            )}
            <div ref={contentRef} className="blog-content" dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
        </Section>
    );
};

export default BlogDetailPage;
