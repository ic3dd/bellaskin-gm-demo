import { whatsappBookingUrl } from "@/lib/constants";

const FEATURES = [
  {
    number: "01",
    title: "Experiência dedicada",
    description:
      "A Bella Skin tem experiência no tratamento de peles negras e escuras com tecnologia de depilação a laser.",
  },
  {
    number: "02",
    title: "Abordagem personalizada",
    description:
      "Cada sessão é adaptada ao fotótipo de pele, com avaliação individual para definir os parâmetros adequados.",
  },
  {
    number: "03",
    title: "Clientes de todo o país",
    description:
      "Recebemos clientes de diferentes regiões de Portugal que procuram profissionais com esta especialização.",
  },
];

export function LaserDifferentiation() {
  return (
    <section
      id="laser"
      className="relative overflow-hidden bg-plum py-16 sm:py-24 md:py-28"
      aria-labelledby="laser-heading"
    >
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 0% 0%, rgba(196,162,101,0.08) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(201,160,160,0.06) 0%, transparent 40%)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold/[0.03] blur-3xl" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs">
              O Nosso Diferencial
            </p>
            <h2
              id="laser-heading"
              className="mt-3 font-heading text-[1.75rem] font-bold leading-tight tracking-tight text-plum-foreground sm:text-4xl md:text-5xl"
            >
              Depilação a laser
              <br />
              <span className="text-rose">em peles negras</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-plum-foreground/70 sm:text-base md:text-lg">
              A depilação a laser em peles negras e escuras requer conhecimento
              específico e experiência dedicada. Na Bella Skin – G&M,
              especializámo-nos neste tipo de tratamento, oferecendo uma
              abordagem cuidadosa e personalizada.
            </p>
          </div>

          <div className="mt-10 space-y-4 lg:mt-0">
            {FEATURES.map((feature) => (
              <div
                key={feature.number}
                className="rounded-2xl border border-plum-foreground/8 bg-plum-foreground/[0.04] p-5 backdrop-blur-sm sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="shrink-0 font-heading text-2xl font-bold text-gold/40 sm:text-3xl" aria-hidden="true">
                    {feature.number}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-plum-foreground sm:text-base">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-plum-foreground/60 sm:text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <a
              href={whatsappBookingUrl("Depilação a Laser")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-[15px] font-semibold text-plum shadow-lg shadow-gold/15 transition-all hover:bg-gold/90 active:scale-[0.98] sm:h-14 sm:w-auto sm:text-base"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Saber Mais via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
