import { Link } from "react-router-dom";
import Button from "../Components/Button";

function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="text-6xl font-extrabold text-[#0C3B2E] mb-4">404</h1>
      <p className="text-lg font-semibold text-[#14140F] mb-2">
        This hamper wandered off the shelf
      </p>
      <p className="text-sm text-gray-500 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button variant="primary">Back to Home</Button>
      </Link>
    </div>
  );
}

export default NotFound;