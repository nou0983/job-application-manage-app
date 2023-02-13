import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";
import {
  Spinner,
  StatsContainer,
  ChartsContainer,
} from "../../components/index.component";

const Stats = () => {
  const { isLoading, stats, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <StatsContainer stats={stats} />
      {monthlyApplications.length > 0 && (
        <ChartsContainer monthlyApplications={monthlyApplications} />
      )}
    </>
  );
};

export default Stats;
