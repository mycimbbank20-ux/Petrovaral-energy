// // import { useState } from "react"
// // import { toast } from "sonner"
// // import PageHeader from "../components/PageHeader"
// // import { INDUSTRIAL_IMG } from "../constants/images"

// // const offices = [
// //   {
// //     city: "Calgary (HQ)",
// //     address: "1000 – 520 3rd Ave SW, Calgary, AB T2P 0R3",
// //     phone: " +1 (672) 202-1705",
// //     email: "info@petrovara.com",
// //   },
// //   {
// //     city: "Grande Prairie",
// //     address: "9835 – 101 Ave, Grande Prairie, AB T8V 0X6",
// //     // phone: " +1 (672) 202-1705",
// //     email: "gp@petrovaraenergy.com",
// //   },
// //   {
// //     city: "Edmonton",
// //     address: "200 – 10060 Jasper Ave, Edmonton, AB T5J 3R8",
// //     // phone: "+1 (780) 987-6543",
// //     email: "edmonton@petrovaraenergy.com",
// //   },
// // ]

// // const subjects = [
// //   "General Inquiry",
// //   "Investor Relations",
// //   "Media & Press",
// //   "Business Development",
// //   "Careers & HR",
// //   "Community Relations",
// //   "Other",
// // ]

// // interface FormState {
// //   name: string
// //   email: string
// //   company: string
// //   subject: string
// //   message: string
// // }

// // const initialForm: FormState = {
// //   name: "",
// //   email: "",
// //   company: "",
// //   subject: "",
// //   message: "",
// // }

// // function OfficesSection() {
// //   return (
// //     <div className="space-y-5">
// //       <div>
// //         <span className="accent-line" />
// //         <h2
// //           style={{
// //             fontFamily: "'Barlow Condensed', sans-serif",
// //             fontWeight: 800,
// //             fontSize: "1.8rem",
// //             color: "#050e1f",
// //             marginBottom: "0.5rem",
// //           }}
// //         >
// //           OUR OFFICES
// //         </h2>
// //       </div>
// //       {offices.map((o) => (
// //         <div key={o.city} className="border border-slate-200 p-7 bg-slate-50">
// //           <h3
// //             style={{
// //               fontFamily: "'Barlow Condensed', sans-serif",
// //               fontWeight: 700,
// //               fontSize: "0.95rem",
// //               color: "#c85a00",
// //               textTransform: "uppercase",
// //               letterSpacing: "0.08em",
// //               marginBottom: "0.75rem",
// //             }}
// //           >
// //             {o.city}
// //           </h3>
// //           <address
// //             className="not-italic space-y-1.5 text-sm text-slate-600"
// //             style={{ fontFamily: "'Barlow', sans-serif" }}
// //           >
// //             <p>{o.address}</p>
// //             <p>
// //               <a
// //                 href={`tel:${o.phone}`}
// //                 className="hover:text-orange-600 transition-colors"
// //               >
// //                 {o.phone}
// //               </a>
// //             </p>
// //             <p>
// //               <a
// //                 href={`mailto:${o.email}`}
// //                 className="hover:text-orange-600 transition-colors"
// //               >
// //                 {o.email}
// //               </a>
// //             </p>
// //           </address>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // function ContactForm() {
// //   const [form, setForm] = useState<FormState>(initialForm)
// //   const [sending, setSending] = useState(false)
// //   const [sent, setSent] = useState(false)

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
// //   ) => {
// //     setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
// //   }

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault()
// //     setSending(true)

// //     // Simulate network delay
// //     await new Promise((r) => setTimeout(r, 900))

// //     toast.success("Message sent!", {
// //       description: "A member of our team will respond within 2 business days.",
// //     })
// //     setSending(false)
// //     setSent(true)
// //   }

