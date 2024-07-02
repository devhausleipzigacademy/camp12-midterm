import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="w-[375px] h-[667px] bg-red text-white">
      <h1>Login Page</h1>
      <Link to="/">Login</Link>
    </div>
  );
};
