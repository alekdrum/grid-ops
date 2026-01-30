import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Nuovo progetto</h1>
          <p className="text-sm text-muted-foreground">
            Crea un progetto FV in MT (e-Distribuzione).
          </p>
        </div>
        <Badge variant="secondary">FV MT • e-Distribuzione</Badge>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Dati principali</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Nome progetto" placeholder="Es. FV Cremona 800 kWp" />
            <Field label="Comune" placeholder="Es. Cremona" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Field label="Potenza (kWp)" placeholder="Es. 800" />
            <SelectField label="Fascia potenza" options={["100–500", "500–1000", "1000–5000"]} />
            <SelectField label="Modalità" options={["Autoconsumo + immissione"]} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <SelectField label="DSO" options={["e-Distribuzione"]} />
            <SelectField label="Tensione" options={["MT"]} />
          </div>

          <div className="rounded-lg border bg-muted/30 p-3 text-sm text-muted-foreground">
            (Demo) Nel prossimo step colleghiamo il form a Firebase e generiamo le pratiche automaticamente.
          </div>

          <div className="flex items-center justify-end gap-2">
            <button className="rounded-md border px-3 py-2 text-sm">Annulla</button>
            <button className="rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground">
              Crea progetto
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="space-y-1">
      <div className="text-sm font-medium">{label}</div>
      <input
        placeholder={placeholder}
        className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="space-y-1">
      <div className="text-sm font-medium">{label}</div>
      <select className="h-10 w-full rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring">
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
