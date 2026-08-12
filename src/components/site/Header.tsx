import { useState } from "react";
import { Menu, Radar, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Participa", href: "#participa" },
  { label: "Sobre el proyecto", href: "#sobre" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-card/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-navy text-navy-foreground">
            <Radar className="size-5" />
          </span>
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-navy">
            Observatorio <span className="text-primary">RD</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="cta" size="default" className="hidden rounded-xl md:inline-flex" asChild>
            <a href="#participa">
              <Send className="size-4" />
              Enviar reporte
            </a>
          </Button>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-xl border border-border text-navy md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="mx-auto flex w-full max-w-[1240px] flex-col px-5 py-3 sm:px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-navy hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button variant="cta" size="xl" className="mt-2 w-full" asChild>
              <a href="#participa" onClick={() => setOpen(false)}>
                <Send className="size-4" />
                Enviar reporte
              </a>
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}