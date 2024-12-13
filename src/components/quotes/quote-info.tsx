import { ReactNode } from "react";

interface QuoteInfoProps {
	title: string;
	entry: string | ReactNode;
}

const QuoteInfo = ({ title, entry }: QuoteInfoProps) => {
	return (
		<div className="grid grid-cols-2 gap-y-4 items-center">
			<h3 className="text-paragraph-medium text-tertiary font-medium capitalize">{title}</h3>
			{typeof entry === "string" ? (
				<h3 className="text-paragraph-medium text-grey-700 font-medium capitalize">{entry}</h3>
			) : (
				<div>{entry}</div>
			)}
		</div>
	);
};

export default QuoteInfo;
