import React,{useState,useEffect} from 'react'
import './App.css'
import ClipLoader from "react-spinners/ClipLoader";

function App() {

  var [data,setdata]=useState([])
  var [pages,setpages]=useState(10)
  var [loading,setloading]=useState(false)


  useEffect(()=>{
    fetchdata()
  },[pages])




  const override = {
    margin: "0 auto",
  };



  useEffect(()=>{

    window.addEventListener("scroll",handleScroll)

    return ()=> window.removeEventListener("scroll",handleScroll)
  })



  function handleScroll()
  {
    if(window.innerHeight+document.documentElement.scrollTop>=document.documentElement.scrollHeight)
    {
      setpages(prev=>prev+4)
    }
  }

  async function fetchdata()
  {
    setloading(true)

    await fetch("http://localhost:5000/api/contacts/"+pages, {
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
      setdata(data)
      setloading(false)
  })
    // setTimeout(async () =>{
    //   await fetch("http://localhost:5000/api/contacts/"+pages, {
    //     method: "GET",
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setdata(data)
    //     setloading(false)
    // })
    // }, 9500);

  }
  


  return (
    <div className="App">

      {
        data.length>1?data.map((std)=>(
          <div key={std._id} className="box">
               <p>
                  email:{std.email}<br/>
                  name:{std.name}<br/>
                  phone:{std.phone}
               </p>
          </div>
        )):  
          <ClipLoader loading={loading} color="green" cssOverride={override} size={150}/>
      }

    </div>
  );
}

export default App;
