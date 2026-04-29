import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import appIcon from './assets/PicAccess_Icon-iOS-Default-1024x1024@1x.png';
import boltIcon from './assets/bolt.png';
import PrivacyPolicy from './PrivacyPolicy';
import Support from './Support';
import Terms from './Terms';

const APP_STORE_URL = 'https://apps.apple.com/us/app/picaccess/id6761350318';

const Icon = {
  Apple: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  ),
  Bolt: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  ),
  Slots: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
      <rect x="3" y="6" width="6" height="12" rx="1.5" />
      <rect x="11" y="6" width="6" height="12" rx="1.5" />
      <rect x="19" y="6" width="2" height="12" rx="1" />
    </svg>
  ),
  Widget: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <rect x="13" y="3" width="8" height="8" rx="2" />
      <rect x="3" y="13" width="8" height="8" rx="2" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </svg>
  ),
  Sun: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="22" height="22" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
    </svg>
  ),
  Eye: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Zoom: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" width="22" height="22" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
    </svg>
  ),
  Lock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22" aria-hidden="true">
      <rect x="4" y="11" width="16" height="11" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  ),
  Cloud: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22" aria-hidden="true">
      <path d="M17.5 19a4.5 4.5 0 0 0 .9-8.9A6 6 0 0 0 7.1 9 4.5 4.5 0 0 0 6 18h11.5z" />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" width="22" height="22" aria-hidden="true">
      <path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

const features = [
  { icon: <Icon.Slots />, title: '5 named slots', desc: 'Save up to five photos in slots you customize. Swipe between them instantly.' },
  { icon: <Icon.Widget />, title: 'Home & lock screen widgets', desc: 'One-tap access to any slot — without even opening the app.' },
  { icon: <Icon.Sun />, title: 'Brightness Boost', desc: 'Auto-maxes your screen so cards scan in bright light. Resets when you leave.' },
  { icon: <Icon.Eye />, title: 'Stay Awake', desc: 'Keeps the screen on while you’re showing a photo. No awkward dimming.' },
  { icon: <Icon.Zoom />, title: 'Pinch to zoom', desc: 'Zoom in on fine print, policy numbers, and barcodes when you need to.' },
  { icon: <Icon.Cloud />, title: 'iCloud sync', desc: 'Photos sync across all your Apple devices through your personal iCloud.' },
];

