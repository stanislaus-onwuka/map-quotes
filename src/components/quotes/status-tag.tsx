interface StatusTagProps {
	status: string;
}

function StatusTag({ status }: StatusTagProps) {
	const getTheme = () => {
		const statusToLowerCase = status.toLowerCase();
		let theme;

		switch (statusToLowerCase) {
			case "awaiting":
				theme = "bg-primary-50 text-primary-400";
				break;

			default:
				break;
		}

		return theme;
	};

	return <h6 className={`px-2 rounded-[50px] text-paragraph-xs tracking-[-0.5%] font-medium w-fit ${getTheme()}`}>{status}</h6>;
}

export default StatusTag;
