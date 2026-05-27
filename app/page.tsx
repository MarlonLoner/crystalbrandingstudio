"use client";

import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  BriefcaseBusiness,
  Camera,
  Check,
  ChevronRight,
  CloudUpload,
  Droplets,
  ExternalLink,
  Eye,
  Factory,
  Gem,
  Globe2,
  ImageUp,
  LayoutDashboard,
  Lightbulb,
  MapPin,
  Megaphone,
  MessageCircle,
  MonitorSmartphone,
  PackageCheck,
  Play,
  Radio,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Target,
  WandSparkles,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

const whatsappNumber = "263776617821";

const makeWhatsAppLink = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const serviceLinks = {
  branding: makeWhatsAppLink(
    "Hi Crystal Branding Studio, I need signage/branding help for my business. Please guide me on the best POP OUT upgrade."
  ),
  shopfrontPreview: makeWhatsAppLink(
    "Hi Crystal Branding Studio, I want to upload my shopfront for a free POP OUT preview."
  ),
  digitalSystems: makeWhatsAppLink(
    "Hi Crystal Branding Studio, I want to explore digital systems for my business, including website, WhatsApp, social media, and lead generation support."
  ),
  smartWash: makeWhatsAppLink(
    "Hi Crystal Branding Studio, I want Smart Wash product/reseller details and campaign support."
  ),
  entrepreneursDesk: makeWhatsAppLink(
    "Hi Crystal Branding Studio, I want to enter Entrepreneurs Desk for media visibility."
  ),
  generalQuote: makeWhatsAppLink(
    "Hi Crystal Branding Studio, I need a general quote for my brand visibility project."
  ),
};

const upgradeWhatsappLink = (upgradeName: string) =>
  makeWhatsAppLink(
    `Hi Crystal Branding Studio, I need signage/branding help. I am interested in ${upgradeName}. Please guide me on the best POP OUT upgrade.`
  );

const navItems = [
  ["Home", "#home"],
  ["Brand Upgrades", "#upgrades"],
  ["POP OUT Gallery", "#gallery"],
  ["Upload Zone", "#upload"],
  ["Smart Wash", "#smart-wash"],
  ["Entrepreneurs Desk", "#entrepreneurs-desk"],
  ["Start Project", "#start-project"],
];

const upgrades = [
  {
    name: "Shopfront Signage",
    icon: Store,
    price: "Quote-ready",
    signal: "High street visibility",
    details:
      "Illuminated signs, fascia refreshes, window graphics, and exterior brand presence.",
    accent: "turquoise",
  },
  {
    name: "Vehicle Branding",
    icon: Zap,
    price: "Fleet impact",
    signal: "Mobile awareness",
    details:
      "Vehicle wraps, decals, delivery identity, and campaign-ready mobile media.",
    accent: "red",
  },
  {
    name: "Interior Experience",
    icon: Gem,
    price: "Premium fit-out",
    signal: "In-store conversion",
    details:
      "Reception walls, wayfinding, point-of-sale zones, and branded customer journeys.",
    accent: "turquoise",
  },
  {
    name: "Launch Kit",
    icon: Megaphone,
    price: "Fast activation",
    signal: "Market entry",
    details:
      "Logo refinement, print collateral, launch signage, campaign visuals, and rollout assets.",
    accent: "red",
  },
];

const galleryItems = [
  {
    title: "Pharmacy Fascia Glow",
    type: "Signage",
    metric: "+64% night visibility",
    tone: "Health retail",
  },
  {
    title: "Executive Fleet Wrap",
    type: "Vehicles",
    metric: "12 branded routes",
    tone: "Logistics",
  },
  {
    title: "Cafe Window Strike",
    type: "Print",
    metric: "3-day install",
    tone: "Food service",
  },
  {
    title: "Launch Wall System",
    type: "Interior",
    metric: "Premium reception",
    tone: "Corporate",
  },
  {
    title: "Pop-up Activation Pod",
    type: "Events",
    metric: "Retail-ready booth",
    tone: "Activation",
  },
  {
    title: "Smart Wash Starter Shelf",
    type: "Product",
    metric: "Reseller-ready",
    tone: "FMCG",
  },
];

