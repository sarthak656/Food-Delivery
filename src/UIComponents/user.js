import React from "react"

 class Newuser extends React.Component{
    constructor(props){
        super(props);
        console.log('Second constructor') 
        this.state ={
            count: 0,
            userInfo: {}
        }
    }
   async componentDidMount(){
    console.log('seconde didMount');
     var resp = await fetch('https://jsonplaceholder.typicode.com/users');
     var data = await resp.json();
     this.setState({
        userInfo : data[0],
     }
     
     )
     console.log(data);
     this.timeOut = setInterval(
         ()=>{
            console.log('Interval')
         },
        1000
     )
    }
  
    componentDidUpdate(prevProps,prevState){   
      
       if(this.state.count !== prevState.count){  //determine if specific state values have changed and if certain actions need to be taken  ,in funtional component it is easy,beacuase of dependency array
        console.log('second didupdate')
       }
    }
    componentWillUnmount(){
        console.log('componentWillUnmount called')
        clearInterval(this.timeOut)
    }
    render(){
        console.log('second render')
        console.log(this.state.userInfo)
        return(
    <div>
        <button onClick={()=>{this.setState(
            {
                count : this.state.count + 1 
            }
           
        )}}>{this.props.increase}</button>
        <div className="usercard">
            <h2>{this.state.userInfo.name}</h2>
            {
                (this.state.count === 1) ? <h3>{'count is now' + this.state.count }</h3> : <h3></h3>
            }
        </div>
    </div>
        )
    }
 }
 export default Newuser