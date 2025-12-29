import React, { useEffect, useState } from 'react';

const BlogSection = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Note: Using the host 'aadarshadhakal.com.np' directly in the query
    const HASHNODE_GQL_ENDPOINT = 'https://gql.hashnode.com';
    const QUERY = `
    query Publication {
      publication(host: "blog.aadarshadhakal.com.np") {
        posts(first: 5) {
          edges {
            node {
              id
              title
              brief
              url
              publishedAt
            }
          }
        }
      }
    }
  `;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(HASHNODE_GQL_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: QUERY }),
                });
                const result = await response.json();
                const fetchedPosts = result.data.publication.posts.edges.map(edge => edge.node);
                setPosts(fetchedPosts);
            } catch (error) {
                console.error('Error fetching Hashnode posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div className="mono secondary-text">Loading posts...</div>;

    return (
        <div className="blog-posts">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
                        <div className="mono secondary-text" style={{ marginBottom: '0.5rem' }}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                        <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                            <a href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                        </h3>
                        <p className="secondary-text">{post.brief}</p>
                    </div>
                ))
            ) : (
                <p className="secondary-text">No posts found.</p>
            )}
            <div style={{ marginTop: '2rem' }}>
                <a href="https://blog.aadarshadhakal.com.np/" target="_blank" rel="noopener noreferrer" className="mono" style={{ textDecoration: 'underline' }}>
                    Read all posts
                </a>
            </div>
        </div>
    );
};

export default BlogSection;
