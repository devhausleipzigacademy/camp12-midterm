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
						pattern='^[A-Za-zÀ-ÖØ-öø-ÿ -]+$'
					/>
					<LoginInput
						icon={PencilIcon}
						placeholder='Last name'
						inputType='text'
						pattern='^[A-Za-zÀ-ÖØ-öø-ÿ -]+$'
					/>
					<LoginInput
						icon={KeyIcon}
						placeholder='Enter your email'
						inputType='email'
						pattern='^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' // Standard email regex pattern without % or +
					/>
					<LoginInput
						icon={LockClosedIcon}
						placeholder='Enter your password'
						inputType='password'
						pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$'
						minLength={8}
					/>
					<LoginInput
						icon={LockClosedIcon}
						placeholder='Confirm your password'
						inputType='password'
						pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$'
						minLength={8}
					/>
				</div>
				<Button children='Login' />
			</div>
		</div>
	);
}
