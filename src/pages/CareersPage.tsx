import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import { TEAM_IMG } from "../constants/images"

const benefits = [
  {
    icon: "💰",
    title: "Competitive Compensation",
    desc: "Market-leading base salary, short-term incentive plan, and long-term equity awards.",
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    desc: "Comprehensive health, dental, vision, and mental wellness benefits for you and your family.",
  },
  {
    icon: "📈",
    title: "Career Growth",
    desc: "Structured development programs, mentorship, and clear pathways for advancement.",
  },
  {
    icon: "🌍",
    title: "Inclusive Culture",
    desc: "A diverse, inclusive workplace where every perspective is valued and respected.",
  },
]

const jobs = [
  {
    title: "Senior Reservoir Engineer",
    dept: "Engineering",
    location: "Calgary, AB",
    posted: "Sep 15, 2026",
  },
  {
    title: "Production Operator – Montney",
    dept: "Operations",
    location: "Grande Prairie, AB",
    posted: "Sep 12, 2026",
  },
  {
    title: "HSE Advisor",
    dept: "Health, Safety & Environment",
    location: "Calgary, AB",
    posted: "Sep 10, 2026",
  },
  {
    title: "Financial Analyst – Corporate Finance",
    dept: "Finance",
    location: "Calgary, AB",
    posted: "Sep 8, 2026",
  },
  {
    title: "Drilling Engineer",
    dept: "Engineering",
    location: "Calgary, AB",
    posted: "Sep 5, 2026",
  },
  {
    title: "Indigenous & Community Relations Advisor",
    dept: "External Affairs",
    location: "Calgary, AB (Hybrid)",
    posted: "Sep 1, 2026",
  },
  {
    title: "Controls & Instrumentation Technologist",
    dept: "Operations",
    location: "Grande Prairie, AB",
    posted: "Aug 28, 2026",
  },
  {
    title: "Environmental Coordinator",
    dept: "HSE",
    location: "Calgary, AB",
    posted: "Aug 25, 2026",
  },
  {
    title: "GIS Analyst – Land & Geomatics",
    dept: "Land",
    location: "Calgary, AB",
    posted: "Aug 20, 2026",
  },
  {
    title: "IT Infrastructure Specialist",
    dept: "Information Technology",
    location: "Calgary, AB (Hybrid)",
    posted: "Aug 15, 2026",
  },
]

function WhyPetrovaraSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
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
            WHY PETROVARA?
          </h2>
          <p
            className="text-slate-600 leading-relaxed mb-5"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Our people are at the center of our vision. We are committed to
            creating a culture where safety, accountability, teamwork, and
            continuous improvement guide how we work every day.
          </p>
          <p
            className="text-slate-600 leading-relaxed mb-8"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            At Petrovara, you'll work alongside experienced professionals in a
            company that values initiative, rewards results, and invests in your
            long-term success.
          </p>
          <Link to="/apply" className="btn-primary">
            Submit an Application
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="card-hover bg-slate-50 border border-slate-200 p-6"
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
                {b.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#c85a00",
                  textTransform: "uppercase",
                  marginBottom: "0.4rem",
                }}
              >
                {b.title}
              </h3>
              <p
                className="text-slate-500 text-xs leading-relaxed"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function JobListingsSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "2rem",
              color: "#050e1f",
            }}
          >
            OPEN POSITIONS
          </h2>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              color: "#c85a00",
            }}
          >
            {jobs.length} positions available
          </span>
        </div>
        <div className="space-y-3">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-white border border-slate-200 hover:border-orange-600/50 hover:shadow-md transition-all px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#050e1f",
                    marginBottom: "0.35rem",
                  }}
                >
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      color: "#c85a00",
                      textTransform: "uppercase",
                      background: "rgba(200,90,0,0.08)",
                      border: "1px solid rgba(200,90,0,0.2)",
                      padding: "0.2rem 0.5rem",
                    }}
                  >
                    {job.dept}
                  </span>
                  <span
                    className="text-slate-500 flex items-center gap-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {job.location}
                  </span>
                  <span
                    className="text-slate-400"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Posted {job.posted}
                  </span>
                </div>
              </div>
              <Link
                to="/apply"
                className="btn-primary whitespace-nowrap text-xs py-2 px-4 self-start sm:self-auto"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function CareersPage() {
  return (
    <main>
      <PageHeader
        title="CAREERS"
        subtitle="Build your future with Petrovara Energy — where talent meets opportunity."
        img={TEAM_IMG}
      />
      <WhyPetrovaraSection />
      <JobListingsSection />
    </main>
  )
}
