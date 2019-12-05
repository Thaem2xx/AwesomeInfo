import React from 'react';
import axios from 'axios';

import Item from './Item';

class ItemPage extends React.Component{
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    async componentDidMount(){
        const users = await axios.get("http://localhost:8080/api/users/")
        .then((res)=>{
            return res.data.data;
        })
        .catch((error)=>{
            if(error instanceof Error) {
                console.log(error.message);
            } else {
                console.log(error.data);
            }
        });
        this.setState({users});
    }
    render(){
        let {users} = this.state;
        return (
            <>
                {users.map((user)=><Item key={user._id} user={user}/>)}
            </>
        )
    }
}
export default ItemPage;