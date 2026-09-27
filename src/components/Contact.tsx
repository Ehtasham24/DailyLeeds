"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { preconnect } from "react-dom";
import { AnimatePresence, m } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import Button from "@/components/Button";
import ContactInfoCards from "@/components/ContactInfoCards";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { isEmailjsConfigured, loadEmailjs, sendLeadEmails } from "@/lib/emailjs";
import {
  HONEYPOT_FIELD,
  cooldownRemaining,
  looksLikeBot,
  startCooldown,
} from "@/lib/spamGuard";

type Field = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  full?: boolean;
  options?: string[];
  maxLength?: number;
  pattern?: string;
};

const FIELDS: Field[] = [
  { id: "biz", label: "Business name", maxLength: 80 },
  { id: "name", label: "Your name", maxLength: 60 },
  {
    id: "service",
    label: "Service type",
    options: ["Plumbing", "Electrical", "Cleaning", "Other"],
  },
  { id: "city", label: "City & state", placeholder: "e.g. Dallas, TX", maxLength: 60 },
  {
    id: "phone",
    label: "Phone",
    type: "tel",
    maxLength: 20,
    // Escaped for the "v" regex flag browsers apply to pattern attributes.
    pattern: String.raw`[0-9+\(\)\-. ]{7,20}`,
  },
  { id: "email", label: "Email", type: "email", maxLength: 120 },
];

const inputClasses =
  "rounded-[10px] border-[1.5px] border-line bg-white px-[.9rem] py-[.8rem] text-base text-ink transition-[border-color,box-shadow] focus:border-blue focus:shadow-[0_0_0_3px_rgba(47,125,225,.15)] focus:outline-none";

type Status = "idle" | "submitting" | "success" | "error" | "cooldown";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [waitSeconds, setWaitSeconds] = useState(0);
  const renderedAt = useRef(0);

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  // Warm up the email SDK and its API connection as soon as someone
  // starts filling the form, so submitting doesn't wait on either.
  const warmedUp = useRef(false);
  function warmUp() {
    if (warmedUp.current || !isEmailjsConfigured) return;
    warmedUp.current = true;
    preconnect("https://api.emailjs.com");
    void loadEmailjs();
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (looksLikeBot(form, renderedAt.current)) {
      setStatus("success");
      return;
    }

    const wait = cooldownRemaining();
    if (wait > 0) {
      setWaitSeconds(wait);
      setStatus("cooldown");
      return;
    }

    if (!isEmailjsConfigured) {
      // No email backend configured yet — keep the page usable in local
      // preview / before setup, but make the gap obvious in the console.
      console.warn(
        "EmailJS is not configured — submissions aren't going anywhere. See README for setup."
      );
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      await sendLeadEmails(form);
      startCooldown();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-light py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          as="h1"
          eyebrow="Get started"
          title="Ready to get booked out?"
          description="Tell us about your business and we'll set up your free first week of local leads."
        />

        <ContactInfoCards />

        <Reveal
          delay={0.1}
          className="mx-auto max-w-[620px] rounded-[24px] border border-line bg-white p-10 shadow-[0_20px_50px_rgba(18,53,127,.08)]"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <m.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-3 rounded-xl bg-green/10 px-6 py-10 text-center font-semibold text-[#159a67]"
              >
                <CheckCircle2 size={40} />
                Thanks! We&apos;ll be in touch within 24 hours to set up your
                leads.
              </m.div>
            ) : (
              <m.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                onFocus={warmUp}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {FIELDS.map((field) => (
                    <div
                      key={field.id}
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
                          maxLength={field.maxLength}
                          pattern={field.pattern}
                          required
                          className={inputClasses}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Honeypot — off-screen and skipped by keyboard and screen
                    readers, so only bots ever fill it in. */}
                <input
                  type="text"
                  name={HONEYPOT_FIELD}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="absolute -left-[9999px] h-px w-px opacity-0"
                />

                {(status === "error" || status === "cooldown") && (
                  <p className="mt-4 flex items-center gap-2 text-[.9rem] font-semibold text-red-600">
                    <AlertCircle size={18} className="shrink-0" />
                    {status === "cooldown"
                      ? `You just sent a request — please wait ${waitSeconds}s before sending another.`
                      : "Something went wrong sending that — please try again."}
                  </p>
                )}

                <Button
                  type="submit"
                  arrow={status !== "submitting"}
                  className="mt-5 w-full"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending…" : "Get my free week"}
                </Button>
              </m.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
