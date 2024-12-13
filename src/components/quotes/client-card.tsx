interface ClientCardProps {
	name: string;
	address: string;
}

const ClientCard = ({ name, address }: ClientCardProps) => {
	return (
		<div className="border border-grey-8 p-4 rounded-[10px] max-w-[352px] w-full">
			<div className="flex gap-2 items-center mb-2">
				<div>
					<img src="/assets/svgs/quotes/building.svg" alt="Building" />
				</div>
				<h4 className="text-grey-600 text-paragraph-xs">Client</h4>
			</div>
			<div className="flex gap-3 items-center">
				<div className="w-8 h-8 rounded-full border-[1.5px] border-white bg-primary-50 flex justify-center items-center">
					<h3 className="text-[10px] leading-[18px] text-grey-900 font-semibold">{name[0]}</h3>
				</div>
				<div>
					<h3 className="text-grey-900 text-paragraph-small font-medium">{name}</h3>
					<h4 className="text-grey-600 text-paragraph-xs">{address}</h4>
				</div>
			</div>
		</div>
	);
};

export default ClientCard;
