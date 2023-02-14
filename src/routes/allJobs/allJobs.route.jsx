import { useSelector, useDispatch } from "react-redux";
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
import { useEffect, useState, useMemo } from "react";
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
    totalJobs,
    numOfPages,
    page,
  } = useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const [localSearch, setLocalSearch] = useState("");

  useEffect(() => {
    dispatch(fetchAllJobs());
    // eslint-disable-next-line
  }, [search, searchStatus, searchType, sort, page]);

  const handleChange = (e) => {
    const newValue = {
      name: e.target.name,
      value: e.target.value,
    };
    dispatch(updateFilters(newValue));
  };

  const debounce = () => {
    let timeOutId;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        handleChange(e);
      }, 1000);
    };
  };

  const optimisedDebounce = useMemo(
    () => debounce(),
    // eslint-disable-next-line
    []
  );

  return (
    <section>
      <div className="box-style">
        <h3>search form</h3>
        <form>
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimisedDebounce}
          />
          <FormRowSelect
            options={["all", ...statusOptions]}
            name="searchStatus"
            text="status"
            value={searchStatus}
            handleChange={handleChange}
          />
          <FormRowSelect
            options={["all", ...jobTypeOptions]}
            name="searchType"
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
            onClick={() => {
              setLocalSearch("");
              dispatch(clearFilters());
            }}
          >
            clear filters
          </button>
        </form>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <JobsContainer
          jobs={jobs}
          numOfPages={numOfPages}
          totalJobs={totalJobs}
        />
      )}
    </section>
  );
};
export default AllJobs;
