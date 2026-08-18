import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useAnimations';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS, CATEGORY_ICONS } from '../data/blogPosts';
import '../styles/pages.css';

const CATEGORIES = ['All', ...new Set(BLOG_POSTS.map(p => p.category))];

export default function Blog() {
  const gridRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(p => p.category === selectedCategory);

  // Re-run reveal-on-scroll whenever the filter changes — otherwise cards
  // newly mounted for a different category are never observed and stay hidden.
  useScrollReveal([selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Blog &amp; Insights | Hemmingway Technologies</title>
        <meta
          name="description"
          content="Insights on AI, system architecture, government tech, and engineering lessons from the Hemmingway Technologies team."
        />
      </Helmet>

      {/* ── HERO ── */}
      <section className="page-hero" style={{ backgroundImage: 'url("/bg-hero.webp")' }}>
        <div className="page-hero-glow" />
        <div className="container">
          <div className="tag">Blog &amp; Insights</div>
          <h1>
            Engineering,<br />
            <span className="gradient-text">Unfiltered.</span>
          </h1>
          <p style={{ maxWidth: '640px', fontSize: '16.5px', lineHeight: '1.7' }}>
            Technical breakdowns, architectural deep dives, and practical engineering lessons from building scalable software platforms and AI solutions.
          </p>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="blog-filters">
        <div className="container">
          <div className="category-pills">
            {CATEGORIES.map(cat => {
              const Icon = CATEGORY_ICONS[cat];
              return (
                <button
                  key={cat}
                  className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {Icon && <Icon size={14} />}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── POSTS GRID ── */}
      <section className="blog-posts-section" style={{ paddingBottom: '140px' }}>
        <div className="container">
          <div className="blog-grid" ref={gridRef}>
            {filteredPosts.map((post, i) => {
              const Icon = CATEGORY_ICONS[post.category];
              return (
                <article key={post.slug} className="blog-card fade-up" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="blog-card-meta">
                    <span className="blog-category">
                      {Icon && <Icon size={12} />}
                      {post.category}
                    </span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>

                  <h2 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="blog-card-excerpt">{post.excerpt}</p>

                  <div className="blog-card-footer">
                    <span className="blog-date">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <Link to={`/blog/${post.slug}`} className="blog-read-more">
                      Read article &rarr;
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
          {filteredPosts.length === 0 && (
            <div className="blog-empty">
              <p>No posts in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
