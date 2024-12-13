import { ReactNode } from "react";

interface Option {
	value: string;
	label: string;
}

interface ProductItem {
	name: string;
	variant: string;
	quantity: number;
	price: number;
	deliveryDate: string;
}

interface ProductRowProps {
	product: ProductItem;
}

interface ProductDropdownProp extends React.SelectHTMLAttributes<HTMLSelectElement> {
	options: Option[];
}

interface ProductFieldProps {
	value: string;
	rightIcon?: ReactNode;
	leftIcon?: ReactNode;
	disabled?: boolean;
	className?: string;
}

const products: ProductItem[] = [
	{
		name: "Oxygen Concentrator",
		variant: "Blue",
		quantity: 100,
		price: 12,
		deliveryDate: "2023-12-02",
	},
	{
		name: "Mechanical Ventilator",
		variant: "Blue",
		quantity: 100,
		price: 12,
		deliveryDate: "2023-12-02",
	},
	{
		name: "Patient Monitor",
		variant: "Blue",
		quantity: 100,
		price: 12,
		deliveryDate: "2023-12-02",
	},
	{
		name: "Mechanical Ventilator",
		variant: "Blue",
		quantity: 100,
		price: 12,
		deliveryDate: "2023-12-02",
	},
];

const productTableHeaders = ["Items", "Variant", "Quantity", "Price", "Expected delivery date", "Amount"];

const ProductDropdown = ({ options, className, disabled, ...props }: ProductDropdownProp) => {
	return (
		<div className="relative w-full">
			<select
				className={`appearance-none w-full !px-3 !py-2 border border-grey-300 rounded-md text-grey-900 bg-white disabled:bg-grey-100 focus:outline-none ${className}`}
				disabled={disabled}
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
	);
};

const ProductField = ({ value, rightIcon, leftIcon, disabled = false, className = "" }: ProductFieldProps) => {
	return (
		<div
			className={`
			flex gap-2 items-center pr-1 pl-3 py-[6px] border border-grey-300 rounded-md text-grey-900
			${disabled ? "bg-grey-100" : "bg-transparent"}
			${className}
		`}
		>
			{leftIcon ? <div className="w-fit">{leftIcon}</div> : null}
			<input value={value} className="w-full text-paragraph-small" disabled={disabled} />
			{rightIcon ? <div className="w-fit">{rightIcon}</div> : null}
		</div>
	);
};

const ProductRow = ({ product }: ProductRowProps) => {
	return (
		<tr className="pb-4">
			<td className="pr-4">
				<ProductDropdown
					defaultValue={product.name}
					options={[{ value: `${product.name}`, label: `${product.name}` }]}
					disabled
				/>
			</td>
			<td className="pr-4">
				<ProductDropdown
					defaultValue={product.variant}
					options={[{ value: `${product.variant}`, label: `${product.variant}` }]}
				/>
			</td>
			<td className="pr-4 max-w-[135px]">
				<ProductField
					value={String(product.quantity)}
					rightIcon={<h3 className="px-2 py-1 pr-[18px] bg-sidebar-bg rounded text-grey-500">Pack</h3>}
				/>
			</td>
			<td className="pr-4 max-w-[135px]">
				<ProductField
					value={String(product.price.toFixed(2))}
					leftIcon={<img src="/assets/svgs/dollar-sign.svg" alt="Dollar" />}
					className="!py-2 !px-3"
				/>
			</td>
			<td className="pr-4 max-w-[135px]">
				<ProductField
					value={product.deliveryDate}
					leftIcon={<img src="/assets/svgs/quotes/calendar.svg" alt="Calendar" />}
					className="!py-2 !px-3"
				/>
			</td>
			<td className="text-grey-900 font-bold text-paragraph-small pr-4">{"$" + (product.quantity * product.price).toFixed(2)}</td>
			<td>
				<button>
					<img src="/assets/svgs/bin.svg" alt="Bin" />
				</button>
			</td>
		</tr>
	);
};

const EditItemsTable = () => {
	return (
		<table className="min-w-full">
			<thead className="bg-sidebar-bg">
				<tr>
					{productTableHeaders.map((header, idx) => (
						<th
							className="px-3 py-2 text-left overflow-ellipsis max-w-[126px] whitespace-nowrap text-paragraph-small overflow-hidden font-medium text-grey-500 first:px-2"
							key={idx}
						>
							{header}
						</th>
					))}
					<th></th>
				</tr>
			</thead>
			<tbody className="pt-4">
				{products.map((product, idx) => (
					<ProductRow key={idx} product={product} />
				))}
			</tbody>
		</table>
	);
};

export default EditItemsTable;
