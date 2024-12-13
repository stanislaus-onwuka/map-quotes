import { useReactTable, ColumnDef, getCoreRowModel, flexRender } from "@tanstack/react-table";

interface Data {
	items: string;
	variants: string;
	quantity: string;
	price: string;
	amount: string;
	deliveryDate: string;
}

const data: Data[] = [
	{
		items: "Oxygen concentrator",
		variants: "Blue",
		quantity: "100 pieces",
		price: "$200.00",
		amount: "$2,000.00",
		deliveryDate: "2024-08-07",
	},
	{
		items: "Mechanical ventilator",
		variants: "NIL",
		quantity: "45 Kg",
		price: "$350.00",
		amount: "$2,500.00",
		deliveryDate: "2024-08-07",
	},
	{
		items: "Patient Monitor",
		variants: "Blue",
		quantity: "30 Units",
		price: "$300.00",
		amount: "$1,500.00",
		deliveryDate: "2024-08-07",
	},
	{
		items: "Mechanical ventilator",
		variants: "Blue",
		quantity: "35 Units",
		price: "$200.00",
		amount: "$1,500.00",
		deliveryDate: "2024-08-07",
	},
];

const columns: ColumnDef<Data>[] = [
	{ header: "Items", accessorKey: "items" },
	{ header: "Variants", accessorKey: "variants" },
	{ header: "Quantity", accessorKey: "quantity" },
	{ header: "Price", accessorKey: "price" },
	{ header: "Amount", accessorKey: "amount" },
	{ header: "Expected Delivery Date", accessorKey: "deliveryDate" },
];

const ItemsTable = () => {
	const table = useReactTable({
		columns,
		data,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="overflow-x-auto rounded-[10px] bg-white border border-grey-8">
			<table className="min-w-full  rounded-[10px]">
				<thead className="bg-grey-50 rounded-[10px]">
					{table.getHeaderGroups().map((headerGroup) => (
						<tr key={headerGroup.id}>
							<th className="pl-[16px]">
								<input type="checkbox" className="w-5 h-5 mt-2" />
							</th>
							{headerGroup.headers.map((header) => (
								<th
									key={header.id}
									className="px-6 py-[14px] text-left text-paragraph-caption text-grey-700 !font-normal"
								>
									{flexRender(header.column.columnDef.header, header.getContext())}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody>
					{table.getRowModel().rows.map((row) => {
						return (
							<tr key={row.id} className="border-b border-grey-200">
								<td className="pl-6 py-4 my-auto">
									<input type="checkbox" className="w-5 h-5 border-[1.5px] border-grey-300" />
								</td>
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										className={`${
											cell.column.id === "items" ? "py-[6px] pl-3 pr-6" : "py-4 px-6"
										} text-grey-700 min-w-[115px] text-paragraph-small font-normal`}
									>
										{cell.column.id === "items" ? (
											<div className="flex items-center gap-3">
												<img
													src="/assets/images/sample-img.png"
													alt="Item"
													className="w-10 h-10"
												/>
												<div>
													<h3 className="text-paragraph-small text-grey-900 font-medium overflow-ellipsis overflow-hidden w-[127px] whitespace-nowrap">
														{cell.getValue<string>()}
													</h3>
													<h6 className="text-paragraph-small text-grey-600 font-normal">
														#28373
													</h6>
												</div>
											</div>
										) : (
											flexRender(cell.column.columnDef.cell, cell.getContext())
										)}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default ItemsTable;
