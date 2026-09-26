// import { useState, useRef } from "react";
// import { toast } from "sonner";
// import PageHeader from "../components/PageHeader";
// import { TEAM_IMG } from "../constants/images";
// import { supabase } from "../../utils/supabase";

// const positions = [
//   "Senior Reservoir Engineer",
//   "Production Operator – Montney",
//   "HSE Advisor",
//   "Financial Analyst",
//   "Drilling Engineer",
//   "Indigenous & Community Relations Advisor",
//   "Controls & Instrumentation Technologist",
//   "Environmental Coordinator",
//   "GIS Analyst",
//   "IT Infrastructure Specialist",
//   "Other / General Application",
//   "Rig Manager",
//   "Driller",
//   "Assistant Driller",
//   "Rig Technician",
//   "Electrician",
//   "Heavy-Duty Equipment Mechanic",
//   "Industrial Mechanic/ Millwright",
//   "Electrical Engineer",
//   "PLC/SCADA Technician",
//   "HSE Technician",
//   "Safety officer",
//   "Welding inspector",
//   "Civil Engineer",
//   "Pipeline Engineer",
//   "Pipeline Operator",
//   "Heavy Equipment Operator",
//   "Crane Operator",
//   "Welder",
//   "Pipe-fitter",
//   "Electrician",
//   "Corporate secretary",
//   "Executive Assistant",
//   "Receptionist",
//   "Truck Driver",
//   "Field Laborer",
//   "Rig Helper",
//   "Warehouse Assistant",
//   "Maintenance Helper",
//   "Well Service Helper",
//   "HSE Assistant",
// ];
// const departments = [
//   "Engineering",
//   "Operations",
//   "Finance",
//   "Health, Safety & Environment",
//   "External Affairs",
//   "Land",
//   "Information Technology",
//   "Legal & Regulatory",
//   "Corporate Development",
// ];
// const expLevels = [
//   "Entry Level (0–2 years)",
//   "Mid-Level (3–5 years)",
//   "Senior (6–10 years)",
//   "Principal / Expert (10+ years)",
//   "Executive / Leadership",
// ];
// const edLevels = [
//   "High School Diploma / GED",
//   "Trade Certificate / Apprenticeship",
//   "College Diploma",
//   "Bachelor's Degree",
//   "Master's Degree",
//   "PhD / Doctorate",
//   "Professional Designation (P.Eng, CPA, etc.)",
// ];
// const hearOptions = [
//   "LinkedIn",
//   "Company Website",
//   "Industry Job Board",
//   "Employee Referral",
//   "Recruitment Agency",
//   "Career Fair / Event",
//   "Other",
// ];

// interface FormState {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   // linkedin: string;
//   position: string;
//   department: string;
//   location: string;
//   type: string;
//   experience: string;
//   education: string;
//   coverLetter: string;
//   hearAbout: string;
//   resume: File | null;
//   consent: boolean;
// }

// const initialForm: FormState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   // linkedin: "",
//   position: "",
//   department: "",
//   location: "",
//   type: "",
//   experience: "",
//   education: "",
//   coverLetter: "",
//   hearAbout: "",
//   resume: null,
//   consent: false,
// };

// // ── Fieldset legend ────────────────────────────────────────────────────────────

// function Legend({ children }: { children: React.ReactNode }) {
//   return (
//     <legend
//       style={{
//         fontFamily: "'Barlow Condensed', sans-serif",
//         fontWeight: 700,
//         fontSize: "0.72rem",
//         letterSpacing: "0.2em",
//         color: "#c85a00",
//         textTransform: "uppercase",
//         marginBottom: "1.25rem",
//         display: "block",
//         paddingBottom: "0.5rem",
//         borderBottom: "1px solid #e2e8f0",
//         width: "100%",
//       }}
//     >
//       {children}
//     </legend>
//   );
// }

// function FieldLabel({ children }: { children: React.ReactNode }) {
//   return (
//     <label
//       className="block text-xs text-slate-500 mb-1.5 font-medium"
//       style={{ fontFamily: "'Inter', sans-serif" }}
//     >
//       {children}
//     </label>
//   );
// }

