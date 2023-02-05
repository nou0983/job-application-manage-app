import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Private = ({ children }) => {
  const { user } = useSelector((store) => store.user);

  if (user) {
    return children;
  }

  return <Navigate to="/landing" />;
};

export default Private;
