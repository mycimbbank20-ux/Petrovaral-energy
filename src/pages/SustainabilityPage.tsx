import { toast } from "sonner"
import PageHeader from "../components/PageHeader"
import { CANADA_IMG } from "../constants/images"

const metrics = [
  { value: "25%", label: "GHG Intensity Reduction Target by 2030" },
  { value: "0", label: "Lost Time Injuries in 2025" },
  { value: "40+", label: "Community Investments in 2025" },
  { value: "100%", label: "Operations Reporting ESG Metrics" },
]

const pillars = [
  {
    icon: "🌿",
    title: "Environmental Stewardship",
    desc: "We set measurable environmental targets addressing GHG emissions reduction, water conservation, biodiversity, and land reclamation.",
  },
  {
    icon: "🛡️",
    title: "Health & Safety",
    desc: "Zero incidents is our aspiration. Comprehensive safety systems and hazard identification protocols protect our people and communities.",
  },
  {
    icon: "🤝",
    title: "Community Engagement",
    desc: "We engage meaningfully with Indigenous communities, landowners, and local stakeholders with partnership and mutual benefit as our guide.",
  },
  {
    icon: "📊",
    title: "ESG Governance",
    desc: "We report transparently in alignment with TCFD, SASB, and GRI frameworks so stakeholders can hold us accountable.",
  },
  {
    icon: "💧",
    title: "Water Management",
    desc: "We are committed to reducing freshwater use in our operations and protecting watershed integrity wherever we operate.",
  },
  {
    icon: "🌍",
    title: "Climate Strategy",
    desc: "We support Canada's transition by improving operational efficiency, reducing flaring and methane emissions, and exploring clean energy opportunities.",
  },
]

function MetricsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-16">
          <span className="accent-line" />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#050e1f",
              marginBottom: "1.25rem",
            }}
          >
            RESPONSIBLE AT EVERY LEVEL
          </h2>
          <p
            className="text-slate-600 leading-relaxed"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Sustainability is not an add-on at Petrovara — it is integrated into
            our strategy, operations, and culture. Responsible resource
            development and long-term value creation go hand in hand.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-navy-950 p-8 text-center">
              <div className="stat-number mb-2">{m.value}</div>
              <div
                className="text-slate-400 text-sm leading-tight"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarsSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="card-hover bg-white border border-slate-200 p-8"
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#c85a00",
                  textTransform: "uppercase",
                  marginBottom: "0.65rem",
                }}
              >
                {p.title}
              </h3>
              <p
                className="text-slate-500 text-sm leading-relaxed"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ReportCTASection() {
  const handleDownload = () => {
    toast.success("Downloading 2025 Sustainability Report…", {
      description: "Your download will begin shortly.",
    })
  }

  return (
    <section className="py-16 bg-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.8rem",
            color: "#fff",
            marginBottom: "0.75rem",
          }}
        >
          2025 SUSTAINABILITY REPORT
        </h3>
        <p
          className="text-slate-400 mb-6"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Our annual Sustainability Report provides full disclosure on our ESG
          performance, targets, and commitments.
        </p>
        <button onClick={handleDownload} className="btn-primary">
          Download Report (PDF)
        </button>
      </div>
    </section>
  )
}

export default function SustainabilityPage() {
  return (
    <main>
      <PageHeader
        title="SUSTAINABILITY"
        subtitle="Responsible development that creates value for people, environment, and the long term."
        img={CANADA_IMG}
      />
      <MetricsSection />
      <PillarsSection />
      <ReportCTASection />
    </main>
  )
}
