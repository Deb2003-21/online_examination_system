/* eslint-disable react/jsx-key */


import Navt from './Navt'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

function Tlists() {
  const loc = useLocation();
  const setid = loc.state.key;
  const [list, mlist] = useState([]);
  const [r1, mr1] = useState('');
  const [r2, mr2] = useState('');
  const [end, mend] = useState(0);
  const [s, mstore] = useState('');
  const submit = () => {

    if (r1=='' || r2=='')
    {
      alert('please give permissions ')
    }
    else{
    const url = 'http://localhost/pg/project/questionlist.php';
    let fData = new FormData();
    fData.append('setid', setid);
    fData.append('upt', s);
    fData.append('r1', r1);
    fData.append('r2', r2);
    fData.append('end', end);


    axios.post(url, fData)
      .then(() => {
        document.getElementById('bt').style.display = 'none';
        window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  }
  const reshedule = () => {
    const url = 'http://localhost/pg/project/reshedule.php';
    let fData = new FormData();
    fData.append('setid', setid);
    fData.append('upt', s);
    fData.append('end', end);


    axios.post(url, fData)
      .then(() => {
        window.location.reload();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  const down = (eid) => {
    const url = 'http://localhost/pg/project/answer.php'
   
  
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url+"?examid="+eid;
        document.body.appendChild(a);
        a.click();
       
      }


  const store = (eid) => {
    mstore(eid);
  }

  const navigate = useNavigate();
  const edit = (id, set, tot) => {
    navigate('/Editer', { state: { key0: setid, key: id, key1: set, key2: tot } })
  }

  useEffect(() => {

    fetch(`http://localhost/pg/project/questionlist.php?setid=${setid}&upt=1&end=0&r1=0&r2=0`)
      .then((response) => { return response.json() })
      .then(data => (mlist(data)))

  }, []);
  return (
    <div>
      <Navt col={"bg-cyan-500 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"} setid={setid} p={2} text={"View/Edit"} />
      <br></br>
      <br></br>
      <b><center><p className="text-3xl pl-38 pt-10">Your Sets</p>
      </center>
      </b>
      {list.map((data) => (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
          <div className="md:flex">
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Test :   {data.paper} </div>
              <p className="mt-2 text-gray-500"> Distribution:  <strong className='text-green-600'>Posetive +{data.pos}</strong> with <strong className='text-red-600'>Negetive -{data.neg}</strong> </p>
              {data.end_date == '0000-00-00' ? '' : <p className="mt-2 text-gray-500 font-bold">End date:  {data.end_date} 12 AM {' '}
                <button className='px-1 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-sky-500 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500' data-toggle="modal"
                  data-target="#exampleModal12" onClick={() => { store(data.exm_id) }} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
                    <path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
                  </svg>
                </button></p>}
              <p className="mt-2 text-gray-500">Marks:  {parseFloat(data.pos) * parseFloat(data.tot)}  </p>
              <p className="mt-2 text-gray-500">Total:  {data.tot} Questions </p>
              <p className="mt-2 text-gray-500">Time:  {data.time} minutes </p>
              {data.sbmit == null ?
                <button className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" onClick={() => { edit(data.exm_id, data.paper, data.tot) }}>
                  View
                </button> :
                <div className='grid gap-2 grid-cols-2'>
                  <button className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" onClick={() => navigate('/ranking', { state: { key4: setid, ex_id: data.exm_id } })} >
                    Result
                  </button>
                  <button className=" mt-5 px-2 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" onClick={() => { down(data.exm_id) }} >
                    Download
                  </button></div>
              }
              {data.count == data.tot && data.sbmit == null ?
                <button id='bt' className="mt-5 ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-toggle="modal" onClick={() => { store(data.exm_id) }} data-target="#exampleModal" >
                  Submit Now
                </button>
                : ''
              }
            </div>

          </div>
        </div>
      ))}




      <div className="modal bg-stone-400" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">


        <div className="modal-dialog " >
          <div className="modal-content bg-stone-400 border-stone-400" >

            <div className="modal-body  " >


              <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">

                  <button type="button" className="close " data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                  <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Permissons</h1>


                  <div className="mb-4">
                    <label htmlFor="examid" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Do you want share the answer copy?</label>
                    <label>
                      <input
                        type="radio"
                        name="radio"
                        value={r1}
                        onClick={() => { mr1(1) }}
                      />
                      {' '} Yes
                      <input
                        type="radio"
                        name="radio"
                        value={r1}
                        className='ml-4'
                        onClick={() => { mr1(-1) }}
                      />
                      {' '}
                      No
                    </label>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="cid" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">will you provide a certificate?</label>
                    <label>
                      <input
                        type="radio"
                        name="radio1"
                        value={r2}
                        onClick={() => { mr2(1) }}
                        required
                      />
                      {' '} Yes
                      <input
                        type="radio"
                        name="radio1"
                        value={r2}
                        className='ml-4'
                        onClick={() => { mr2(-1) }}

                      />
                      {' '}
                      No
                    </label>
                  </div>

                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">End Date</label>
                  <div className="grid grid-cols-3 gap-x-4 my-2">

                    <div className="dropdown shadow-sm rounded-md w-36 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                      <button className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        {end == 0 ? 'select' : 'After ' + end + ' day'}
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" value={end}  >
                        <button className="dropdown-item" onClick={() => mend(1)}> Tommorow 12AM</button>
                        <button className="dropdown-item" onClick={() => mend(2)}> After 2 days At 12</button>
                        <button className="dropdown-item" onClick={() => mend(4)}> After 4 days At 12</button>
                        <button className="dropdown-item" onClick={() => mend(6)}> After 6 days At 12</button>

                      </div>
                    </div>
                  </div>


                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => { submit() }}  >NEXT {'->'}</button>

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="modal bg-stone-400" id="exampleModal12" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog " >
          <div className="modal-content bg-stone-400 border-stone-400" >

            <div className="modal-body  " >


              <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">

                  <button type="button" className="close " data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span></button>
                  <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Reshedule</h1>


                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">End Date</label>
                  <div className="grid grid-cols-3 gap-x-4 my-2">

                    <div className="dropdown shadow-sm rounded-md w-36 px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                      <button className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                        {end == 0 ? 'select' : 'After ' + end + ' day'}
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" value={end}  >
                        <button className="dropdown-item" onClick={() => mend(1)}> Tommorow 12AM</button>
                        <button className="dropdown-item" onClick={() => mend(2)}> After 2 days At 12</button>
                        <button className="dropdown-item" onClick={() => mend(4)}> After 4 days At 12</button>
                        <button className="dropdown-item" onClick={() => mend(6)}> After 6 days At 12</button>

                      </div>
                    </div>
                  </div>


                  <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => { reshedule() }}  >Reshedule now{'->'}</button>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Tlists