import { Button } from "../components/button";
import { KeyIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { LoginInput } from "../components/login-input";

export function LoginPage() {
  return (
    <div className="h-screen  bg-dark px-5 py-8">
      <h1 className="text-base font-bold text-white mb-3">
        Welcome to Cine-Scape
      </h1>
      <p className="text-white-dimmed text-sm mb-6">
        You need to log in to be able to make reservations and add movies to
        your watchlist.
      </p>
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-4">
          <LoginInput
            icon={<KeyIcon />}
            placeholder="Enter your email"
            type="email"
            pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Standard email regex pattern without % or +
          />
          <LoginInput
            icon={<LockClosedIcon />}
            placeholder="Enter your password"
            type="password"
            minLength={8}
          />
        </div>
        <Button children="Login" />
      </div>
    </div>
  );
}