// //   if (sent) {
// //     return (
// //       <div className="flex flex-col items-center justify-center h-full text-center py-12">
// //         <div className="w-16 h-16 rounded-full bg-orange-600/10 border border-orange-600/30 flex items-center justify-center mb-6">
// //           <svg
// //             className="w-8 h-8 text-orange-600"
// //             fill="none"
// //             stroke="currentColor"
// //             viewBox="0 0 24 24"
// //           >
// //             <path
// //               strokeLinecap="round"
// //               strokeLinejoin="round"
// //               strokeWidth={2}
// //               d="M5 13l4 4L19 7"
// //             />
// //           </svg>
// //         </div>
// //         <h3
// //           style={{
// //             fontFamily: "'Barlow Condensed', sans-serif",
// //             fontWeight: 800,
// //             fontSize: "1.8rem",
// //             color: "#050e1f",
// //             marginBottom: "0.75rem",
// //           }}
// //         >
// //           MESSAGE SENT
// //         </h3>
// //         <p
// //           className="text-slate-500"
// //           style={{ fontFamily: "'Barlow', sans-serif" }}
// //         >
// //           Thank you for reaching out. A member of our team will respond within 2
// //           business days.
// //         </p>
// //         <button
// //           onClick={() => {
// //             setSent(false)
// //             setForm(initialForm)
// //           }}
// //           className="mt-6 text-sm text-orange-600 hover:underline"
// //           style={{ fontFamily: "'Barlow', sans-serif" }}
// //         >
// //           Send another message
// //         </button>
// //       </div>
// //     )
// //   }

// //   return (
// //     <>
// //       <h2
// //         style={{
// //           fontFamily: "'Barlow Condensed', sans-serif",
// //           fontWeight: 800,
// //           fontSize: "1.8rem",
// //           color: "#050e1f",
// //           marginBottom: "0.4rem",
// //           borderRadius: "10px",
// //         }}
// //       >
// //         SEND A MESSAGE
// //       </h2>
// //       <p
// //         className="text-slate-500 text-sm mb-8"
// //         style={{ fontFamily: "'Barlow', sans-serif" }}
// //       >
// //         For investor relations, media, or general inquiries, please use the form
// //         below.
// //       </p>
// //       <form onSubmit={handleSubmit} className="space-y-5">
// //         <div className="grid sm:grid-cols-2 gap-5">
// //           <div>
// //             <label
// //               className="block text-xs text-slate-500 mb-1.5"
// //               style={{ fontFamily: "'Inter', sans-serif" }}
// //             >
// //               Full Name *
// //             </label>
// //             <input
// //               name="name"
// //               required
// //               value={form.name}
// //               onChange={handleChange}
// //               placeholder="Jane Doe"
// //               className="form-field"
// //             />
// //           </div>
// //           <div>
// //             <label
// //               className="block text-xs text-slate-500 mb-1.5"
// //               style={{ fontFamily: "'Inter', sans-serif" }}
// //             >
// //               Email Address *
// //             </label>
// //             <input
// //               name="email"
// //               type="email"
// //               required
// //               value={form.email}
// //               onChange={handleChange}
// //               placeholder="jane@company.com"
// //               className="form-field"
// //             />
// //           </div>
// //         </div>
// //         <div>
// //           <label
// //             className="block text-xs text-slate-500 mb-1.5"
// //             style={{ fontFamily: "'Inter', sans-serif" }}
// //           >
// //             Company / Organization
// //           </label>
// //           <input
// //             name="company"
// //             value={form.company}
// //             onChange={handleChange}
// //             placeholder="Your Company"
// //             className="form-field"
// //           />
// //         </div>
// //         <div>
// //           <label
// //             className="block text-xs text-slate-500 mb-1.5"
// //             style={{ fontFamily: "'Inter', sans-serif" }}
// //           >
// //             Subject *
// //           </label>
// //           <select
// //             name="subject"
// //             required
// //             value={form.subject}
// //             onChange={handleChange}
// //             className="form-field"
// //           >
// //             <option value="">Select a subject</option>
// //             {subjects.map((s) => (
// //               <option key={s}>{s}</option>
// //             ))}
// //           </select>
// //         </div>
// //         <div>
// //           <label
// //             className="block text-xs text-slate-500 mb-1.5"
// //             style={{ fontFamily: "'Inter', sans-serif" }}
// //           >
// //             Message *
// //           </label>
// //           <textarea
// //             name="message"
// //             required
// //             value={form.message}
// //             onChange={handleChange}
// //             rows={6}
// //             placeholder="How can we help you?"
// //             className="form-field resize-none"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           disabled={sending}
// //           className="btn-primary w-full justify-center disabled:opacity-70"
// //         >
// //           {sending ? "Sending…" : "Send Message"}
// //         </button>
// //       </form>
// //     </>
// //   )
// // }

