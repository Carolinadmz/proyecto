import Image from "next/image"

type Props = {
  headline?: string
  subheadline?: string
  paragraphs?: string[]
  // Puedes reemplazar por tu foto; usa una URL absoluta o un archivo local en /public
  imageSrc?: string
}

export default function EditorialAbout({
  headline = "Sobre mí",
  subheadline = "¿Quién soy?",
  paragraphs = [
    "Soy estudiante de la carrera de Tecnologías de la Información en los Negocios en la USB, actualmente en sexto cuatrimestre. Me interesa alinear la tecnología con los objetivos del negocio para optimizar procesos y crear experiencias simples y útiles.",
    "Busco participar en proyectos donde pueda aprender y aportar valor desde la investigación, la documentación y el desarrollo front‑end. Me motiva el trabajo en equipo, la mejora continua y convertir problemas complejos en soluciones claras.",
  ],
  imageSrc = "/imagen.jpg",
}: Props) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 px-4 md:grid-cols-12">
      {/* Columna imagen */}
      <div className="relative md:col-span-5">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-zinc-100 md:h-full md:aspect-auto">
          {/* Para URL externas se puede usar unoptimized o configurar dominios remotos en Next.js */}
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt="Retrato personal en estilo editorial"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Columna texto editorial */}
      <div className="relative md:col-span-7 md:pl-10">
        {/* Titular grande en serif con acento rojo */}
        <div className="relative py-10">
          <p className="mb-2 inline-block rounded-full border border-red-300 px-3 py-1 text-xs font-medium uppercase tracking-wider text-red-700">
            {headline}
          </p>
          <h2
            id="sobre-title"
            className="font-serif text-[clamp(2rem,7vw,6rem)] font-bold leading-[0.9] tracking-tight text-zinc-900"
          >
            {subheadline}
          </h2>
          {/* Regla editorial roja */}
          <div className="mt-4 h-[3px] w-24 bg-red-600"></div>
        </div>

        {/* Texto en columnas con “drop cap” manual */}
        <div className="columns-1 gap-10 text-justify text-zinc-800 md:columns-2">
          <p className="mb-6 break-inside-avoid">
            <span className="float-left mr-2 font-serif text-6xl font-bold leading-none text-red-700">
              {paragraphs[0]?.charAt(0)}
            </span>
            {paragraphs[0]?.slice(1)}
          </p>
          {paragraphs.slice(1).map((p, i) => (
            <p key={i} className="mb-6 break-inside-avoid">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
