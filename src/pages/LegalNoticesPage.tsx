import PageHeader from "../components/PageHeader";
import { TEAM_IMG } from "../constants/images";

export default function LegalNoticesPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <PageHeader
        title="LEGAL NOTICES"
        subtitle="Corporate disclosures, regulatory information, and legal disclaimers."
        img={TEAM_IMG}
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Corporate Profile Card */}
            <div className="border border-slate-200 bg-white p-8">
              <span className="accent-line" />
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "#050e1f",
                  marginBottom: "1rem",
                }}
              >
                CORPORATE ENTITY
              </h3>
              <dl
                className="space-y-4 text-xs text-slate-600"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                <div>
                  <dt className="text-slate-400 uppercase tracking-wider font-semibold mb-0.5">
                    Full Legal Name
                  </dt>
                  <dd className="font-medium text-slate-800 text-sm">
                    Petrovara Energy Ltd.
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400 uppercase tracking-wider font-semibold mb-0.5">
                    Corporate Headquarters
                  </dt>
                  <dd className="leading-relaxed">
                    1000 – 520 3rd Ave SW
                    <br />
                    Calgary, AB T2P 0R3, Canada
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400 uppercase tracking-wider font-semibold mb-0.5">
                    Primary Contact
                  </dt>
                  <dd>
                    Phone: +1 (672) 202-1705
                    <br />
                    Email: info@petrovara.com
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400 uppercase tracking-wider font-semibold mb-0.5">
                    Regulatory Jurisdiction
                  </dt>
                  <dd>Alberta Energy Regulator (AER) / Canada</dd>
                </div>
              </dl>
            </div>

            {/* Disclaimers & Notices Main Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Notice 1: Investor Disclaimer */}
              <div className="border border-slate-200 bg-white p-8 hover:border-orange-200 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100/60 px-2 py-0.5 rounded inline-block mb-3">
                  Disclosure Notice
                </span>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#050e1f",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Investor & Financial Information Disclaimer
                </h3>
                <p
                  className="text-slate-600 text-sm leading-relaxed"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  Nothing contained on this website constitutes an offer to sell
                  or a solicitation of an offer to buy securities of Petrovara
                  Energy in any jurisdiction. Information disclosed under
                  corporate governance or investor relations pages is provided
                  for informational purposes only and may not reflect real-time
                  market data.
                </p>
              </div>

              {/* Notice 2: Environmental & Safety Regulations */}
              <div className="border border-slate-200 bg-white p-8 hover:border-orange-200 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100/60 px-2 py-0.5 rounded inline-block mb-3">
                  Regulatory Compliance
                </span>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#050e1f",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Environmental & Health Safety Standards
                </h3>
                <p
                  className="text-slate-600 text-sm leading-relaxed"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  Petrovara Energy operates in strict accordance with provincial
                  and federal safety and environmental codes. All field metrics,
                  emission reporting, and sustainability assessments comply with
                  standard Canadian energy monitoring protocols.
                </p>
              </div>

              {/* Notice 3: Trademarks & Logos */}
              <div className="border border-slate-200 bg-white p-8 hover:border-orange-200 transition-colors">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100/60 px-2 py-0.5 rounded inline-block mb-3">
                  Intellectual Property
                </span>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.3rem",
                    color: "#050e1f",
                    textTransform: "uppercase",
                    marginBottom: "0.5rem",
                  }}
                >
                  Trademarks & Registered Marks
                </h3>
                <p
                  className="text-slate-600 text-sm leading-relaxed"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  The Petrovara logo, stylized energy mark, and associated
                  product brands are trademarks or registered trademarks of
                  Petrovara Energy Ltd. Unlawful or unauthorized reproduction of
                  any mark without explicit license is strictly prohibited.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
