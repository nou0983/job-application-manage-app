import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  FormRow,
  FormRowSelect,
  Spinner,
} from "../../components/index.component";
import {
  fetchAllJobs,
  updateFilters,
  clearFilters,
} from "../../features/allJobs/allJobsSlice";
import { useEffect } from "react";
import { JobsContainer } from "../../components/index.component";

const AllJobs = () => {
  const {
    isLoading,
    jobs,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
  } = useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
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
    dispatch(fetchAllJobs());
  };

  const handleChange = (e) => {
    const newValue = {
      name: e.target.name,
      value: e.target.value,
    };
    dispatch(updateFilters(newValue));
  };

  return (
    <section>
      <div className="box-style">
        <h3>search form</h3>
        <form onSubmit={handleSubmit}>
          <FormRow
            type="text"
            name="keyword"
            value={search}
            handleChange={handleChange}
          />
          <FormRowSelect
            options={statusOptions}
            name="status"
            value={searchStatus}
            handleChange={handleChange}
          />
          <FormRowSelect
            options={jobTypeOptions}
            name="jobType"
            value={searchType}
            text="type"
            handleChange={handleChange}
          />
          <FormRowSelect
            options={sortOptions}
            name="sort"
            value={sort}
            handleChange={handleChange}
          />
          <button
            type="button"
            className="btn btn-block btn-clear"
            onClick={() => dispatch(clearFilters())}
          >
            clear filters
          </button>
        </form>
      </div>
      {isLoading ? <Spinner /> : jobs?.length && <JobsContainer jobs={jobs} />}
    </section>
  );
};
export default AllJobs;
