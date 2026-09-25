import { toast } from "sonner";
import PageHeader from "../components/PageHeader";
import { INDUSTRIAL_IMG } from "../constants/images";

const stockInfo = [
  { label: "TSX Ticker", value: "PVE" },
  { label: "Share Price", value: "CAD $18.42" },
  { label: "Market Cap", value: "~CAD $1.2B" },
  { label: "Avg. Daily Volume", value: "620,000 shares" },
  { label: "52-Week High", value: "CAD $22.10" },
  { label: "52-Week Low", value: "CAD $14.65" },
];

const investmentHighlights = [
  "High-quality, light oil weighted production base",
  "Multi-year drilling inventory across three core plays",
  "Strong balance sheet with conservative leverage",
  "Proven management team with 25+ years industry experience",
  "Active shareholder return program including dividends",
  "ESG commitment aligned with leading industry standards",
];

const documents = [
  {
    title: "Q2 2026 Financial Results",
    date: "Aug 7, 2026",
    type: "Press Release",
  },
  {
    title: "Q2 2026 MD&A and Financial Statements",
    date: "Aug 7, 2026",
    type: "Financial Report",
  },
  {
    title: "Annual Information Form 2025",
    date: "Mar 28, 2026",
    type: "Annual Filing",
  },
  {
    title: "2025 Annual Report to Shareholders",
    date: "Mar 28, 2026",
    type: "Annual Report",
  },
  {
    title: "Q1 2026 Financial Results",
    date: "May 9, 2026",
    type: "Press Release",
  },
  {
    title: "Corporate Presentation – Sep 2026",
    date: "Sep 1, 2026",
    type: "Presentation",
  },
];

function HighlightsSection() {
  return (
    <div>
      <span className="accent-line" />
      <h2
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "2rem",
          color: "#050e1f",
          marginBottom: "1.25rem",
        }}
      >
        INVESTMENT HIGHLIGHTS
      </h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {investmentHighlights.map((h) => (
          <div
            key={h}
            className="flex items-start gap-3 border border-slate-200 p-5 bg-slate-50"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
            <p
              className="text-slate-700 text-sm"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              {h}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DocumentsSection() {
  const handleDownload = (title: string) => {
    toast.error(`Downloading: ${title}`, {
      description:
        "This file is classified and restricted for public download.",
    });
  };

  return (
    <div>
      <h2
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "1.6rem",
          color: "#050e1f",
          marginBottom: "1.25rem",
        }}
      >
        DOCUMENTS & FILINGS
      </h2>
      <div className="space-y-2">
        {documents.map((d) => (
          <button
            key={d.title}
            onClick={() => handleDownload(d.title)}
            className="w-full flex items-center justify-between border border-slate-200 px-5 py-4 hover:border-orange-600/50 hover:bg-slate-50 transition-all text-left"
          >
            <div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "#050e1f",
                }}
              >
                {d.title}
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.6rem",
                    letterSpacing: "0.1em",
                    color: "#c85a00",
                    textTransform: "uppercase",
                  }}
                >
                  {d.type}
                </span>
                <span
                  className="text-slate-400 text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {d.date}
                </span>
              </div>
            </div>
            <svg
              className="w-4 h-4 text-slate-400 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}

function StockSidebar() {
  return (
    <div className="space-y-6">
      <div className="bg-navy-950 p-8">
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            color: "#c85a00",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          Stock Information
        </h3>
        <div className="space-y-4">
          {stockInfo.map((h) => (
            <div
              key={h.label}
              className="flex justify-between items-center border-b border-white/8 pb-3 last:border-0 last:pb-0"
            >
              <span
                className="text-slate-400 text-xs"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {h.label}
              </span>
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#fff",
                }}
              >
                {h.value}
              </span>
            </div>
          ))}
        </div>
        <p
          className="text-slate-600 text-xs mt-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          * Illustrative data only. As of Sep 2026.
        </p>
      </div>
      <div className="border border-slate-200 p-8">
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "0.72rem",
            letterSpacing: "0.2em",
            color: "#c85a00",
            textTransform: "uppercase",
            marginBottom: "1rem",
          }}
        >
          Investor Contact
        </h3>
        <p
          className="text-slate-500 text-sm mb-4"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          For investor inquiries, contact our Investor Relations team.
        </p>
        <p
          className="text-navy-950 text-sm font-medium"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          info@petrovara.com
        </p>
        <p
          className="text-navy-950 text-sm mt-1"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          +1 (672) 202-1705
        </p>
      </div>
    </div>
  );
}

export default function InvestorsPage() {
  return (
    <main>
      <PageHeader
        title="INVESTOR RELATIONS"
        subtitle="Transparency, governance, and delivering long-term value for our shareholders."
        img={INDUSTRIAL_IMG}
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-14">
            <HighlightsSection />
            <DocumentsSection />
          </div>
          <StockSidebar />
        </div>
      </section>
    </main>
  );
}
