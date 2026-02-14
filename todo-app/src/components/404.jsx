import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Error Page
const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Not Found";
  });
  return (
    <div className="h-screen flex justify-center items-center flex-col max-w-200 mx-auto px-6 py-10 text-center">
      <h1 className="text-[4rem] mb-4">404</h1>
      <p className="mb-6 text-[#6b7280]">Page not found</p>
      <button className="hover:text-blue-500 text-red-500 cursor-pointer" onClick={()=> navigate(-1)}>Go Back</button>
      <Link className="text-blue-500 hover:text-red-500" to="/">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound