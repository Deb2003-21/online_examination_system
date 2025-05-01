import { useEffect, useState } from "react"
import Snav from "./Snav"
import {  useNavigate,useLocation } from "react-router-dom";



export default function Rlist() {

    const [people,mpeople]=useState([]);
    let loc = useLocation()
    let newdata = loc.state.key2
    useEffect(() => {

        fetch(`http://localhost/pg/project/resultlist.php?email=${newdata}`)
          .then((response) => { return response.json() })
          .then(data => (mpeople(data)))
          
      }, []);

      const Navigate =useNavigate();
       const anlys=(id,email)=>
        {
            Navigate('/stat',{state:{email:email,eid:id}});
        }
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full ">
      <Snav current="2" email={newdata}/>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Results</h1>
            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          
          NOTE: only attempted exam&apos;s result are viewable and downloadable 
           
      </span>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 border border-dark-600 ">
          <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            
            <div className="min-w-0 flex-auto">
              <p className="pl-2 text-xl font-semibold leading-6 text-gray-900">{person.paper}</p>
              
              <button  className="mt-5 ml-8  px-4 py-2  border border-transparent text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
               onClick={()=>anlys(person.examid,newdata)} >
            View / Download
        </button>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-l leading-6 text-gray-900">Score: {person.score} </p>
            <p className="text-l leading-6 text-gray-900">Total: {person.tot} </p>
          </div>
        </li>
      ))}
    </ul>


          </div>
        </main>
      </div>
    </>
  )
}
