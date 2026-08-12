import { Droplets, Radar, Zap } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-xl bg-navy-foreground/10">
                <Radar className="size-5" />
              </span>
              <span className="font-display text-[1.05rem] font-bold tracking-tight">
                Observatorio RD
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
              Proyecto académico sobre servicios básicos y participación ciudadana en República
              Dominicana.
            </p>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold tracking-[0.14em] text-navy-foreground/60">
              PROYECTO
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
              <li>
                <a href="#como-funciona" className="hover:text-navy-foreground">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-navy-foreground">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-navy-foreground">
                  Metodología
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-semibold tracking-[0.14em] text-navy-foreground/60">
              SERVICIOS
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-navy-foreground/80">
              <li className="flex items-center gap-2">
                <Zap className="size-4 text-energy" />
                Electricidad
              </li>
              <li className="flex items-center gap-2">
                <Droplets className="size-4 text-water" />
                Agua potable
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 rounded-xl border border-navy-foreground/15 bg-navy-foreground/5 px-4 py-3 text-xs text-navy-foreground/75">
          Los datos y resultados utilizados en esta demostración son simulados.
        </p>

        <p className="mt-6 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/60">
          Proyecto académico · República Dominicana · 2026
        </p>
      </div>
    </footer>
  );
}