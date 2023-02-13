import { useState } from "react";
import { BarCharts, AreaCharts } from "../index.component";
import Wrapper from "./chartsContainer.styles";

const ChartsContainer = ({ monthlyApplications }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>monthly applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "view area chart" : "view bar chart"}
      </button>
      {barChart ? (
        <BarCharts data={monthlyApplications} />
      ) : (
        <AreaCharts data={monthlyApplications} />
      )}
    </Wrapper>
  );
};

export default ChartsContainer;
