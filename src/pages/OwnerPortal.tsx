import { useEffect, useState } from "react";
import { blink } from "@/lib/blink";
import { useAuth } from "@/hooks/useAuth";
import { SEO } from "@/components/layout/SEO";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  TrendingDown,
  Home,
  DollarSign,
  Calendar,
  LogOut,
  Lock,
  AlertCircle,
} from "lucide-react";

interface PropertyReport {
  id: string;
  userId: string;
  propertyAddress: string;
  reportMonth: string;
  grossRent: number;
  expenses: number;
  netIncome: number;
  vacancyDays: number;
  maintenanceNotes: string;
  occupancyStatus: string;
  createdAt: string;
}

function formatCurrency(val: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val);
}

function formatMonth(yyyymm: string) {
  const [y, m] = yyyymm.split("-");
  return new Date(Number(y), Number(m) - 1).toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

// ─── Login Screen ──────────────────────────────────────────────────────────────
function LoginScreen() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
            <Lock size={28} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-3xl font-bold font-serif">Owner Portal</h1>
            <p className="text-muted-foreground mt-2">
              Sign in to view your property performance reports.
            </p>
          </div>
        </div>

        <div className="bg-secondary/50 border border-border rounded-2xl p-8 space-y-6">
          <div className="space-y-3 text-left text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span>Monthly income & expense summaries</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span>Occupancy status and vacancy tracking</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span>Maintenance notes and property updates</span>
            </div>
          </div>

          <Button
            className="w-full rounded-full h-12 text-base"
            onClick={() => blink.auth.login(window.location.href)}
          >
            Sign In to Your Portal
          </Button>

          <p className="text-xs text-muted-foreground">
            Don't have an account? Contact{" "}
            <a href="mailto:info@vestasoundgroup.com" className="underline hover:text-foreground transition-colors">
              Vesta Sound
            </a>{" "}
            to get access.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Empty State ───────────────────────────────────────────────────────────────
function EmptyReports() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center space-y-4">
      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center">
        <AlertCircle size={28} className="text-muted-foreground" />
      </div>
      <div>
        <h3 className="text-xl font-bold font-serif">No Reports Yet</h3>
        <p className="text-muted-foreground mt-1 max-w-sm">
          Your property reports will appear here once your Vesta Sound manager publishes them.
        </p>
      </div>
      <a href="tel:+14254492733">
        <Button variant="outline" className="rounded-full mt-2">
          Call Us: (425) 449-2733
        </Button>
      </a>
    </div>
  );
}

