import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Progetti</h1>
          <p className="text-sm text-muted-foreground">
            Connessione → RdE → GAUDÌ → Officina.
          </p>
        </div>
        <Button asChild>
          <Link href="/projects/new">Nuovo progetto</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Elenco</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Nessun progetto. Crea il primo.
        </CardContent>
      </Card>
    </div>
  );
}
