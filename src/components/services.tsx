import { whatsappBookingUrl } from "@/lib/constants";

const SERVICES = [
  {
    title: "Depilação a Laser",
    description: "Tecnologia adaptada a todos os fotótipos, incluindo peles negras e escuras.",
    gradient: "from-plum to-plum/90",
    textColor: "text-plum-foreground",
    descColor: "text-plum-foreground/70",
    featured: true,
  },
  {
    title: "Limpeza de Pele",
    description: "Limpeza profunda para uma pele luminosa e saudável.",
    gradient: "from-rose/30 to-rose/10",
    textColor: "text-plum",
    descColor: "text-plum/70",
    featured: false,
  },
  {
    title: "Peeling",
    description: "Renovação celular para tratar manchas, rugas e marcas de acne.",
    gradient: "from-gold/20 to-gold/5",
    textColor: "text-plum",
    descColor: "text-plum/70",
    featured: false,
  },
  {
    title: "Manchas, Rugas e Acne",
    description: "Tratamentos direcionados para cada preocupação específica.",
    gradient: "from-secondary to-cream",
    textColor: "text-plum",
    descColor: "text-plum/70",
    featured: false,
  },
  {
    title: "Brow Lamination",
    description: "Sobrancelhas alinhadas e definidas com efeito natural e duradouro.",
    gradient: "from-plum/90 to-plum/80",
    textColor: "text-plum-foreground",
    descColor: "text-plum-foreground/70",
    featured: true,
  },
  {
    title: "Lifting de Pestanas",
    description: "Pestanas curvadas e levantadas sem necessidade de extensões.",
    gradient: "from-rose/25 to-rose/10",
    textColor: "text-plum",
    descColor: "text-plum/70",
    featured: false,
  },
  {
    title: "Design de Sobrancelhas",
    description: "Design personalizado que valoriza a harmonia do seu rosto.",
    gradient: "from-gold/25 to-gold/10",
    textColor: "text-plum",
    descColor: "text-plum/70",
    featured: false,
  },
  {
    title: "Unhas",
    description: "Manicure e tratamentos de unhas com acabamento impecável.",
    gradient: "from-secondary to-cream",
    textColor: "text-plum",
    descColor: "text-plum/70",
    featured: false,
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative py-16 sm:py-24 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary/60 sm:text-xs">
            Os Nossos Serviços
          </p>
          <h2
            id="services-heading"
            className="mt-2 font-heading text-[1.75rem] font-bold leading-tight tracking-tight text-plum sm:text-4xl md:text-5xl"
          >
            Beleza e cuidado
            <br className="sm:hidden" />
            {" "}especializado
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <a
              key={service.title}
              href={whatsappBookingUrl(service.title)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${service.gradient} p-4 sm:p-5 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${service.featured ? "min-h-[160px] sm:min-h-[180px]" : "min-h-[140px] sm:min-h-[160px]"}`}
            >
              <div>
                <h3 className={`font-heading text-[15px] font-bold leading-snug sm:text-base md:text-lg ${service.textColor}`}>
                  {service.title}
                </h3>
                <p className={`mt-1.5 text-[12px] leading-relaxed sm:text-[13px] md:text-sm ${service.descColor}`}>
                  {service.description}
                </p>
              </div>
              <div className={`mt-3 flex items-center gap-1 text-[11px] font-medium sm:text-xs ${service.featured ? "text-plum-foreground/60 group-hover:text-plum-foreground/90" : "text-primary/50 group-hover:text-primary/80"} transition-colors`}>
                <span>Marcar</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