// // ── Form sections ──────────────────────────────────────────────────────────────

// function PersonalInfoSection({
//   form,
//   onChange,
// }: {
//   form: FormState;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }) {
//   return (
//     <fieldset>
//       <Legend>Personal Information</Legend>
//       <div className="grid sm:grid-cols-2 gap-5">
//         <div>
//           <FieldLabel>First Name *</FieldLabel>
//           <input
//             name="firstName"
//             required
//             value={form.firstName}
//             onChange={onChange}
//             placeholder="John"
//             className="form-field"
//           />
//         </div>
//         <div>
//           <FieldLabel>Last Name *</FieldLabel>
//           <input
//             name="lastName"
//             required
//             value={form.lastName}
//             onChange={onChange}
//             placeholder="Smith"
//             className="form-field"
//           />
//         </div>
//         <div>
//           <FieldLabel>Email Address *</FieldLabel>
//           <input
//             name="email"
//             type="email"
//             required
//             value={form.email}
//             onChange={onChange}
//             placeholder="john.smith@email.com"
//             className="form-field"
//           />
//         </div>
//         <div>
//           <FieldLabel>Phone Number *</FieldLabel>
//           <input
//             name="phone"
//             type="tel"
//             required
//             value={form.phone}
//             onChange={onChange}
//             placeholder="+1 (403) 000-0000"
//             className="form-field"
//           />
//         </div>
//         {/* <div className="sm:col-span-2">
//           <FieldLabel>LinkedIn Profile URL</FieldLabel>
//           <input
//             name="linkedin"
//             type="url"
//             value={form.linkedin}
//             onChange={onChange}
//             placeholder="https://linkedin.com/in/yourprofile"
//             className="form-field"
//           />
//         </div> */}
//       </div>
//     </fieldset>
//   );
// }

// function PositionSection({
//   form,
//   onChange,
// }: {
//   form: FormState;
//   onChange: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
//   ) => void;
// }) {
//   return (
//     <fieldset>
//       <Legend>Position Details</Legend>
//       <div className="grid sm:grid-cols-2 gap-5">
//         <div>
//           <FieldLabel>Position Applying For *</FieldLabel>
//           <select
//             name="position"
//             required
//             value={form.position}
//             onChange={onChange}
//             className="form-field"
//           >
//             <option value="">Select a position</option>
//             {positions.map((p) => (
//               <option key={p}>{p}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <FieldLabel>Department *</FieldLabel>
//           <select
//             name="department"
//             required
//             value={form.department}
//             onChange={onChange}
//             className="form-field"
//           >
//             <option value="">Select department</option>
//             {departments.map((d) => (
//               <option key={d}>{d}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <FieldLabel>Preferred Location</FieldLabel>
//           <input
//             name="location"
//             value={form.location}
//             onChange={onChange}
//             placeholder="Calgary, AB"
//             className="form-field"
//           />
//         </div>
//         <div>
//           <FieldLabel>Employment Type *</FieldLabel>
//           <select
//             name="type"
//             required
//             value={form.type}
//             onChange={onChange}
//             className="form-field"
//           >
//             <option value="">Select type</option>
//             {["Full-Time", "Part-Time", "Contract", "Internship / Co-op"].map(
//               (t) => (
//                 <option key={t}>{t}</option>
//               ),
//             )}
//           </select>
//         </div>
//       </div>
//     </fieldset>
//   );
// }

// function QualificationsSection({
//   form,
//   onChange,
// }: {
//   form: FormState;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
// }) {
//   return (
//     <fieldset>
//       <Legend>Qualifications</Legend>
//       <div className="grid sm:grid-cols-2 gap-5">
//         <div>
//           <FieldLabel>Years of Experience *</FieldLabel>
//           <select
//             name="experience"
//             required
//             value={form.experience}
//             onChange={onChange}
//             className="form-field"
//           >
//             <option value="">Select level</option>
//             {expLevels.map((e) => (
//               <option key={e}>{e}</option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <FieldLabel>Highest Education Level *</FieldLabel>
//           <select
//             name="education"
//             required
//             value={form.education}
//             onChange={onChange}
//             className="form-field"
//           >
//             <option value="">Select education</option>
//             {edLevels.map((e) => (
//               <option key={e}>{e}</option>
//             ))}
//           </select>
//         </div>
//       </div>
//     </fieldset>
//   );
// }

