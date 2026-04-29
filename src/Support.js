import React from 'react';

const faqs = [
  {
    q: 'How do I add a photo?',
    a: 'Tap any empty slot to open your photo library and pick an image.',
  },
  {
    q: 'How do I replace or remove a photo?',
    a: 'Tap (or long-press) an existing photo. You’ll get options to Replace, Remove, or Save to Photos.',
  },
  {
    q: 'How do I rename a slot?',
    a: 'Long-press any of the dots at the bottom of the screen. Type your custom name and tap Save.',
  },
  {
    q: 'How do I zoom in on a photo?',
    a: 'Pinch to zoom in, drag to pan, and double-tap to reset back to normal.',
  },
  {
    q: 'What does the sun icon do?',
    a: 'It maxes your screen brightness so cards and barcodes scan easily in bright environments. It resets automatically when you leave the app.',
  },
  {
    q: 'What does the moon icon do?',
    a: 'It prevents your screen from going to sleep while you’re showing a photo. Also resets when you leave the app.',
  },
  {
    q: 'How do I set up Face ID / Touch ID?',
    a: 'Go to Settings (gear icon) → Security → toggle on “Require Face ID / Touch ID.”',
  },
  {
    q: 'Do my photos sync across my devices?',
    a: 'Yes. If iCloud Drive is enabled on your device, photos and slot names sync automatically to your other Apple devices via your personal iCloud account.',
  },
  {
    q: 'Can I add PicAccess to my home screen or lock screen?',
    a: 'Yes. Long-press your home screen, tap the + button, and search for PicAccess. There are widgets for both the home screen and lock screen.',
  },
  {
    q: 'What does the in-app purchase unlock?',
    a: 'The free version includes one photo slot. The one-time purchase unlocks all five slots permanently across all your devices.',
  },
  {
    q: 'How do I restore a previous purchase?',
    a: 'Go to Settings → Purchases → Restore Purchases.',
  },
  {
    q: 'Is my data private?',
    a: 'Yes. Your photos are stored only on your device and in your personal iCloud account. PicAccess collects no data, has no accounts, and never transmits your photos anywhere.',
  },
  {
    q: 'How do I delete all my data?',
    a: 'Delete the app to remove all locally stored photos. To remove iCloud copies, go to Settings → [your name] → iCloud → Manage Account Storage and delete PicAccess data.',
  },
  {
    q: 'The app asks for photo library access — why?',
    a: 'Only to let you pick which photo to add to a slot. The app cannot access any other photos in your library.',
  },
];

export default function Support() {
  return (
    <main className="legal support">
      <div className="legal-inner">
        <div className="legal-eyebrow">Support</div>
        <h1>Need a hand?</h1>
        <div className="legal-meta">Reach the developer directly, or browse the FAQ below.</div>

        <div className="support-contact">
          <div className="support-contact-label">Contact the developer</div>
          <p>
            For questions, concerns, or anything not covered below, email{' '}
            <a href="mailto:mukuwabaffoe@gmail.com">mukuwabaffoe@gmail.com</a>.
          </p>
        </div>

        <hr className="legal-divider" />

        <h2 className="support-section-title">Frequently asked questions</h2>

        <div className="faq-list">
          {faqs.map(({ q, a }) => (
            <details key={q} className="faq-item">
              <summary>
                <span className="faq-q">{q}</span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <div className="faq-a">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </main>
  );
}
