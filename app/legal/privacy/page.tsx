export const metadata = {
  title: "Privacy Policy | ZENTRA Pets",
  robots: "noindex",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen py-24">
      <div className="container max-w-[720px]">
        <h1 className="font-extrabold text-[2rem] tracking-[-0.02em] text-[var(--color-ink)] mb-2">
          Privacy Policy
        </h1>
        <p className="text-[0.8125rem] text-[var(--color-ink-light)] mb-12">
          Last updated: March 2026
        </p>

        {[
          {
            title: "1. Who We Are",
            body: `ZENTRA Pets is a brand owned and operated by Heliora Group LLC, a Florida Limited Liability Company registered under document L26000112395, with principal office at 7901 4th St N STE 300, St. Petersburg, FL 33702, USA. Contact: hello@zentrapets.com`,
          },
          {
            title: "2. Information We Collect",
            body: `This website is a static informational landing page. We do not collect personal data through forms or user accounts. We may collect anonymous analytics data (page views, device type, browser) through third-party tools such as Vercel Analytics or Google Analytics.`,
          },
          {
            title: "3. Cookies",
            body: `We use strictly necessary cookies required for the website to function. We may also use analytics cookies to understand how visitors interact with the site. You can disable cookies in your browser settings at any time. No marketing or tracking cookies are used without your consent.`,
          },
          {
            title: "4. How We Use Information",
            body: `Any data collected is used solely to improve website performance and user experience. We do not sell, rent, or share your data with third parties for marketing purposes.`,
          },
          {
            title: "5. Third-Party Services",
            body: `This site may be hosted on Vercel Inc. and may use Google Fonts (served from your local browser cache after first load). These services have their own privacy policies.`,
          },
          {
            title: "6. Your Rights",
            body: `Depending on your location, you may have rights under GDPR, CCPA, or other applicable laws, including the right to access, correct, or delete any personal data we hold. To exercise these rights, contact us at hello@zentrapets.com.`,
          },
          {
            title: "7. Data Retention",
            body: `We do not store personal data on our servers. Anonymous analytics data is retained according to the policies of the respective analytics provider.`,
          },
          {
            title: "8. Contact",
            body: `Heliora Group LLC\n7901 4th St N STE 300\nSt. Petersburg, FL 33702, USA\nhello@zentrapets.com`,
          },
        ].map((s, i) => (
          <div key={i} className="mb-10">
            <h2 className="font-bold text-[1rem] text-[var(--color-ink)] mb-3">
              {s.title}
            </h2>
            <p className="font-normal text-[0.9375rem] text-[var(--color-ink-muted)] leading-relaxed whitespace-pre-line">
              {s.body}
            </p>
          </div>
        ))}

        <div className="mt-16 pt-8 border-t border-[var(--color-border)]">
          <p className="font-normal text-[0.75rem] text-[var(--color-ink-light)]">
            These products are not intended to diagnose, treat, cure, or prevent
            any disease. © {new Date().getFullYear()} Heliora Group LLC. All
            rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
