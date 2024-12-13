import { useRef } from "react";
import { SecondaryButton } from "../../buttons/buttons";

function UploadAttachment() {
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<div className="py-6 w-full bg-white border-[1.5px] border-grey-300 border-dashed rounded-2xl mx-auto">
			<div className="flex flex-col">
				<div className="self-center">
					<img src="/assets/svgs/quotes/file-upload.svg" alt="Upload Icon" />
				</div>
				<div className="text-center mt-4">
					<h3 className="text-paragraph-small text-grey-600 mb-[2px]">
						<button onClick={handleClick} className="text-base-blue font-medium">
							Click to upload
						</button>{" "}
						or drag and drop
					</h3>
					<p className="text-paragraph-xs text-grey-400">SVG, PNG, JPG or GIF (max. 800x400px)</p>
				</div>
				<div className="flex flex-col items-center my-4 w-full max-w-[243px] self-center">
					<hr className="h-[1px] bg-grey-100 block w-full" />
					<h4 className="text-grey-400 text-paragraph-xs px-2 bg-white font-bold">OR</h4>
				</div>
				<SecondaryButton onClick={handleClick} className="px-4 w-fit self-center">Browse Files</SecondaryButton>
			</div>
			<input type="file" className="hidden" ref={fileInputRef} />
		</div>
	);
}

export default UploadAttachment;
