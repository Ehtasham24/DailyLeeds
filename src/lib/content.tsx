import {
  Megaphone,
  Smartphone,
  ShieldCheck,
  Target,
  TrendingUp,
  UserCog,
} from "lucide-react";

/** Shared copy used by more than one component (e.g. a full section and
 *  a compact teaser of the same content elsewhere). */

export const STEPS = [
  {
    num: "1",
    title: "We set up your ads",
    text: (
      <>
        We build targeted Facebook &amp; Instagram ads that run on{" "}
        <strong>your own business page</strong> — so they look genuine and
        local.
      </>
    ),
  },
  {
    num: "2",
    title: "Locals reach out",
    text: "Homeowners in your area who need your service send their name, job type, and phone number.",
  },
  {
    num: "3",
    title: "You book the job",
    text: "Their details land with you instantly. Call fast, quote, and win the work.",
  },
];

export const WHATS_INCLUDED = [
  {
    icon: <Megaphone size={18} />,
    title: "Ad creative & copywriting",
    text: "Scroll-stopping ad creative and copy written for your trade — done for you, not templated.",
  },
  {
    icon: <Target size={18} />,
    title: "Local audience targeting",
    text: "We geo-target your actual service area, so you only pay to reach homeowners near you.",
  },
  {
    icon: <Smartphone size={18} />,
    title: "Leads straight to your phone",
    text: "No dashboard to check — new leads land by text or email the moment they come in.",
  },
  {
    icon: <TrendingUp size={18} />,
    title: "Ongoing optimization",
    text: "We watch cost-per-lead weekly and adjust targeting, budget and creative to keep it improving.",
  },
  {
    icon: <UserCog size={18} />,
    title: "A dedicated campaign manager",
    text: "One person who knows your business — not a rotating support queue.",
  },
  {
    icon: <ShieldCheck size={18} />,
    title: "No lock-in contract",
    text: "Stay because it's working. Cancel anytime if it's not.",
  },
];

export const ONBOARDING_TIMELINE = [
  {
    label: "Week 1",
    title: "Setup & launch",
    text: "We build your ad creative, set up targeting for your service area, and launch campaigns on your own Facebook & Instagram page.",
  },
  {
    label: "Week 2",
    title: "Warm-up & optimization",
    text: "We watch performance daily and test audiences and creative, tuning everything toward cost-per-lead — not just clicks.",
  },
  {
    label: "Ongoing",
    title: "Daily leads, hands-off for you",
    text: "Once dialed in, qualified leads land on your phone every day. We keep optimizing in the background — you just answer and quote.",
  },
];

export const FAQ_CATEGORIES = [
  {
    category: "Getting started",
    items: [
      {
        q: "How fast will I start getting leads?",
        a: "Most campaigns start delivering leads within the first few days once the ads are live and warmed up. The first week is setup and testing, then it gets more consistent from there.",
      },
      {
        q: "Do I need my own Facebook page?",
        a: "Yes, and that's a good thing. We run ads on your own business page so they look genuine and local — and you keep full ownership of the page and every lead.",
      },
      {
        q: "What information do you need from me to launch?",
        a: "Just your business details, service area, and admin access to your Facebook page — we handle the ad creative, targeting and setup from there.",
      },
    ],
  },
  {
    category: "Billing & ad spend",
    items: [
      {
        q: "Who pays for the ad budget?",
        a: "You do, straight from your own ad account, so you're always in control of your spend. Our fee covers building, running, and optimizing the campaigns.",
      },
      {
        q: "Is there a setup fee?",
        a: "No. Your flat monthly fee covers setup, management and optimization — on top of that you only pay your own ad spend, nothing hidden.",
      },
      {
        q: "What if I don't get results?",
        a: "That's exactly why we offer a risk-free first week — you see real leads before you commit to a monthly plan. If it's not working, you don't continue.",
      },
    ],
  },
  {
    category: "Leads & quality",
    items: [
      {
        q: "What counts as a 'qualified' lead?",
        a: "A real homeowner in your service area who's actively looking for your type of job — not a random click or a bot form-fill.",
      },
      {
        q: "What if a lead turns out to be a bad fit?",
        a: "Tell your campaign manager. We use that feedback to tighten targeting so future leads match your ideal jobs more closely.",
      },
    ],
  },
  {
    category: "Contract & cancellation",
    items: [
      {
        q: "Can I cancel anytime?",
        a: "Yes. There are no long lock-in contracts — you stay because it's working, not because you're stuck.",
      },
      {
        q: "Is there a long-term contract?",
        a: "No. It's month-to-month from day one — the risk-free first week is designed to prove it works before you commit to anything.",
      },
    ],
  },
];

export const PRICING_FAQS = [
  {
    q: "Is there a setup fee on top of the monthly plan?",
    a: "No. Your flat monthly fee covers setup, ad management and ongoing optimization — the only other cost is your own ad spend, paid straight to Facebook/Instagram.",
  },
  {
    q: "Can I cancel mid-month?",
    a: "Yes. There's no lock-in contract, so you can cancel anytime — you just won't be billed for the next cycle.",
  },
  {
    q: "What does the risk-free first week actually cover?",
    a: "We set up and launch your campaign at no charge beyond ad spend. If you don't like the leads, you simply don't start the paid monthly plan.",
  },
];

export const NEXT_STEPS_TIMELINE = [
  {
    label: "Step 1",
    title: "We review your info",
    text: "Within 24 hours we look at your business, service area, and current online presence.",
  },
  {
    label: "Step 2",
    title: "We set up your first campaign",
    text: "We build your ad creative and launch it on your own Facebook & Instagram page — no work needed from you.",
  },
  {
    label: "Step 3",
    title: "You start getting leads",
    text: "Your free first week begins and qualified local leads start landing on your phone.",
  },
];
