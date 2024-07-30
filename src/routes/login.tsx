import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../components/button";
import { KeyIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { LoginInput } from "../components/input";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const loginSchema = z.object({
	email: z.string().email({ message: "Invalid email address" }),
	password: z
		.string()
		.min(6, { message: "Password must be at least 6 characters long" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { data } = await axios.post("http://localhost:3000/login", {
			email,
			password,
		});

		await axios.get("http://localhost:3000/protected", {
			headers: {
				Authorization: data.token,
			},
		});
		localStorage.setItem("auth-state", JSON.stringify({ token: data.token }));
		navigate("/");
	};

	const { handleSubmit } = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	});

	// const onSubmit = () => {
	//   console.log("submit");
	// };

	return (
		<div className='h-screen bg-dark px-5 py-8'>
			<h1 className='text-base font-bold text-white mb-3'>
				Welcome to Cine-Scape
			</h1>
			<p className='text-white-dimmed text-sm mb-6'>
				You need to log in to be able to make reservations and add movies to
				your watchlist.
			</p>
			<form
				onSubmit={onSubmit}
				className='flex flex-col justify-between h-full'
				noValidate
			>
				<div className='flex flex-col justify-between h-screen'>
					<div className='flex flex-col gap-4'>
						<LoginInput
							onChange={(e) => setEmail(e.target.value)}
							icon={<KeyIcon />}
							placeholder='Enter your email'
							type='email'
						/>
						<LoginInput
							onChange={(e) => setPassword(e.target.value)}
							icon={<LockClosedIcon />}
							placeholder='Enter your password'
							type='password'
							minLength={6}
						/>
					</div>
					<div className='flex '>
						<Button
							type='submit'
							children={"Login"}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
