/* eslint-disable react/jsx-key */


import { useState } from "react";
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";
function Rk() {

 const loc=useLocation(); 
 const c=useNavigate();
 const setid=loc.state?.key4;
 const examid=loc.state?.ex_id;

const [list,mlist]=useState([]);
  useEffect(() => {

    fetch(`http://localhost/pg/project/Rankings.php?exmid=${examid}`)
      .then((response) => { return response.json() })
      .then(data => (mlist(data)))
      
  }, []);

   const details=(a,b,d)=>
    {
      c('/stat',{state:{email:a,mob:b,eid:d,t:setid}});
    }
  return (



    <div className="min-h-full ">
     

      <header className="bg-white shadow">
        
        <div className="flow-root mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="float-left text-3xl font-bold tracking-tight text-gray-900">Rankings</h1>
          <button className="float-right px-2 py-2 bg-purple-600  hover:bg-blue-700 text-gray-50 text-xl rounded-md" onClick={()=>{c('/Your sets',{state:{key:setid}})}}>{'<'} Back</button>
      </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 border border-dark-600 ">
        <ul role="list" className="divide-y divide-gray-100">
          {  list.map((data) => (
      <li  className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          
          <div className="min-w-0 flex-auto">
            <div className="grid grid-cols-4 gap-3">
          <span className="inline-flex items-center rounded-md bg-yellow-50 px-1 py-1 text-sm font-medium text-gray-700 ring-1 ring-inset ring-red-600/10">
           Rank: {data.rank}
         </span>
            <p className="pl-2 text-xl font-semibold leading-6 text-gray-900">{data.name}</p>
            </div>
            <div className="grid grid-cols-4 gap-3">
            <button  className="mt-5 ml-8 px-2 py-2 border border-transparent text-l font-medium rounded-md text-white bg-green-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
             >
            Score {data.score}
      </button>
      <button onClick={()=>details(data.email,data.mob,examid)} className="mt-5 ml-8 px-2 py-2 border border-transparent text-l font-medium rounded-md text-white bg-yellow-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
             >
            view 
      </button>
      </div>
          </div>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
         { data.pdf==1?'PDF provided':'PDF not provided'}
         </span>
         <br></br>
         <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          {data.cer==1?'certificate provided':'No certificate'}
         </span>
        </div>
          
      </li>
))}
  </ul>


        </div>
      </main>
    </div>
  )
}

export default Rk