/* eslint-disable react/jsx-key */


import { useEffect, useState } from "react";






  
  
  export default function Reach() {
    const [list,mlist]=useState([])
   
    useEffect(() => {

      fetch(`http://localhost/pg/project/reach.php`)
        .then((response) => { return response.json() })
        .then(data => (mlist(data)))
    
    }, []);
    return (
      <div className="bg-yellow-600  py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl >
            {list.map((stat) => (
              <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto text-white flex max-w-xs flex-col gap-y-4">
                <dt className="text-white leading-7 text-gray-600">Total Questions Published</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.tst}
                </dd>
                </div>
                <div className="mx-auto text-white flex max-w-xs flex-col gap-y-4">
                <dt className="text-white leading-7 text-gray-600">Total Teachers</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.tt}
                </dd>
                </div>
                <div className="mx-auto text-white flex max-w-xs flex-col gap-y-4">
                <dt className="text-white leading-7 text-gray-600">Total Students</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  {stat.ts}
                </dd>
                </div>
                </div>
              
              
            ))}
          </dl>
        </div>
      </div>
    )
  }

  