import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { CONSTANTS } from "../../index.styles";

const BarCharts = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="date" stroke={CONSTANTS.grey700} />
        <YAxis stroke={CONSTANTS.grey700} />
        <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="count" fill={CONSTANTS.primary500} barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
