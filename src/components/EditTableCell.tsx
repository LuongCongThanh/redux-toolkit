import React from "react";
import {Form, Input, InputNumber} from "antd";

interface Item {
	key: string;
	name: string;
	age: number;
	address: string;
}

interface EditTableCellProps extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	title: any;
	inputType: 'number' | 'text';
	record: Item;
	index: number;
	children: React.ReactNode;
}

const EditTableCell = ({
						   editing,
						   dataIndex,
						   title,
						   inputType,
						   record,
						   index,
						   children,
						   ...restProps
					   }: EditTableCellProps) => {
	const inputNode = inputType === 'number' ? <InputNumber/> : <Input/>;

	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{margin: 0}}
					rules={[
						{
							required: true,
							message: `Please Input ${title}!`,
						},
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	);
};
export default EditTableCell;