// function ResumeSection({
//   resume,
//   onFile,
// }: {
//   resume: File | null;
//   onFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }) {
//   const fileRef = useRef<HTMLInputElement>(null);
//   return (
//     <fieldset>
//       <Legend>Resume / CV</Legend>
//       <div
//         className="border-2 border-dashed border-slate-300 hover:border-orange-600/60 transition-colors p-8 text-center cursor-pointer bg-slate-50"
//         onClick={() => fileRef.current?.click()}
//       >
//         <input
//           ref={fileRef}
//           type="file"
//           accept=".pdf,.doc,.docx"
//           onChange={onFile}
//           className="hidden"
//         />
//         {resume ? (
//           <div className="flex items-center justify-center gap-2 text-green-600">
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//             <span
//               style={{
//                 fontFamily: "'Inter', sans-serif",
//                 fontSize: "0.875rem",
//               }}
//             >
//               {resume.name}
//             </span>
//           </div>
//         ) : (
//           <>
//             <svg
//               className="w-8 h-8 text-slate-400 mx-auto mb-3"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
//               />
//             </svg>
//             <p
//               className="text-slate-500 text-sm"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               Click to upload your Resume / CV
//             </p>
//             <p
//               className="text-slate-400 text-xs mt-1"
//               style={{ fontFamily: "'Inter', sans-serif" }}
//             >
//               PDF, DOC, or DOCX — max 5MB
//             </p>
//           </>
//         )}
//       </div>
//     </fieldset>
//   );
// }

// function SuccessScreen({ name, email }: { name: string; email: string }) {
//   return (
//     <main>
//       <PageHeader
//         title="JOB APPLICATION"
//         subtitle="Thank you for your interest in joining Petrovara Energy."
//         img={TEAM_IMG}
//       />
//       <section className="py-24 bg-white min-h-[50vh] flex items-center justify-center">
//         <div className="max-w-xl mx-auto px-4 text-center">
//           <div className="w-20 h-20 rounded-full bg-orange-600/10 border-2 border-orange-600/30 flex items-center justify-center mx-auto mb-8">
//             <svg
//               className="w-10 h-10 text-orange-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//           </div>
//           <h2
//             style={{
//               fontFamily: "'Barlow Condensed', sans-serif",
//               fontWeight: 800,
//               fontSize: "2.5rem",
//               color: "#050e1f",
//               marginBottom: "1rem",
//             }}
//           >
//             APPLICATION SUBMITTED
//           </h2>
//           <p
//             className="text-slate-600 mb-6"
//             style={{ fontFamily: "'Barlow', sans-serif" }}
//           >
//             Thank you, <strong>{name}</strong>. We have received your
//             application and will review it carefully. If your qualifications
//             match our needs, our Talent Acquisition team will be in touch within
//             10–14 business days.
//           </p>
//           <p
//             className="text-slate-400 text-sm"
//             style={{ fontFamily: "'Inter', sans-serif" }}
//           >
//             A confirmation was sent to <strong>{email}</strong>
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

// // ── Main page ──────────────────────────────────────────────────────────────────

// export default function ApplyPage() {
//   const [submitted, setSubmitted] = useState(false);
//   const [form, setForm] = useState<FormState>(initialForm);

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     const { name, value, type } = e.target;
//     if (type === "checkbox") {
//       setForm((f) => ({
//         ...f,
//         [name]: (e.target as HTMLInputElement).checked,
//       }));
//     } else {
//       setForm((f) => ({ ...f, [name]: value }));
//     }
//   };

//   const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] ?? null;
//     if (file && file.size > 5 * 1024 * 1024) {
//       toast.error("File too large", {
//         description: "Please upload a file smaller than 5MB.",
//       });
//       return;
//     }
//     setForm((f) => ({ ...f, resume: file }));
//     if (file) toast.info(`File selected: ${file.name}`);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.resume) {
//       toast.error("Resume required", {
//         description: "Please upload your CV or resume before submitting.",
//       });
//       return;
//     }
//     toast.success("Application submitted!", {
//       description: `Thank you ${form.firstName}. We'll be in touch within 10–14 business days.`,
//     });
//     setSubmitted(true);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   if (submitted) {
//     return <SuccessScreen name={form.firstName} email={form.email} />;
//   }

