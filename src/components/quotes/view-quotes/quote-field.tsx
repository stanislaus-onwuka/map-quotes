import { ReactNode } from "react";
import { classNames } from "../../../utils/classnames";

interface QuoteFieldProps {
	title: string;
	value: string;
	rightIcon?: ReactNode;
	leftIcon?: ReactNode;
	disabled?: boolean;
	additionalInfo?: string;
	className?: string;
}

const QuoteField = ({
	title,
	value,
	rightIcon,
	leftIcon,
	disabled = false,
	additionalInfo,
	className = "",
}: QuoteFieldProps) => {
	return (
		<div>
			<label className="mb-1 text-paragraph-small text-grey-600 font-bold">{title}</label>
			<div
				className={classNames(
					"flex gap-2 items-center px-3 py-[10px] border border-grey-300 rounded-md text-grey-400",
					disabled ? "bg-grey-100" : "bg-transparent",
					className
				)}
			>
				{leftIcon ? <div>{leftIcon}</div> : null}
				<input value={value} className="w-full text-paragraph-small" disabled={disabled} />
				{rightIcon ? <div>{rightIcon}</div> : null}
			</div>
			{additionalInfo ? (
				<h6 className="mt-2 text-paragraph-xs font-medium tracking-[-0.5%] text-grey-500">{additionalInfo}</h6>
			) : null}
		</div>
	);
};

export default QuoteField;
