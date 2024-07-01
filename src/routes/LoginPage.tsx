import Login from "../components";
import Button from "../components";

export function LoginPage() {
  return (
    <div className="h-screen font-bold bg-dark px-5 py-8">
      <h1 className="text-base text-white mb-3">Welcome to Cine-Scape</h1>
      <p className="text-white-dimmed text-sm font-medium mb-6">
        You need to log in to be able to make reservations and add movies to
        your watchlist.
      </p>
      <Login />
      <Login />
      <Button />
    </div>
  );
}
