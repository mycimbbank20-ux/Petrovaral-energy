import { useState } from "react"
import { toast } from "sonner"
import PageHeader from "../components/PageHeader"
import { INDUSTRIAL_IMG } from "../constants/images"

const offices = [
  {
    city: "Calgary (HQ)",
    address: "1000 – 520 3rd Ave SW, Calgary, AB T2P 0R3",
    phone: " +1 (672) 202-1705",
    email: "info@petrovaraenergy.com",
  },
  {
    city: "Grande Prairie",
    address: "9835 – 101 Ave, Grande Prairie, AB T8V 0X6",
    // phone: " +1 (672) 202-1705",
    email: "gp@petrovaraenergy.com",
  },
  {
    city: "Edmonton",
    address: "200 – 10060 Jasper Ave, Edmonton, AB T5J 3R8",
    // phone: "+1 (780) 987-6543",
    email: "edmonton@petrovaraenergy.com",
  },
]

const subjects = [
  "General Inquiry",
  "Investor Relations",
  "Media & Press",
  "Business Development",
  "Careers & HR",
  "Community Relations",
  "Other",
]

interface FormState {
  name: string
  email: string
  company: string
  subject: string
  message: string
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
}

function OfficesSection() {
  return (
    <div className="space-y-5">
      <div>
        <span className="accent-line" />
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.8rem",
            color: "#050e1f",
            marginBottom: "0.5rem",
          }}
        >
          OUR OFFICES
        </h2>
      </div>
      {offices.map((o) => (
        <div key={o.city} className="border border-slate-200 p-7 bg-slate-50">
          <h3
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#c85a00",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.75rem",
            }}
          >
            {o.city}
          </h3>
          <address
            className="not-italic space-y-1.5 text-sm text-slate-600"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            <p>{o.address}</p>
            <p>
              <a
                href={`tel:${o.phone}`}
                className="hover:text-orange-600 transition-colors"
              >
                {o.phone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${o.email}`}
                className="hover:text-orange-600 transition-colors"
              >
                {o.email}
              </a>
            </p>
          </address>
        </div>
      ))}
    </div>
  )
}

function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 900))

    toast.success("Message sent!", {
      description: "A member of our team will respond within 2 business days.",
    })
    setSending(false)
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center py-12">
        <div className="w-16 h-16 rounded-full bg-orange-600/10 border border-orange-600/30 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.8rem",
            color: "#050e1f",
            marginBottom: "0.75rem",
          }}
        >
          MESSAGE SENT
        </h3>
        <p
          className="text-slate-500"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Thank you for reaching out. A member of our team will respond within 2
          business days.
        </p>
        <button
          onClick={() => {
            setSent(false)
            setForm(initialForm)
          }}
          className="mt-6 text-sm text-orange-600 hover:underline"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <>
      <h2
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: "1.8rem",
          color: "#050e1f",
          marginBottom: "0.4rem",
          borderRadius: "10px",
        }}
      >
        SEND A MESSAGE
      </h2>
      <p
        className="text-slate-500 text-sm mb-8"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        For investor relations, media, or general inquiries, please use the form
        below.
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label
              className="block text-xs text-slate-500 mb-1.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Full Name *
            </label>
            <input
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              className="form-field"
            />
          </div>
          <div>
            <label
              className="block text-xs text-slate-500 mb-1.5"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              className="form-field"
            />
          </div>
        </div>
        <div>
          <label
            className="block text-xs text-slate-500 mb-1.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Company / Organization
          </label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="form-field"
          />
        </div>
        <div>
          <label
            className="block text-xs text-slate-500 mb-1.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Subject *
          </label>
          <select
            name="subject"
            required
            value={form.subject}
            onChange={handleChange}
            className="form-field"
          >
            <option value="">Select a subject</option>
            {subjects.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="block text-xs text-slate-500 mb-1.5"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Message *
          </label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            rows={6}
            placeholder="How can we help you?"
            className="form-field resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="btn-primary w-full justify-center disabled:opacity-70"
        >
          {sending ? "Sending…" : "Send Message"}
        </button>
      </form>
    </>
  )
}

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="CONTACT US"
        subtitle="We'd like to hear from you. Reach out to our team."
        img={INDUSTRIAL_IMG}
      />
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10">
          <OfficesSection />
          <div className="lg:col-span-2 border border-slate-200 p-8 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
