import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <p>Error 404</p>
      <p>Page Not Found</p>
      <Link to="/">Go Back To Home Page</Link>
    </div>
  );
};
export default NotFound;