const proofMetrics = [
  {
    value: "500+",
    label: "Visibility assets",
    copy: "Placeholder metric for signage, print, vehicle, shopfront, and campaign assets delivered.",
  },
  {
    value: "24h",
    label: "Preview response target",
    copy: "Placeholder service target for first response after a shopfront preview request.",
  },
  {
    value: "06",
    label: "Growth lanes",
    copy: "Signage, shopfronts, vehicles, digital systems, product campaigns, and media visibility.",
  },
  {
    value: "1",
    label: "Connected ecosystem",
    copy: "Branding, Smart Wash, Digital Growth, and Entrepreneurs Desk aligned in one flow.",
  },
];

const trustStatements = [
  "Placeholder trust statement: clear quote path before production starts.",
  "Placeholder trust statement: practical rollout guidance for physical and digital visibility.",
  "Placeholder trust statement: WhatsApp-first communication for faster project movement.",
];

const ecosystem = [
  {
    name: "Crystal Branding Studio",
    icon: WandSparkles,
    copy: "Identity, signage, print, launch assets, and brand visibility systems.",
  },
  {
    name: "Crystal Smart Wash",
    icon: Droplets,
    copy: "Product opportunities, reseller pathways, retail display support, and branded packaging.",
  },
  {
    name: "Digital Growth Systems",
    icon: MonitorSmartphone,
    copy: "Web funnels, WhatsApp flows, social content engines, and conversion tracking.",
  },
  {
    name: "Entrepreneurs Desk",
    icon: Radio,
    copy: "Media visibility, founder stories, interviews, and market credibility.",
  },
];

const digitalSystems = [
  "Website and landing page builds",
  "WhatsApp lead capture flows",
  "Social media content systems",
  "Google profile and map visibility",
  "Launch campaign dashboards",
  "Retargeting-ready brand assets",
];

const smartWashProducts = [
  { name: "Car Shampoo", status: "Retail shelf", score: 88 },
  { name: "Tyre Shine", status: "High margin", score: 94 },
  { name: "Dashboard Polish", status: "Bundle hero", score: 82 },
  { name: "Degreaser", status: "Workshop demand", score: 91 },
];

