import { whatsappBookingUrl } from "@/lib/constants";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-plum"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 70% 0%, rgba(107,45,91,0.8) 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(196,162,101,0.12) 0%, transparent 50%), radial-gradient(ellipse at 100% 80%, rgba(201,160,160,0.1) 0%, transparent 40%)",
        }}
      />
      <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/3 -translate-y-1/4 rounded-full bg-gold/8 blur-3xl sm:h-96 sm:w-96" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/4 translate-y-1/4 rounded-full bg-rose/10 blur-3xl sm:h-72 sm:w-72" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24 md:pb-28 md:pt-32">
        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold sm:text-xs md:text-sm">
          Clínica de Estética · Amadora
        </p>

        <h1
          id="hero-heading"
          className="mt-4 font-heading text-[2.5rem] font-bold leading-[1.05] tracking-tight text-plum-foreground sm:mt-5 sm:text-6xl md:text-7xl lg:text-8xl"
        >
          A sua beleza,
          <br />
          <span className="text-rose">o nosso cuidado</span>
        </h1>

        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-plum-foreground/70 sm:mt-6 sm:text-lg md:text-xl md:leading-relaxed">
          Especialistas em depilação a laser em peles negras, cuidados de pele e
          beleza. Clientes de várias regiões de Portugal.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={whatsappBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-gold px-8 text-[15px] font-semibold text-plum shadow-lg shadow-gold/20 transition-all hover:bg-gold/90 hover:shadow-xl active:scale-[0.98] sm:h-14 sm:w-auto sm:text-base"
          >
            <WhatsAppIcon />
            Marcar Consulta
          </a>
          <a
            href="#servicos"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-plum-foreground/20 px-8 text-[15px] font-medium text-plum-foreground/80 transition-all hover:border-plum-foreground/40 hover:text-plum-foreground active:scale-[0.98] sm:h-14 sm:w-auto sm:text-base"
          >
            Ver Serviços
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3 sm:mt-10">
          <div className="h-px flex-1 max-w-12 bg-plum-foreground/15" aria-hidden="true" />
          <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-plum-foreground/40 sm:text-xs">
            Depilação Laser · Pele · Unhas · Sobrancelhas
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
