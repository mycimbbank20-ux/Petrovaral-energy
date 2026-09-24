import { Link } from "react-router-dom"

const footerLinks = {
  company: [
    { label: "About Us", to: "/about" },
    { label: "Operations", to: "/operations" },
    { label: "Sustainability", to: "/sustainability" },
    { label: "Investors", to: "/investors" },
  ],
  careers: [
    { label: "Why Petrovara", to: "/careers" },
    { label: "Open Positions", to: "/careers" },
    { label: "Apply Now", to: "/apply" },
  ],
}

const sectionHeadStyle: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 700,
  fontSize: "1rem",
  letterSpacing: "0.2em",
  color: "#c85a00",
  textTransform: "uppercase",
  marginBottom: "1rem",
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "1.7rem",
                letterSpacing: "0.05em",
                color: "#fff",
                marginBottom: "0.25rem",
              }}
            >
              PETROVARA
            </div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.25em",
                color: "#c85a00",
                marginBottom: "1rem",
              }}
            >
              ENERGY INC.
            </div>
            <p
              className="text-slate-400 text-sm leading-relaxed"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              Powering Resources. Building the Future. A responsible Canadian
              energy company with an international outlook.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 style={sectionHeadStyle}>Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h4 style={sectionHeadStyle}>Careers</h4>
            <ul className="space-y-2">
              {footerLinks.careers.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={sectionHeadStyle}>Contact</h4>
            <address
              className="not-italic space-y-2 text-sm text-slate-400"
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              <p>
                1000 – 520 3rd Ave SW
                <br />
                Calgary, AB T2P 0R3
                <br />
                Canada
              </p>
              <p className="mt-3">
                <a
                  href="mailto:info@petrovaraenergy.com"
                  className="hover:text-white transition-colors"
                >
                  info@petrovaraenergy.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+14031234567"
                  className="hover:text-white transition-colors"
                >
                  +1 (403) 123-4567
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="w-full h-px bg-white/8 mb-8" />

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p>
            © {new Date().getFullYear()} Petrovara Energy Inc. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Legal Notices"].map((l) => (
              <button
                key={l}
                className="hover:text-slate-300 transition-colors"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
