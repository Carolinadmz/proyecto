import EditorialAbout from "@/components/editorial-about"
import InfoSection from "@/components/info-section"
import { site } from "@/lib/site"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-red-200/40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="font-serif text-2xl font-bold tracking-tight text-red-700">
            {site.owner}
          </a>
          <nav className="flex gap-1">
            <a href="#sobre" className="rounded px-3 py-2 text-sm font-medium text-zinc-700 hover:text-red-700">
              Sobre mí
            </a>
            <a href="#erp" className="rounded px-3 py-2 text-sm font-medium text-zinc-700 hover:text-red-700">
              ERP
            </a>
            <a href="#crm-erp" className="rounded px-3 py-2 text-sm font-medium text-zinc-700 hover:text-red-700">
              CRM 
            </a>
          </nav>
        </div>
      </header>

      {/* Sobre mí - estilo editorial */}
      <section id="sobre" aria-labelledby="sobre-title" className="border-b border-red-100">
        <EditorialAbout />
      </section>

      {/* ERP */}
      <section id="erp" aria-labelledby="erp-title" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <InfoSection
          title="ERP"
          eyebrow="Sistemas de Planificación de Recursos Empresariales"
          description="Un ERP integra y automatiza los procesos clave de tu empresa (finanzas, compras, inventario, ventas, producción y más) para mejorar la visibilidad, la trazabilidad y la eficiencia operativa. Te ayuda a tomar decisiones con datos fiables en tiempo real y a escalar sin fricciones."
          ctaLabel="Visitar mi página ERP"
          href={site.erpLink}
        />
      </section>

      {/* CRM ERP */}
      <section id="crm-erp" aria-labelledby="crm-erp-title" className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <InfoSection
          title="CRM"
          eyebrow="Gestión de Relaciones con Clientes integrada al ERP"
          description="CRM unifica marketing, ventas y servicio con la operación del ERP. Desde la oportunidad hasta la facturación y postventa, tendrás una vista 360° del cliente, automatizaciones y analítica centralizada para incrementar conversión y fidelización."
          ctaLabel="Visitar mi página CRM "
          href={site.crmErpLink}
        />
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-red-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-10 sm:flex-row">
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} {site.owner}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <a href="#sobre">Volver arriba</a>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  )
}
