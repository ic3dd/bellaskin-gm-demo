export function About() {
  return (
    <section
      id="sobre"
      className="relative py-16 sm:py-24 md:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="lg:grid lg:grid-cols-5 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:col-span-2 lg:mb-0" aria-hidden="true">
            <div className="relative mx-auto max-w-[280px] sm:max-w-[320px] lg:max-w-none">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-plum via-plum/95 to-plum/85">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 50% 30%, rgba(196,162,101,0.12) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(201,160,160,0.08) 0%, transparent 50%)",
                  }}
                >
                  <div className="flex h-full flex-col items-center justify-center px-8">
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-7xl font-bold text-gold/30 sm:text-8xl">G</span>
                      <span className="font-heading text-3xl font-light text-plum-foreground/20 sm:text-4xl">&</span>
                      <span className="font-heading text-7xl font-bold text-rose/30 sm:text-8xl">M</span>
                    </div>
                    <div className="mt-4 h-px w-16 bg-plum-foreground/10" />
                    <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-plum-foreground/30 sm:text-xs">
                      Gelsa & Marta
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-plum-foreground/20 sm:text-[11px]">
                      Fundadoras
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary/60 sm:text-xs">
              Sobre Nós
            </p>
            <h2
              id="about-heading"
              className="mt-2 font-heading text-[1.75rem] font-bold leading-tight tracking-tight text-plum sm:text-4xl md:text-5xl"
            >
              Gelsa Furtado
              <br />
              <span className="text-rose">&amp; Marta Alexandra</span>
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base md:text-lg md:leading-relaxed">
              <p>
                A Bella Skin – G&M nasceu da paixão de Gelsa Furtado e Marta
                Alexandra pela estética e pelo cuidado personalizado. Situadas
                em Amadora, apostam num serviço próximo, profissional e adaptado
                a cada cliente.
              </p>
              <p>
                Com um foco especial na depilação a laser em peles negras, a
                clínica tornou-se uma referência para clientes que procuram
                profissionais com experiência nesta área, recebendo pessoas de
                diversas regiões de Portugal.
              </p>
              <p>
                Na Bella Skin, cada tratamento é uma experiência pensada ao
                detalhe — desde a limpeza de pele ao design de sobrancelhas,
                passando pelo peeling e lifting de pestanas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
