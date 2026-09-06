import Link from "next/link";
import { navigationItems } from "@/lib/data";
import { siteConfig, whatsappLink } from "@/lib/config";

export default function Footer() {
  const socialLinks = [
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "Facebook", href: siteConfig.social.facebook },
    { label: "YouTube", href: siteConfig.social.youtube },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <footer className="relative border-t border-bone/10 bg-ink pt-16 pb-8 md:pt-20">
      <div className="container-fluid">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="inline-flex rounded-sm bg-bone p-2">
              <img
                src="/images/focus-fitness-logo.jpeg"
                alt="Focus Fitness official logo"
                className="h-28 w-auto object-contain md:h-32"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm uppercase tracking-[0.25em] text-ash">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 max-w-sm text-sm leading-7 text-ash">
              A premium strength and performance studio in {siteConfig.location}.
              Built for people who refuse to stay the same.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-outline text-sm text-bone/80 transition-colors hover:text-ember"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Get In Touch</p>
            <ul className="space-y-3 text-[13px] leading-6 text-bone/80 md:text-sm">
              <li>{siteConfig.fullAddress}</li>
              <li>
                {siteConfig.phone}
                {siteConfig.phoneAlt ? ` · ${siteConfig.phoneAlt}` : ""}
              </li>
              {siteConfig.email && <li>{siteConfig.email}</li>}
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-outline text-ember transition-colors hover:text-bone"
                >
                  Message on WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-bone/10 pt-8 pb-3 pr-0 text-xs uppercase tracking-[0.2em] text-ash md:mt-16 md:flex-row md:items-center md:pr-40">
          <p>
            © {new Date().getFullYear()} Focus Fitness. All rights reserved.
          </p>
          {socialLinks.length > 0 && (
            <div className="flex gap-6 md:mr-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="focus-outline hover:text-bone"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
