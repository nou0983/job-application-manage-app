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
    totalJobs,
    numOfPages,
    page,
  } = useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllJobs());
    // eslint-disable-next-line
  }, [search, searchStatus, searchType, sort, page]);

  const handleChange = (e) => {
    if (isLoading) return;

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
        <form>
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleChange}
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
            onClick={() => dispatch(clearFilters())}
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
