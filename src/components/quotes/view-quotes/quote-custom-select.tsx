interface Option {
	value: string;
	label: string;
}

interface QuoteCustomSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	title: string;
	options: Option[];
}

interface QuoteCustomSelectWithoutTitleProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	options: Option[];
}

const QuoteCustomSelect = ({ title, options, className, ...props }: QuoteCustomSelectProps) => {
	return (
		<div>
			<label className="mb-1 text-paragraph-small text-grey-600 font-bold">{title}</label>
			<div className="relative w-full">
				<select
					className={`appearance-none w-full px-3 py-[10px] border border-grey-300 rounded-md text-grey-900 bg-white focus:outline-none ${className}`}
					{...props}
				>
					{options.map((option, index) => (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
					<img src="/assets/svgs/dashboard/chevron-left.svg" className="-rotate-90" alt="Arrow" />
				</div>
			</div>
		</div>
	);
};

export const QuoteCustomSelectWithoutTitle = ({ options, className, ...props }: QuoteCustomSelectWithoutTitleProps) => {
	return (
		<div className="relative w-full max-w-[62px]">
			<select
				className={`appearance-none w-full px-2 py-1 pr-[18px] bg-sidebar-bg rounded focus:outline-none text-paragraph-caption text-grey-500 ${className}`}
				{...props}
			>
				{options.map((option, index) => (
					<option key={index} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
			<div className="pointer-events-none absolute inset-y-0 right-0 top-1 w-[16px] flex items-center">
				<img src="/assets/svgs/dashboard/chevron-left.svg" className="-rotate-90 " alt="Arrow" />
			</div>
		</div>
	);
};

export default QuoteCustomSelect;
