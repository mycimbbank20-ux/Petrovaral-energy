import PageHeader from "../components/PageHeader";
import { INDUSTRIAL_IMG } from "../constants/images";

const terms = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the website and digital portals of Petrovara Energy ('Company', 'we', 'our'), you agree to comply with and be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.",
  },
  {
    title: "2. Intellectual Property Rights",
    content:
      "All content, logos, industrial marks, data schematics, technical documentation, design elements, and media presented on this site are the exclusive property of Petrovara Energy or its licensors and are protected under Canadian and international copyright and trademark laws.",
  },
  {
    title: "3. Acceptable Site Usage",
    content: (
      <>
        <p className="mb-2">Users agree not to engage in any activity that:</p>
        <ul className="list-disc pl-5 space-y-1.5 marker:text-orange-600">
          <li>
            Disrupts or interferes with website security, server performance, or
            network infrastructure.
          </li>
          <li>
            Attempts unauthorized access to private investor portals,
            operational data, or employee directories.
          </li>
          <li>
            Uses automated scraping engines, bots, or data extraction tools
            without express written authorization.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Forward-Looking Statements",
    content:
      "This website may contain forward-looking information regarding Petrovara Energy's operations, exploration projects, strategic goals, and financial performance. Forward-looking statements inherently involve risks and uncertainties. Actual results may differ materially from expectations expressed herein.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "Petrovara Energy shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your access to, use of, or inability to use this website, including errors or omissions in published materials.",
  },
  {
    title: "6. Governing Law & Jurisdiction",
    content:
      "These terms are governed by and construed in accordance with the laws of the Province of Alberta and the federal laws of Canada applicable therein, without regard to conflict of law principles.",
  },
];

export default function TermsOfUsePage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader
        title="TERMS OF USE"
        subtitle="Terms and conditions governing access to Petrovara Energy digital services."
        img={INDUSTRIAL_IMG}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="border border-slate-200 p-8 sm:p-12 bg-white">
            <div className="mb-8 border-b border-slate-200 pb-6">
              <span className="accent-line" />
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "#050e1f",
                  textTransform: "uppercase",
                }}
              >
                Website Terms & Conditions
              </h2>
              <p
                className="text-slate-400 text-xs mt-2 uppercase tracking-wider"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Effective Date: January 1, 2026
              </p>
            </div>

            <div
              className="grid gap-8"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              {terms.map((item, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-orange-500/80 pl-5 py-1"
                >
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "#c85a00",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <div className="text-slate-600 text-sm leading-relaxed">
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="mt-12 pt-6 border-t border-slate-200 text-xs text-slate-500"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              For legal inquiries regarding these terms, contact{" "}
              <a
                href="mailto:legal@petrovaraenergy.com"
                className="text-orange-600 hover:underline font-semibold"
              >
                info@petrovara.com
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
