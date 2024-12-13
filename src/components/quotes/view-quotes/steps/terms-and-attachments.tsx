import QuoteCustomSelect, { QuoteCustomSelectWithoutTitle } from "../quote-custom-select";
import QuoteField from "../quote-field";
import UploadAttachment from "../upload-attachment";

function TermsAndAttachments() {
	return (
		<div className="mb-10">
			<div className="mb-8">
				<h2 className="text-heading-5 font-bold tracking-[-2%] mb-2">Terms and Attachments</h2>
				<p className="text-paragraph-medium text-grey-500">
					Provide detailed information on payment and delivery terms
				</p>
			</div>
			<div className="pb-8 border-b border-[#E9E9E9]">
				<div className="grid gap-x-[18px] gap-y-6 grid-cols-2 mb-6">
					<QuoteCustomSelect title="Payment Terms" options={[{ value: "net-30", label: "Net 30" }]} />
					<QuoteCustomSelect
						title="Delivery Schedule"
						options={[{ value: "immediate", label: "Immediate delivery" }]}
					/>
					<QuoteCustomSelect
						title="Shipping Method"
						options={[{ value: "courier", label: "Courier Services" }]}
					/>
					<QuoteField
						title="Lead time"
                        value="10"
                        className="!text-grey-900"
						rightIcon={
							<QuoteCustomSelectWithoutTitle
								options={[
									{ value: "days", label: "Days" },
									{ value: "weeks", label: "Weeks" },
									{ value: "years", label: "Years" },
								]}
							/>
						}
					/>
				</div>
				<div className="border-t border-[#E9E9E9] max-w-[515px] w-full">
					<div className="mt-4 mb-6">
						<h4 className="text-paragraph-medium font-bold text-grey-800 mb-2">Attachments</h4>
						<p className="text-paragraph-small text-grey-400">Attach all necessary files or documents</p>
                    </div>
                    <UploadAttachment/>
                </div>
			</div>
		</div>
	);
}

export default TermsAndAttachments;
