import { aboutStats } from "../../data/home.data";
import StatCard from "./StatCard";

export default function AboutStats() {
  return (
    <div className="grid grid-cols-2 gap-6 py-8">
      {aboutStats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}