//   return (
//     <main>
//       <PageHeader
//         title="JOB APPLICATION"
//         subtitle="Submit your application to join the Petrovara Energy team."
//         img={TEAM_IMG}
//       />

//       <section className="py-20 sm:py-28 bg-slate-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6">
//           <div className="bg-white border border-slate-200 shadow-sm p-8 sm:p-12">
//             <div className="mb-10">
//               <span className="accent-line" />
//               <h2
//                 style={{
//                   fontFamily: "'Barlow Condensed', sans-serif",
//                   fontWeight: 800,
//                   fontSize: "1.8rem",
//                   color: "#050e1f",
//                   marginBottom: "0.4rem",
//                 }}
//               >
//                 VACANCY SUBMISSION FORM
//               </h2>
//               <p
//                 className="text-slate-500 text-sm"
//                 style={{ fontFamily: "'Barlow', sans-serif" }}
//               >
//                 Complete all required fields (*). Your application will be
//                 reviewed by our Talent Acquisition team.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-10">
//               <PersonalInfoSection
//                 form={form}
//                 onChange={
//                   handleChange as React.ChangeEventHandler<HTMLInputElement>
//                 }
//               />
//               <PositionSection
//                 form={form}
//                 onChange={
//                   handleChange as React.ChangeEventHandler<
//                     HTMLInputElement | HTMLSelectElement
//                   >
//                 }
//               />
//               <QualificationsSection
//                 form={form}
//                 onChange={
//                   handleChange as React.ChangeEventHandler<HTMLSelectElement>
//                 }
//               />
//               <ResumeSection resume={form.resume} onFile={handleFile} />

//               {/* Cover Letter */}
//               <fieldset>
//                 <Legend>Cover Letter / Message</Legend>
//                 <label
//                   className="block text-xs text-slate-500 mb-1.5"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   Tell us why you are interested in this role and what you bring
//                   to Petrovara *
//                 </label>
//                 <textarea
//                   name="coverLetter"
//                   required
//                   value={form.coverLetter}
//                   onChange={handleChange}
//                   rows={6}
//                   placeholder="Share your motivation and relevant experience..."
//                   className="form-field resize-none"
//                 />
//               </fieldset>

//               {/* How did you hear */}
//               <div>
//                 <label
//                   className="block text-xs text-slate-500 mb-1.5"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   How did you hear about this opportunity?
//                 </label>
//                 <select
//                   name="hearAbout"
//                   value={form.hearAbout}
//                   onChange={handleChange}
//                   className="form-field"
//                 >
//                   <option value="">Select source</option>
//                   {hearOptions.map((h) => (
//                     <option key={h}>{h}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Consent */}
//               <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-4">
//                 <input
//                   type="checkbox"
//                   name="consent"
//                   id="consent"
//                   required
//                   checked={form.consent}
//                   onChange={handleChange}
//                   className="mt-1 w-4 h-4 accent-orange-600 cursor-pointer shrink-0"
//                 />
//                 <label
//                   htmlFor="consent"
//                   className="text-slate-500 text-xs leading-relaxed cursor-pointer"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   I consent to Petrovara Energy Inc. collecting, storing, and
//                   using the personal information provided in this form for the
//                   purposes of evaluating my application for employment. I
//                   confirm that all information provided is accurate and
//                   complete. *
//                 </label>
//               </div>

//               <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
//                 <p
//                   className="text-slate-400 text-xs"
//                   style={{ fontFamily: "'Inter', sans-serif" }}
//                 >
//                   Petrovara Energy is an equal opportunity employer.
//                 </p>
//                 <button type="submit" className="btn-primary whitespace-nowrap">
//                   Submit Application
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import { useState, useRef } from "react";
import { toast } from "sonner";
import PageHeader from "../components/PageHeader";
import { TEAM_IMG } from "../constants/images";
import { supabase } from "../utils/supabase";

