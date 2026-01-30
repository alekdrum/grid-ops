import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Impostazioni</h1>
        <p className="text-sm text-muted-foreground">
          (Demo) Qui aggiungeremo account, piano e preferenze.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Account</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Login e gestione utenti arriveranno con Firebase Auth.
        </CardContent>
      </Card>
    </div>
  );
}
