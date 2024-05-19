import { Outlet } from "react-router-dom"
import ProfileClass from "./ProfileClass"
import Profile from "./Profile"
import React from "react"

// const About1 =()=>{
//     return(
//         <div>
//             <h1>About US</h1>
//             {/* <Outlet/> */}
//             {/* <Profile name ={'Alankar'} /> */}
//             <ProfileClass  name ={'Alankar Class'}/>
//         </div>
        
//     )
// }

class About extends React.Component{
    constructor(props){
        super(props)
        console.log('parent constructor')
    }
    componentDidMount(){
        console.log('parent componentDidMount')
    }
    render(){
        console.log('parent render')
        return(
            <div>
                <h1>About US</h1>
                <Outlet/>
                {/* <Profile name ={'Alankar'} /> */}
                {/* <ProfileClass  name ={'First Class'}/> */}
                {/* <ProfileClass  name ={'Second Class'}/> */}
            </div>
            
        )
    }
}

export default About

// Parent Constructor
// Parent Render
// First  Child Constructor
// First Child Render
// Second Child Constructor
// Second Child Render