const positions = [
  "Senior Reservoir Engineer",
  "Production Operator – Montney",
  "HSE Advisor",
  "Financial Analyst",
  "Drilling Engineer",
  "Indigenous & Community Relations Advisor",
  "Controls & Instrumentation Technologist",
  "Environmental Coordinator",
  "GIS Analyst",
  "IT Infrastructure Specialist",
  "Other / General Application",
  "Rig Manager",
  "Driller",
  "Assistant Driller",
  "Rig Technician",
  "Electrician",
  "Heavy-Duty Equipment Mechanic",
  "Industrial Mechanic/ Millwright",
  "Electrical Engineer",
  "PLC/SCADA Technician",
  "HSE Technician",
  "Safety officer",
  "Welding inspector",
  "Civil Engineer",
  "Pipeline Engineer",
  "Pipeline Operator",
  "Heavy Equipment Operator",
  "Crane Operator",
  "Welder",
  "Pipe-fitter",
  "Corporate secretary",
  "Executive Assistant",
  "Receptionist",
  "Truck Driver",
  "Field Laborer",
  "Rig Helper",
  "Warehouse Assistant",
  "Maintenance Helper",
  "Well Service Helper",
  "HSE Assistant",
];

const departments = [
  "Engineering",
  "Operations",
  "Finance",
  "Health, Safety & Environment",
  "External Affairs",
  "Land",
  "Information Technology",
  "Legal & Regulatory",
  "Corporate Development",
];

const expLevels = [
  "Entry Level (0–2 years)",
  "Mid-Level (3–5 years)",
  "Senior (6–10 years)",
  "Principal / Expert (10+ years)",
  "Executive / Leadership",
];

const edLevels = [
  "High School Diploma / GED",
  "Trade Certificate / Apprenticeship",
  "College Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD / Doctorate",
  "Professional Designation (P.Eng, CPA, etc.)",
];

const hearOptions = [
  "LinkedIn",
  "Company Website",
  "Industry Job Board",
  "Employee Referral",
  "Recruitment Agency",
  "Career Fair / Event",
  "Other",
];

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  education: string;
  coverLetter: string;
  hearAbout: string;
  resume: File | null;
  consent: boolean;
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  department: "",
  location: "",
  type: "",
  experience: "",
  education: "",
  coverLetter: "",
  hearAbout: "",
  resume: null,
  consent: false,
};

// ── Fieldset legend ────────────────────────────────────────────────────────────

function Legend({ children }: { children: React.ReactNode }) {
  return (
    <legend
      style={{
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700,
        fontSize: "0.72rem",
        letterSpacing: "0.2em",
        color: "#c85a00",
        textTransform: "uppercase",
        marginBottom: "1.25rem",
        display: "block",
        paddingBottom: "0.5rem",
        borderBottom: "1px solid #e2e8f0",
        width: "100%",
      }}
    >
      {children}
    </legend>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      className="block text-xs text-slate-500 mb-1.5 font-medium"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {children}
    </label>
  );
}

// ── Form sections ──────────────────────────────────────────────────────────────

function PersonalInfoSection({
  form,
  onChange,
}: {
  form: FormState;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <fieldset>
      <Legend>Personal Information</Legend>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <FieldLabel>First Name *</FieldLabel>
          <input
            name="firstName"
            required
            value={form.firstName}
            onChange={onChange}
            placeholder="John"
            className="form-field"
          />
        </div>
        <div>
          <FieldLabel>Last Name *</FieldLabel>
          <input
            name="lastName"
            required
            value={form.lastName}
            onChange={onChange}
            placeholder="Smith"
            className="form-field"
          />
        </div>
        <div>
          <FieldLabel>Email Address *</FieldLabel>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
            placeholder="john.smith@email.com"
            className="form-field"
          />
        </div>
        <div>
          <FieldLabel>Phone Number *</FieldLabel>
          <input
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={onChange}
            placeholder="+1 (403) 000-0000"
            className="form-field"
          />
        </div>
      </div>
    </fieldset>
  );
}

