import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FormRow, FormRowSelect } from "../../components/index.component";
import Wrapper from "./addJob.styles";
import { clearValues, updateValue, addJob } from "../../features/job/jobSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AddJob = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateValue({ name: "jobLocation", value: user.location }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    dispatch(addJob({ position, company, jobLocation, status, jobType }));
    setTimeout(() => {
      navigate("/all-jobs");
    }, 2000);
  };

  const handleChange = (e) => {
    const newValue = {
      name: e.target.name,
      value: e.target.value,
    };
    dispatch(updateValue(newValue));
  };

  return (
    <Wrapper className="box-style">
      <h3>{isEditing ? "edit" : "add"} job</h3>
      <form onSubmit={handleSubmit}>
        <FormRow
          type="text"
          name="position"
          value={position}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="company"
          value={company}
          handleChange={handleChange}
        />
        <FormRow
          type="text"
          name="jobLocation"
          text="job location"
          value={jobLocation}
          handleChange={handleChange}
        />
        <FormRowSelect
          options={statusOptions}
          name="status"
          value={status}
          handleChange={handleChange}
        />
        <FormRowSelect
          options={jobTypeOptions}
          name="jobType"
          value={jobType}
          text="job type"
          handleChange={handleChange}
        />

        <div className="btn-container">
          <button
            type="button"
            className="btn btn-block btn-clear"
            onClick={() => dispatch(clearValues())}
          >
            clear
          </button>
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? <span className="spinner"></span> : "submit"}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
