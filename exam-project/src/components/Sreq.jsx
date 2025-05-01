/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import { useEffect, useState } from 'react';
import axios from 'axios';
import {

  CheckIcon,



} from '@heroicons/react/20/solid'








export default function Sreq(props) {


  const valid = (data, c) => {
    const url = 'http://localhost/pg/project/join_student.php';
    let fData = new FormData();
    fData.append('email', data);
    if (c == 1) {
      fData.append('check', "ok");
      fData.append('id',props.setid );
      axios.post(url, fData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error:', error);
        });
        props.mtot(props.tot +1)

       

    }
    else {
      fData.append('id', props.setid);
      fData.append('check', "wait");
      axios.post(url, fData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error:', error);
        });


    }

    const element = document.getElementById(data);
    element.remove();
 
  }

  const [message, setMessage] = useState([]);

  const fetchinfo=()=>{
    fetch(`http://localhost/pg/project/request_info.php?id=${props.setid}`)
      .then((response) => { return response.json() })
      .then(data => setMessage(data))
      .catch(error => console.error('Error:', error));
  }
  useEffect(() => {

    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => {
      console.log('WebSocket connection established');
      fetchinfo();
    };
  
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
     
      if (data.type === 'approve') {
        // Assuming `msg` is used to display messages or approvals
        fetchinfo();
       

      }
    };
  
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };
    
    fetchinfo();

  
  
    // eslint-disable-next-line react/prop-types
  }, []);

  return (

    <div>
      <strong  className='text-xl'>Join Requests</strong>

      <div className="overflow-y-auto h-80">
        {message.map((data) => (
          <div id={data.email} className={`border-solid border-2  rounded-lg mt-4 lg:flex lg:items-center w-auto lg:justify-between `}>
            <div className="pl-8 min-w-0 flex-1">
              <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                My name is&nbsp;<strong className='font-serif text-emerald-500'>{data.name}</strong>
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">

                <div className="mt-2 flex items-center text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                    <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                  </svg>
                  &nbsp; {data.email}

                </div>

              </div>
            </div>
            <div className="mt-5 pr-8 pb-2.5 flex lg:ml-4 lg:mt-0">
              <span className="ml-3 sm:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                  onClick={() => { valid(data.email, 1) }}
                >

                  <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                  Accept
                </button>
              </span>

              <span className="ml-3  sm:block">
                <button className='inline-flex items-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-400' onClick={() => { valid(data.email, 2) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                  Reject
                </button>

              </span>



            
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}
