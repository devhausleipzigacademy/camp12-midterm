import { Button } from "../components/button";
import { KeyIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { LoginInput } from "../components/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const hardCodePw = "Password123456";
  const hardCodeMail = "letsgo@hyped.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === hardCodeMail && password === hardCodePw) {
      localStorage.setItem("auth-state", JSON.stringify({ authState: true }));
      navigate("/");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="h-screen  bg-dark px-5 py-8">
      <h1 className="text-base font-bold text-white mb-3">
        Welcome to Cine-Scape
      </h1>
      <p className="text-white-dimmed text-sm mb-6">
        You need to log in to be able to make reservations and add movies to
        your watchlist.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between h-5/6"
      >
        <div className="flex flex-col justify-between h-screen">
          <div className="flex flex-col gap-4">
            <LoginInput
              onChange={(e) => setEmail(e.target.value)}
              icon={<KeyIcon />}
              placeholder="Enter your email"
              type="email"
              pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Standard email regex pattern without % or +
            />
            <LoginInput
              onChange={(e) => setPassword(e.target.value)}
              icon={<LockClosedIcon />}
              placeholder="Enter your password"
              type="password"
              minLength={8}
            />
            {error && <p className="text-white flex justify-center">{error}</p>}
          </div>
          <div className="flex ">
            <Button onClick={() => handleSubmit} children={"Login"} />
          </div>
        </div>
      </form>
    </div>
  );
}
