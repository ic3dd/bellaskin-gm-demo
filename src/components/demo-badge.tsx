"use client";

export function DemoBadge() {
  return (
    <div className="fixed bottom-5 left-5 z-50" aria-label="Indicador de demonstração">
      <span className="inline-flex items-center rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.1em] text-muted-foreground/50 backdrop-blur-sm transition-opacity hover:text-muted-foreground/80">
        Demonstração
      </span>
    </div>
  );
}
