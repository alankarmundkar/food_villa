import { useEffect, useState } from "react";
const Profile = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  useEffect(()=>{
    //Api Call
    const timer =setInterval(()=>{
        console.log('use effect called')
    },1000)
    return ()=>{
        console.log('use effect return called')
        clearInterval(timer)
    }
  },[])
  return (
    <div>
      <h2>Profile Component</h2>
      <h2>Name: {name}</h2>
    </div>
  );
};

export default Profile;
