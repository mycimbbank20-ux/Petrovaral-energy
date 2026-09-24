// import { Link } from "react-router-dom";
// import {
//   HERO_IMG,
//   CANADA_IMG,
//   REFINERY_IMG,
//   PIPELINE_IMG,
//   PIPES_IMG,
//   FOREST_PIPE_IMG,
// } from "../constants/images";

// const stats = [
//   { value: "15+", label: "Years Experience" },
//   { value: "4", label: "Operating Basins" },
//   { value: "2,500+", label: "Employees" },
//   { value: "TSX", label: "Listed Company" },
// ];

// const values = [
//   {
//     icon: "⚡",
//     title: "Innovation",
//     desc: "Embracing new technologies to improve efficiency, safety, and resource management.",
//   },
//   {
//     icon: "🛡️",
//     title: "Safety First",
//     desc: "The safety and wellbeing of our people is at the heart of every decision.",
//   },
//   {
//     icon: "🌿",
//     title: "Responsible Development",
//     desc: "Developing natural resources thoughtfully, efficiently, and respectfully.",
//   },
//   {
//     icon: "🤝",
//     title: "Partnership",
//     desc: "Building lasting relationships with communities, investors, and industry partners.",
//   },
// ];

// const newsItems = [
//   {
//     date: "Sep 12, 2026",
//     tag: "Operations",
//     title: "Petrovara Announces Q3 Production Update and New Well Results",
//     excerpt:
//       "Strong performance across core Alberta plays drives 8% quarter-over-quarter production growth.",
//   },
//   {
//     date: "Aug 28, 2026",
//     tag: "Sustainability",
//     title: "Petrovara Releases 2025 Sustainability Report",
//     excerpt:
//       "Our commitment to responsible energy development is reflected in measurable ESG progress.",
//   },
//   {
//     date: "Aug 5, 2026",
//     tag: "Corporate",
//     title: "Petrovara Completes Strategic Asset Acquisition in Montney",
//     excerpt:
//       "Transaction adds significant high-quality natural gas acreage with multi-year development inventory.",
//   },
// ];

// const operations = [
//   {
//     title: "Exploration",
//     img: FOREST_PIPE_IMG,
//     desc: "Identifying and evaluating high-quality resource opportunities across Canadian basins.",
//   },
//   {
//     title: "Production",
//     img: PIPELINE_IMG,
//     desc: "Efficient, responsible extraction of oil and natural gas using proven field practices.",
//   },
//   {
//     title: "Infrastructure",
//     img: PIPES_IMG,
//     desc: "Building midstream infrastructure that supports production and partner growth.",
//   },
// ];

// // ── Sub-sections ──────────────────────────────────────────────────────────────

