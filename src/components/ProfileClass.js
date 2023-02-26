import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo:{
        'Name': '',
        'Location' :''
      }
    };
    console.log('child constructor '+ this.props.name)
  }
   componentDidMount(){
    //Api Calls
    console.log('child componentDidMount '+ this.props.name)
    // const data = await fetch('https://api.github.com/users/alankarmundkar')
    // const json = await data.json()
    // console.log(json)
    // this.setState({userInfo:json})
    this.timer =setInterval(()=>{
      console.log('Namste React Op')
    },1000)
  }

  componentDidUpdate(previousProps, previousState){
    if(previousState.userInfo.name !== this.state.userInfo.Name){
      // code
    }
    
  }

  componentWillUnmount(){
    clearInterval(this.timer)
    console.log('component will unmount called')
  }
  render() {
    const {userInfo} = this.state
    console.log('child render '+ this.props.name)
   
    return (
      <div>
        <h2>Profile Class Component</h2>
        <h1>Name :{userInfo.login}</h1>
      
      </div>
    );
  }
}

export default ProfileClass;
