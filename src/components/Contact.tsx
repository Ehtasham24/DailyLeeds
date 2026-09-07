"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { fadeUp } from "@/lib/motion";

type Field = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  full?: boolean;
  options?: string[];
};

const FIELDS: Field[] = [
  { id: "biz", label: "Business name" },
  { id: "name", label: "Your name" },
  {
    id: "service",
    label: "Service type",
    options: ["Plumbing", "Electrical", "Cleaning", "Other"],
  },
  { id: "city", label: "City & state", placeholder: "e.g. Dallas, TX" },
  { id: "phone", label: "Phone", type: "tel" },
  { id: "email", label: "Email", type: "email" },
];

const inputClasses =
  "rounded-[10px] border-[1.5px] border-line bg-white px-[.9rem] py-[.8rem] text-base text-ink transition-[border-color,box-shadow] focus:border-blue focus:shadow-[0_0_0_3px_rgba(47,125,225,.15)] focus:outline-none";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Preview behaviour: show a success message without a real backend.
    // Connect a form endpoint (e.g. Formspree) as the <form action> and
    // remove this handler + onSubmit to submit for real.
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-light py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="Get started"
          title="Ready to get booked out?"
          description="Tell us about your business and we'll set up your free first week of local leads."
        />

        <Reveal
          delay={0.1}
          className="mx-auto max-w-[620px] rounded-[24px] border border-line bg-white p-10 shadow-[0_20px_50px_rgba(18,53,127,.08)]"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-3 rounded-xl bg-green/10 px-6 py-10 text-center font-semibold text-[#159a67]"
              >
                <CheckCircle2 size={40} />
                Thanks! We&apos;ll be in touch within 24 hours to set up your
                leads.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {FIELDS.map((field) => (
                    <motion.div
                      key={field.id}
                      variants={fadeUp}
                      className={`flex flex-col gap-[.4rem] ${
                        field.full ? "sm:col-span-2" : ""
                      }`}
                    >
                      <label
                        htmlFor={field.id}
                        className="text-[.85rem] font-semibold"
                      >
                        {field.label}
                      </label>
                      {field.options ? (
                        <select
                          id={field.id}
                          name={field.id}
                          required
                          defaultValue=""
                          className={inputClasses}
                        >
                          <option value="" disabled>
                            Select…
                          </option>
                          {field.options.map((opt) => (
                            <option key={opt}>{opt}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type ?? "text"}
                          placeholder={field.placeholder}
                          required
                          className={inputClasses}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
                <Button type="submit" className="mt-5 w-full">
                  Get my free week
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
