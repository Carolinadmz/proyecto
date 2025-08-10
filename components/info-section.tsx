import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  title?: string
  eyebrow?: string
  description?: string
  ctaLabel?: string
  href?: string
}

export default function InfoSection({
  title = "Título",
  eyebrow = "Descripción corta",
  description = "Texto descriptivo.",
  ctaLabel = "Saber más",
  href = "#",
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-red-200/60 bg-white p-6 shadow-[0_10px_35px_-15px_rgba(220,38,38,0.35)] sm:p-10">
      {/* Ornamentación sutil en rojo */}
      <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-red-100/60 blur-2xl" />
      <header className="mb-6 sm:mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-red-700">{eyebrow}</p>
        <h3
          id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
          className="font-serif text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
        >
          {title}
        </h3>
        <div className="mt-3 h-[2px] w-16 bg-red-600" />
      </header>
      <p className="mb-8 max-w-3xl text-zinc-700">{description}</p>
      <Button asChild className="bg-red-600 hover:bg-red-700">
        <a href={href} target="_blank" rel="noreferrer">
          {ctaLabel} <ArrowUpRight className="ml-2 inline-block size-4" />
        </a>
      </Button>
    </div>
  )
}
