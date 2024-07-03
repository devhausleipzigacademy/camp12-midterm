import { Input } from "../components/input";
import { Button } from "../components/button";

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
      {/* <div className='space-y-5 mb-auto'> */}
      <div className="p-4">
        <Input
          icon="../../public/img/email.svg"
          placeholder="Enter your email"
          inputType="email"
          pattern=".+@example\.com"
          minLength={5}
        />
        <Input
          icon="../../public/img/password.svg"
          placeholder="Enter your password"
          inputType="password"
          minLength={8}
        />
      </div>
      <Button children={undefined} />
    </div>
  );
}
