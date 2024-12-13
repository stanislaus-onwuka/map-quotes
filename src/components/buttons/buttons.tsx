import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	className?: string;
	children: ReactNode;
}

export const PrimaryButton = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button className={`bg-base-blue rounded-lg py-[10px] text-white font-bold ${className}`} {...props}>
			{children}
		</button>
	);
};

export const SecondaryButton = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button className={`border-base-blue border-[2px] rounded-lg py-[10px] text-base-blue font-bold ${className}`} {...props}>
			{children}
		</button>
	);
};

export const TertiaryButton = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button className={`border-grey-8 border-[1.5px] rounded-lg py-[10px] text-grey-600 font-bold ${className}`} {...props}>
			{children}
		</button>
	);
};

export const ErrorButton = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button className={`bg-base-red border-[1.5px] rounded-lg py-[10px] text-white font-bold ${className}`} {...props}>
			{children}
		</button>
	);
};


