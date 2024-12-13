import { useEffect, useState } from "react";
import { PrimaryButton, TertiaryButton } from "../../buttons/buttons";

interface QuoteConfirmationProps {
    confirmQuote: boolean,
    setConfirmQuote: React.Dispatch<React.SetStateAction<boolean>>
}

function QuoteConfirmation({confirmQuote, setConfirmQuote}:QuoteConfirmationProps) {
	const [isLoading, setIsLoading] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);

	const handleClick = () => {
		setIsLoading(true);
	};

	const closeConfirmation = () => {
		setShowSuccess(false)
	}

	useEffect(() => {
        let timer: number | undefined;
        
		if (isLoading) {
			timer = setTimeout(() => {
				setIsLoading(false);
				setShowSuccess(true);
			}, 3000);
		}
		return () => clearTimeout(timer);
	}, [isLoading]);
    

	const Toast = () => {
		return (
			<div className="flex justify-between border-l-[6px] border-l-base-green rounded px-4 py-3 w-full max-w-[390px] fixed top-2 right-2 z-10 bg-white shadow-toast-shadow">
				<div className="flex gap-3 items-start">
					<div className="flex justify-center items-center w-6 h-6 border border-light-green-200 rounded-lg bg-light-green">
						<img src="/assets/svgs/check-circle.svg" alt="Check" />
					</div>
					<h4 className="text-paragraph-small font-bold">RFQ ID sent successfully!</h4>
				</div>
				<button onClick={closeConfirmation} className="border-l border-l-grey-100 pl-3">
					<img src="/assets/svgs/close-toast.svg" alt="Close Toast Icon" />
				</button>
			</div>
		);
    };
    
    if (showSuccess) {
        return <Toast/>
    }


	if (isLoading) {
		return (
			<div className="flex flex-col justify-center items-center py-8 px-6 w-full max-w-[568px] bg-white rounded-lg m-auto fixed top-2 right-2 z-10 shadow-container-shadow">
				<div>
					<div className="mb-2">
						<img src="/assets/svgs/loader.svg" className="animate-spin" alt="" />
					</div>
					<h3 className="text-paragraph-small font-medium">Sending Quote...</h3>
				</div>
			</div>
		);
	}

    if (!showSuccess && confirmQuote) {
        return (
            <div className="flex flex-col py-8 px-6 w-full max-w-[568px] bg-white rounded-lg fixed top-2 right-2 z-10 shadow-confirmation-shadow border border-[#F7F9FC]">
                <h3 className="text-heading-6 font-semibold text-grey-900 mb-6">Confirmation</h3>
                <p className="text-paragraph-small text-grey-600 mb-8">
                    You are about to submit this quote in response to RFQ ID, this will immediately be sent to the client
                    “Westend Clear Hospital”. Are you sure you want to proceed?
                </p>
                <div className="self-end flex gap-4">
                    <TertiaryButton onClick={()=>setConfirmQuote(false)} className="!px-4 !py-2">Cancel</TertiaryButton>
                    <PrimaryButton onClick={handleClick} className="!px-4 !py-2">Continue</PrimaryButton>
                </div>
            </div>
        );  
    }

}

export default QuoteConfirmation;
