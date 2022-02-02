import { Link } from "react-router-dom";

const NotFoundPage = (props) => {
  return (
    <>
      <p>
        404
        <br />
        It seems that you are lost.
      </p>
      <Link to="/">Return Home</Link>
    </>
  );
};

export default NotFoundPage;
