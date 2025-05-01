/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */

import Navt from './Navt'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import Alert from './Alert';


function Editer() {

  const [alrt,setalrt]=useState(null)
 
  const showalert=(message)=>
  {
   setalrt({
   msg:message
   }
   )
   setTimeout(()=>
   {
     setalrt(null)
   },4500)
  }

  const [previewSrc, setPreviewSrc] = useState([]);
  const [f1, fname] = useState('');

  const loc = useLocation();
  const navigate =useNavigate();
  const exm_id = loc.state?.key;
  const set = loc.state?.key1;
  const totq = loc.state?.key2;
  const tid = loc.state?.key0;


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file)
    fname(() => event.target.files[0])

    if (file && file.type.startsWith('image')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result);
        
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc('');
      alert('Please select an image file.');
    }
  };



  const [inc, minc] = useState(1)
  const [ques, mques] = useState('')

  const [op1, mop1] = useState('')
  const [op2, mop2] = useState('')
  const [op3, mop3] = useState('')
  const [op4, mop4] = useState('')
  const [ans, mans] = useState('')

  const [list, mlist] = useState([])
  const [set4, mset] = useState(0)
  //const [setid, msetid] = useState(null)

  const [r1, mr1] = useState(-1);
  const [r2, mr2] = useState('');
  const [end, mend] = useState(0);

  useEffect(() => {

    fetch(`http://localhost/pg/project/qtestres.php?examid=${exm_id}&set=${set}`)
      .then((response) => { return response.json() })
      .then(data => (minc(data.length + 1), mlist(data)))
      .catch(error => console.error('Error:', error));


  }, []);



  const submit = () => {

    if (r1=='' || r2=='')
    {
      alert('please give permissions ')
    }
    else{
    const url = 'http://localhost/pg/project/questionlist.php';
    let fData = new FormData();
    fData.append('setid', tid);
    fData.append('upt', exm_id);
    fData.append('r1', r1);
    fData.append('r2', r2);
    fData.append('end', end);


    axios.post(url, fData)
      .then(() => {
        $('#exampleModal').modal('hide');
        navigate('/Your sets', { state: { key: tid } })
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  }
  //kam baki
  const getdata = (data) => {
    const url = 'http://localhost/pg/project/questionedit.php';
    let fData = new FormData();
    fData.append('examid', exm_id);
    fData.append('tqno', data);

    axios.post(url, fData)
      .then(response => {
        mques(response.data[0].question);
        mop1(response.data[0].option1)
        mop2(response.data[0].option2)
        mop3(response.data[0].option3)
        mop4(response.data[0].option4)
        mans(response.data[0].answer)
        minc(response.data[0].no)
        setPreviewSrc(response.data[0].image
        )
        mset(s => s + 1)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const update = () => {
   
    const url = 'http://localhost/pg/project/updateset.php';
    let fData = new FormData();
    fData.append('exmid', exm_id);
    fData.append('qno', inc);
    fData.append('quest', ques);
    fData.append('file', f1);
    fData.append('op1', op1);
    fData.append('op2', op2);
    fData.append('op3', op3);
    fData.append('op4', op4);
    fData.append('ans', ans);

    axios.post(url, fData).then(
      mset(0), mques(''), mop1(''), mop2(''), mop3(''), mop4(''), mans('')

    ).catch(error => alert(error));
    location.reload();
  }
 
  


  let dict = {}
  const qpost = () => {
    if (ans!='' && ques!='')
      {
    const url = 'http://localhost/pg/project/qtest.php';
    minc(inc + 1)

    dict = {
      no: inc,
      question: ques,
      image: previewSrc.indexOf('base64') >= 0 ? previewSrc : f1,
      option1: op1,
      option2: op2,
      option3: op3,
      option4: op4,
      answer: ans,
    }

    mlist(preop => [...preop, dict])
    let fData = new FormData();
    fData.append('exmid', exm_id);
    fData.append('qno', inc);
    fData.append('quest', ques);
    fData.append('file', f1);
    fData.append('op1', op1);
    fData.append('op2', op2);
    fData.append('op3', op3);
    fData.append('op4', op4);
    fData.append('ans', ans);

    axios.post(url, fData).then(
      mques(''), mop1(''), mop2(''), mop3(''), mop4(''), mans('')

    ).catch(error => alert(error));
  }
    else
    {
      showalert('please fill the form properly');
      
    }


  }
  return (
    <div>
      <Alert setmode={alrt} />
      <body className="body bg-white dark:bg-[#0F172A]">
      
        <Navt col={"bg-cyan-500 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"} p={1} p1={3}  text={"creating questions...."} setid={tid}/>
        <div className="my-6 pt-7 ">

          <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif] ">



            <div className=" space-y-4">

              <h1 className="text-xl font-extrabold"> Set Name:  {set} </h1>
              {totq-inc!=-1 &&<h1 className="text-3xl font-extrabold">Question - {inc} </h1>}
              {
                totq-inc!=-1?
                <div>

                  <textarea rows="8" placeholder='write your question here '
                    name='message' value={ques} onChange={(e) => mques(e.target.value)}
                    className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                  <b>Image for the question (optional)</b>
                  <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                    <input id="inputGroupFile02" type="file" onChange={handleFileChange} accept="image/*" multiple className="hidden" />
                    {previewSrc.length != 0 && <img src={previewSrc} alt="Image Preview" className=" h-50 w-50"></img>}
                    <div className="grid gap-4 grid-cols-2">
                      <label className="input-group-text text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md" htmlFor="inputGroupFile02" >Upload</label>
                      <button className=" text-white bg-rose-500 hover:bg-rose-600 font-semibold rounded-md" onClick={() => setPreviewSrc('')}>clear </button>
                    </div>
                  </header>
                  <h2 className="text-xl font-extrabold">Options </h2>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">(A)</span>
                    <input type="text" className="form-control" placeholder='option 1' value={op1} onChange={(e) => mop1(e.target.value)} aria-describedby="basic-addon1" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">(B)</span>
                    <input type="text" className="form-control" placeholder='option 2' value={op2} onChange={(e) => mop2(e.target.value)} aria-describedby="basic-addon1" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">(C)</span>
                    <input type="text" className="form-control" placeholder='option 3' value={op3} onChange={(e) => mop3(e.target.value)} aria-describedby="basic-addon1" />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">(D)</span>
                    <input type="text" className="form-control" placeholder='option 4' value={op4} onChange={(e) => mop4(e.target.value)} aria-describedby="basic-addon1" />
                  </div>
                  <h2 className="text-xl font-extrabold">Answer</h2>
                  <div className="dropdown shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                    <button className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                      {ans != '' ? ans : 'choose Answer'}
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" value={ans}  >
                      <button className="dropdown-item" onClick={() => { mans('A') }} > A</button>
                      <button className="dropdown-item" onClick={() => { mans('B') }}> B</button>
                      <button className="dropdown-item" onClick={() => { mans('C') }}> C</button>
                      <button className="dropdown-item" onClick={() => { mans('D') }}> D</button>

                    </div>
                  </div>

                </div>
                :
                
            <img src='https://cdn5.vectorstock.com/i/1000x1000/25/99/done-rubber-stamp-vector-11312599.jpg'></img>
              }


              <div className='flex'>
                {
                  set4 == 0 ?
                    totq - inc != -1 ?

                      <button
                        onClick={() => { qpost() }} className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">Next</button>
                      :
                      <button
                        className="text-white bg-purple-600 hover:bg-purple-800 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
                        data-toggle="modal" onClick={() => { submit() }} data-target="#exampleModal"
                        >Submit now</button>
                    :
                    <button
                      className="text-white bg-green-500 hover:bg-green-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full" onClick={() => { update() }}>Update and Next</button>
                }
                <label className=" font-semibold rounded-md text-sm px-4 py-2.5 w-full">{inc <= totq ? inc : totq} / {totq}</label>
              </div>

            </div>



            <div className="overflow-y-auto h-[50rem]" id='rel' key={set4}>
              <h1 className="text-3xl font-extrabold"> Preview & Edit</h1>
              {
                list.map((data) => (


                  <div className="mt-12">
                    <div className=" bg-white/20 p-6 rounded-md shadow-sm cursor-pointer border-2 border-gray-950 ">
                      <h2 className="text-xl font-semibold mb-4">Question {data.no}</h2>

                      <p className="text-gray-700">{data.question}
                      </p>
                      {data.image.length > 38 && <img id="src1" src={data.image} alt="Image Preview" className=" h-50 w-50"></img>}
                      <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-4 xl:mt-4">
                        <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
                          (A) {data.option1} (B) {data.option2}  (C) {data.option3} (D){data.option4}
                        </dd>
                      </div>
                      <br>
                      </br>
                      <p>Answer: {data.answer}</p>



                      <button className="flex bg-blue-500 rounded-full font-bold text-white px-2 py-2 transition duration-300 ease-in-out hover:bg-blue-600 mr-6" onClick={() => { getdata(data.no) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                          <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                          <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                        </svg>

                      </button>



                    </div>

                  </div>
                ))}

            </div>

          </div>

        </div>

      </body>
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

    </div>
  )
}

export default Editer
