import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import StatsItem from "../statsItem/statsItem.component";
import Wrapper from "./statsContainer.styles";

const StatsContainer = ({ stats }) => {
  const { pending, interview, declined } = stats;
  const DEFAULT_STATS = [
    {
      title: "pending applications",
      count: pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#e9b949",
      bgc: "#fcefc7",
    },
    {
      title: "interviews scheduled",
      count: interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bgc: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bgc: "#ffeeee",
    },
  ];

  return (
    <Wrapper>
      {DEFAULT_STATS.map((stat, index) => {
        return <StatsItem key={index} {...stat} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
