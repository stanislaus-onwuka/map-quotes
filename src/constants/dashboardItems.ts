import { CalendarIcon, CommunicationIcon, ContractsIcon, DashboardIcon, FinanceIcon, InventoryIcon, ProcurementIcon } from "../components/dashboard/svg-icons";

export const dashboardItems = [
	{
		title: "Dashboard",
		path: "/dashboard",
		icon: DashboardIcon,
	},
	{
		title: "Inventory",
		path: "/inventory",
		icon: InventoryIcon,
	},
	{
		title: "Procurement",
		icon: ProcurementIcon,
		submenu: [
			{
				title: "Quotes",
				path: "/quotes",
			},
			{
				title: "Orders",
				path: "/orders",
			},
		],
	},
	{
		title: "Finance",
		icon: FinanceIcon,
		submenu: [
			{
				title: "Finance Option 1",
				path: "/finance-option-1",
			},
			{
				title: "Finance 2",
				path: "/finance-option-2",
			},
		],
	},
	{
		title: "Communication",
		path: "/communication",
		icon: CommunicationIcon,
		notificationValue: "10",
	},
	{
		title: "Calendar",
		path: "/calendar",
		icon: CalendarIcon,
		notificationValue: "10",
	},
	{
		title: "Contracts",
		path: "/contracts",
		icon: ContractsIcon,
	},
];