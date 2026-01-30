import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Stato pratiche, scadenze e warning.
          </p>
        </div>
        <Badge variant="secondary">Demo • e-Distribuzione</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Kpi title="Progetti attivi" value="0" />
        <Kpi title="Pratiche bloccate" value="0" />
        <Kpi title="Scadenze (7gg)" value="0" />
        <Kpi title="RdE da analizzare" value="0" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Prossime scadenze</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Nessuna scadenza.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Warning</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Nessun warning.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Kpi({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-muted-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{value}</div>
      </CardContent>
    </Card>
  );
}
