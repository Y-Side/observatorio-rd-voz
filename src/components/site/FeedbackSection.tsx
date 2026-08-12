import { useState } from "react";
import { Clock, Droplets, Info, MapPinned, Send, ShieldCheck, Timer, UserCheck, Zap } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

type Service = "electricidad" | "agua";
type Experience = "mala" | "regular" | "buena";

const PROVINCES = [
  "Distrito Nacional",
  "Santo Domingo",
  "Santiago",
  "La Vega",
  "San Cristóbal",
  "San Pedro de Macorís",
  "La Romana",
  "Puerto Plata",
];

const SITUATIONS: Record<Service, string[]> = {
  electricidad: ["Interrupción del servicio", "Servicio inestable", "Bajo voltaje", "Otro"],
  agua: ["Falta de agua", "Baja presión", "Servicio irregular", "Otro"],
};

const TIMES = ["Ahora", "Hoy", "Ayer", "Otro momento reciente"];

const EXPERIENCES: { value: Experience; emoji: string; label: string }[] = [
  { value: "mala", emoji: "😕", label: "Mala" },
  { value: "regular", emoji: "😐", label: "Regular" },
  { value: "buena", emoji: "🙂", label: "Buena" },
];

type Errors = Partial<Record<"service" | "province" | "area" | "experience" | "situation" | "time", string>>;

const EMPTY = {
  service: null as Service | null,
  province: "",
  area: "",
  experience: null as Experience | null,
  situation: "",
  time: "",
  comment: "",
};

