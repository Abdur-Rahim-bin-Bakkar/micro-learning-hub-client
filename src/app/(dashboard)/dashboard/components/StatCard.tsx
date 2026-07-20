import { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
};

export default function StatCard({ title, value, icon: Icon, color = "cyan" }: StatCardProps) {
  const colors: Record<string, string> = {
    cyan: "from-cyan-500 to-blue-600 shadow-cyan-500/20",
    purple: "from-purple-500 to-pink-600 shadow-purple-500/20",
    green: "from-green-500 to-emerald-600 shadow-green-500/20",
    orange: "from-orange-500 to-red-600 shadow-orange-500/20",
    yellow: "from-yellow-500 to-amber-600 shadow-yellow-500/20",
    blue: "from-blue-500 to-indigo-600 shadow-blue-500/20",
  };

  const gradient = colors[color] || colors.cyan;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
      <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-300 group-hover:bg-cyan-500/20" />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <h3 className="mt-2 text-3xl font-bold text-white">{value}</h3>
        </div>
        <div className={`rounded-xl bg-gradient-to-br ${gradient} p-3 shadow-lg`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
}
