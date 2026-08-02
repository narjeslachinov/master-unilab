import { AboutStat } from "../../type/home.type";

type Props = {
  stat: AboutStat;
};

export default function StatCard({ stat }: Props) {
  return (
    <div className="rounded-2xl border border-white/30 bg-white/20 p-2 text-center shadow-lg backdrop-blur-md">
      <h3 className="heading heading5">{stat.value}</h3>
      <p className="customeSmallText">{stat.title}</p>
    </div>
  );
}
