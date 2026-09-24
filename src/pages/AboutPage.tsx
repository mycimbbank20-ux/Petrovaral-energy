import PageHeader from "../components/PageHeader";
import { TEAM_IMG, INDUSTRIAL_IMG } from "../constants/images";

const coreValues = [
  {
    num: "01",
    title: "Integrity",
    desc: "We conduct our business with honesty, transparency, accountability, and respect.",
  },
  {
    num: "02",
    title: "Safety First",
    desc: "We put the safety and wellbeing of our people, contractors, and communities at the heart of every decision.",
  },
  {
    num: "03",
    title: "Responsible Development",
    desc: "Natural resources developed thoughtfully, efficiently, and with respect for the environment.",
  },
  {
    num: "04",
    title: "Excellence",
    desc: "We pursue high standards in our technical work, operations, decision-making, and relationships.",
  },
  {
    num: "05",
    title: "Innovation",
    desc: "We embrace new technologies that improve efficiency, safety, productivity, and resource management.",
  },
  {
    num: "06",
    title: "Partnership",
    desc: "We build lasting relationships with employees, investors, communities, and industry partners.",
  },
  {
    num: "07",
    title: "Long-Term Value",
    desc: "We focus on sustainable growth rather than short-term gains, making decisions with a long-term perspective.",
  },
];

const missionVisionCards = [
  {
    tag: "Mission",
    heading: "OUR MISSION",
    body: [
      "At Petrovara Energy Inc., our mission is to responsibly explore, develop, and produce energy resources while creating lasting value for our shareholders, partners, employees, and the communities in which we operate.",
      "We combine innovation, technical excellence, operational discipline, and responsible resource development to deliver reliable energy and build a resilient Canadian energy company positioned for long-term growth.",
    ],
  },
  {
    tag: "Vision",
    heading: "OUR VISION",
    body: [
      "To become a trusted, innovative, and internationally recognized Canadian energy company, known for operational excellence, responsible resource development, and the ability to create sustainable value across the energy sector.",
      "We envision Petrovara Energy growing from a Canadian foundation into a diversified energy enterprise with opportunities across exploration, production, natural gas, energy infrastructure, and emerging energy technologies.",
    ],
  },
];

const ceoQuotes = [
  '"At Petrovara Energy Inc., we believe energy is more than a commodity — it is a foundation for economic growth, prosperity, and the development of communities around the world.',
  "Petrovara was established with a clear ambition: to build a modern Canadian energy company founded on responsible resource development, operational excellence, innovation, and integrity.",
  'We are ambitious about the future, disciplined in our approach, and committed to building Petrovara Energy into a respected Canadian energy enterprise with an international outlook."',
];

function MissionVisionSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8">
        {missionVisionCards.map((card) => (
          <div key={card.tag} className="border border-slate-200 p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-orange-600" />
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.68rem",
                  letterSpacing: "0.2em",
                  color: "#c85a00",
                  textTransform: "uppercase",
                }}
              >
                {card.tag}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "2rem",
                color: "#050e1f",
                marginBottom: "1rem",
              }}
            >
              {card.heading}
            </h2>
            {card.body.map((p, i) => (
              <p
                key={i}
                className={`text-slate-600 leading-relaxed ${i < card.body.length - 1 ? "mb-4" : ""}`}
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function CEOSection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <img
            src={INDUSTRIAL_IMG}
            alt="Industrial"
            className="w-full h-80 sm:h-96 object-cover"
          />
          <div className="absolute -bottom-4 -right-4 bg-orange-600 p-5 hidden lg:flex items-center justify-center">
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "3.5rem",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              "
            </span>
          </div>
        </div>
        <div>
          <span className="accent-line" />
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "#050e1f",
              marginBottom: "1.5rem",
            }}
          >
            A MESSAGE FROM THE CEO
          </h2>
          <div className="space-y-4">
            {ceoQuotes.map((q, i) => (
              <p
                key={i}
                className="text-slate-600 leading-relaxed"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontStyle: "italic",
                }}
              >
                {q}
              </p>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                color: "#050e1f",
              }}
            >
              Chief Executive Officer
            </div>
            <div
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 400,
                fontSize: "0.85rem",
                color: "#c85a00",
                marginTop: "0.2rem",
              }}
            >
              Petrovara Energy Inc.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
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
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {coreValues.map((v) => (
            <div
              key={v.num}
              className="card-hover bg-slate-50 border border-slate-200 p-7"
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "2.5rem",
                  color: "rgba(200,90,0,0.15)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {v.num}
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
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

function PromiseBanner() {
  return (
    <section className="py-14 bg-navy-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            color: "#fff",
          }}
        >
          OUR PROMISE
        </h2>
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "#c85a00",
            marginTop: "0.75rem",
            letterSpacing: "0.04em",
          }}
        >
          Explore responsibly. Operate safely. Innovate continuously. Create
          lasting value.
        </p>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="ABOUT PETROVARA"
        subtitle="Our mission, vision, values, and the leadership driving our growth."
        img={TEAM_IMG}
      />
      <MissionVisionSection />
      <CEOSection />
      <CoreValuesSection />
      <PromiseBanner />
    </main>
  );
}
