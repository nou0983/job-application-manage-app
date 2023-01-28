import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <div>sharedLayout.route</div>
      <Outlet />
    </>
  );
};

export default SharedLayout;
