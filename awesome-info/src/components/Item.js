import React from 'react';
const Item = (props) =>{
    const {user} = props;
    return(<div>{user.name}</div>);
}
export default Item;