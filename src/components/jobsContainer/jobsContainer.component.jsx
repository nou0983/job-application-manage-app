import Wrapper from "./jobsContainer.styles";
import { Job, PageBtnContainer } from "../index.component";

const JobsContainer = ({ jobs, numOfPages, totalJobs }) => {
  return (
    <Wrapper>
      <h4>
        {totalJobs > 0
          ? `${totalJobs} job${totalJobs > 1 ? "s" : ""} found`
          : "no job to display ..."}
      </h4>
      <ul className="job-list">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </ul>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
