import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-semibold">404 : Page Not Found</h1>
      <Link to="/">
        <p className="hover:text-sky-500 hover:underline">Back To home</p>
      </Link>
    </div>
  );
};

export default PageNotFound;