// // export default function ContactPage() {
// //   return (
// //     <main>
// //       <PageHeader
// //         title="CONTACT US"
// //         subtitle="We'd like to hear from you. Reach out to our team."
// //         img={INDUSTRIAL_IMG}
// //       />
// //       <section className="py-20 sm:py-28 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-3 gap-10">
// //           <OfficesSection />
// //           <div className="lg:col-span-2 border border-slate-200 p-8 sm:p-10">
// //             <ContactForm />
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   )
// // }

// import { useState } from "react";
// import { toast } from "sonner";
// import PageHeader from "../components/PageHeader";
// import { INDUSTRIAL_IMG } from "../constants/images";

// interface Office {
//   city: string;
//   country?: string;
//   address: string;
//   phone?: string;
//   email: string;
// }

// interface GlobalBranch {
//   city: string;
//   country: string;
//   region: string;
// }

// const canadianOffices: Office[] = [
//   {
//     city: "Calgary (HQ)",
//     country: "Canada",
//     address: "1000 – 520 3rd Ave SW, Calgary, AB T2P 0R3",
//     phone: "+1 (672) 202-1705",
//     email: "info@petrovara.com",
//   },
//   // {
//   //   city: "Grande Prairie",
//   //   country: "Canada",
//   //   address: "9835 – 101 Ave, Grande Prairie, AB T8V 0X6",
//   //   email: "gp@petrovaraenergy.com",
//   // },
//   // {
//   //   city: "Edmonton",
//   //   country: "Canada",
//   //   address: "200 – 10060 Jasper Ave, Edmonton, AB T5J 3R8",
//   //   email: "edmonton@petrovaraenergy.com",
//   // },
// ];

// const globalBranches: GlobalBranch[] = [
//   { city: "Houston", country: "United States", region: "Americas" },
//   { city: "London", country: "United Kingdom", region: "Europe" },
//   { city: "Dubai", country: "United Arab Emirates", region: "Middle East" },
//   { city: "Singapore", country: "Singapore", region: "Asia-Pacific" },
// ];

// const subjects = [
//   "General Inquiry",
//   "Investor Relations",
//   "Media & Press",
//   "Business Development",
//   "Careers & HR",
//   "Community Relations",
//   "Other",
// ];

// interface FormState {
//   name: string;
//   email: string;
//   company: string;
//   subject: string;
//   message: string;
// }

// const initialForm: FormState = {
//   name: "",
//   email: "",
//   company: "",
//   subject: "",
//   message: "",
// };

// function OfficeCard({ office }: { office: Office }) {
//   return (
//     <div className="border border-slate-200 p-6 bg-slate-50 flex flex-col justify-between h-full hover:border-orange-200 transition-colors">
//       <div>
//         {office.country && (
//           <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100/60 px-2 py-0.5 rounded inline-block mb-2">
//             {office.country}
//           </span>
//         )}
//         <h3
//           style={{
//             fontFamily: "'Barlow Condensed', sans-serif",
//             fontWeight: 700,
//             fontSize: "1.05rem",
//             color: "#c85a00",
//             textTransform: "uppercase",
//             letterSpacing: "0.05em",
//             marginBottom: "0.5rem",
//           }}
//         >
//           {office.city}
//         </h3>
//         <address
//           className="not-italic space-y-1.5 text-sm text-slate-600"
//           style={{ fontFamily: "'Barlow', sans-serif" }}
//         >
//           <p className="leading-relaxed">{office.address}</p>
//         </address>
//       </div>

//       <div
//         className="mt-4 pt-3 border-t border-slate-200/60 text-sm space-y-1"
//         style={{ fontFamily: "'Barlow', sans-serif" }}
//       >
//         {office.phone && (
//           <p>
//             <a
//               href={`tel:${office.phone}`}
//               className="text-slate-600 hover:text-orange-600 transition-colors block text-xs"
//             >
//               {office.phone}
//             </a>
//           </p>
//         )}
//         <p>
//           <a
//             href={`mailto:${office.email}`}
//             className="text-slate-600 hover:text-orange-600 transition-colors block text-xs truncate"
//           >
//             {office.email}
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// }

