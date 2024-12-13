import React from "react";
import { Link } from "react-router";

interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }:BreadcrumbProps) => {
	return (
		<nav className="flex items-center gap-4 text-paragraph-small py-[9px]">
			{items.map((item, index) => (
				<React.Fragment key={index}>
					{item.href ? (
						<Link to={item.href} className="text-base-blue font-medium hover:underline">
							{item.label}
						</Link>
					) : (
						<span className="text-grey-500 font-medium">{item.label}</span>
					)}
					{index < items.length - 1 && <span className="text-grey-500">/</span>}
				</React.Fragment>
			))}
		</nav>
	);
};

export default Breadcrumb;
