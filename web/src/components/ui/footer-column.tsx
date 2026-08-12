import { Code2, ExternalLink, ScrollText } from "lucide-react";
import Link from "next/link";

const data = {
  githubLink: "https://github.com/shrutipingle02/medicare-fraud-detection",
  linkedinLink:
    "https://www.linkedin.com/in/shruti-pingle-aa8034196/",
  company: {
    name: "Medicare Fraud Detection",
    description:
      "A watchful ranker that surfaces the Medicare providers most likely committing fraud, and explains why. Built on real US government data.",
  },
};

const projectLinks = [
  { text: "The methodology", href: "/methodology" },
  { text: "The solution", href: "/solution" },
  { text: "About the project", href: "/about" },
];

const dataLinks = [
  { text: "CMS Medicare Part B", href: "https://www.cms.gov" },
  { text: "OIG LEIE exclusions", href: "https://oig.hhs.gov/exclusions/" },
  { text: "Source on GitHub", href: data.githubLink },
];

export default function Footer4Col() {
  return (
    <footer className="mt-16 w-full place-self-end rounded-t-xl border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center gap-2 text-gold sm:justify-start">
              <ScrollText className="h-7 w-7" />
              <span className="font-heading text-xl font-semibold text-washi">
                {data.company.name}
              </span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-ash sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start">
              {[
                { icon: Code2, label: "GitHub", href: data.githubLink },
                { icon: ExternalLink, label: "LinkedIn", href: data.linkedinLink },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gold/80 transition hover:text-crimson-bright"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-washi">Explore</p>
              <ul className="mt-8 space-y-4 text-sm">
                {projectLinks.map(({ text, href }) => (
                  <li key={text}>
                    <Link
                      className="text-ash transition hover:text-gold"
                      href={href}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-washi">Data &amp; source</p>
              <ul className="mt-8 space-y-4 text-sm">
                {dataLinks.map(({ text, href }) => (
                  <li key={text}>
                    <a
                      className="text-ash transition hover:text-gold"
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-ash">
              <span className="block sm:inline">
                Research, not an enforcement tool. Labels are incomplete.
              </span>
            </p>
            <p className="mt-4 text-sm text-ash/70 sm:order-first sm:mt-0">
              &copy; 2026 Shruti Pingle
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
