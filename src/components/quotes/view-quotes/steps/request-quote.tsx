import {  useState } from "react";
import QuoteField from "../quote-field";

function RequestQuote() {
	const [note, setNote] = useState<string>("");

	return (
		<div className="mb-10">
			<div className="mb-8">
				<h2 className="text-heading-5 font-bold tracking-[-2%] mb-2">Request for Quote</h2>
				<p className="text-paragraph-medium text-grey-500">Fill out these details to send the RFQ</p>
			</div>
			<div>
				<div className="grid gap-x-[18px] gap-y-6 grid-cols-2 mb-6">
					<QuoteField title="RFQ No" value="RFQ-10234" disabled />
					<QuoteField title="Title" value="Request for Equipments" disabled />
					<QuoteField
						title="Department"
						value="Maternity"
						rightIcon={<img src="/assets/svgs/quotes/multiply-grey.svg" alt="Close" />}
						disabled
					/>
					<QuoteField
						title="Expected delivery date"
						value="2024-12-02"
						leftIcon={<img src="/assets/svgs/quotes/calendar.svg" alt="Calendar" />}
						additionalInfo="Calculated based on lead time and issue date"
						disabled
					/>
				</div>
				<div className="border-t border-b border-[#E9E9E9] pt-4">
					<div className="flex flex-col">
						<h2 className=" text-paragraph-medium">Add Items</h2>
						{/* Table */}
						<hr className="w-full bg-[#E7E9EE] h-[1px] mt-8 mb-4" />
						<div className="flex justify-between gap-4 w-full self-end max-w-[200px]">
							<h3 className="text-grey-600 text-paragraph-medium">Sub Total</h3>
							<h3 className="text-grey-600 text-paragraph-medium">$1200.00</h3>
						</div>
					</div>
					<div className="flex flex-col mt-4 mb-8 max-w-[472px]">
						<label className="mb-1 text-paragraph-small text-grey-600 font-bold">Note</label>
						<textarea
							value={note}
							onChange={(e) => setNote(e.target.value)}
							maxLength={200}
							className="resize-none border border-grey-300 bg-white rounded-md"
							rows={4}
						/>
						<h6 className="text-paragraph-xs text-grey-500 tracking-[-0.5%] mt-2 self-end">
							{`${note.length}/200`}
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
}

export default RequestQuote;