// ─── Report Card ───────────────────────────────────────────────────────────────
function ReportCard({ report }: { report: PropertyReport }) {
  const isPositive = report.netIncome >= 0;

  return (
    <div className="bg-background border border-border rounded-2xl p-6 space-y-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
            <Home size={18} className="text-primary" />
          </div>
          <div>
            <h3 className="font-bold font-serif leading-tight">{report.propertyAddress}</h3>
            <div className="flex items-center gap-1.5 mt-1">
              <Calendar size={12} className="text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{formatMonth(report.reportMonth)}</span>
            </div>
          </div>
        </div>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${
            report.occupancyStatus === "occupied"
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {report.occupancyStatus === "occupied" ? "Occupied" : "Vacant"}
        </span>
      </div>

      {/* Financials */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-secondary/50 rounded-xl p-3 text-center">
          <p className="text-xs text-muted-foreground mb-1">Gross Rent</p>
          <p className="font-bold font-serif text-sm">{formatCurrency(report.grossRent)}</p>
        </div>
        <div className="bg-secondary/50 rounded-xl p-3 text-center">
          <p className="text-xs text-muted-foreground mb-1">Expenses</p>
          <p className="font-bold font-serif text-sm text-red-600">{formatCurrency(report.expenses)}</p>
        </div>
        <div className={`rounded-xl p-3 text-center ${isPositive ? "bg-green-50" : "bg-red-50"}`}>
          <p className="text-xs text-muted-foreground mb-1">Net Income</p>
          <div className="flex items-center justify-center gap-1">
            {isPositive ? (
              <TrendingUp size={12} className="text-green-600" />
            ) : (
              <TrendingDown size={12} className="text-red-600" />
            )}
            <p className={`font-bold font-serif text-sm ${isPositive ? "text-green-700" : "text-red-700"}`}>
              {formatCurrency(report.netIncome)}
            </p>
          </div>
        </div>
      </div>

      {/* Vacancy */}
      {report.vacancyDays > 0 && (
        <div className="flex items-center gap-2 text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
          <AlertCircle size={14} />
          <span>{report.vacancyDays} vacancy day{report.vacancyDays !== 1 ? "s" : ""} this month</span>
        </div>
      )}

      {/* Notes */}
      {report.maintenanceNotes && (
        <div className="border-t border-border pt-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Manager Notes</p>
          <p className="text-sm text-foreground/80 leading-relaxed">{report.maintenanceNotes}</p>
        </div>
      )}
    </div>
  );
}

// ─── Dashboard ─────────────────────────────────────────────────────────────────
function Dashboard({ userId, userEmail }: { userId: string; userEmail: string }) {
  const [reports, setReports] = useState<PropertyReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReports() {
      try {
        const data = await blink.db.propertyReports.list({
          where: { userId },
          orderBy: { reportMonth: "desc" },
        });
        setReports(data as unknown as PropertyReport[]);
      } catch (e) {
        console.error("Failed to fetch reports", e);
      } finally {
        setLoading(false);
      }
    }
    fetchReports();
  }, [userId]);

  // Summary totals (latest 12 months)
  const totalNet = reports.reduce((s, r) => s + Number(r.netIncome), 0);
  const totalGross = reports.reduce((s, r) => s + Number(r.grossRent), 0);
  const totalExpenses = reports.reduce((s, r) => s + Number(r.expenses), 0);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10 space-y-10">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-serif">Owner Portal</h1>
          <p className="text-muted-foreground mt-1 text-sm">{userEmail}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full flex items-center gap-2 shrink-0"
          onClick={() => blink.auth.signOut()}
        >
          <LogOut size={14} /> Sign Out
        </Button>
      </div>

      {/* Summary Stats */}
      {reports.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Total Gross Rent", value: formatCurrency(totalGross), icon: DollarSign, color: "text-primary" },
            { label: "Total Expenses", value: formatCurrency(totalExpenses), icon: TrendingDown, color: "text-red-500" },
            { label: "Net Income", value: formatCurrency(totalNet), icon: TrendingUp, color: "text-green-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-secondary/50 border border-border rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center border border-border shrink-0">
                <stat.icon size={18} className={stat.color} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="font-bold font-serif">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Reports */}
      <div>
        <h2 className="text-lg font-bold font-serif mb-5">Monthly Reports</h2>
        {loading ? (
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="h-48 bg-secondary/50 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : reports.length === 0 ? (
          <EmptyReports />
        ) : (
          <div className="space-y-4">
            {reports.map((r) => (
              <ReportCard key={r.id} report={r} />
            ))}
          </div>
        )}
      </div>

      {/* Footer note */}
      <div className="text-center text-xs text-muted-foreground border-t border-border pt-6">
        Questions about your report?{" "}
        <a href="tel:+14254492733" className="underline hover:text-foreground transition-colors">
          Call (425) 449-2733
        </a>{" "}
        or{" "}
        <a href="/contact" className="underline hover:text-foreground transition-colors">
          send us a message
        </a>.
      </div>
    </div>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function OwnerPortal() {
  const { user, isLoading } = useAuth();

  return (
    <>
      <SEO
        title="Owner Portal — Vesta Sound Property Group"
        description="Property owners: sign in to view your monthly performance reports, financials, and maintenance updates."
      />

      {isLoading ? (
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      ) : !user ? (
        <LoginScreen />
      ) : (
        <Dashboard userId={user.id} userEmail={user.email} />
      )}
    </>
  );
}
