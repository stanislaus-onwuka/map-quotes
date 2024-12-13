
interface RequestorProps {
	firstName: string;
	lastName: string;
	role: string;
}

function Requestor({ firstName, lastName, role }: RequestorProps) {
	return (
		<div className="flex gap-2 items-center">
			<div className="w-8 h-8 rounded-full border-[1.5px] border-white bg-primary-50 flex justify-center items-center">
				<h3 className="text-paragraph-small text-grey-900 font-bold">{`${firstName[0]}${lastName[0]}`}</h3>
			</div>
			<div className="flex gap-2 items-center">
				<h4 className="text-grey-700 text-paragraph-medium font-medium">{`${firstName} ${lastName}`}</h4>
				<div className="w-[6px] h-[6px] block rounded-full bg-[#D9D9D9]" />
				<h4 className="text-grey-400 text-paragraph-medium font-medium">{role}</h4>
			</div>
		</div>
	);
}

export default Requestor;
