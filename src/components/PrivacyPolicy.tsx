import React from 'react';

interface PrivacyPolicyProps {
  variant?: 'general' | 'notebook' | 'webcodebox' | 'shaderboy';
}

export default function PrivacyPolicy({ variant = 'general' }: PrivacyPolicyProps) {
  const appName = variant === 'webcodebox' ? 'WebCodeBox' :
    variant === 'notebook' ? 'Notebook' :
      variant === 'shaderboy' ? 'Shaderboy' : 'our apps';

  return (
    <div className="space-y-6 text-muted-foreground quicksand-regular">
      <p className="text-lg md:text-xl leading-relaxed">
        At ZedLabs, we respect your privacy and are committed to being transparent about how data is handled in <strong>{appName}</strong>.
      </p>

      {/* 1. AUTHENTICATION SECTION (Crucial for Play Store Review) */}
      {(variant === 'webcodebox') && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">Authentication & User Data</h3>
          <p className="text-base md:text-lg leading-relaxed">
            WebCodeBox offers "Login with Google" via Firebase Authentication. When you sign in, we collect your <strong>email address, name, and profile picture URL</strong>. This data is used solely to identify your account, sync your preferences across devices, and manage your pro features. We do not store any other personal files or sensitive data in the cloud.
          </p>
        </div>
      )}

      {/* 2. IN-APP PURCHASES */}
      {(variant === 'webcodebox') && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">In-App Purchases & Payments</h3>
          <p className="text-base md:text-lg leading-relaxed">
            We offer premium features via Google Play In-App Billing. All payment transactions are processed securely by Google. ZedLabs <strong>does not</strong> collect or store your credit card numbers or financial information. We only receive a confirmation token from Google to verify your purchase.
          </p>
        </div>
      )}

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">Advertising</h3>
        <p className="text-base md:text-lg leading-relaxed">
          Our app displays advertisements provided by Google AdMob. AdMob may collect and use information such as the device’s Advertising ID and app interaction data to display and measure ads.
        </p>
      </div>

      {(variant === 'shaderboy' || variant === 'notebook') && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">Data Storage</h3>
          <p className="text-base md:text-lg leading-relaxed">
            Protecting your creative work is important to us. <strong>{appName} does not store any of your data in the cloud.</strong> All your projects, code are stored strictly in your device's local storage. This means your data stays with you and is never uploaded to our servers.
          </p>
        </div>
      )}

      {/* 3. DATA DELETION (Required by Google) */}
      {variant === 'webcodebox' && (
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">Data Retention and Deletion</h3>
          <p className="text-base md:text-lg leading-relaxed">
            We retain your login information as long as your account is active. You may request the deletion of your account and associated data at any time by contacting us via the support link below.
          </p>
        </div>
      )}

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">Third-Party Services</h3>
        <p className="text-base md:text-lg leading-relaxed">
          We use the following third-party services:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><a href="https://policies.google.com/privacy" className="underline">Google Play Services</a></li>
            {variant === 'webcodebox' && (
              <li><a href="https://firebase.google.com/support/privacy" className="underline">Firebase Authentication</a></li>
            )}
            {(variant === 'shaderboy' || variant === 'webcodebox') && (
              <li><a href="https://firebase.google.com/support/privacy" className="underline">Firebase Analytics</a></li>
            )}
            <li><a href="https://developers.google.com/admob/terms" className="underline">AdMob</a></li>
          </ul>
        </p>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">Changes to This Privacy Policy</h3>
        <p className="text-base md:text-lg leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page.
        </p>
      </div>
    </div>
  );
}