// function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       <img
//         src={HERO_IMG}
//         alt="Industrial energy facility"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-linear-to-r from-navy-950/95 via-navy-950/75 to-navy-950/25" />
//       <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-transparent" />
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20">
//         <div className="max-w-3xl">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="w-10 h-0.5 bg-orange-600" />
//             <span
//               style={{
//                 fontFamily: "'Barlow Condensed', sans-serif",
//                 fontWeight: 600,
//                 fontSize: "0.72rem",
//                 letterSpacing: "0.28em",
//                 color: "#c85a00",
//                 textTransform: "uppercase",
//               }}
//             >
//               Canadian Energy Company
//             </span>
//           </div>
//           <h1
//             style={{
//               fontFamily: "'Barlow Condensed', sans-serif",
//               fontWeight: 800,
//               fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
//               letterSpacing: "0.01em",
//               lineHeight: 1.0,
//               color: "#fff",
//               marginBottom: "1.5rem",
//             }}
//           >
//             POWERING
//             <br />
//             <span style={{ color: "#c85a00" }}>RESOURCES.</span>
//             <br />
//             BUILDING THE
//             <br />
//             FUTURE.
//           </h1>
//           <p
//             className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10"
//             style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
//           >
//             Petrovara Energy Inc. is a modern Canadian energy company committed
//             to responsible resource development, operational excellence, and
//             long-term value creation.
//           </p>
//           <div className="flex flex-wrap gap-4">
//             <Link to="/about" className="btn-primary">
//               Our Story
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </Link>
//             <Link to="/investors" className="btn-outline-dark">
//               Investor Relations
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function StatsSection() {
//   return (
//     <section className="bg-white border-b border-slate-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
//           {stats.map((s) => (
//             <div key={s.label} className="px-6 sm:px-10 py-10 text-center">
//               <div className="stat-number mb-1">{s.value}</div>
//               <div
//                 style={{
//                   fontFamily: "'Barlow Condensed', sans-serif",
//                   fontWeight: 600,
//                   fontSize: "0.72rem",
//                   letterSpacing: "0.15em",
//                   color: "#64748b",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 {s.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function AboutIntroSection() {
//   return (
//     <section className="py-20 sm:py-28 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
//         <div>
//           <span className="accent-line" />
//           <h2
//             style={{
//               fontFamily: "'Barlow Condensed', sans-serif",
//               fontWeight: 800,
//               fontSize: "clamp(2rem, 4vw, 3rem)",
//               color: "#050e1f",
//               marginBottom: "1.25rem",
//             }}
//           >
//             A RESPONSIBLE CANADIAN ENERGY ENTERPRISE
//           </h2>
//           <p
//             className="text-slate-600 leading-relaxed mb-5"
//             style={{ fontFamily: "'Barlow', sans-serif" }}
//           >
//             At Petrovara Energy Inc., we believe energy is more than a commodity
//             — it is a foundation for economic growth, prosperity, and the
//             development of communities around the world.
//           </p>
//           <p
//             className="text-slate-600 leading-relaxed mb-8"
//             style={{ fontFamily: "'Barlow', sans-serif" }}
//           >
//             Established with a clear ambition, we combine innovation, technical
//             excellence, and operational discipline to deliver reliable energy
//             and build a resilient company positioned for long-term growth.
//           </p>
//           <Link to="/about" className="btn-primary">
//             About Petrovara
//           </Link>
//         </div>
//         <div className="relative">
//           <img
//             src={CANADA_IMG}
//             alt="Canadian landscape"
//             className="w-full h-80 sm:h-96 object-cover"
//           />
//           <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-navy-950 hidden lg:flex items-center justify-center">
//             <div className="text-center">
//               <div
//                 style={{
//                   fontFamily: "'Barlow Condensed', sans-serif",
//                   fontWeight: 800,
//                   fontSize: "2rem",
//                   color: "#fff",
//                   lineHeight: 1,
//                 }}
//               >
//                 2009
//               </div>
//               <div
//                 style={{
//                   fontFamily: "'Barlow Condensed', sans-serif",
//                   fontWeight: 600,
//                   fontSize: "0.58rem",
//                   letterSpacing: "0.15em",
//                   color: "#c85a00",
//                   textTransform: "uppercase",
//                   marginTop: "0.25rem",
//                 }}
//               >
//                 Est.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function CoreValuesSection() {
//   return (
//     <section className="py-20 sm:py-28 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="text-center mb-16">
//           <span className="accent-line-center" />
//           <h2
//             style={{
//               fontFamily: "'Barlow Condensed', sans-serif",
//               fontWeight: 800,
//               fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//               color: "#050e1f",
//             }}
//           >
//             OUR CORE VALUES
//           </h2>
//           <p
//             className="mt-4 text-slate-500 max-w-2xl mx-auto"
//             style={{ fontFamily: "'Barlow', sans-serif" }}
//           >
//             These principles guide how we work, invest, and engage with our
//             stakeholders every day.
//           </p>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {values.map((v) => (
//             <div
//               key={v.title}
//               className="card-hover bg-white border border-slate-200 p-8"
//             >
//               <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
//                 {v.icon}
//               </div>
//               <h3
//                 style={{
//                   fontFamily: "'Barlow Condensed', sans-serif",
//                   fontWeight: 700,
//                   fontSize: "1.1rem",
//                   color: "#c85a00",
//                   letterSpacing: "0.05em",
//                   textTransform: "uppercase",
//                   marginBottom: "0.6rem",
//                 }}
//               >
//                 {v.title}
//               </h3>
//               <p
//                 className="text-slate-500 text-sm leading-relaxed"
//                 style={{ fontFamily: "'Barlow', sans-serif" }}
//               >
//                 {v.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function OperationsSection() {
//   return (
//     <section className="py-20 sm:py-28 bg-navy-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="mb-14">
//           <span className="accent-line" />
//           <h2
//             style={{
//               fontFamily: "'Barlow Condensed', sans-serif",
//               fontWeight: 800,
//               fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//               color: "#fff",
//             }}
//           >
//             OUR OPERATIONS
//           </h2>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
//           {operations.map((op) => (
//             <Link
//               key={op.title}
//               to="/operations"
//               className="relative h-72 sm:h-80 overflow-hidden group block"
//             >
//               <img
//                 src={op.img}
//                 alt={op.title}
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-linear-to-t from-navy-950/95 via-navy-950/50 to-transparent" />
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <div className="w-8 h-0.5 bg-orange-600 mb-3 transition-all duration-300 group-hover:w-14" />
//                 <h3
//                   style={{
//                     fontFamily: "'Barlow Condensed', sans-serif",
//                     fontWeight: 700,
//                     fontSize: "1.35rem",
//                     color: "#fff",
//                     letterSpacing: "0.05em",
//                     textTransform: "uppercase",
//                     marginBottom: "0.4rem",
//                   }}
//                 >
//                   {op.title}
//                 </h3>
//                 <p
//                   className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                   style={{ fontFamily: "'Barlow', sans-serif" }}
//                 >
//                   {op.desc}
//                 </p>
//               </div>
//             </Link>
//           ))}
//         </div>
//         <div className="mt-8 text-center">
//           <Link to="/operations" className="btn-outline-dark">
//             View All Operations
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// function NewsSection() {
//   return (
//     <section className="py-20 sm:py-28 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6">
//         <div className="flex items-end justify-between mb-14">
//           <div>
//             <span className="accent-line" />
//             <h2
//               style={{
//                 fontFamily: "'Barlow Condensed', sans-serif",
//                 fontWeight: 800,
//                 fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
//                 color: "#050e1f",
//               }}
//             >
//               LATEST NEWS
//             </h2>
//           </div>
//           <Link
//             to="/contact"
//             className="hidden sm:block text-sm text-orange-600 hover:text-orange-500 transition-colors"
//             style={{
//               fontFamily: "'Barlow Condensed', sans-serif",
//               fontWeight: 600,
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//             }}
//           >
//             All News →
//           </Link>
//         </div>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {newsItems.map((n) => (
//             <article
//               key={n.title}
//               className="card-hover bg-white border border-slate-200 p-8"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <span
//                   style={{
//                     fontFamily: "'Barlow Condensed', sans-serif",
//                     fontWeight: 700,
//                     fontSize: "0.62rem",
//                     letterSpacing: "0.15em",
//                     color: "#c85a00",
//                     textTransform: "uppercase",
//                     background: "rgba(200,90,0,0.08)",
//                     padding: "0.25rem 0.6rem",
//                     border: "1px solid rgba(200,90,0,0.2)",
//                   }}
//                 >
//                   {n.tag}
//                 </span>
//                 <span
//                   className="text-slate-400 text-xs"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   {n.date}
//                 </span>
//               </div>
//               <h3
//                 style={{
//                   fontFamily: "'Barlow Condensed', sans-serif",
//                   fontWeight: 700,
//                   fontSize: "1.05rem",
//                   color: "#050e1f",
//                   lineHeight: 1.3,
//                   marginBottom: "0.6rem",
//                 }}
//               >
//                 {n.title}
//               </h3>
//               <p
//                 className="text-slate-500 text-sm leading-relaxed"
//                 style={{ fontFamily: "'Barlow', sans-serif" }}
//               >
//                 {n.excerpt}
//               </p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function CTABannerSection() {
//   return (
//     <section className="relative py-20 sm:py-24 overflow-hidden">
//       <img
//         src={REFINERY_IMG}
//         alt="Refinery"
//         className="absolute inset-0 w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-navy-950/88" />
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
//         <h2
//           style={{
//             fontFamily: "'Barlow Condensed', sans-serif",
//             fontWeight: 800,
//             fontSize: "clamp(2rem, 5vw, 3.5rem)",
//             color: "#fff",
//             marginBottom: "1rem",
//           }}
//         >
//           JOIN THE PETROVARA TEAM
//         </h2>
//         <p
//           className="text-slate-300 max-w-xl mx-auto mb-8"
//           style={{ fontFamily: "'Barlow', sans-serif" }}
//         >
//           We are building a company where safety, accountability, and continuous
//           improvement guide how we work every day.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <Link to="/careers" className="btn-primary">
//             View Open Positions
//           </Link>
//           <Link to="/apply" className="btn-outline-dark">
//             Submit Application
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// // ── Page export ───────────────────────────────────────────────────────────────

// export default function HomePage() {
//   return (
//     <main>
//       <HeroSection />
//       <StatsSection />
//       <AboutIntroSection />
//       <CoreValuesSection />
//       <OperationsSection />
//       <NewsSection />
//       <CTABannerSection />
//     </main>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  HERO_IMG,
  CANADA_IMG,
  REFINERY_IMG,
  PIPELINE_IMG,
  PIPES_IMG,
  FOREST_PIPE_IMG,
} from "../constants/images";

