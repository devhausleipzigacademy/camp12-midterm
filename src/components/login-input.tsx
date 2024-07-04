type Props = {
	icon?: JSX.Element;
} & React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

export function LoginInput({ icon: Icon, ...props }: Props) {
	return (
		<label className='px-5 py-3 bg-dark-light border-2 border-dark-light rounded-lg flex items-center gap-5 overflow-hidden focus-within:border-white-dimmed-heavy'>
			<Icon className='h-6 w-auto text-white-dimmed' />
			<input
				className='bg-transparent text-white flex-grow outline-none placeholder:text-white-dimmed'
				{...props}
			/>
		</label>
	);
}
