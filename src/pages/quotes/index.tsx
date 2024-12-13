import { Link } from "react-router";
import { SecondaryButton } from "../../components/buttons/buttons";

function QuotesPage() {
	return (
		<div className="flex justify-center items-center mx-auto w-full h-screen">
			<div>
				<Link to="/quotes/123">
					<SecondaryButton className="px-16">View Quote</SecondaryButton>
				</Link>
			</div>
		</div>
	);
}

export default QuotesPage;
