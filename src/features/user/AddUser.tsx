import {Form, Input, InputNumber, Modal, Select} from 'antd';
import React from 'react'
import {v4 as uuidv4} from 'uuid';

interface Values {
	title: string;
	description: string;
	modifier: string;
}

interface CollectionCreateFormProps {
	open: boolean;
	onCreate: (values: Values) => void;
	onCancel: () => void;
}


const AddUser = ({open, onCreate, onCancel}: CollectionCreateFormProps) => {
	const [form] = Form.useForm();
	const handleAddUser = () => {
		form
			.validateFields()
			.then(values => {
				form.resetFields();
				const data = values;
				data['id'] = uuidv4();
				console.log('121212', {data})
				onCreate(data);
			})
			.catch(info => {
				console.log('Validate Failed:', info);
			});
	}
	return (
		<Modal
			open={open}
			title="Add a new member"
			okText="add"
			cancelText="Cancel"
			onCancel={onCancel}
			onOk={handleAddUser}>
			<Form
				form={form}
				layout="vertical"
				name="form_in_modal"
				initialValues={{modifier: 'public'}}>
				<Form.Item
					name="name"
					label="Name"
					rules={[{required: true, message: 'Please input the title of collection!'}]}>
					<Input/>
				</Form.Item>
				<Form.Item name="age" label="Age">
					<InputNumber min={1} max={100} style={{width: '100%'}}/>
				</Form.Item>
				<Form.Item label="Role" name="role">
					<Select placeholder="Choose Role">
						<Select.Option value="TM">TM</Select.Option>
						<Select.Option value="TMA">TMA</Select.Option>
						<Select.Option value="SSE">SSE</Select.Option>
						<Select.Option value="SE">SE</Select.Option>
						<Select.Option value="ASE">ASE</Select.Option>
					</Select>
				</Form.Item>
			</Form>
		</Modal>
	);
};


export default AddUser;
