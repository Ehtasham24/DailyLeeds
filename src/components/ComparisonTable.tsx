"use client";

import { Check, Minus, X } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Tone = "bad" | "mid" | "good";
type Cell = { text: string; tone: Tone };
type Row = { feature: string; diy: Cell; agency: Cell; dailyleeds: Cell };

const ROWS: Row[] = [
  {
    feature: "Who owns the ad page & leads",
    diy: { text: "You — if you have time to run it", tone: "mid" },
    agency: { text: "Usually the agency's page", tone: "bad" },
    dailyleeds: { text: "Always your own page", tone: "good" },
  },
  {
    feature: "Setup & daily management",
    diy: { text: "All on you", tone: "bad" },
    agency: { text: "Done for you", tone: "good" },
    dailyleeds: { text: "Done for you", tone: "good" },
  },
  {
    feature: "Cost predictability",
    diy: { text: "Trial and error", tone: "bad" },
    agency: { text: "Retainer + ad spend", tone: "mid" },
    dailyleeds: { text: "One flat fee + your ad spend", tone: "good" },
  },
  {
    feature: "Contract length",
    diy: { text: "None needed", tone: "good" },
    agency: { text: "Often 6–12 months", tone: "bad" },
    dailyleeds: { text: "Cancel anytime", tone: "good" },
  },
  {
    feature: "Lead delivery",
    diy: { text: "Whenever you check", tone: "mid" },
    agency: { text: "Weekly report", tone: "mid" },
    dailyleeds: { text: "Straight to your phone", tone: "good" },
  },
];

const ICON: Record<Tone, ReactNode> = {
  bad: <X size={16} strokeWidth={2.5} />,
  mid: <Minus size={16} strokeWidth={2.5} />,
  good: <Check size={16} strokeWidth={2.5} />,
};

function toneClass(tone: Tone, onDark: boolean) {
  if (tone === "good") return "text-green font-semibold";
  return onDark ? "text-muted-navy" : "text-ink-soft";
}

function CellValue({ cell, onDark = false }: { cell: Cell; onDark?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${toneClass(cell.tone, onDark)}`}>
      <span className="shrink-0">{ICON[cell.tone]}</span>
      {cell.text}
    </div>
  );
}

// Below `md`, a 4-column table has no room to show every plan at once —
// and hiding the DailyLeads column off-screen defeats the point of a
// comparison. So small screens get one stacked card per plan instead.
function PlanCard({
  name,
  values,
  highlight = false,
}: {
  name: string;
  values: (row: Row) => Cell;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        highlight
          ? "border-transparent bg-navy text-white"
          : "border-line bg-white"
      }`}
    >
      <h3 className={`mb-4 font-bold ${highlight ? "text-white" : ""}`}>
        {name}
      </h3>
      <ul className="flex flex-col gap-3 text-[.92rem]">
        {ROWS.map((row) => (
          <li key={row.feature} className="flex flex-col gap-1">
            <span className={highlight ? "text-muted-navy" : "text-ink-soft"}>
              {row.feature}
            </span>
            <CellValue cell={values(row)} onDark={highlight} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <section className="bg-light py-20">
      <div className="mx-auto max-w-[1120px] px-6">
        <SectionHeading
          eyebrow="The comparison"
          title="How DailyLeads stacks up"
          description="Same goal — more local jobs — three very different ways to get there."
        />

        {/* Mobile: one card per plan, DailyLeads always fully visible. */}
        <Reveal className="mx-auto flex max-w-[440px] flex-col gap-5 md:hidden">
          <PlanCard name="DailyLeads" values={(r) => r.dailyleeds} highlight />
          <PlanCard name="Traditional agency" values={(r) => r.agency} />
          <PlanCard name="DIY posts" values={(r) => r.diy} />
        </Reveal>

        {/* Tablet & up: the full side-by-side table. */}
        <Reveal className="mx-auto hidden max-w-[920px] overflow-x-auto rounded-2xl border border-line bg-white shadow-sm md:block">
          <table className="w-full min-w-[640px] border-collapse text-left text-[.92rem]">
            <thead>
              <tr className="border-b border-line">
                <th className="p-5 font-semibold text-ink-soft">Feature</th>
                <th className="p-5 font-semibold text-ink-soft">DIY posts</th>
                <th className="p-5 font-semibold text-ink-soft">
                  Traditional agency
                </th>
                <th className="rounded-t-2xl bg-navy p-5 font-bold text-white">
                  DailyLeads
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-line last:border-0"
                >
                  <td className="p-5 font-semibold">{row.feature}</td>
                  <td className="p-5">
                    <CellValue cell={row.diy} />
                  </td>
                  <td className="p-5">
                    <CellValue cell={row.agency} />
                  </td>
                  <td className="bg-navy/[.03] p-5">
                    <CellValue cell={row.dailyleeds} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