const HERO_SLIDES = [HERO_IMG, PIPELINE_IMG, REFINERY_IMG, FOREST_PIPE_IMG];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "4", label: "Operating Basins" },
  { value: "2,500+", label: "Employees" },
  { value: "TSX", label: "Listed Company" },
];

const values = [
  {
    icon: "⚡",
    title: "Innovation",
    desc: "Embracing new technologies to improve efficiency, safety, and resource management.",
  },
  {
    icon: "🛡️",
    title: "Safety First",
    desc: "The safety and wellbeing of our people is at the heart of every decision.",
  },
  {
    icon: "🌿",
    title: "Responsible Development",
    desc: "Developing natural resources thoughtfully, efficiently, and respectfully.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    desc: "Building lasting relationships with communities, investors, and industry partners.",
  },
];

const newsItems = [
  {
    date: "Sep 12, 2026",
    tag: "Operations",
    title: "Petrovara Announces Q3 Production Update and New Well Results",
    excerpt:
      "Strong performance across core Alberta plays drives 8% quarter-over-quarter production growth.",
  },
  {
    date: "Aug 28, 2026",
    tag: "Sustainability",
    title: "Petrovara Releases 2025 Sustainability Report",
    excerpt:
      "Our commitment to responsible energy development is reflected in measurable ESG progress.",
  },
  {
    date: "Aug 5, 2026",
    tag: "Corporate",
    title: "Petrovara Completes Strategic Asset Acquisition in Montney",
    excerpt:
      "Transaction adds significant high-quality natural gas acreage with multi-year development inventory.",
  },
];

