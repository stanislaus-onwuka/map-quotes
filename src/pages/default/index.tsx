import { Link } from "react-router";
import { SecondaryButton } from "../../components/buttons/buttons";

function DefaultPage() {
	return (
		<div className="flex justify-center items-center mx-auto w-full h-screen">
			<Link to="/quotes">
				<SecondaryButton className="px-16">View Quote</SecondaryButton>
			</Link>
		</div>
	);
}

export default DefaultPage;
