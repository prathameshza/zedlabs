import React from 'react';

interface PrivacyPolicyProps {
  variant?: 'general' | 'notebook';
}

export default function PrivacyPolicy({ variant = 'general' }: PrivacyPolicyProps) {
  return (
    <div className="space-y-6 text-muted-foreground quicksand-regular">
      <p className="text-lg md:text-xl leading-relaxed">
        At ZedLabs, we respect your privacy and are committed to being transparent about how data is handled in our app.
      </p>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">Information Collection and Use</h3>
        <p className="text-base md:text-lg leading-relaxed">
          Our app does not require users to create an account and does not directly collect or store personal information such as name, email address, or phone number.
        </p>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">Advertising</h3>
        <p className="text-base md:text-lg leading-relaxed">
          Our app displays advertisements provided by Google AdMob. AdMob may collect and use information such as the device’s Advertising ID and app interaction data to display and measure ads. This data is used for advertising purposes and may be shared with Google in accordance with their policies.
        </p>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">Data Security</h3>
        <p className="text-base md:text-lg leading-relaxed">
          Any data transmitted by third-party services such as AdMob is encrypted in transit using secure protocols.
        </p>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">User Choices</h3>
        <p className="text-base md:text-lg leading-relaxed">
          Users can manage or reset their Advertising ID through their device settings. You can also opt out of ad personalization from your Google account settings.
        </p>
      </div>

      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 quicksand-semibold">Third-Party Privacy Policies</h3>
        <p className="text-base md:text-lg leading-relaxed">
          For more information on how Google handles data, please review{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary underline transition-colors">
            Google’s Privacy Policy
          </a>.
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