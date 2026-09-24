import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type NavChild = { label: string; to: string };
type NavItem = { label: string; to?: string; children?: NavChild[] };

const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About Us",
    children: [
      { label: "Mission & Vision", to: "/about" },
      { label: "Core Values", to: "/about" },
      { label: "Leadership", to: "/about" },
    ],
  },
  {
    label: "Operations",
    children: [
      { label: "Exploration", to: "/operations" },
      { label: "Production", to: "/operations" },
      { label: "Natural Gas", to: "/operations" },
      { label: "Infrastructure", to: "/operations" },
    ],
  },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Investors", to: "/investors" },
  {
    label: "Careers",
    children: [
      { label: "Why Petrovara", to: "/careers" },
      { label: "Open Positions", to: "/careers" },
      { label: "Apply Now", to: "/apply" },
    ],
  },
  { label: "Contact", to: "/contact" },
];

const navLabelStyle: React.CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 600,
  fontSize: "1rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const isActive = (to: string) => location.pathname === to;

  const closeMenu = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <>
      {/* ── Desktop nav ── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Home">
            <div
              className="w-9 h-9 bg-navy-950 flex items-center justify-center shrink-0"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                color: "#c85a00",
                fontSize: "1.25rem",
                letterSpacing: "0.05em",
                borderRadius: "0.125rem",
              }}
            >
              PE
            </div>
            <div className="hidden sm:block leading-none">
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  letterSpacing: "0.06em",
                  color: "#050e1f",
                }}
              >
                PETROVARA
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.6rem",
                  letterSpacing: "0.22em",
                  color: "#c85a00",
                }}
              >
                ENERGY INC.
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="dropdown-trigger relative">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-navy-900 hover:text-orange-600 transition-colors"
                    style={navLabelStyle}
                  >
                    {item.label}
                    <svg
                      className="w-3 h-3 opacity-50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="dropdown-menu absolute top-full left-0 mt-0 w-52 bg-white border border-slate-200 shadow-xl py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        className="block px-5 py-3 text-navy-900 hover:text-orange-600 hover:bg-slate-50 transition-colors text-sm"
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  className={`px-3 py-2 transition-colors ${isActive(item.to!) ? "text-orange-600" : "text-navy-900 hover:text-orange-600"}`}
                  style={navLabelStyle}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden lg:flex">
            <Link to="/apply" className="btn-primary text-xs py-2 px-5">
              Career Path
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-navy-900"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <div
        className={`mobile-nav-overlay ${mobileOpen ? "open" : ""} flex flex-col border-r border-slate-200`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-slate-200">
          <div
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "1.1rem",
              letterSpacing: "0.05em",
              color: "#050e1f",
            }}
          >
            PETROVARA <span style={{ color: "#c85a00" }}>ENERGY</span>
          </div>
          <button
            onClick={closeMenu}
            className="p-2 text-navy-900"
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-0.5">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setMobileExpanded(
                      mobileExpanded === item.label ? null : item.label,
                    )
                  }
                  className="flex items-center justify-between w-full py-3 border-b border-slate-100 text-navy-950"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileExpanded === item.label && (
                  <div className="pl-4 py-1 space-y-0.5 bg-slate-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={closeMenu}
                        className="block py-2.5 px-3 text-slate-600 hover:text-orange-600 transition-colors text-sm"
                        style={{ fontFamily: "'Barlow', sans-serif" }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to!}
                onClick={closeMenu}
                className={`block py-3 border-b border-slate-100 transition-colors ${isActive(item.to!) ? "text-orange-600" : "text-navy-950 hover:text-orange-600"}`}
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="px-6 pb-8 pt-4 border-t border-slate-100">
          <Link
            to="/apply"
            onClick={closeMenu}
            className="btn-primary w-full justify-center"
          >
            Career Path
          </Link>
        </div>
      </div>
    </>
  );
}
