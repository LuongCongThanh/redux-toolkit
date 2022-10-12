import React, {useEffect, useState} from 'react';
import {Form, Popconfirm, Table, Typography} from "antd";
import '../../style/listUser.css';
import EditTableCell from "../../components/EditTableCell";
import {selectListUser} from "./userSlice";
import {useAppSelector} from "../../app/hooks";

interface Item {
	id: string;
	name: string;
	age: number;
	role: string
}

// const originData: Item[] = [];
// for (let i = 0; i < 10; i++) {
// 	originData.push({
// 		key: i.toString(),
// 		name: `Edrward ${i}`,
// 		age: 32,
// 		address: `London Park no. ${i}`,
// 	});
// }

const ListUser = () => {
	const [form] = Form.useForm();
	const [editingKey, setEditingKey] = useState('');
	const userList = useAppSelector(selectListUser);
	const [data, setData] = useState(userList);

	useEffect(() => {
		setData(userList);
	}, [userList]);

	const isEditing = (record: Item) => record.id === editingKey;

	const edit = (record: Partial<Item> & { id: React.Key }) => {
		form.setFieldsValue({name: '', age: '', address: '', ...record});
		setEditingKey(record.id);
		console.log(record.id);
	};

	const cancel = () => {
		setEditingKey('');
	};

	const save = async (key: React.Key) => {
		try {
			const row = (await form.validateFields()) as Item;

			const newData = [...data];
			const index = newData.findIndex(item => key === item.id);
			if (index > -1) {
				const item = newData[index];
				newData.splice(index, 1, {
					...item,
					...row,
				});
				setData(newData);
				setEditingKey('');
			} else {
				newData.push(row);
				setData(newData);
				setEditingKey('');
			}
		} catch (errInfo) {
			console.log('Validate Failed:', errInfo);
		}
	};

	const columns = [
		{
			title: 'name',
			dataIndex: 'name',
			width: '25%',
			editable: true,
		},
		{
			title: 'age',
			dataIndex: 'age',
			width: '15%',
			editable: true,
		},
		{
			title: 'Role',
			dataIndex: 'role',
			width: '40%',
			editable: true,
		},
		{
			title: 'Action',
			dataIndex: 'Action',
			render: (_: any, record: Item) => {
				const editable = isEditing(record);
				return editable ? (
					<span>
            <Typography.Link onClick={() => save(record.id)} style={{marginRight: 8}}>
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
				) : (
					<Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
						Edit
					</Typography.Link>
				);
			},
		},
	];

	const mergedColumns = columns.map(col => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: Item) => ({
				record,
				inputType: col.dataIndex === 'age' ? 'number' : 'text',
				dataIndex: col.dataIndex,
				title: col.title,
				editing: isEditing(record),
			}),
		};
	});
	return (
		<div>


			<Form form={form} component={false}>
				<Table
					components={{
						body: {
							cell: EditTableCell,
						},
					}}
					bordered
					dataSource={data}
					columns={mergedColumns}
					rowClassName="editable-row"
					pagination={{
						onChange: cancel,
					}}
				/>
			</Form>
		</div>
	);
};

export default ListUser;