// function GlobalBranchCard({ branch }: { branch: GlobalBranch }) {
//   return (
//     <div className="border border-slate-200 p-6 bg-slate-50 flex flex-col justify-between hover:border-orange-200 transition-colors">
//       <div>
//         <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100/60 px-2 py-0.5 rounded inline-block mb-2">
//           {branch.country}
//         </span>
//         <h3
//           style={{
//             fontFamily: "'Barlow Condensed', sans-serif",
//             fontWeight: 700,
//             fontSize: "1.2rem",
//             color: "#050e1f",
//             textTransform: "uppercase",
//             letterSpacing: "0.05em",
//           }}
//         >
//           {branch.city}
//         </h3>
//       </div>
//       <p
//         className="text-xs text-slate-400 mt-4 uppercase tracking-wider font-semibold"
//         style={{ fontFamily: "'Barlow', sans-serif" }}
//       >
//         {branch.region}
//       </p>
//     </div>
//   );
// }

// function OfficesSection() {
//   return (
//     <div className="space-y-5">
//       <div>
//         <span className="accent-line" />
//         <h2
//           style={{
//             fontFamily: "'Barlow Condensed', sans-serif",
//             fontWeight: 800,
//             fontSize: "1.8rem",
//             color: "#050e1f",
//             marginBottom: "0.5rem",
//           }}
//         >
//           OUR HEADQUARTERS
//         </h2>
//       </div>
//       <div className="space-y-4">
//         {canadianOffices.map((o) => (
//           <OfficeCard key={o.city} office={o} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function GlobalBranchesSection() {
//   return (
//     <div className="mt-16 pt-12 border-t border-slate-200">
//       <div className="mb-8">
//         <span className="accent-line" />
//         <h2
//           style={{
//             fontFamily: "'Barlow Condensed', sans-serif",
//             fontWeight: 800,
//             fontSize: "1.8rem",
//             color: "#050e1f",
//             marginBottom: "0.25rem",
//           }}
//         >
//           GLOBAL BRANCHES
//         </h2>
//         <p
//           className="text-slate-500 text-sm"
//           style={{ fontFamily: "'Barlow', sans-serif" }}
//         >
//           Our international representative presence across key market hubs.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {globalBranches.map((branch) => (
//           <GlobalBranchCard key={branch.city} branch={branch} />
//         ))}
//       </div>
//     </div>
//   );
// }

// function ContactForm() {
//   const [form, setForm] = useState<FormState>(initialForm);
//   const [sending, setSending] = useState(false);
//   const [sent, setSent] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSending(true);

//     await new Promise((r) => setTimeout(r, 900));

//     toast.success("Message sent!", {
//       description: "A member of our team will respond within 2 business days.",
//     });
//     setSending(false);
//     setSent(true);
//   };

