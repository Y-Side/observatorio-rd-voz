import { Droplets, MapPin, Home, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-card">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border"
      />
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-primary">
            SERVICIOS BÁSICOS · REPÚBLICA DOMINICANA
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            Tu experiencia también cuenta.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Comparte cómo está funcionando el servicio de electricidad o agua potable en tu comunidad
            y ayuda a identificar tendencias que puedan requerir atención.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="cta" size="xl" asChild>
              <a href="#participa">Compartir mi experiencia</a>
            </Button>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-primary"
            >
              Conocer el proyecto
              <ArrowRight className="size-4" />
            </a>
          </div>

          <p className="mt-6 max-w-md text-xs leading-relaxed text-muted-foreground">
            Tu reporte se utiliza únicamente como información de apoyo para este proyecto académico.
          </p>
        </div>

        <HeroArt />
      </div>
    </section>
  );
}

function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="relative rounded-3xl border border-border bg-background p-6 shadow-card sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-[0.65rem] font-semibold tracking-[0.14em] text-muted-foreground">
            COMUNIDADES PARTICIPANDO
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2.5 py-1 text-[0.65rem] font-semibold text-success">
            <span className="size-1.5 rounded-full bg-success" />
            Demostración
          </span>
        </div>

        <div className="relative mt-6 aspect-[4/3] w-full">
          <svg viewBox="0 0 400 300" className="size-full" role="img" aria-label="Ilustración del mapa de República Dominicana con reportes ciudadanos">
            <defs>
              <clipPath id="rd-shape">
                <path d="M32 176c14-24 30-42 58-56 24-12 44-8 66-16 20-7 34-22 58-24 26-2 44 10 66 8 20-2 32-14 52-10 18 4 26 18 34 34 8 16 6 30-6 42-14 14-36 16-56 26-22 11-34 30-58 36-26 7-48-4-72-2-26 2-44 16-70 12-24-4-40-18-46-38-4-14-2-14 4-12z" />
              </clipPath>
            </defs>
            <g clipPath="url(#rd-shape)">
              <rect width="400" height="300" fill="var(--color-accent)" />
              <g stroke="var(--color-primary)" strokeOpacity="0.18" strokeWidth="1">
                {Array.from({ length: 16 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 26} y1="0" x2={i * 26} y2="300" />
                ))}
                {Array.from({ length: 12 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 26} x2="400" y2={i * 26} />
                ))}
              </g>
            </g>
            <path
              d="M32 176c14-24 30-42 58-56 24-12 44-8 66-16 20-7 34-22 58-24 26-2 44 10 66 8 20-2 32-14 52-10 18 4 26 18 34 34 8 16 6 30-6 42-14 14-36 16-56 26-22 11-34 30-58 36-26 7-48-4-72-2-26 2-44 16-70 12-24-4-40-18-46-38-4-14-2-14 4-12z"
              fill="none"
              stroke="var(--color-navy)"
              strokeOpacity="0.35"
              strokeWidth="2"
            />
            <g>
              <circle cx="150" cy="180" r="18" fill="var(--color-primary)" fillOpacity="0.12" />
              <circle cx="150" cy="180" r="6" fill="var(--color-primary)" />
              <circle cx="252" cy="128" r="16" fill="var(--color-energy)" fillOpacity="0.25" />
              <circle cx="252" cy="128" r="5.5" fill="var(--color-energy)" />
              <circle cx="320" cy="180" r="16" fill="var(--color-water)" fillOpacity="0.2" />
              <circle cx="320" cy="180" r="5.5" fill="var(--color-water)" />
              <circle cx="96" cy="150" r="4.5" fill="var(--color-navy)" fillOpacity="0.5" />
              <circle cx="200" cy="212" r="4.5" fill="var(--color-navy)" fillOpacity="0.5" />
            </g>
          </svg>

          <span className="absolute left-1 top-2 inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5 text-[0.65rem] font-semibold text-navy shadow-soft">
            <Home className="size-3.5 text-primary" />
            Barrios y sectores
          </span>
          <span className="absolute bottom-1 right-2 inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2.5 py-1.5 text-[0.65rem] font-semibold text-navy shadow-soft">
            <MapPin className="size-3.5 text-water" />
            32 provincias
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <MiniCard
            icon={<Zap className="size-4" />}
            tone="energy"
            title="Electricidad"
            status="Servicio inestable"
          />
          <MiniCard
            icon={<Droplets className="size-4" />}
            tone="water"
            title="Agua potable"
            status="Servicio normal"
          />
        </div>
      </div>
    </div>
  );
}

function MiniCard({
  icon,
  tone,
  title,
  status,
}: {
  icon: React.ReactNode;
  tone: "energy" | "water";
  title: string;
  status: string;
}) {
  const toneClasses =
    tone === "energy"
      ? "border-energy/40 bg-energy-soft text-energy-foreground"
      : "border-water/40 bg-water-soft text-water-foreground";
  const badgeClasses = tone === "energy" ? "bg-energy/25" : "bg-water/25";

  return (
    <div className={`rounded-2xl border p-3.5 ${toneClasses}`}>
      <div className="flex items-center gap-2">
        <span className={`flex size-7 items-center justify-center rounded-lg ${badgeClasses}`}>
          {icon}
        </span>
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <p className="mt-2 text-xs opacity-80">{status}</p>
    </div>
  );
}