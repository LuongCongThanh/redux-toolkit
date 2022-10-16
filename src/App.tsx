import React, {useState} from 'react';
import './App.css';
import ListUser from "./features/user/ListUser";
import {Button, Layout} from 'antd';
import AddUser from "./features/user/AddUser";
import {useAppDispatch} from "./app/hooks";
import userSlice from "./features/user/userSlice";

const {Header, Content, Footer} = Layout;


function App() {
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        dispatch(userSlice.actions.addUser(values));
        setOpen(false);
    };
    return (

        <Layout style={{minHeight: '100vh'}}>
            <Layout className="site-layout">
                <Content style={{margin: '0 16px'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        <div>
                            <Button
                                type="primary"
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                ADD Member
                            </Button>
                            <AddUser
                                open={open}
                                onCreate={onCreate}
                                onCancel={() => {
                                    setOpen(false);
                                }}
                            />
                        </div>
                        <ListUser/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Front-end Team</Footer>
            </Layout>
        </Layout>
    );
}

export default App;