//   if (sent) {
//     return (
//       <div className="flex flex-col items-center justify-center h-full text-center py-12">
//         <div className="w-16 h-16 rounded-full bg-orange-600/10 border border-orange-600/30 flex items-center justify-center mb-6">
//           <svg
//             className="w-8 h-8 text-orange-600"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 13l4 4L19 7"
//             />
//           </svg>
//         </div>
//         <h3
//           style={{
//             fontFamily: "'Barlow Condensed', sans-serif",
//             fontWeight: 800,
//             fontSize: "1.8rem",
//             color: "#050e1f",
//             marginBottom: "0.75rem",
//           }}
//         >
//           MESSAGE SENT
//         </h3>
//         <p
//           className="text-slate-500"
//           style={{ fontFamily: "'Barlow', sans-serif" }}
//         >
//           Thank you for reaching out. A member of our team will respond within 2
//           business days.
//         </p>
//         <button
//           onClick={() => {
//             setSent(false);
//             setForm(initialForm);
//           }}
//           className="mt-6 text-sm text-orange-600 hover:underline"
//           style={{ fontFamily: "'Barlow', sans-serif" }}
//         >
//           Send another message
//         </button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <h2
//         style={{
//           fontFamily: "'Barlow Condensed', sans-serif",
//           fontWeight: 800,
//           fontSize: "1.8rem",
//           color: "#050e1f",
//           marginBottom: "0.4rem",
//         }}
//       >
//         SEND A MESSAGE
//       </h2>
//       <p
//         className="text-slate-500 text-sm mb-8"
//         style={{ fontFamily: "'Barlow', sans-serif" }}
//       >
//         For investor relations, media, or general inquiries, please use the form
//         below.
//       </p>
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div className="grid sm:grid-cols-2 gap-5">
//           <div>
//             <label
//               className="block text-xs text-slate-500 mb-1.5"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Full Name *
//             </label>
//             <input
//               name="name"
//               required
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Jane Doe"
//               className="form-field"
//             />
//           </div>
//           <div>
//             <label
//               className="block text-xs text-slate-500 mb-1.5"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Email Address *
//             </label>
//             <input
//               name="email"
//               type="email"
//               required
//               value={form.email}
//               onChange={handleChange}
//               placeholder="jane@company.com"
//               className="form-field"
//             />
//           </div>
//         </div>
//         <div>
//           <label
//             className="block text-xs text-slate-500 mb-1.5"
//             style={{ fontFamily: "'Inter', sans-serif" }}
//           >
//             Company / Organization
//           </label>
//           <input
//             name="company"
//             value={form.company}
//             onChange={handleChange}
//             placeholder="Your Company"
//             className="form-field"
//           />
//         </div>
//         <div>
//           <label
//             className="block text-xs text-slate-500 mb-1.5"
//             style={{ fontFamily: "'Inter', sans-serif" }}
//           >
//             Subject *
//           </label>
//           <select
//             name="subject"
//             required
//             value={form.subject}
//             onChange={handleChange}
//             className="form-field"
//           >
//             <option value="">Select a subject</option>
//             {subjects.map((s) => (
//               <option key={s}>{s}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <label
//             className="block text-xs text-slate-500 mb-1.5"
//             style={{ fontFamily: "'Inter', sans-serif" }}
//           >
//             Message *
//           </label>
//           <textarea
//             name="message"
//             required
//             value={form.message}
//             onChange={handleChange}
//             rows={6}
//             placeholder="How can we help you?"
//             className="form-field resize-none"
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={sending}
//           className="btn-primary w-full justify-center disabled:opacity-70"
//         >
//           {sending ? "Sending…" : "Send Message"}
//         </button>
//       </form>
//     </>
//   );
// }

// export default function ContactPage() {
//   return (
//     <main>
//       <PageHeader
//         title="CONTACT US"
//         subtitle="We'd like to hear from you. Reach out to our team."
//         img={INDUSTRIAL_IMG}
//       />
//       <section className="py-20 sm:py-28 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <div className="grid lg:grid-cols-3 gap-10">
//             <OfficesSection />
//             <div className="lg:col-span-2 border border-slate-200 p-8 sm:p-10">
//               <ContactForm />
//             </div>
//           </div>

//           <GlobalBranchesSection />
//         </div>
//       </section>
//     </main>
//   );
// }

import { useState } from "react";
import { toast } from "sonner";
import PageHeader from "../components/PageHeader";
import { INDUSTRIAL_IMG } from "../constants/images";

interface Office {
  city: string;
  country?: string;
  address: string;
  phone?: string;
  email: string;
}

interface GlobalBranch {
  city: string;
  country: string;
  region: string;
}

const canadianOffices: Office[] = [
  {
    city: "Calgary (HQ)",
    country: "Canada",
    address: "1000 – 520 3rd Ave SW, Calgary, AB T2P 0R3",
    phone: "+1 (672) 202-1705",
    email: "info@petrovara.com",
  },
  // {
  //   city: "Grande Prairie",
  //   country: "Canada",
  //   address: "9835 – 101 Ave, Grande Prairie, AB T8V 0X6",
  //   email: "gp@petrovaraenergy.com",
  // },
  // {
  //   city: "Edmonton",
  //   country: "Canada",
  //   address: "200 – 10060 Jasper Ave, Edmonton, AB T5J 3R8",
  //   email: "edmonton@petrovaraenergy.com",
  // },
];

// Add any future branches here — the marquee will adapt automatically!
const globalBranches: GlobalBranch[] = [
  { city: "Houston", country: "United States", region: "Americas" },
  { city: "London", country: "United Kingdom", region: "Europe" },
  { city: "Dubai", country: "United Arab Emirates", region: "Middle East" },
  { city: "Singapore", country: "Singapore", region: "Asia-Pacific" },
  { city: "Tokyo", country: "Japan", region: "Asia-Pacific" },
  { city: "Frankfurt", country: "Germany", region: "Europe" },
  { city: "Sydney", country: "Australia", region: "Asia-Pacific" },
];

