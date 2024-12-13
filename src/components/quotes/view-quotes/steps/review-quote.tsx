import QuoteInfo from "../../quote-info";
import Requestor from "../../requestor";

function ReviewQuote() {
	return (
		<div className="mb-[48px]">
			<div className="py-6 px-8 border border-grey-8 rounded-lg">
				<div className="flex items-center justify-between mb-6">
					<h3 className="text-heading-6 text-grey-800 tracking-[-2%] font-bold">Request Information</h3>
					<button>
						<img src="/assets/svgs/quotes/edit.svg" alt="Edit" />
					</button>
				</div>
				<div className="flex flex-col gap-4 max-w-[696px]">
					<QuoteInfo title="Title" entry="Request for Equipments" />
					<QuoteInfo title="RFQ No" entry="RQ #01234" />
					<QuoteInfo
						title="Requestor"
						entry={<Requestor firstName="Jane" lastName="Doe" role="Head Nurse, Paediatrics" />}
					/>
					<QuoteInfo title="Department" entry="Maternity" />
					<QuoteInfo title="Expected delivery date" entry="2024-12-02" />
				</div>
			</div>
			<div className="border border-grey-8 rounded-[10px] shadow-container-shadow my-6">
				<h2 className="text-grey-800 tracking-[-2%] text-heading-6 font-bold py-4 px-6">Item(s)</h2>
				<div className="flex flex-col px-4 pb-6">
					<div>{/* Table */}</div>
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
						<p className="text-paragraph-small text-grey-600 font-normal">
							Review payment and delivery terms
						</p>
					</div>
				</div>
				<button>
					<img src="/assets/svgs/dashboard/chevron-left.svg" className="-rotate-90" alt="Arrow" />
				</button>
			</div>
		</div>
	);
}

export default ReviewQuote;
