import { useNavigate, useParams } from "react-router";
import { ErrorButton, PrimaryButton } from "../../components/buttons/buttons";
import ClientCard from "../../components/quotes/client-card";
import QuoteInfo from "../../components/quotes/quote-info";
import Requestor from "../../components/quotes/requestor";
import StatusTag from "../../components/quotes/status-tag";

function QuoteDetails() {
	const params = useParams()
	const navigate = useNavigate()

	return (
		<div className="p-8">
			<div className="flex justify-between items-center">
				<div>
					<h2 className="text-heading-5 tracking-[-2%] text-black font-bold mb-[2px]">Quote details</h2>
					<h4 className="text-grey-500 text-paragraph-small">Created on Wed, 12th June 2022, 08:00am</h4>
				</div>
				<div className="flex gap-3">
					<PrimaryButton onClick={()=>navigate(`/quotes/${params.id}/respond`)} className="w-fit px-4 !py-2 text-paragraph-small">Respond</PrimaryButton>
					<ErrorButton className="w-fit px-3 !py-2">
						<div className="flex gap-2">
							<div>
								<img src="/assets/svgs/quotes/multiply.svg" alt="Close Icon" />
							</div>
							<h4 className="text-paragraph-small text-white">Reject</h4>
						</div>
					</ErrorButton>
				</div>
			</div>
			<div className="mt-8">
				<div className="py-6 px-8 border border-grey-8 rounded-lg">
					<div className="flex justify-between mb-8">
						<h3 className="text-heading-6 text-grey-800 tracking-[-2%] font-bold">Quote Information</h3>
						<h4 className="text-paragraph-small text-grey-500">Expected delivery date : 2024-12-02</h4>
					</div>
					<div className="flex justify-between items-start">
						<div className="flex flex-col gap-4">
							<QuoteInfo title="Title" entry="Request for Equipments" />
							<QuoteInfo title="RFQ No" entry="RQ #01234" />
							<QuoteInfo
								title="Requestor"
								entry={<Requestor firstName="Jane" lastName="Doe" role="Head Nurse, Paediatrics" />}
							/>
							<QuoteInfo title="Status" entry={<StatusTag status="Awaiting" />} />
							<QuoteInfo title="Department" entry="Maternity" />
						</div>
						<ClientCard name="Westend Hospital" address="Clear street" />
					</div>
				</div>
				<div className="border border-grey-8 rounded-[10px] shadow-container-shadow my-6">
					<h2 className="text-grey-800 tracking-[-2%] text-heading-6 font-bold py-4 px-6">Item(s)</h2>
					<div className="flex flex-col px-4 pb-6">
						<div>
							{/* Table */}
						</div>
						<div className="mt-6 self-end w-full max-w-[190px]">
							<div className="flex justify-between gap-4 mb-4 w-full">
								<h3 className="text-grey-600 text-paragraph-medium">Sub Total</h3>
								<h3 className="text-grey-600 text-paragraph-medium">$8,000.00</h3>
							</div>
							<div className="flex justify-between gap-4 w-full">
								<h3 className="text-grey-600 text-paragraph-medium">Total</h3>
								<h3 className="text-grey-600 text-paragraph-medium font-bold">$8,750.00</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-between items-center border border-grey-8 rounded-lg p-6">
					<div className="flex gap-3 items-start">
						<div>
							<img src="/assets/svgs/quotes/sign-doc.svg" alt="Document" />
						</div>
						<div>
							<h3 className="text-heading-6 tracking-[-2%] text-grey-800 font-bold">Terms and Attachments</h3>
							<p className="text-paragraph-small text-grey-600 font-normal">Review payment and delivery terms</p>
						</div>
					</div>
					<button>
						<img src="/assets/svgs/dashboard/chevron-left.svg" className="-rotate-90" alt="Arrow" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default QuoteDetails;
