import { useState } from "react";
import Breadcrumb from "../../components/quotes/breadcrumb";
import ResponseSteps from "../../components/quotes/view-quotes/response-steps";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "../../components/buttons/buttons";
import RequestQuote from "../../components/quotes/view-quotes/steps/request-quote";
import TermsAndAttachments from "../../components/quotes/view-quotes/steps/terms-and-attachments";
import ReviewQuote from "../../components/quotes/view-quotes/steps/review-quote";
import QuoteConfirmation from "../../components/quotes/view-quotes/quote-confirmation";
import { useNavigate, useParams } from "react-router";

const breadcrumbItems = [{ label: "Quotes", href: "/quotes" }, { label: "Quote Response" }];
const steps = [
	{
		id: 1,
		title: "Request Information",
		subtitle: "Provide details about the RFQ",
	},
	{
		id: 2,
		title: "Terms and Attachments",
		subtitle: "Payment and delivery terms",
	},
	{
		id: 3,
		title: "Review",
		subtitle: "Confirm all information provided",
	},
];

function ViewQuote() {
	const [currentStep, setCurrentStep] = useState<number>(1);
	const [confirmQuote, setConfirmQuote] = useState<boolean>(false);
	const navigate = useNavigate()
	const params = useParams()

	return (
		<>
			<div className="px-8 py-6">
				<div>
					<Breadcrumb items={breadcrumbItems} />
				</div>
				<div className="py-6 px-5 border border-grey-8 rounded-lg my-8">
					<ResponseSteps steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
				</div>
				<div
					className={`flex flex-col p-6 pt-8 border rounded-lg ${
						currentStep === 3 ? "border-transparent" : "border-grey-8"
					}`}
				>
					<>
						{currentStep === 1 ? <RequestQuote /> : null}
						{currentStep === 2 ? <TermsAndAttachments /> : null}
						{currentStep === 3 ? <ReviewQuote /> : null}
					</>
					<div className="flex items-center gap-6 self-end">
						<TertiaryButton onClick={()=>navigate(`/quotes/${params.id}`)} className="!py-[10px] !px-[11px] w-fit">Cancel</TertiaryButton>
						<SecondaryButton className="!py-[10px] w-full px-[52.5px]">Save as draft</SecondaryButton>
						{currentStep === 3 ? (
							<PrimaryButton onClick={()=>setConfirmQuote(true)} className="!py-[10px] px-16">Submit</PrimaryButton>
						) : (
							<PrimaryButton
								onClick={() => setCurrentStep((prev) => prev + 1)}
								className="!py-[10px] px-16"
							>
								Continue
							</PrimaryButton>
						)}
					</div>
				</div>
			</div>
			<QuoteConfirmation confirmQuote={confirmQuote} setConfirmQuote={setConfirmQuote} />
		</>
	);
}

export default ViewQuote;
