import { classNames } from "../../../utils/classnames";

interface StepItem {
	id: number;
	title: string;
	subtitle: string;
}

interface ResponseStepsProps {
	steps: StepItem[];
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const ResponseSteps = ({ steps, currentStep, setCurrentStep }: ResponseStepsProps) => {
	return (
		<div className="grid grid-cols-3 gap-6">
			{steps.map((step) => (
				<button
					className="flex gap-4 text-left items-start"
					key={step.id}
					onClick={() => setCurrentStep(step.id)}
				>
					<div
						className={classNames(
							"w-8 h-8 rounded-full flex justify-center items-center duration-150",
                            currentStep === step.id ? "bg-base-blue text-white" : "border border-grey-400 text-grey-400",
                            currentStep > step.id ? "bg-light-green !text-base-green !border-transparent" : ""
						)}
					>
						<h3 className="text-paragraph-large font-bold">{step.id}</h3>
					</div>
					<div className="flex flex-col gap-1">
						<h3
							className={classNames(
								"text-paragraph-medium duration-150",
								currentStep === step.id ? "font-bold text-grey-900" : "font-medium text-grey-500",
                                currentStep > step.id ? "font-bold text-grey-900" : ""
                            )}
						>
							{step.title}
						</h3>
						<p
							className={classNames(
								"text-paragraph-xs duration-150",
                                currentStep === step.id ? "text-grey-600" : "text-grey-500",
                                currentStep > step.id ? "text-grey-600" : ""
							)}
						>
							{step.subtitle}
						</p>
					</div>
				</button>
			))}
		</div>
	);
};

export default ResponseSteps;
