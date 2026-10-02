import type { ReactNode } from "react";
import { Ban, MessageSquareOff, Trash2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT } from "@/lib/content";

export const EFFECTIVE_DATE = "October 1, 2026";

const HIGHLIGHTS = [
  { icon: Ban, text: "We never sell your personal information" },
  { icon: MessageSquareOff, text: "Phone and email only — no marketing texts" },
  { icon: Trash2, text: "Ask us to see or delete your data anytime" },
];

const linkClass = "font-medium text-blue underline-offset-2 hover:underline";

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="my-3 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-blue to-green" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const SECTIONS: { id: string; title: string; body: ReactNode }[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          DailyLeads (&ldquo;DailyLeads&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides
          lead-generation and digital advertising services to local service businesses, such as
          cleaning, plumbing and electrical companies. DailyLeads is operated by Maaz Bilal K, an
          independent marketing professional based in Pakistan, serving clients in the United
          States and elsewhere.
        </p>
        <p>
          This policy explains what personal information we collect, how we use it, who we share
          it with, and the choices you have. It applies to our website ({CONTACT.site}) and to lead
          forms we run on Facebook and Instagram.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <p>
          <strong>When you contact us about our services</strong> (through our website or a
          Facebook/Instagram lead form), we may collect:
        </p>
        <List
          items={[
            "Your name, phone number and email address",
            "Your business name, the type of service you offer, and your city and state",
            "Whether you are the owner of the business, and any other answers you choose to give on the form",
          ]}
        />
        <p>
          <strong>When we run advertising for our clients</strong>, homeowners and other members of
          the public may submit their details through lead forms on our client&apos;s own Facebook
          Page. That information (for example name, phone number, email, location and the service
          requested) is collected on behalf of that client business so they can contact you about
          your request.
        </p>
        <p>
          <strong>Information collected automatically.</strong> When you visit our website, basic
          technical information (such as browser type, device and pages visited) may be collected
          by our hosting provider. If we add advertising or analytics tools (such as the Meta
          Pixel) in future, we will update this policy.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-it",
    title: "How we use your information",
    body: (
      <>
        <List
          items={[
            <>
              To contact you by <strong>phone or email</strong> about the service you asked about
            </>,
            "To set up and run advertising campaigns, including any free trial you sign up for",
            "To deliver homeowner enquiries to the client business they were intended for",
            "To keep records of enquiries and respond to questions or support requests",
            "To improve our services and comply with legal obligations",
          ]}
        />
        <p>
          We do not send marketing text messages (SMS). We contact business owners by phone and
          email only.
        </p>
      </>
    ),
  },
  {
    id: "how-we-share-it",
    title: "How we share information",
    body: (
      <>
        <p>
          <strong>We do not sell your personal information.</strong> We only share it as follows:
        </p>
        <List
          items={[
            <>
              <strong>With our clients:</strong> homeowner enquiries collected through a
              client&apos;s ads are shared with that client business only. Leads are not shared
              with or sold to competing businesses.
            </>,
            <>
              <strong>With service providers</strong> that help us operate, such as Meta
              (Facebook/Instagram lead forms), Google (email and spreadsheets), Make.com
              (automatically sending new enquiries to us), Vercel (website hosting), EmailJS
              (delivering website form submissions to our inbox), our email provider and our
              business phone provider. They may only use the information to provide their services
              to us.
            </>,
            <>
              <strong>For legal reasons:</strong> if required by law, or to protect our rights, our
              clients or the public.
            </>,
          ]}
        />
      </>
    ),
  },
  {
    id: "where-its-stored",
    title: "Where your information is stored",
    body: (
      <p>
        We operate from Pakistan, and our service providers may store or process information in the
        United States, the European Union and other countries. By submitting your details, you
        understand that your information may be transferred to and handled in these countries.
      </p>
    ),
  },
  {
    id: "how-long-we-keep-it",
    title: "How long we keep it",
    body: (
      <p>
        We keep enquiry details for as long as needed to respond to you and provide our services,
        and generally no longer than 24 months after our last contact, unless a longer period is
        required by law. Homeowner enquiries delivered to a client are then held by that client
        under their own privacy practices.
      </p>
    ),
  },
  {
    id: "how-we-protect-it",
    title: "How we protect it",
    body: (
      <p>
        We use reputable, password-protected services and limit access to the people who need it.
        No method of storing or sending information online is completely secure, but we take
        reasonable steps to protect your information.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your choices and rights",
    body: (
      <>
        <List
          items={[
            <>
              <strong>Stop contact:</strong> tell us at any time that you don&apos;t want to be
              contacted, and we will stop.
            </>,
            <>
              <strong>Access, correct or delete:</strong> you can ask to see the information we
              hold about you, correct it, or delete it.
            </>,
            <>
              <strong>State privacy rights:</strong> depending on where you live (for example
              California), you may have additional rights. We will honour applicable requests.
            </>,
          ]}
        />
        <p>To make a request, email us at the address below. We will respond within 30 days.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Our services are for businesses and adults. We do not knowingly collect information from
        anyone under 18.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy from time to time. The latest version will always be on this
        page, with the effective date shown at the top.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact us",
    body: (
      <div className="mt-2 rounded-2xl border border-line bg-light px-6 py-5">
        <p className="font-display font-bold text-ink">DailyLeads</p>
        <p className="mt-1">
          Email:{" "}
          <a href={`mailto:${CONTACT.email}`} className={linkClass}>
            {CONTACT.email}
          </a>
          <br />
          Phone:{" "}
          <a href={CONTACT.phoneHref} className={linkClass}>
            {CONTACT.phone}
          </a>
          <br />
          Website:{" "}
          <a href={`https://${CONTACT.site}`} className={linkClass}>
            {CONTACT.site}
          </a>
        </p>
      </div>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="bg-light pb-24">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          as="h1"
          eyebrow="Legal"
          title="Privacy Policy"
          description={
            <>
              How we collect, use and protect the details you share with us.
              <span className="mt-2 block text-[.9rem] font-semibold text-blue">
                Effective date: {EFFECTIVE_DATE}
              </span>
            </>
          }
        />

        <div className="grid gap-10 lg:grid-cols-[230px_1fr]">
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="mb-3 font-display text-[.75rem] font-semibold uppercase tracking-[.14em] text-ink-soft">
                On this page
              </p>
              <ol className="space-y-1 border-l border-line">
                {SECTIONS.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l-2 border-transparent py-1 pl-4 text-[.88rem] text-ink-soft transition-colors hover:border-blue hover:text-ink"
                    >
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <Reveal className="min-w-0">
            <article className="rounded-[24px] border border-line bg-white p-6 shadow-[0_20px_50px_rgba(18,53,127,.06)] sm:p-10">
              <ul className="mb-10 grid gap-3 sm:grid-cols-3">
                {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 rounded-2xl border border-line bg-light p-4 text-[.88rem] font-semibold leading-snug text-ink"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-green/10 text-green">
                      <Icon size={17} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="space-y-10 text-[1rem] leading-[1.75] text-ink-soft [&_p+p]:mt-3 [&_strong]:text-ink">
                {SECTIONS.map((s, i) => (
                  <section key={s.id} id={s.id} className="scroll-mt-28">
                    <h2 className="mb-3 flex items-center gap-3 text-[1.3rem] font-bold text-navy">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-blue to-green font-display text-[.85rem] text-white">
                        {i + 1}
                      </span>
                      {s.title}
                    </h2>
                    {s.body}
                  </section>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