function PositionSection({
  form,
  onChange,
}: {
  form: FormState;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}) {
  return (
    <fieldset>
      <Legend>Position Details</Legend>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <FieldLabel>Position Applying For *</FieldLabel>
          <select
            name="position"
            required
            value={form.position}
            onChange={onChange}
            className="form-field"
          >
            <option value="">Select a position</option>
            {positions.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel>Department *</FieldLabel>
          <select
            name="department"
            required
            value={form.department}
            onChange={onChange}
            className="form-field"
          >
            <option value="">Select department</option>
            {departments.map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel>Preferred Location</FieldLabel>
          <input
            name="location"
            value={form.location}
            onChange={onChange}
            placeholder="Calgary, AB"
            className="form-field"
          />
        </div>
        <div>
          <FieldLabel>Employment Type *</FieldLabel>
          <select
            name="type"
            required
            value={form.type}
            onChange={onChange}
            className="form-field"
          >
            <option value="">Select type</option>
            {["Full-Time", "Part-Time", "Contract", "Internship / Co-op"].map(
              (t) => (
                <option key={t}>{t}</option>
              ),
            )}
          </select>
        </div>
      </div>
    </fieldset>
  );
}

function QualificationsSection({
  form,
  onChange,
}: {
  form: FormState;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <fieldset>
      <Legend>Qualifications</Legend>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <FieldLabel>Years of Experience *</FieldLabel>
          <select
            name="experience"
            required
            value={form.experience}
            onChange={onChange}
            className="form-field"
          >
            <option value="">Select level</option>
            {expLevels.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel>Highest Education Level *</FieldLabel>
          <select
            name="education"
            required
            value={form.education}
            onChange={onChange}
            className="form-field"
          >
            <option value="">Select education</option>
            {edLevels.map((e) => (
              <option key={e}>{e}</option>
            ))}
          </select>
        </div>
      </div>
    </fieldset>
  );
}

function ResumeSection({
  resume,
  onFile,
}: {
  resume: File | null;
  onFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  return (
    <fieldset>
      <Legend>Resume / CV</Legend>
      <div
        className="border-2 border-dashed border-slate-300 hover:border-orange-600/60 transition-colors p-8 text-center cursor-pointer bg-slate-50"
        onClick={() => fileRef.current?.click()}
      >
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={onFile}
          className="hidden"
        />
        {resume ? (
          <div className="flex items-center justify-center gap-2 text-green-600">
            <svg
              className="w-5 h-5"
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
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
              }}
            >
              {resume.name}
            </span>
          </div>
        ) : (
          <>
            <svg
              className="w-8 h-8 text-slate-400 mx-auto mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <p
              className="text-slate-500 text-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Click to upload your Resume / CV
            </p>
            <p
              className="text-slate-400 text-xs mt-1"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              PDF, DOC, or DOCX — max 5MB
            </p>
          </>
        )}
      </div>
    </fieldset>
  );
}

function SuccessScreen({ name, email }: { name: string; email: string }) {
  return (
    <main>
      <PageHeader
        title="JOB APPLICATION"
        subtitle="Thank you for your interest in joining Petrovara Energy."
        img={TEAM_IMG}
      />
      <section className="py-24 bg-white min-h-[50vh] flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-orange-600/10 border-2 border-orange-600/30 flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-orange-600"
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
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "2.5rem",
              color: "#050e1f",
              marginBottom: "1rem",
            }}
          >
            APPLICATION SUBMITTED
          </h2>
          <p
            className="text-slate-600 mb-6"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Thank you, <strong>{name}</strong>. We have received your
            application and will review it carefully. If your qualifications
            match our needs, our Talent Acquisition team will be in touch within
            10–14 business days.
          </p>
          <p
            className="text-slate-400 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A confirmation was sent to <strong>{email}</strong>
          </p>
        </div>
      </section>
    </main>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((f) => ({
        ...f,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > 5 * 1024 * 1024) {
      toast.error("File too large", {
        description: "Please upload a file smaller than 5MB.",
      });
      return;
    }
    setForm((f) => ({ ...f, resume: file }));
    if (file) toast.info(`File selected: ${file.name}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.resume) {
      toast.error("Resume required", {
        description: "Please upload your CV or resume before submitting.",
      });
      return;
    }

    setSubmitting(true);
    const toastId = toast.loading("Submitting application...");

    try {
      // Build FormData payload to send to Edge Function
      const formDataPayload = new FormData();
      formDataPayload.append("firstName", form.firstName);
      formDataPayload.append("lastName", form.lastName);
      formDataPayload.append("email", form.email);
      formDataPayload.append("phone", form.phone);
      formDataPayload.append("position", form.position);
      formDataPayload.append("department", form.department);
      formDataPayload.append("location", form.location);
      formDataPayload.append("type", form.type);
      formDataPayload.append("experience", form.experience);
      formDataPayload.append("education", form.education);
      formDataPayload.append("coverLetter", form.coverLetter);
      formDataPayload.append("hearAbout", form.hearAbout);
      formDataPayload.append("resume", form.resume);

      // Invoke Supabase Edge Function (replace 'send-application' with your actual function name in Supabase)
      const { data, error } = await supabase.functions.invoke(
        "send-application",
        {
          body: formDataPayload,
        },
      );

      if (error) {
        throw new Error(error.message || "Failed to send application.");
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      toast.success("Application submitted!", {
        id: toastId,
        description: `Thank you ${form.firstName}. We'll be in touch within 10–14 business days.`,
      });

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      console.error("Submission Error:", err);
      toast.error("Submission failed", {
        id: toastId,
        description:
          err.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return <SuccessScreen name={form.firstName} email={form.email} />;
  }

  return (
    <main>
      <PageHeader
        title="JOB APPLICATION"
        subtitle="Submit your application to join the Petrovara Energy team."
        img={TEAM_IMG}
      />

      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-slate-200 shadow-sm p-8 sm:p-12">
            <div className="mb-10">
              <span className="accent-line" />
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.8rem",
                  color: "#050e1f",
                  marginBottom: "0.4rem",
                }}
              >
                VACANCY SUBMISSION FORM
              </h2>
              <p
                className="text-slate-500 text-sm"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                Complete all required fields (*). Your application will be
                reviewed by our Talent Acquisition team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <PersonalInfoSection
                form={form}
                onChange={
                  handleChange as React.ChangeEventHandler<HTMLInputElement>
                }
              />
              <PositionSection
                form={form}
                onChange={
                  handleChange as React.ChangeEventHandler<
                    HTMLInputElement | HTMLSelectElement
                  >
                }
              />
              <QualificationsSection
                form={form}
                onChange={
                  handleChange as React.ChangeEventHandler<HTMLSelectElement>
                }
              />
              <ResumeSection resume={form.resume} onFile={handleFile} />

              {/* Cover Letter */}
              <fieldset>
                <Legend>Cover Letter / Message</Legend>
                <label
                  className="block text-xs text-slate-500 mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Tell us why you are interested in this role and what you bring
                  to Petrovara *
                </label>
                <textarea
                  name="coverLetter"
                  required
                  value={form.coverLetter}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Share your motivation and relevant experience..."
                  className="form-field resize-none"
                />
              </fieldset>

              {/* How did you hear */}
              <div>
                <label
                  className="block text-xs text-slate-500 mb-1.5"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  How did you hear about this opportunity?
                </label>
                <select
                  name="hearAbout"
                  value={form.hearAbout}
                  onChange={handleChange}
                  className="form-field"
                >
                  <option value="">Select source</option>
                  {hearOptions.map((h) => (
                    <option key={h}>{h}</option>
                  ))}
                </select>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-4">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  required
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 accent-orange-600 cursor-pointer shrink-0"
                />
                <label
                  htmlFor="consent"
                  className="text-slate-500 text-xs leading-relaxed cursor-pointer"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  I consent to Petrovara Energy Inc. collecting, storing, and
                  using the personal information provided in this form for the
                  purposes of evaluating my application for employment. I
                  confirm that all information provided is accurate and
                  complete. *
                </label>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <p
                  className="text-slate-400 text-xs"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Petrovara Energy is an equal opportunity employer.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                  {!submitting && (
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
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
