import PageHeader from "../components/PageHeader";
import {
  PIPELINE_IMG,
  FOREST_PIPE_IMG,
  REFINERY_IMG,
  PIPES_IMG,
} from "../constants/images";

const ops = [
  {
    title: "Exploration",
    img: FOREST_PIPE_IMG,
    desc: "Petrovara's exploration teams apply leading geoscience and engineering technologies to identify and evaluate high-quality resource opportunities across Canadian sedimentary basins.",
    highlights: [
      "Montney & Duvernay plays",
      "3D seismic acquisition",
      "Geological & geophysical analysis",
      "Crown land acquisition strategy",
    ],
  },
  {
    title: "Production",
    img: PIPELINE_IMG,
    desc: "Our production operations focus on efficient, safe, and environmentally responsible extraction of oil and natural gas using horizontal drilling and real-time reservoir management.",
    highlights: [
      "Horizontal drilling programs",
      "Multi-stage hydraulic fracturing",
      "Real-time production optimization",
      "Facility and well pad operations",
    ],
  },
  {
    title: "Natural Gas",
    img: REFINERY_IMG,
    desc: "Petrovara holds significant natural gas and liquids-rich natural gas assets. Our gas business is a key growth driver as demand for natural gas in power generation and LNG export grows.",
    highlights: [
      "Liquids-rich gas assets",
      "Gas processing infrastructure",
      "LNG export opportunity alignment",
      "Emissions management programs",
    ],
  },
  {
    title: "Infrastructure",
    img: PIPES_IMG,
    desc: "Supporting our upstream operations, Petrovara builds and operates midstream infrastructure including pipelines, compressor stations, water handling facilities, and battery sites.",
    highlights: [
      "Pipeline gathering systems",
      "Compression & processing facilities",
      "Water handling & disposal",
      "Third-party throughput capacity",
    ],
  },
];

function OperationBlock({ op, index }: { op: (typeof ops)[0]; index: number }) {
  const isReversed = index % 2 === 1;
  return (
    <div
      className={`py-16 sm:py-20 ${isReversed ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className={isReversed ? "lg:order-2" : ""}>
          <img
            src={op.img}
            alt={op.title}
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>
        <div className={isReversed ? "lg:order-1" : ""}>
          <span className="accent-line" />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "#050e1f",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            {op.title}
          </h2>
          <p
            className="text-slate-600 leading-relaxed mb-8"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {op.desc}
          </p>
          <ul className="space-y-2.5">
            {op.highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-3 text-sm text-slate-700"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function OperationsPage() {
  return (
    <main>
      <PageHeader
        title="OPERATIONS"
        subtitle="Responsible exploration and production across Canada's premier energy basins."
        img={PIPELINE_IMG}
      />
      {ops.map((op, i) => (
        <OperationBlock key={op.title} op={op} index={i} />
      ))}
    </main>
  );
}
