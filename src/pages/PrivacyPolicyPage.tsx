import PageHeader from "../components/PageHeader";
import { TEAM_IMG } from "../constants/images";

const sections = [
  {
    id: "information-collection",
    title: "1. Information We Collect",
    content: (
      <>
        <p className="mb-3">
          Petrovara Energy collects information to provide better services to
          our stakeholders, investors, partners, and site visitors. We collect
          information in the following ways:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-orange-600">
          <li>
            <strong>Information you provide directly:</strong> Contact form
            submissions, newsletter subscriptions, investor relations inquiries,
            and employment applications (e.g., name, email address, phone
            number, company name).
          </li>
          <li>
            <strong>Automated technical data:</strong> Browser type, IP address,
            device telemetry, pages visited, and session duration gathered via
            standard cookies and server logs.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "use-of-information",
    title: "2. How We Use Information",
    content: (
      <>
        <p className="mb-3">
          Information collected across our platforms is used solely for energy
          sector operations, communications, and compliance purposes, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 marker:text-orange-600">
          <li>
            Responding to business inquiries and customer service requests.
          </li>
          <li>
            Fulfilling legal, regulatory, and industrial safety compliance
            obligations.
          </li>
          <li>
            Delivering required corporate reporting, investor updates, and press
            announcements.
          </li>
          <li>
            Monitoring site performance, security integrity, and preventing
            unauthorized access.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "3. Data Sharing & Third Parties",
    content: (
      <p>
        We do not sell, rent, or trade your personal information. Data may be
        shared with authorized operational service providers (such as secure
        hosting partners or compliance auditors) strictly under confidentiality
        agreements, or when required by Canadian provincial/federal law or
        judicial order.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "4. Data Protection & Retention",
    content: (
      <p>
        We implement industry-standard physical, electronic, and procedural
        safeguards to protect personal data against loss, unauthorized access,
        or disclosure. Information is retained only as long as necessary to
        fulfill operational or regulatory requirements.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "5. Your Privacy Rights & Contact",
    content: (
      <p>
        You have the right to request access to, correction of, or deletion of
        your personal data held by Petrovara Energy. For all privacy-related
        requests or questions regarding our data practices, please email{" "}
        <a
          href="mailto:privacy@petrovaraenergy.com"
          className="text-orange-600 hover:underline font-medium"
        >
          Info@petrovara.com
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader
        title="PRIVACY POLICY"
        subtitle="How Petrovara Energy collects, protects, and handles your personal information."
        img={TEAM_IMG}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Table of Contents Sticky Sidebar */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-10 border border-slate-200 bg-white p-6">
                <span className="accent-line" />
                <h3
                  className="mb-4 text-xs tracking-wider uppercase font-extrabold text-slate-400"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  On This Page
                </h3>
                <nav
                  className="space-y-2 text-sm"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="block text-slate-600 hover:text-orange-600 hover:pl-1 transition-all text-xs font-medium"
                    >
                      {s.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Policy Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="border border-slate-200 p-8 sm:p-12 bg-white">
                <div className="border-b border-slate-200 pb-6 mb-8">
                  <span className="accent-line" />
                  <h2
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "2rem",
                      color: "#050e1f",
                    }}
                  >
                    PETROVARA ENERGY PRIVACY STATEMENT
                  </h2>
                  <p
                    className="text-slate-400 text-xs mt-2 uppercase tracking-wider"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    Last Updated: March 2026 | Effective Date: January 1, 2026
                  </p>
                </div>

                <div
                  className="space-y-10 text-slate-600 text-sm leading-relaxed"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {sections.map((section) => (
                    <article
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-10"
                    >
                      <h3
                        className="text-lg font-bold uppercase tracking-wide mb-3"
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          color: "#c85a00",
                        }}
                      >
                        {section.title}
                      </h3>
                      {section.content}
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
