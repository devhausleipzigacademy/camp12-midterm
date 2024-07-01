type Props = {
	label: string;
	isSelected: boolean;
	clickedOn: () => void;
};

export function TabButton({ label, isSelected, clickedOn }: Props) {
	return (
		<button
			className={`w-full py-1 rounded text-center border ${
				isSelected
					? "text-white bg-white-dimmed border-white"
					: " text-white-dimmed bg-dark-light border-dark-light"
			}`}
			onClick={() => clickedOn()}
		>
			{label}
		</button>
	);
}
