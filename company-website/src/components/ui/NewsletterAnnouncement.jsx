import { useState, useEffect } from 'react';
import { Sparkles, X, Send, CheckCircle2, Loader2 } from 'lucide-react';

const API_URL = 'https://api.hemmingways.in/api/newsletter/subscribe';
const STORAGE_KEY = 'hemmingway_newsletter_dismissed';
const POPUP_DELAY_MS = 8000; // 8 seconds delay for new users

export default function NewsletterAnnouncement() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Check if user already dismissed or subscribed
    const isDismissed = localStorage.getItem(STORAGE_KEY);
    if (isDismissed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error('Server connection error. Please try again.');
      }

      if (res.ok && data.success) {
        setStatus('success');
        localStorage.setItem(STORAGE_KEY, 'true');
        setTimeout(() => {
          setIsOpen(false);
        }, 3500);
      } else if (res.status === 422 && data.errors?.email) {
        setStatus('error');
        setErrorMessage(data.errors.email);
      } else {
        throw new Error(data.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err.message === 'Failed to fetch'
          ? 'Network error. Please check your connection.'
          : err.message
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="newsletter-announcement-overlay" role="dialog" aria-label="Newsletter Announcement">
      <div className="newsletter-announcement-card">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="newsletter-announcement-close"
          aria-label="Close Announcement"
        >
          <X size={16} />
        </button>

        {status === 'success' ? (
          <div className="newsletter-announcement-success">
            <div className="newsletter-success-icon">
              <CheckCircle2 size={28} />
            </div>
            <h4>You&apos;re on the list!</h4>
            <p>Thanks for subscribing. We&apos;ll deliver our latest engineering insights straight to your inbox.</p>
          </div>
        ) : (
          <>
            {/* Header Badge */}
            <div className="newsletter-announcement-badge">
              <Sparkles size={12} />
              <span>Weekly Insights</span>
            </div>

            {/* Title & Copy */}
            <h3 className="newsletter-announcement-title">Stay Ahead in Tech</h3>
            <p className="newsletter-announcement-desc">
              Get new engineering insights, architecture breakdowns, and tech innovations delivered weekly.
            </p>

            {/* Form */}
            <form onSubmit={handleSubscribe} className="newsletter-announcement-form">
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  required
                />
              </div>

              {errorMessage && (
                <div className="newsletter-error-msg">{errorMessage}</div>
              )}

              <button
                type="submit"
                className="newsletter-submit-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <Loader2 size={15} className="spinner" />
                ) : (
                  <>
                    Subscribe <Send size={13} />
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
