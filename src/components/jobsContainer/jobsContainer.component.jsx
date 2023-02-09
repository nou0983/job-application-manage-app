import Wrapper from "./jobsContainer.styles";
import Job from "../job/job.component";

const JobsContainer = ({ jobs }) => {
  return (
    <Wrapper>
      <h4>
        {jobs?.length > 0
          ? `${jobs.length} jobs found`
          : "no job to display ..."}
      </h4>
      <ul className="job-list">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default JobsContainer;
