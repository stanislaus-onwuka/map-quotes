import { useState } from "react";
import { Link, useLocation } from "react-router";

interface SubmenuItem {
	title: string;
	path: string;
}

interface DashboardItemProps {
	title: string;
	path?: string;
	icon: React.FC<{ color: string }>;
	submenu?: SubmenuItem[];
	notificationValue?: string;
}

const DashboardItem = ({ title, icon: Icon, path, submenu, notificationValue }: DashboardItemProps) => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	const toggleSubmenu = () => {
		setIsOpen((prev) => !prev);
	};

	const isActive = location.pathname === path || submenu?.some((item) => location.pathname.includes(item.path));

	return (
		<div className="flex flex-col">
			{path ? (
				<Link
					to={path}
					className={`flex items-center justify-between px-4 py-3 cursor-pointer rounded ${
						isActive ? "bg-light-blue" : ""
					}`}
				>
					<div className="flex items-center gap-3">
						<Icon color={isActive ? "rgba(23, 92, 255, 1)" : "rgba(102, 113, 133, 1)"} />
						<h3
							className={`text-paragraph-small text-grey-700 ${isActive ? "font-medium" : "font-normal"}`}
						>
							{title}
						</h3>
					</div>
					{notificationValue ? (
						<h3 className="rounded-[10px] bg-base-blue tracking-[-0.5%] px-2 font-medium text-white text-paragraph-xs">
							{notificationValue}
						</h3>
					) : null}
				</Link>
			) : (
				<button
					onClick={toggleSubmenu}
					className={`flex items-center justify-between px-4 py-[10px] outline-none rounded ${
						isActive ? "bg-light-blue" : ""
					}`}
				>
					<div className="flex gap-3">
						<Icon color={isActive ? "rgba(23, 92, 255, 1)" : "rgba(102, 113, 133, 1)"} />
						<h3
							className={`text-paragraph-small text-grey-700 ${isActive ? "font-medium" : "font-normal"}`}
						>
							{title}
						</h3>
					</div>
					<div className={`duration-75 ${isOpen ? "rotate-0" : "rotate-180"}`}>
						<img src="/assets/svgs/dashboard/arrow-up.svg" alt="Arrow" />
					</div>
				</button>
			)}
			{isOpen && submenu && (
				<div className="flex flex-col gap-[2px] py-2">
					{submenu.map((item, index) => (
						<Link
							key={index}
							to={item.path}
							className={`block pl-12 py-[10px] cursor-pointer text-paragraph-small text-grey-700 rounded ${
								location.pathname.includes(item.path) ? "bg-light-blue font-medium" : "font-normal"
							}`}
						>
							{item.title}
						</Link>
					))}
				</div>
			)}
		</div>
	);
};

export const SecondaryDashboardItem = ({ title, icon: Icon, path }: DashboardItemProps) => {
	return (
		<Link to={path ?? "/"} className="flex items-center gap-3 px-4 py-3 cursor-pointer rounded">
			<Icon color="rgba(102, 113, 133, 1)" />
			<h3 className="text-paragraph-small text-grey-700">{title}</h3>
		</Link>
	);
};

export default DashboardItem;