const operations = [
  {
    title: "Exploration",
    img: FOREST_PIPE_IMG,
    desc: "Identifying and evaluating high-quality resource opportunities across Canadian basins.",
  },
  {
    title: "Production",
    img: PIPELINE_IMG,
    desc: "Efficient, responsible extraction of oil and natural gas using proven field practices.",
  },
  {
    title: "Infrastructure",
    img: PIPES_IMG,
    desc: "Building midstream infrastructure that supports production and partner growth.",
  },
];

// ── Sub-sections ──────────────────────────────────────────────────────────────

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Carousel */}
      {HERO_SLIDES.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Industrial energy facility slide ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-r from-navy-950/95 via-navy-950/75 to-navy-950/25 z-10" />
      <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-transparent z-10" />

      {/* Carousel Controls / Indicators */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
              idx === currentSlide
                ? "w-8 bg-orange-600"
                : "w-2 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            {/* <div className="w-10 h-0.5 bg-orange-600" /> */}
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.28em",
                color: "#c85a00",
                textTransform: "uppercase",
              }}
            >
              Canadian Energy Company
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              letterSpacing: "0.01em",
              lineHeight: 1.0,
              color: "#fff",
              marginBottom: "1.5rem",
            }}
          >
            POWERING
            <br />
            <span style={{ color: "#c85a00" }}>RESOURCES.</span>
            <br />
            BUILDING THE
            <br />
            FUTURE.
          </h1>
          <p
            className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
          >
            Petrovara Energy Inc. is a modern Canadian energy company committed
            to responsible resource development, operational excellence, and
            long-term value creation.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about" className="btn-primary">
              Our Story
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link to="/investors" className="btn-outline-dark">
              Investor Relations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounterItem({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Parse numeric component and optional suffix
  const rawNum = value.replace(/[^0-9]/g, "");
  const isNumeric = rawNum.length > 0;
  const targetNum = isNumeric ? parseInt(rawNum, 10) : 0;
  const suffix = value.replace(/[0-9,]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !isNumeric) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = targetNum / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, isNumeric, targetNum]);

  const displayVal = isNumeric ? `${count.toLocaleString()}${suffix}` : value;

  return (
    <div ref={ref} className="px-6 sm:px-10 py-10 text-center">
      <div className="stat-number mb-1">{displayVal}</div>
      <div
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          color: "#64748b",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-100">
          {stats.map((s) => (
            <StatCounterItem key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutIntroSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="accent-line" />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#050e1f",
              marginBottom: "1.25rem",
            }}
          >
            A RESPONSIBLE CANADIAN ENERGY ENTERPRISE
          </h2>
          <p
            className="text-slate-600 leading-relaxed mb-5"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            At Petrovara Energy Inc., we believe energy is more than a commodity
            — it is a foundation for economic growth, prosperity, and the
            development of communities around the world.
          </p>
          <p
            className="text-slate-600 leading-relaxed mb-8"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Established with a clear ambition, we combine innovation, technical
            excellence, and operational discipline to deliver reliable energy
            and build a resilient company positioned for long-term growth.
          </p>
          <Link to="/about" className="btn-primary">
            About Petrovara
          </Link>
        </div>
        <div className="relative">
          <img
            src={CANADA_IMG}
            alt="Canadian landscape"
            className="w-full h-80 sm:h-96 object-cover"
          />
          <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-navy-950 hidden lg:flex items-center justify-center">
            <div className="text-center">
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                2009
              </div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.58rem",
                  letterSpacing: "0.15em",
                  color: "#c85a00",
                  textTransform: "uppercase",
                  marginTop: "0.25rem",
                }}
              >
                Est.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="accent-line-center" />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#050e1f",
            }}
          >
            OUR CORE VALUES
          </h2>
          <p
            className="mt-4 text-slate-500 max-w-2xl mx-auto"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            These principles guide how we work, invest, and engage with our
            stakeholders every day.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="card-hover bg-white border border-slate-200 p-8"
            >
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                {v.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#c85a00",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                {v.title}
              </h3>
              <p
                className="text-slate-500 text-sm leading-relaxed"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperationsSection() {
  return (
    <section className="py-20 sm:py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <span className="accent-line" />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#fff",
            }}
          >
            OUR OPERATIONS
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {operations.map((op) => (
            <Link
              key={op.title}
              to="/operations"
              className="relative h-72 sm:h-80 overflow-hidden group block"
            >
              <img
                src={op.img}
                alt={op.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/95 via-navy-950/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="w-8 h-0.5 bg-orange-600 mb-3 transition-all duration-300 group-hover:w-14" />
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: "#fff",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "0.4rem",
                  }}
                >
                  {op.title}
                </h3>
                <p
                  className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {op.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/operations" className="btn-outline-dark">
            View All Operations
          </Link>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="accent-line" />
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#050e1f",
              }}
            >
              LATEST NEWS
            </h2>
          </div>
          <Link
            to="/contact"
            className="hidden sm:block text-sm text-orange-600 hover:text-orange-500 transition-colors"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            All News →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((n) => (
            <article
              key={n.title}
              className="card-hover bg-white border border-slate-200 p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.62rem",
                    letterSpacing: "0.15em",
                    color: "#c85a00",
                    textTransform: "uppercase",
                    background: "rgba(200,90,0,0.08)",
                    padding: "0.25rem 0.6rem",
                    border: "1px solid rgba(200,90,0,0.2)",
                  }}
                >
                  {n.tag}
                </span>
                <span
                  className="text-slate-400 text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {n.date}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#050e1f",
                  lineHeight: 1.3,
                  marginBottom: "0.6rem",
                }}
              >
                {n.title}
              </h3>
              <p
                className="text-slate-500 text-sm leading-relaxed"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {n.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABannerSection() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      <img
        src={REFINERY_IMG}
        alt="Refinery"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy-950/88" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          JOIN THE PETROVARA TEAM
        </h2>
        <p
          className="text-slate-300 max-w-xl mx-auto mb-8"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          We are building a company where safety, accountability, and continuous
          improvement guide how we work every day.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/careers" className="btn-primary">
            View Open Positions
          </Link>
          <Link to="/apply" className="btn-outline-dark">
            Submit Application
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Page export ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <AboutIntroSection />
      <CoreValuesSection />
      <OperationsSection />
      <NewsSection />
      <CTABannerSection />
    </main>
  );
}
