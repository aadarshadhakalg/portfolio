import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const BlogSection = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [pageInfo, setPageInfo] = useState({ hasNextPage: false, endCursor: null });

    // Note: Using the host 'aadarshadhakal.com.np' directly in the query
    const HASHNODE_GQL_ENDPOINT = 'https://gql.hashnode.com';
    const QUERY = `
    query Publication($after: String) {
      publication(host: "blog.aadarshadhakal.com.np") {
        posts(first: 5, after: $after) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              title
              brief
              slug
              publishedAt
            }
          }
        }
      }
    }
  `;

    const fetchPosts = async (cursor = null) => {
        if (cursor) setLoadingMore(true);
        const cacheKey = 'hashnode_posts_list';
        const cachedPosts = sessionStorage.getItem(cacheKey);
        const cachedPageInfo = sessionStorage.getItem(`${cacheKey}_pageInfo`);

        if (!cursor && cachedPosts && cachedPageInfo) {
            setPosts(JSON.parse(cachedPosts));
            setPageInfo(JSON.parse(cachedPageInfo));
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(HASHNODE_GQL_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: QUERY, variables: { after: cursor } }),
            });
            const result = await response.json();
            const fetchedPosts = result.data.publication.posts.edges.map(edge => edge.node);
            const fetchedPageInfo = result.data.publication.posts.pageInfo;

            if (cursor) {
                setPosts(prev => [...prev, ...fetchedPosts]);
            } else {
                setPosts(fetchedPosts);
                if (fetchedPosts && fetchedPosts.length > 0) {
                    sessionStorage.setItem(cacheKey, JSON.stringify(fetchedPosts));
                    sessionStorage.setItem(`${cacheKey}_pageInfo`, JSON.stringify(fetchedPageInfo));
                }
            }
            setPageInfo(fetchedPageInfo);
        } catch (error) {
            console.error('Error fetching Hashnode posts:', error);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (loading) {
        return (
            <div className="blog-posts shimmer-wrapper">
                {[1, 2, 3].map((i) => (
                    <div key={i} style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
                        <div className="shimmer-line" style={{ width: '150px', height: '16px', marginBottom: '0.8rem' }}></div>
                        <div className="shimmer-line" style={{ width: '70%', height: '28px', marginBottom: '0.8rem' }}></div>
                        <div className="shimmer-line" style={{ width: '100%', height: '16px', marginBottom: '0.4rem' }}></div>
                        <div className="shimmer-line" style={{ width: '90%', height: '16px', marginBottom: '0.4rem' }}></div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="blog-posts">
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id} style={{ marginBottom: '2.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
                        <div className="mono secondary-text" style={{ marginBottom: '0.5rem' }}>
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                        <h3 className="serif" style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="secondary-text">{post.brief}</p>
                    </div>
                ))
            ) : (
                <p className="secondary-text">No posts found.</p>
            )}
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                {pageInfo.hasNextPage && (
                    <button
                        onClick={() => fetchPosts(pageInfo.endCursor)}
                        disabled={loadingMore}
                        className="cta-button"
                        style={{ margin: 0, opacity: loadingMore ? 0.7 : 1, cursor: loadingMore ? 'not-allowed' : 'pointer' }}
                    >
                        {loadingMore ? 'Loading...' : 'Load More'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default BlogSection;
