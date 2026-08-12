import { Info, MessageSquareText, Radar, Search } from "lucide-react";

const steps = [
  {
    step: "01",
    kicker: "Comparte",
    icon: <MessageSquareText className="size-5" />,
    title: "Cuéntanos tu experiencia",
    text: "Selecciona el servicio, tu zona y describe brevemente lo ocurrido.",
  },
  {
    step: "02",
    kicker: "Analizamos",
    icon: <Search className="size-5" />,
    title: "Agrupamos la información",
    text: "Los reportes pueden utilizarse junto con otras fuentes para identificar patrones y tendencias.",
  },
  {
    step: "03",
    kicker: "Observamos",
    icon: <Radar className="size-5" />,
    title: "Identificamos señales",
    text: "Los cambios repetidos pueden ayudar a señalar zonas que necesitan mayor atención.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-t border-border bg-card">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-16 sm:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-primary">CÓMO FUNCIONA</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
            De una experiencia individual a una señal colectiva
          </h2>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[3.1rem] hidden h-px bg-border lg:block"
          />
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative rounded-2xl border border-border bg-background p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-navy text-navy-foreground">
                    {s.icon}
                  </span>
                  <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground">
                    {s.step} — {s.kicker.toUpperCase()}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="sobre"
          className="mt-10 flex flex-col gap-3 rounded-2xl border border-water/40 bg-water-soft p-6 sm:flex-row sm:items-start sm:gap-4"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-water/25 text-water-foreground">
            <Info className="size-5" />
          </span>
          <div>
            <h3 className="font-display text-base font-bold text-navy">
              Una señal no es una confirmación
            </h3>
            <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-water-foreground/90">
              El aumento de reportes o comentarios sobre una zona puede indicar que algo merece
              atención, pero siempre debe verificarse utilizando información oficial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}