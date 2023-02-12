import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CONSTANTS } from "../../index.styles";

const AreaCharts = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" stroke={CONSTANTS.grey700} />
        <YAxis stroke={CONSTANTS.grey700} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="count"
          stroke={CONSTANTS.primary500}
          fill={CONSTANTS.primary500}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaCharts;