const subjects = [
  "General Inquiry",
  "Investor Relations",
  "Media & Press",
  "Business Development",
  "Careers & HR",
  "Community Relations",
  "Other",
];

interface FormState {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

function OfficeCard({ office }: { office: Office }) {
  return (
    <div className="border border-slate-200 p-6 bg-slate-50 flex flex-col justify-between h-full hover:border-orange-200 transition-colors">
      <div>
        {office.country && (
          <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100/60 px-2 py-0.5 rounded inline-block mb-2">
            {office.country}
          </span>
        )}
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "#c85a00",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "0.5rem",
          }}
        >
          {office.city}
        </h3>
        <address
          className="not-italic space-y-1.5 text-sm text-slate-600"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          <p className="leading-relaxed">{office.address}</p>
        </address>
      </div>

      <div
        className="mt-4 pt-3 border-t border-slate-200/60 text-sm space-y-1"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        {office.phone && (
          <p>
            <a
              href={`tel:${office.phone}`}
              className="text-slate-600 hover:text-orange-600 transition-colors block text-xs"
            >
              {office.phone}
            </a>
          </p>
        )}
        <p>
          <a
            href={`mailto:${office.email}`}
            className="text-slate-600 hover:text-orange-600 transition-colors block text-xs truncate"
          >
            {office.email}
          </a>
        </p>
      </div>
    </div>
  );
}

function GlobalBranchCard({ branch }: { branch: GlobalBranch }) {
  return (
    <div className="w- 5-[280px] shrink-0 border border-slate-200 p-6 bg-slate-50 flex flex-col justify-between hover:border-orange-200 hover:bg-slate-100/80 transition-colors select-none">
      <div>
        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-700 bg-orange-100/60 px-2 py-0.5 rounded inline-block mb-2">
          {branch.country}
        </span>
        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "1.2rem",
            color: "#050e1f",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {branch.city}
        </h3>
      </div>
      <p
        className="text-xs text-slate-400 mt-4 uppercase tracking-wider font-semibold"
        style={{ fontFamily: "'Barlow', sans-serif" }}
      >
        {branch.region}
      </p>
    </div>
  );
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
          OUR HEADQUARTERS
        </h2>
      </div>
      <div className="space-y-4">
        {canadianOffices.map((o) => (
          <OfficeCard key={o.city} office={o} />
        ))}
      </div>
    </div>
  );
}

function GlobalBranchesSection() {
  // Multiply array to ensure seamless continuous scrolling across wide displays
  const marqueeItems = [...globalBranches, ...globalBranches];

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      {/* Dynamic Keyframe Animation Styles */}
      <style>{`
        @keyframes globalMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-global-marquee {
          display: flex;
          width: max-content;
          animation: globalMarquee 28s linear infinite;
        }
        .animate-global-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mb-8">
        <span className="accent-line" />
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "1.8rem",
            color: "#050e1f",
            marginBottom: "0.25rem",
          }}
        >
          GLOBAL BRANCHES
        </h2>
        <p
          className="text-slate-500 text-sm"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Our international representative presence across key market hubs.
        </p>
      </div>

      {/* Marquee Outer Container with Side Fade Overlay */}
      <div className="relative overflow-hidden w-full py-2 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-12 before:bg-linear-to-r before:from-white before:to-transparent before:z-10 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-12 after:bg-linear-to-l after:from-white after:to-transparent after:z-10">
        <div className="animate-global-marquee gap-6 pr-6">
          {marqueeItems.map((branch, index) => (
            <div
              key={`${branch.city}-${index}`}
              aria-hidden={index >= globalBranches.length ? "true" : undefined}
            >
              <GlobalBranchCard branch={branch} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    await new Promise((r) => setTimeout(r, 900));

    toast.success("Message sent!", {
      description: "A member of our team will respond within 2 business days.",
    });
    setSending(false);
    setSent(true);
  };

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
            setSent(false);
            setForm(initialForm);
          }}
          className="mt-6 text-sm text-orange-600 hover:underline"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Send another message
        </button>
      </div>
    );
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
  );
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-10">
            <OfficesSection />
            <div className="lg:col-span-2 border border-slate-200 p-8 sm:p-10">
              <ContactForm />
            </div>
          </div>

          <GlobalBranchesSection />
        </div>
      </section>
    </main>
  );
}
