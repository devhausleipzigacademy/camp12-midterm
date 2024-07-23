import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../components/button";
import { KeyIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { LoginInput } from "../components/input";
import { useNavigate } from "react-router-dom";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginPage() {
  const navigate = useNavigate();
  const hardCodePw = "Password123456";
  const hardCodeMail = "letsgo@hyped.com";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  // const onSubmit = () => {
  //   console.log("submit");
  // };

  const onSubmit = (data: LoginSchema) => {
    if (data.email === hardCodeMail && data.password === hardCodePw) {
      localStorage.setItem("auth-state", JSON.stringify({ authState: true }));
      navigate("/");
    } else {
      console.error("Invalid Email or Password");
    }
  };

  return (
    <div className="h-screen bg-dark px-5 py-8">
      <h1 className="text-base font-bold text-white mb-3">
        Welcome to Cine-Scape
      </h1>
      <p className="text-white-dimmed text-sm mb-6">
        You need to log in to be able to make reservations and add movies to
        your watchlist.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-between h-full"
        noValidate
      >
        <div className="flex flex-col gap-4">
          <LoginInput
            icon={<KeyIcon />}
            placeholder="Enter your email"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
          <LoginInput
            icon={<LockClosedIcon />}
            placeholder="Enter your password"
            type="password"
            error={errors.password?.message}
            {...register("password")}
          />
          <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
}
