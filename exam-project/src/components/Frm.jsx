/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unknown-property */

import { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import axios from 'axios';
import Timec from './Timec';



export default function Frm() {

  const [message, setMessage] = useState([]);
 
  const nav=useNavigate();
  //const score=useNavigate();
  const loc = useLocation();
  // eslint-disable-next-line no-unused-vars
  const email = loc.state?.email;
  const ex_id = loc.state?.id;


  useEffect(() => {

    

    fetch(`http://localhost/pg/project/b.php?exmid=${ex_id}`)
      .then((response) => { return response.json() })
      .then(data => setMessage(data)
      )
      .catch(error => console.error('Error:', error));


      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = ''; 
        return '';
      };
  
      
      window.addEventListener('beforeunload', handleBeforeUnload);
  
    
      return () => {
       
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
  
  }, []);



  const [question, setqes] = useState(1);
  const [option, setoption] = useState([])
  // const [color1,setcolor1]=useState([])
  //const [data,realdata]=useState([])

/* useEffect(() => {
   const [t1, mtim] = useState(message[0].time);
   

   return () => {
     second
   }
 }, [third])
 */

  let v1 = 0, k = 0, v = 0, k1 = 0;
  const quesi = () => {
    if (question < message.length) {
      v1 = question + 1
      setqes(v1);


    }
    else {
      v1 = 1
      setqes(v1)
    }
    k=find_q(v1);
    if (k == 0) {
      document.getElementById('D').style.backgroundColor = ''
      document.getElementById('A').style.backgroundColor = ''
      document.getElementById('B').style.backgroundColor = ''
      document.getElementById('C').style.backgroundColor = ''
    }


  }

  const set=(s)=>
    {
      setqes(s);
      k=find_q(s);
      if (k == 0) {
        document.getElementById('D').style.backgroundColor = ''
        document.getElementById('A').style.backgroundColor = ''
        document.getElementById('B').style.backgroundColor = ''
        document.getElementById('C').style.backgroundColor = ''
      }
    }

  const find_q=(f)=>
    {
      for (let i = option.length - 1; i >= 0; i--) {
        if (option[i]['no'] == f) {
          console.log('ok')
          document.getElementById(option[i]['option']).style.backgroundColor = 'green'
          colrset(option[i]['option'])
          k1 = 1
          break
        }
      }
      return k1;
    }
  const quesd = () => {

    if (question > 1) {
      v = question - 1
      setqes(v);
      k1=find_q(v);
    }
    if (k1 == 0) {
      document.getElementById('D').style.backgroundColor = ''
      document.getElementById('A').style.backgroundColor = ''
      document.getElementById('B').style.backgroundColor = ''
      document.getElementById('C').style.backgroundColor = ''
    }
    console.log(v)


  }
  const subans = () => {
    // console.log(arr)
    let arr = []
    let arr2 = []
    //const dataset=new Set()
    //dataset.add(option)

    // console.log(arr)

    for (let i = option.length - 1; i >= 0; i--) {
      if (!arr.includes(option[i]['no'])) {
        arr.push(option[i]['no'])
        arr2.push(option[i])
      }
    }

    //console.log(arr2);

    // const datasend = JSON.stringify(arr2)
   // console.log(email)
   
    const url = 'http://localhost/pg/project/data.php'
    let fData = new FormData();
    fData.append('data', JSON.stringify(arr2));
    fData.append('examid', ex_id);
    fData.append('email', email);

    

    axios.post(url, fData)
      .then((response)=>{
        console.log(response.data) 
        nav('/stat',{state:{email:email,eid:ex_id,t:null}})
      }
      
      )
      .catch(error => {
        console.error('Error:', error);
      });
     
  }

  let dict = {};
  // let arr=[];

  function colrset(action) {
    if (action == 'A') {
      document.getElementById('B').style.backgroundColor = ''
      document.getElementById('C').style.backgroundColor = ''
      document.getElementById('D').style.backgroundColor = ''
    }
    else if (action == 'B') {
      document.getElementById('A').style.backgroundColor = ''
      document.getElementById('C').style.backgroundColor = ''
      document.getElementById('D').style.backgroundColor = ''
    }
    else if (action == 'C') {
      document.getElementById('A').style.backgroundColor = ''
      document.getElementById('B').style.backgroundColor = ''
      document.getElementById('D').style.backgroundColor = ''
    }
    else {
      document.getElementById('A').style.backgroundColor = ''
      document.getElementById('B').style.backgroundColor = ''
      document.getElementById('C').style.backgroundColor = ''
    }

  }



  const add = (action) => {

    //setoption(action) 

    dict = {
      no: question,
      option: action,
    }

    //document.getElementById(action).addEventListener("click",changecol)

    //function changecol()
    //{
    document.getElementById(action).style.backgroundColor = 'green'
    colrset(action)

    //}

    //setoption(option.map((action, index) => index === question ? action : console.log("nochange")));
    setoption(preop => [...preop, dict])
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
      <div className="min-h-full">

        {
         message.map((data,index)=>(
           index==0 && <header className="bg-white shadow">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                
                <Timec time={data.time} func={subans}/>
              </div>

            </header>
  
        ))}
        <main>
          <div className=' pr-5' align="right">
            <button type="button" className=" bg-blue-700 text-2xl text-gray-50 hover:bg-violet-700 rounded-lg  px-4 py-2 mt-6  " onClick={subans}>Submit </button>
          </div>
          <div className="mx-auto max-w-7xl  py-6 sm:px-6 lg:px-8">


            {
              message.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <p className="container">
                  <p>
                    <div>
                    <strong className='text-2xl'>Question- {data.no}</strong>
                    
                    </div>
                    <div className='pl-5   pt-3'>
                   {data.question && <textarea id="message" rows="5" className=" text-xl block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"  readOnly>
                    {data.question}
                    </textarea>
}
                    </div>
              
                    <br></br>
                    <p className='pl-5 display-6'>
                      {data.image.length > 38 && <img id="src1" src={data.image} alt="Image Preview" className=" h-2/5 w-2/5"></img>}
                    </p>
                    <br></br>

                    <div className="list-group ">

                      <button type="button" className={`${data.option1 == '' ? 'd-none' : 'text-lg list-group-item list-group-item-action border-stone-50'}`} ><strong className='text-xl'>(A)</strong> &nbsp;{data.option1}</button>
                      <button type="button" className={`${data.option2 == '' ? 'd-none' : 'text-lg list-group-item list-group-item-action border-stone-50'}`}><strong className='text-xl'>(B)</strong>  &nbsp;{data.option2}</button>
                      <button type="button" className={`${data.option3 == '' ? 'd-none' : 'text-lg list-group-item list-group-item-action border-stone-50'}`}><strong className='text-xl'>(C)</strong>  &nbsp;{data.option3}</button>
                      <button type="button" className={`${data.option4 == '' ? 'd-none' : 'text-lg list-group-item list-group-item-action border-stone-50'}`}><strong className='text-xl'>(D)</strong>  &nbsp;{data.option4}</button>
                    </div>
                    <br></br>
                  </p>
                  <br></br>
                </p>

              ))}
            <div className="pb-5"></div>
            <div className="pb-5"></div>
            <div className="pb-5"></div>

          </div>

        </main>

      </div>
      <div className="fixed-bottom w-100 h-1/6  bg-gray-300 shadow-2xl rounded-lg d-flex justify-content-around">
        <button type="button" id="A" className="bg-gray-100 shadow-xl rounded h-2/5 mt-6 size-16" onClick={() => add('A')} value="A" >A</button>
        <button type="button" id="B" className="bg-gray-100 shadow-xl rounded h-2/5 mt-6 size-16" onClick={() => add('B')} value="B" >B</button>

        <div class="btn-group dropup">      
        <button type="button" id="no" className=" bg-cyan-600 text-gray-50 rounded-full h-2/5 mt-6 size-20 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value={question} >Q{question}</button>
        <div class="dropdown-menu ">
        <div class="grid grid-cols-3 gap-x-3 pl-1 pr-1 ">
        {message.map((data,index) => (
           <button onClick={()=>{set(data.no)}} className={`border ${data.no==question?'text-white bg-blue-600 ':''}'border-gray-50' rounded h-2/5 mt-12 py-2`} key={index}>{data.no}</button>
        ))} </div>
  </div></div>
        <button type="button" id="C" className="bg-gray-100 shadow-xl rounded h-2/5 mt-6 size-16" value="C" onClick={() => add('C')}>C</button>
        <button type="button" id="D" className="bg-gray-100 shadow-xl rounded h-2/5 mt-6 size-16" value="D" onClick={() => add('D')}>D</button>
        <div className={`position-absolute bottom-1 start-1 pl-5 ${question == 1 ? 'd-none' : ''}`} > <button type="button" className=" bg-blue-800 text-gray-50 hover:bg-violet-700 rounded  h-1/5 mt-6 size-40" onClick={quesd}>Previous </button></div>

        <div className={`position-absolute bottom-1 end-1 pr-5 ${question == message.length ? 'd-none' : ''}`}><button type="button" className=" bg-blue-700 text-gray-50 hover:bg-violet-700 rounded h-1/5 mt-6 size-40" onClick={quesi}>Next </button></div>
      </div>





    </>
  )
}
