import React from "react";
import Newuser from "./user.js"

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
    }
   
  
render(){
    const {name,location} = this.props;
    const {count} =this.state
    return(
        <>
        <div>{name}</div>
        <div>{location}</div>
        <Newuser increase={'count1'} />
        <Newuser increase={'count2'}/>
        </>
    )
}
}

export default User