export function FeedbackSection() {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<Errors>({});

  const set = <K extends keyof typeof EMPTY>(key: K, value: (typeof EMPTY)[K]) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const next: Errors = {};
    if (!form.service) next.service = "Selecciona un servicio.";
    if (!form.province) next.province = "Selecciona tu provincia.";
    if (!form.area.trim()) next.area = "Indica tu municipio o sector.";
    if (!form.experience) next.experience = "Cuéntanos cómo ha sido tu experiencia.";
    if (!form.situation) next.situation = "Selecciona qué ocurrió.";
    if (!form.time) next.time = "Indica cuándo ocurrió.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    toast.success("¡Gracias por participar!", {
      description: "Tu reporte fue registrado correctamente en esta demostración.",
    });
    setForm(EMPTY);
  };

  return (
    <section id="participa" className="bg-background">
      <div className="mx-auto grid w-full max-w-[1240px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1fr] lg:gap-16 lg:py-24">
        <div className="lg:pt-4">
          <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-primary">PARTICIPA</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
            Cuéntanos cómo está el servicio en tu zona
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Completa este formulario con tu experiencia reciente. No necesitas escribir un reporte
            técnico: solo dinos qué servicio utilizas, dónde estás y cómo ha sido tu experiencia.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              { icon: <Timer className="size-4" />, text: "Toma menos de un minuto" },
              { icon: <UserCheck className="size-4" />, text: "No requiere crear una cuenta" },
              { icon: <MapPinned className="size-4" />, text: "Ayuda a identificar patrones por comunidad" },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-primary">
                  {item.icon}
                </span>
                <span className="text-sm font-medium text-navy">{item.text}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 inline-flex items-start gap-2 rounded-xl border border-border bg-card px-4 py-3 text-xs text-muted-foreground">
            <ShieldCheck className="mt-px size-4 shrink-0 text-success" />
            No incluyas información personal sensible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
        >
          <h3 className="font-display text-xl font-bold text-navy">Enviar feedback</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Comparte tu experiencia con un servicio básico.
          </p>

          <div className="mt-7 space-y-7">
            <Field label="¿Sobre qué servicio quieres opinar?" error={errors.service}>
              <div className="grid grid-cols-2 gap-3">
                <ServiceCard
                  tone="energy"
                  icon={<Zap className="size-5" />}
                  label="Electricidad"
                  selected={form.service === "electricidad"}
                  onSelect={() => {
                    set("service", "electricidad");
                    setForm((f) => ({ ...f, service: "electricidad", situation: "" }));
                  }}
                />
                <ServiceCard
                  tone="water"
                  icon={<Droplets className="size-5" />}
                  label="Agua potable"
                  selected={form.service === "agua"}
                  onSelect={() => {
                    set("service", "agua");
                    setForm((f) => ({ ...f, service: "agua", situation: "" }));
                  }}
                />
              </div>
            </Field>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Provincia" error={errors.province} htmlFor="provincia">
                <select
                  id="provincia"
                  value={form.province}
                  onChange={(e) => set("province", e.target.value)}
                  className={inputClasses(!!errors.province)}
                >
                  <option value="">Selecciona una provincia</option>
                  {PROVINCES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Municipio o sector" error={errors.area} htmlFor="area">
                <input
                  id="area"
                  value={form.area}
                  onChange={(e) => set("area", e.target.value)}
                  placeholder="Ej. Santo Domingo Este"
                  className={inputClasses(!!errors.area)}
                />
              </Field>
            </div>

            <Field label="¿Cómo ha sido tu experiencia?" error={errors.experience}>
              <div className="grid grid-cols-3 gap-3">
                {EXPERIENCES.map((exp) => {
                  const active = form.experience === exp.value;
                  return (
                    <button
                      key={exp.value}
                      type="button"
                      aria-pressed={active}
                      aria-label={`Experiencia ${exp.label}`}
                      onClick={() => set("experience", exp.value)}
                      className={`flex flex-col items-center gap-1.5 rounded-2xl border px-2 py-3.5 text-sm font-semibold transition-colors ${
                        active
                          ? "border-primary bg-accent text-navy"
                          : "border-border bg-card text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      <span aria-hidden className="text-xl leading-none">
                        {exp.emoji}
                      </span>
                      {exp.label}
                    </button>
                  );
                })}
              </div>
            </Field>

            <Field label="¿Qué ocurrió?" error={errors.situation}>
              {form.service ? (
                <div className="flex flex-wrap gap-2">
                  {SITUATIONS[form.service].map((s) => (
                    <Chip
                      key={s}
                      label={s}
                      active={form.situation === s}
                      onClick={() => set("situation", s)}
                    />
                  ))}
                </div>
              ) : (
                <p className="rounded-xl border border-dashed border-border bg-secondary/60 px-4 py-3 text-xs text-muted-foreground">
                  Selecciona primero un servicio para ver las opciones.
                </p>
              )}
            </Field>

            <Field label="Cuéntanos un poco más" htmlFor="comentario" optional>
              <textarea
                id="comentario"
                rows={4}
                maxLength={500}
                value={form.comment}
                onChange={(e) => set("comment", e.target.value)}
                placeholder="Describe brevemente lo que has notado con el servicio..."
                className={`${inputClasses(false)} h-auto resize-none py-3`}
              />
              <p className="mt-1.5 text-right text-xs text-muted-foreground">
                {form.comment.length}/500 caracteres
              </p>
            </Field>

            <Field label="¿Cuándo ocurrió?" error={errors.time}>
              <div className="flex flex-wrap gap-2">
                {TIMES.map((t) => (
                  <Chip key={t} label={t} active={form.time === t} onClick={() => set("time", t)} icon />
                ))}
              </div>
            </Field>
          </div>

          <p className="mt-8 flex items-start gap-2 rounded-xl bg-secondary px-4 py-3 text-xs leading-relaxed text-muted-foreground">
            <Info className="mt-px size-4 shrink-0 text-primary" />
            Este reporte no constituye una denuncia oficial ni confirma una avería. La información
            forma parte de un prototipo académico.
          </p>

          <Button type="submit" variant="cta" size="xl" className="mt-5 w-full">
            <Send className="size-4" />
            Enviar mi reporte
          </Button>
        </form>
      </div>
    </section>
  );
}

function inputClasses(hasError: boolean) {
  return `h-11 w-full rounded-xl border bg-card px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/15 ${
    hasError ? "border-destructive" : "border-input"
  }`;
}

function Field({
  label,
  error,
  children,
  htmlFor,
  optional,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  htmlFor?: string | undefined;
  optional?: boolean | undefined;
}) {
  return (
    <div>
      <div className="mb-2.5 flex items-baseline justify-between gap-3">
        <label htmlFor={htmlFor} className="text-sm font-semibold text-navy">
          {label}
        </label>
        {optional ? <span className="text-xs text-muted-foreground">Opcional</span> : null}
      </div>
      {children}
      {error ? <p className="mt-2 text-xs font-medium text-destructive">{error}</p> : null}
    </div>
  );
}

function ServiceCard({
  tone,
  icon,
  label,
  selected,
  onSelect,
}: {
  tone: "energy" | "water";
  icon: React.ReactNode;
  label: string;
  selected: boolean;
  onSelect: () => void;
}) {
  const selectedClasses =
    tone === "energy"
      ? "border-energy bg-energy-soft text-energy-foreground ring-2 ring-energy/30"
      : "border-water bg-water-soft text-water-foreground ring-2 ring-water/30";

  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={`flex flex-col items-start gap-2.5 rounded-2xl border p-4 text-left transition-colors ${
        selected
          ? selectedClasses
          : "border-border bg-card text-navy hover:border-primary/40 hover:bg-secondary/60"
      }`}
    >
      <span
        className={`flex size-10 items-center justify-center rounded-xl ${
          tone === "energy" ? "bg-energy/20 text-energy-foreground" : "bg-water/20 text-water-foreground"
        }`}
      >
        {icon}
      </span>
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );
}

function Chip({
  label,
  active,
  onClick,
  icon,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: boolean;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-colors ${
        active
          ? "border-primary bg-accent text-navy"
          : "border-border bg-card text-muted-foreground hover:border-primary/40"
      }`}
    >
      {icon ? <Clock className="size-3.5" /> : null}
      {label}
    </button>
  );
}