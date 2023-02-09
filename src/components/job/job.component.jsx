import Wrapper from "./job.styles";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaDirections,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleEditJob } from "../../features/job/jobSlice";
import { deleteJob } from "../../features/job/jobSlice";
import moment from "moment";

const Job = (props) => {
  const dispatch = useDispatch();
  const { _id, company, position, jobLocation, jobType, createdAt, status } =
    props;
  const date = moment(createdAt).format("Do MMM YYYY");

  return (
    <Wrapper>
      <header>
        <span className="main-icon">{company.charAt(0)}</span>
        <div>
          <h5>{position}</h5>
          <h6>{company}</h6>
        </div>
      </header>
      <footer className="info-container">
        <div className="info">
          <FaLocationArrow />
          <h6>{jobLocation}</h6>
        </div>
        <div className="info">
          <FaCalendarAlt />
          <h6>{date}</h6>
        </div>
        <div className="info">
          <FaBriefcase />
          <h6>{jobType}</h6>
        </div>
        <div className="info">
          <FaDirections />
          <h6 className={`status ${status}`}>{status}</h6>
        </div>
        <div>
          <Link
            to="/add-job"
            className="btn btn-edit"
            onClick={() => {
              dispatch(
                toggleEditJob({
                  position,
                  company,
                  jobLocation,
                  jobType,
                  status,
                  editJobId: _id,
                })
              );
            }}
          >
            edit
          </Link>
          <button
            type="button"
            className="btn btn-delete"
            onClick={() => dispatch(deleteJob(_id))}
          >
            delete
          </button>
        </div>
      </footer>
    </Wrapper>
  );
};

export default Job;
