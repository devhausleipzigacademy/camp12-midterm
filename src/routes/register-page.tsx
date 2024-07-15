import { KeyIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import { LoginInput } from "../components/login-input";
import { Button } from "../components/button";

export function RegistrationPage() {
	return (
		<div className='h-screen  bg-dark px-5 py-8 flex flex-col'>
			<h1 className='text-base font-bold text-white mb-3'>
				Welcome to Cine-Scape
			</h1>
			<p className='text-white-dimmed text-sm mb-6'>
				You need to register an account to be able to make reservations and add
				movies to your watchlist.
			</p>
			<div className='flex flex-col justify-between h-full'>
				<div className='flex flex-col gap-4'>
					<LoginInput
						icon={PencilIcon}
						placeholder='First name'
						inputType='text'
					/>
					<LoginInput
						icon={PencilIcon}
						placeholder='Last name'
						inputType='text'
					/>
					<LoginInput
						icon={KeyIcon}
						placeholder='Enter your email'
						inputType='email'
					/>
					<LoginInput
						icon={LockClosedIcon}
						placeholder='Enter your password'
						inputType='password'
					/>
					<LoginInput
						icon={LockClosedIcon}
						placeholder='Confirm your password'
						inputType='password'
					/>
				</div>
				<Button children='Register' />
			</div>
		</div>
	);
}
