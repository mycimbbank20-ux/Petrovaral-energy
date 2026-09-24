interface PageHeaderProps {
  title: string
  subtitle?: string
  img: string
}

export default function PageHeader({ title, subtitle, img }: PageHeaderProps) {
  return (
    <section className="relative pt-16 lg:pt-20 h-64 sm:h-80 flex items-end overflow-hidden">
      <img
        src={img}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-navy-950/95 via-navy-950/65 to-navy-950/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 w-full">
        <span className="accent-line" />
        <h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "#fff",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-2 text-slate-300 text-sm sm:text-base max-w-xl"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