const useCases = [
  "Driver's license & state ID",
  'Health insurance & Medicare',
  'Car insurance card',
  'Passport photo page',
  'Loyalty & membership cards',
  'Vaccine records',
  'Business cards',
  'Gym & transit passes',
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  return null;
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <img src={appIcon} alt="" className="brand-icon" />
          <span>PicAccess</span>
        </Link>
        <div className="nav-links">
          <a href="/#how">How it works</a>
          <a href="/#features">Features</a>
          <a href="/#privacy">Privacy</a>
          <a href="/#pricing">Pricing</a>
        </div>
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
          Get the app
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={appIcon} alt="" />
            <div>
              <div className="footer-name">PicAccess</div>
              <div className="footer-tag">The photos that matter, one swipe away.</div>
            </div>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href="/#features">Features</a>
            <a href="/#pricing">Pricing</a>
            <Link to="/support">Support</Link>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Download</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Mukuwa Baffoe</span>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <header id="top" className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-text">
            <div className="eyebrow">
              <Icon.Bolt />
              <span>The fastest way to your most important photos</span>
            </div>
            <h1>
              The photos that <span className="grad">matter</span>,
              <br />
              one swipe away.
            </h1>
            <p className="lede">
              Driver’s license at the rental counter. Insurance card at the doctor’s office.
              Loyalty card at checkout. PicAccess pulls them up in seconds — no scrolling, no searching.
            </p>
            <div className="hero-ctas">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">
                <Icon.Apple />
                <span>Download on the App&nbsp;Store</span>
              </a>
              <a href="#how" className="btn btn-ghost btn-lg">
                See how it works <span aria-hidden="true">→</span>
              </a>
            </div>
            <ul className="hero-meta">
              <li>Free with one slot</li>
              <li>One-time unlock for all 5</li>
              <li>No accounts. No tracking.</li>
            </ul>
          </div>

          <div className="hero-device" aria-hidden="true">
            <div className="bolt-wrap">
              <div className="bolt-glow" />
              <img src={boltIcon} alt="" className="bolt-img" />
            </div>
          </div>
        </div>
      </header>

      <section id="how" className="how">
        <div className="container">
          <div className="section-head">
            <div className="kicker">How it works</div>
            <h2>Three steps. Done in a minute.</h2>
            <p className="section-sub">
              Set up once. Reach for it for years.
            </p>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Pick your photos</h3>
              <p>Choose up to five — license, insurance, loyalty, whatever you reach for the most.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Name your slots</h3>
              <p>Label each slot so you know exactly where to swipe when you’re standing at a counter.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Tap. Done.</h3>
              <p>Open the app — or tap the widget — and the right photo is on screen, full brightness, ready to scan.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Features</div>
            <h2>Built for the moments you’re holding up the line.</h2>
            <p className="section-sub">
              Every detail tuned for one thing: getting the right photo on screen, fast.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="privacy" className="privacy">
        <div className="container privacy-inner">
          <div className="privacy-text">
            <div className="kicker kicker-light">Privacy</div>
            <h2>
              Your photos stay <span className="grad">yours</span>.
            </h2>
            <p className="lede lede-light">
              We don’t want your data — and we built PicAccess so we couldn’t take it even if we did.
              No accounts. No sign-ups. No analytics. No ads. Nothing leaves your device unless you sync it through your own iCloud.
            </p>

            <ul className="privacy-list">
              <li><Icon.Check /> Photos stored only on your device and your personal iCloud</li>
              <li><Icon.Check /> Face ID and Touch ID protect every slot</li>
              <li><Icon.Check /> Zero data collected — no analytics, no tracking, no ads</li>
              <li><Icon.Check /> No account or sign-up required to use the app</li>
            </ul>
          </div>

          <div className="privacy-visual" aria-hidden="true">
            <div className="orb orb-1"><Icon.Shield /></div>
            <div className="orb orb-2"><Icon.Lock /></div>
            <div className="orb orb-3"><Icon.Cloud /></div>
            <div className="orb-glow" />
          </div>
        </div>
      </section>

      <section className="usecases">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Real-world use</div>
            <h2>People reach for PicAccess for…</h2>
          </div>
          <ul className="chip-cloud">
            {useCases.map((u) => (
              <li key={u}>{u}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Pricing</div>
            <h2>Free to try. One price to unlock everything.</h2>
            <p className="section-sub">No subscriptions. No upsells. Buy it once, keep it forever.</p>
          </div>

          <div className="plans">
            <div className="plan">
              <div className="plan-name">Free</div>
              <div className="plan-price">
                <span className="amount">$0</span>
                <span className="period">forever</span>
              </div>
              <ul className="plan-list">
                <li><Icon.Check /> 1 photo slot</li>
                <li><Icon.Check /> Brightness Boost & Stay Awake</li>
                <li><Icon.Check /> Pinch-to-zoom</li>
                <li><Icon.Check /> Face ID / Touch ID lock</li>
              </ul>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-block">Download free</a>
            </div>

            <div className="plan plan-featured">
              <div className="plan-badge">Most popular</div>
              <div className="plan-name">PicAccess Unlocked</div>
              <div className="plan-price">
                <span className="amount">One-time</span>
                <span className="period">no subscription</span>
              </div>
              <ul className="plan-list">
                <li><Icon.Check /> All 5 customizable slots</li>
                <li><Icon.Check /> Home & lock screen widgets</li>
                <li><Icon.Check /> iCloud sync across devices</li>
                <li><Icon.Check /> Everything in Free</li>
              </ul>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                <Icon.Apple /> <span>Get PicAccess</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="cta">
        <div className="container cta-inner">
          <div className="cta-icon">
            <img src={appIcon} alt="" />
          </div>
          <h2>The cards in your wallet, in your pocket — but faster.</h2>
          <p>Free on the App Store. Unlock all five slots once, never think about it again.</p>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-xl">
            <Icon.Apple />
            <span>Download on the App&nbsp;Store</span>
          </a>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="page">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
