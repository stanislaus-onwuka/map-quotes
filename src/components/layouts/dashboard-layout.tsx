import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import {
	SettingsIcon,
	SupportIcon,
} from "../dashboard/svg-icons";
import DashboardItem, { SecondaryDashboardItem } from "../dashboard/dashboard-item";
import { dashboardItems } from "../../constants/dashboardItems";


function DashboardLayout() {
	const navigate = useNavigate()
	const params = useParams();
	const location = useLocation();

	return (
		<main>
			<aside className="bg-sidebar-bg py-6 w-full max-w-[272px] fixed top-0 flex flex-col justify-between min-h-screen">
				<div>
					<div className="px-6 py-2 my-3">
						<img src="/assets/svgs/logo.svg" alt="MAP Logo" />
					</div>
					<div className="flex flex-col gap-1 px-2">
						{dashboardItems.map((dashboardItem, idx) => (
							<DashboardItem
								key={idx}
								title={dashboardItem.title}
								path={dashboardItem.path}
								icon={dashboardItem.icon}
								submenu={dashboardItem.submenu}
								notificationValue={dashboardItem.notificationValue}
							/>
						))}
					</div>
				</div>
				<div>
					<div className="flex flex-col gap-1 px-2 pb-3">
						<SecondaryDashboardItem title="Support" icon={SupportIcon} path="/support" />
						<SecondaryDashboardItem title="Settings" icon={SettingsIcon} path="/settings" />
					</div>
					<div className="flex items-center gap-5 py-5 px-6">
						<div className="flex gap-3">
							<div className="max-w-[40px]">
								<img src="/assets/images/dashboard/dashboard-avatar.png" alt="Dashboard Avatar" />
							</div>
							<div>
								<h3 className="text-paragraph-small font-bold text-grey-900">Mark Benson</h3>
								<h4 className="text-paragraph-small text-grey-600 overflow-ellipsis overflow-hidden w-[132px] whitespace-nowrap">
									markbenson@coremed.com
								</h4>
							</div>
						</div>
						<button>
							<img src="/assets/svgs/dashboard/sign-out.svg" alt="Sign out" />
						</button>
					</div>
				</div>
			</aside>
			<section className="ml-[272px]">
				<div className="flex justify-between px-6 py-3 border-b border-[rgba(240, 242, 245, 1)] w-full">
					<button
						onClick={()=>navigate("/quotes")}
						className={`flex gap-2 items-center duration-100 ${
							location.pathname !== `/quotes/${params.id}` ? "opacity-0" : "opacity-100"
						}`}
					>
						<div>
							<img src="/assets/svgs/dashboard/chevron-left.svg" alt="Arrow" />
						</div>
						<h3 className="text-paragraph-small text-grey-500 font-medium">Back</h3>
					</button>
					<div className="flex gap-10 w-full max-w-fit">
						<div className="flex gap-2 items-center border p-3 w-[375px] border-[#E4E7EC] rounded-[6px]">
							<img src="/assets/svgs/dashboard/search-icon.svg" className="max-w-8" alt="Search" />
							<input type="text" placeholder="Search here..." className="w-fit" />
						</div>
						<div className="flex gap-4 w-full max-w-[152px]">
							<button>
								<img src="/assets/svgs/dashboard/bell.svg" alt="Notification" />
							</button>
							<button>
								<img src="/assets/svgs/dashboard/texts.svg" alt="Texts" />
							</button>
							<button className="flex items-center gap-2">
								<div className="max-w-[32px]">
									<img src="/assets/images/dashboard/top-nav-avatar.png" alt="Avatar" />
								</div>
								<div className="-rotate-90">
									<img src="/assets/svgs/dashboard/chevron-left.svg" alt="Arrow Down" />
								</div>
							</button>
						</div>
					</div>
				</div>
				<div>
					<Outlet />
				</div>
			</section>
		</main>
	);
}

export default DashboardLayout;
