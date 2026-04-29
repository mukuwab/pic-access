import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="legal">
      <div className="legal-inner">
        <div className="legal-eyebrow">Legal</div>
        <h1>Privacy Policy</h1>
        <div className="legal-meta">Last updated: April 28, 2026</div>

        <p className="legal-intro">
          This Privacy Policy describes how PicAccess (“the App”, “we”, “us”, or “our”) handles your information.
          We are committed to protecting your privacy. The short version: <strong>we collect nothing. Your data stays on your device.</strong>
        </p>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">1.</span>Information We Collect</h2>
          <p><strong>We do not collect any personal information.</strong></p>
          <p>PicAccess does not collect, store, transmit, sell, or share:</p>
          <ul>
            <li>Your name, email address, or any identifying information</li>
            <li>Your photos or any content you store in the App</li>
            <li>Analytics or usage data</li>
            <li>Crash logs or diagnostic data sent to us</li>
            <li>Device identifiers or advertising IDs</li>
            <li>Location data</li>
          </ul>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">2.</span>Photos &amp; User Content</h2>
          <p>Photos you save in PicAccess are stored exclusively in two places, both of which are under your control:</p>
          <ul>
            <li><strong>On your device</strong> — in the App’s private local storage (sandboxed, inaccessible to other apps)</li>
            <li><strong>In your iCloud account</strong> — if iCloud Drive is enabled on your device (optional, governed by Apple’s iCloud Terms of Service)</li>
          </ul>
          <p>We have no access to these photos at any time. Photos are never sent to any server operated by us or any third party.</p>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">3.</span>Photo Library Access</h2>
          <p>
            The App requests access to your device’s photo library when you choose to add a photo to a slot. This access is used solely to let you select and import a photo of your choice. We do not scan, copy, upload, or access any photos beyond the one you explicitly select.
          </p>
          <p>
            You can revoke photo library access at any time in your device’s Settings → Privacy &amp; Security → Photos.
          </p>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">4.</span>Face ID / Touch ID</h2>
          <p>
            The optional Face ID / Touch ID lock feature uses Apple’s LocalAuthentication framework. Your biometric data (fingerprint or face data) is processed entirely by Apple’s secure enclave on your device. We never receive, store, or have access to your biometric data in any form.
          </p>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">5.</span>iCloud</h2>
          <p>If iCloud Drive is enabled on your device, photos you save in PicAccess may automatically sync to your other Apple devices via your personal iCloud account. This sync:</p>
          <ul>
            <li>Is managed entirely by Apple and your iCloud account settings</li>
            <li>
              Is governed by{' '}
              <a href="https://www.apple.com/legal/internet-services/icloud/" target="_blank" rel="noreferrer">
                Apple’s iCloud Terms of Service and Privacy Policy
              </a>
            </li>
            <li>Can be disabled by turning off iCloud Drive for PicAccess in your device’s Settings</li>
          </ul>
          <p>We have no access to your iCloud data.</p>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">6.</span>In-App Purchases</h2>
          <p>
            In-app purchases (to unlock additional slots) are processed entirely by Apple through the App Store. We do not receive or store your payment information. Purchase records are managed by Apple and are subject to{' '}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">
              Apple’s Privacy Policy
            </a>
            .
          </p>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">7.</span>Widgets</h2>
          <p>
            The home screen widget reads your slot names from a shared App Group container stored locally on your device. This data is never transmitted off your device.
          </p>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">8.</span>Third-Party Services</h2>
          <p>
            PicAccess does not integrate any third-party analytics, advertising, tracking, or crash reporting services. There are no SDKs in the App that collect data on our behalf.
          </p>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">9.</span>Children’s Privacy</h2>
          <p>
            PicAccess does not knowingly collect any information from children under the age of 13. Since we collect no information from any users, no special handling is required.
          </p>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">10.</span>Data Retention &amp; Deletion</h2>
          <p>Since we collect no data, there is nothing for us to retain or delete on our end. To delete all data stored by the App:</p>
          <ol>
            <li>Delete the App from your device — this removes all locally stored photos and settings.</li>
            <li>To remove iCloud copies, go to <strong>Settings → [your name] → iCloud → Manage Account Storage</strong> and delete the PicAccess data.</li>
          </ol>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">11.</span>Security</h2>
          <p>
            All photos and data stored by PicAccess remain within Apple’s secure app sandbox. We recommend using your device passcode and enabling the optional Face ID / Touch ID lock within the App to protect your stored content.
          </p>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">12.</span>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be reflected in the “Last updated” date at the top of this document. We encourage you to review this policy periodically.
          </p>
        </section>

        <hr className="legal-divider" />

        <section>
          <h2><span className="num">13.</span>Contact</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact the developer through the App Store listing.
          </p>
        </section>
      </div>
    </main>
  );
}
