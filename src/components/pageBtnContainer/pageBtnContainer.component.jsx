import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrentPage } from "../../features/allJobs/allJobsSlice";
import Wrapper from "./pageBtnContainer.styles";

const PageBtnContainer = () => {
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);

  const handlePrevPage = () => {
    if (page > 1) {
      dispatch(updateCurrentPage(page - 1));
    }
  };

  const handleNextPage = () => {
    if (page < numOfPages) {
      dispatch(updateCurrentPage(page + 1));
    }
  };

  return (
    <Wrapper>
      <button type="button" className="btn-page" onClick={handlePrevPage}>
        <HiChevronDoubleLeft />
        <span>prev</span>
      </button>
      <div className="btn-container">
        {pages.map((num) => {
          return (
            <button
              key={num}
              type="button"
              className={`btn-number ${page === num && "active"}`}
              onClick={() => dispatch(updateCurrentPage(num))}
            >
              {num}
            </button>
          );
        })}
      </div>
      <button type="button" className="btn-page" onClick={handleNextPage}>
        <span>next</span>
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