const deskModules = [
  {
    title: "Founder Feature",
    copy: "Package your business story into a media-ready profile.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Market Conversation",
    copy: "Enter curated interviews, panels, and business visibility segments.",
    icon: Globe2,
  },
  {
    title: "Launch Coverage",
    copy: "Turn new offers, locations, and campaigns into shareable media moments.",
    icon: Play,
  },
];

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [selectedUpgrade, setSelectedUpgrade] = useState(upgrades[0]);
  const [galleryFilter, setGalleryFilter] = useState("All");
  const [fileName, setFileName] = useState("No file selected");
  const [labMode, setLabMode] = useState(2);

  const filters = useMemo(
    () => ["All", ...Array.from(new Set(galleryItems.map((item) => item.type)))],
    []
  );

  const filteredGallery =
    galleryFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.type === galleryFilter);

  const LabIcon = smartWashProducts[labMode]?.score > 90 ? Sparkles : PackageCheck;

  return (
    <main className="min-h-screen overflow-hidden bg-[#08090b] text-zinc-100">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(0,229,255,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,37,67,0.18),transparent_24%),linear-gradient(135deg,#08090b_0%,#111319_44%,#07080a_100%)]" />
        <div className="grid-overlay absolute inset-0 opacity-[0.18]" />
        <div className="scanline absolute inset-0 opacity-20" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090b]/78 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="brand-mark">
              <Gem className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-sm font-semibold uppercase tracking-[0.16em] text-white sm:text-base">
                Crystal POP OUT
              </span>
              <span className="block text-[0.65rem] uppercase tracking-[0.24em] text-zinc-500">
                Visibility Command Center
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-3 py-2 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <a
            href={serviceLinks.generalQuote}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-100 shadow-[0_0_26px_rgba(0,229,255,0.18)] transition hover:border-cyan-200 hover:bg-cyan-300/18"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </nav>
      </header>

      <section id="home" className="relative min-h-[calc(100vh-72px)] px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full min-w-0 max-w-7xl items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="min-w-0 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-red-100">
              <ScanLine className="h-4 w-4" />
              Crystal Branding Studio
            </div>
            <h1 className="font-display text-[clamp(3.15rem,14vw,4.5rem)] font-black leading-[0.92] text-white sm:text-6xl lg:text-7xl">
              <span className="block sm:inline">We Help</span>{" "}
              <span className="block sm:inline">Brands</span>{" "}
              <span className="text-glow block text-cyan-200">POP OUT.</span>
            </h1>
            <p className="mt-6 max-w-[min(42rem,100%)] text-base leading-8 text-zinc-300 sm:text-lg">
              Crystal helps businesses POP OUT with signage, shopfront branding,
              vehicle branding, digital growth systems, product campaigns,
              Crystal Smart Wash opportunities, and Entrepreneurs Desk media
              visibility from one conversion-focused command center.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={serviceLinks.branding} target="_blank" rel="noreferrer" className="btn-primary">
                <Sparkles className="h-5 w-5" />
                Start Brand Upgrade
              </a>
              <a href="#upload" className="btn-secondary">
                <ImageUp className="h-5 w-5" />
                Upload Shopfront For Free Preview
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Signage",
                "Shopfronts",
                "Vehicle branding",
                "Digital systems",
                "Product campaigns",
                "Media visibility",
              ].map((service) => (
                <span key={service} className="service-chip">
                  {service}
                </span>
              ))}
            </div>

            <div className="mt-9 grid w-full min-w-0 max-w-full grid-cols-3 gap-3 text-sm">
              {[
                ["Visibility", "92%"],
                ["Quote path", "24h"],
                ["Systems", "06"],
              ].map(([label, value]) => (
                <div key={label} className="metric-tile">
                  <span className="block font-display text-2xl font-bold text-white">{value}</span>
                  <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="command-shell w-full max-w-full">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200/80">
                    Live Brand Radar
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-white">
                    Upgrade Console
                  </h2>
                </div>
                <div className="signal-chip">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" />
                  Online
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="radar-panel">
                  <div className="radar-core">
                    <div className="radar-ring ring-one" />
                    <div className="radar-ring ring-two" />
                    <div className="radar-ring ring-three" />
                    <div className="radar-sweep" />
                    <div className="radar-dot dot-one" />
                    <div className="radar-dot dot-two" />
                    <div className="radar-dot dot-three" />
                    <Gem className="relative z-10 h-12 w-12 text-cyan-100 drop-shadow-[0_0_18px_rgba(103,232,249,0.75)]" />
                  </div>
                </div>

                <div className="space-y-3">
                  {upgrades.slice(0, 3).map((upgrade) => (
                    <button
                      key={upgrade.name}
                      type="button"
                      onClick={() => setSelectedUpgrade(upgrade)}
                      className={cn(
                        "mini-module",
                        selectedUpgrade.name === upgrade.name && "mini-module-active"
                      )}
                    >
                      <upgrade.icon className="h-5 w-5" />
                      <span className="min-w-0 text-left">
                        <span className="block truncate font-semibold text-white">
                          {upgrade.name}
                        </span>
                        <span className="block truncate text-xs text-zinc-500">
                          {upgrade.signal}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {[
                  { label: "Shopfront Scan", icon: Camera, value: "Ready" },
                  { label: "Signage Quote", icon: BadgeDollarSign, value: "Queued" },
                  { label: "Media Boost", icon: Radio, value: "Open" },
                ].map((item) => (
                  <div key={item.label} className="status-module">
                    <item.icon className="h-5 w-5 text-cyan-200" />
                    <span className="text-xs text-zinc-500">{item.label}</span>
                    <strong className="font-display text-sm text-white">{item.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="section-band pt-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="proof-panel">
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="section-eyebrow">Proof and trust signals</p>
                <h2 className="mt-3 font-display text-3xl font-black leading-tight text-white sm:text-4xl">
                  Built to move visitors from interest to action.
                </h2>
                <p className="mt-5 text-sm leading-7 text-zinc-300 sm:text-base">
                  Use these placeholder credibility signals now, then replace
                  them with verified Crystal project data, testimonials, and
                  response-time benchmarks as the portfolio grows.
                </p>
                <div className="mt-6 space-y-3">
                  {trustStatements.map((statement) => (
                    <div key={statement} className="trust-row">
                      <ShieldCheck className="h-4 w-4 text-cyan-200" />
                      <span>{statement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {proofMetrics.map((metric) => (
                  <article key={metric.label} className="proof-card">
                    <strong className="font-display text-3xl text-white">{metric.value}</strong>
                    <span className="mt-2 block text-xs font-bold uppercase tracking-[0.16em] text-cyan-100">
                      {metric.label}
                    </span>
                    <p className="mt-4 text-sm leading-6 text-zinc-400">{metric.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="upgrades" className="section-band">
        <SectionHeader
          eyebrow="Choose your brand upgrade"
          title="Build a visibility stack that makes your business impossible to miss."
          copy="Select a priority lane and Crystal converts it into signage, print, digital, and rollout actions."
        />

        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 lg:grid-cols-[1fr_0.78fr] lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {upgrades.map((upgrade) => (
              <button
                key={upgrade.name}
                type="button"
                onClick={() => setSelectedUpgrade(upgrade)}
                className={cn(
                  "feature-card group text-left",
                  selectedUpgrade.name === upgrade.name && "feature-card-active",
                  upgrade.accent === "red" && "feature-card-red"
                )}
              >
                <span className="card-icon">
                  <upgrade.icon className="h-6 w-6" />
                </span>
                <span className="mt-6 block font-display text-2xl font-bold text-white">
                  {upgrade.name}
                </span>
                <span className="mt-3 block text-sm leading-6 text-zinc-400">
                  {upgrade.details}
                </span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100">
                  {upgrade.price}
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </button>
            ))}
          </div>

          <div className="insight-panel">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100">
                Selected lane
              </span>
              <ShieldCheck className="h-6 w-6 text-cyan-200" />
            </div>
            <h3 className="mt-8 font-display text-3xl font-bold text-white">
              {selectedUpgrade.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-300">{selectedUpgrade.details}</p>
            <div className="mt-7 space-y-3">
              {["Brand audit", "Quote map", "Production path", "Launch visibility"].map(
                (item, index) => (
                  <div key={item} className="timeline-row">
                    <span className="timeline-number">{String(index + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                    <Check className="ml-auto h-4 w-4 text-cyan-200" />
                  </div>
                )
              )}
            </div>
            <a href={upgradeWhatsappLink(selectedUpgrade.name)} target="_blank" rel="noreferrer" className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-4 text-sm font-bold text-zinc-950 transition hover:bg-cyan-100">
              Start Brand Upgrade
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="upload" className="section-band border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
          <div>
            <p className="section-eyebrow">Upload your shopfront</p>
            <h2 className="section-title">
              Upload your shopfront for a free POP OUT preview.
            </h2>
            <p className="section-copy">
              Send one clear storefront photo and Crystal can recommend signage,
              window graphics, fascia upgrades, vehicle tie-ins, and a stronger
              customer-facing brand presence.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Free first-look preview",
                "Signage direction",
                "Brand upgrade notes",
                "WhatsApp quote path",
              ].map((item) => (
                <div key={item} className="requirement-pill">
                  <Check className="h-4 w-4" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="upload-console">
            <div className="mb-5 grid gap-3 sm:grid-cols-3">
              {[
                ["01", "Upload front view"],
                ["02", "Get POP OUT direction"],
                ["03", "Move into quote"],
              ].map(([step, label]) => (
                <div key={step} className="preview-step">
                  <span>{step}</span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
            <label className="upload-zone">
              <CloudUpload className="h-10 w-10 text-cyan-200" />
              <span className="font-display text-xl font-bold text-white">
                Free POP OUT preview starts here
              </span>
              <span className="max-w-md text-center text-sm leading-6 text-zinc-400">
                Upload your shopfront for a free POP OUT preview. JPG, PNG, or WebP stays in your browser until you send the WhatsApp request.
              </span>
              <input
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  setFileName(file ? file.name : "No file selected");
                }}
              />
            </label>

            <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
              <div className="rounded-md border border-white/10 bg-black/24 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Upload status</p>
                <p className="mt-2 truncate font-semibold text-white">{fileName}</p>
              </div>
              <a
                href={serviceLinks.shopfrontPreview}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-red-300/35 bg-red-400/12 px-5 py-4 text-sm font-bold text-red-50 transition hover:bg-red-400/20"
              >
                Upload Shopfront For Free Preview
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-band">
        <SectionHeader
          eyebrow="POP OUT Gallery"
          title="Visibility concepts arranged like a live production board."
          copy="Filter through signage, vehicles, retail, events, interior upgrades, and Smart Wash-ready product displays."
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setGalleryFilter(filter)}
                className={cn("filter-chip", galleryFilter === filter && "filter-chip-active")}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item, index) => (
              <article key={item.title} className="gallery-card">
                <div className="gallery-visual">
                  <div className="gallery-grid" />
                  <span className={cn("gallery-block", index % 2 === 0 && "gallery-block-red")} />
                  <span className="gallery-beam" />
                  <Eye className="relative z-10 h-8 w-8 text-white" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">
                      {item.type}
                    </span>
                    <span className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                      {item.tone}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-cyan-100">{item.metric}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="ecosystem" className="section-band border-y border-white/10 bg-white/[0.025]">
        <SectionHeader
          eyebrow="Crystal Ecosystem"
          title="One studio, multiple engines for brand visibility."
          copy="Move from physical branding to digital funnels, product opportunities, and media credibility."
        />

        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {ecosystem.map((item) => (
            <article key={item.name} className="ecosystem-card">
              <item.icon className="h-7 w-7 text-cyan-200" />
              <h3 className="mt-6 font-display text-xl font-bold text-white">{item.name}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="digital-growth" className="section-band">
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <p className="section-eyebrow">Digital Growth Systems</p>
            <h2 className="section-title">
              Turn attention into trackable enquiries.
            </h2>
            <p className="section-copy">
              Pair your physical brand upgrade with conversion-ready web, WhatsApp, content, and map visibility systems.
            </p>
            <a href={serviceLinks.digitalSystems} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-md border border-cyan-300/35 bg-cyan-300/10 px-5 py-4 text-sm font-bold text-cyan-50 transition hover:bg-cyan-300/18">
              Explore Digital Systems
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="growth-grid">
            {digitalSystems.map((system, index) => (
              <div key={system} className="growth-row">
                <span className="growth-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold text-white">{system}</span>
                <BarChart3 className="ml-auto h-5 w-5 text-cyan-200" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="smart-wash" className="section-band border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="section-eyebrow">Smart Wash Product Lab</p>
            <h2 className="section-title">
              Explore reseller and product visibility opportunities.
            </h2>
            <p className="section-copy">
              Crystal Smart Wash connects product demand, retail display readiness, and branding support for entrepreneurs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={serviceLinks.smartWash} target="_blank" rel="noreferrer" className="btn-primary">
                <ShoppingBag className="h-5 w-5" />
                Request Smart Wash Details
              </a>
            </div>
          </div>

          <div className="lab-panel">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  Product opportunity
                </p>
                <h3 className="mt-1 font-display text-2xl font-bold text-white">
                  {smartWashProducts[labMode].name}
                </h3>
              </div>
              <span className="card-icon">
                <LabIcon className="h-6 w-6" />
              </span>
            </div>

            <div className="mt-8 space-y-3">
              {smartWashProducts.map((product, index) => (
                <button
                  key={product.name}
                  type="button"
                  onClick={() => setLabMode(index)}
                  className={cn("product-row", labMode === index && "product-row-active")}
                >
                  <span>{product.name}</span>
                  <span className="ml-auto text-xs text-zinc-400">{product.status}</span>
                  <span className="score-pill">{product.score}</span>
                </button>
              ))}
            </div>

            <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-red-400 transition-all duration-500"
                style={{ width: `${smartWashProducts[labMode].score}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="entrepreneurs-desk" className="section-band">
        <SectionHeader
          eyebrow="Entrepreneurs Desk"
          title="Enter the media platform built for ambitious business visibility."
          copy="Transform founder stories, launches, partnerships, and local business momentum into polished media moments."
        />

        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {deskModules.map((module) => (
            <article key={module.title} className="desk-card">
              <module.icon className="h-7 w-7 text-red-200" />
              <h3 className="mt-6 font-display text-2xl font-bold text-white">{module.title}</h3>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{module.copy}</p>
              <a href={serviceLinks.entrepreneursDesk} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-100">
                Enter Entrepreneurs Desk
                <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="start-project" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="cta-panel mx-auto max-w-7xl">
          <div>
            <p className="section-eyebrow">Start Project CTA</p>
            <h2 className="font-display text-4xl font-black leading-tight text-white sm:text-5xl">
              Ready to make your brand POP OUT?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              Start with a brand upgrade brief, upload a shopfront image, or enter the Crystal ecosystem through Smart Wash and Entrepreneurs Desk.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a href={serviceLinks.generalQuote} target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle className="h-5 w-5" />
              Start Brand Upgrade
            </a>
            <a href="#upload" className="btn-secondary">
              <CloudUpload className="h-5 w-5" />
              Upload Shopfront For Free Preview
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-zinc-500 sm:px-6 lg:px-8">
        <p>Crystal Branding Studio - WhatsApp +263 776 617 821 - Crystal POP OUT App</p>
      </footer>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl px-4 text-center sm:px-6 lg:px-8">
      <p className="section-eyebrow justify-center">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy mx-auto">{copy}</p>
    </div>
  );
}
