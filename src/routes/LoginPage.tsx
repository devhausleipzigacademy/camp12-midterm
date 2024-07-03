import { Input } from "../components/input";
import { Button } from "../components/button";
import { UserIcon } from "@heroicons/react/24/solid";
import { KeyIcon } from "@heroicons/react/24/solid";

export function LoginPage() {
  return (
    <div className="h-screen  bg-dark px-5 py-8 flex flex-col">
      <h1 className="text-base font-bold text-white mb-3">
        Welcome to Cine-Scape
      </h1>
      <p className="text-white-dimmed text-sm mb-6">
        You need to log in to be able to make reservations and add movies to
        your watchlist.
      </p>
      <div className="space-y-5 mb-auto">
        <Input icon={UserIcon} placeholder={"your@email.com"} />
        <Input icon={KeyIcon} placeholder={"Enter your Password"} />
      </div>
      <Button />
    </div>
  );
}
