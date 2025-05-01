/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import { useEffect,useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import Alert from './Alert'
import Snav from './Snav';
//import { io } from 'socket.io-client';




export default function Sdash() {

  const navigate = useNavigate();
  const [mob, setmob] = useState('')
  const [id, setid] = useState('')

  const d = new Date();


  const show = (data) => {

   navigate('/Testlist',{state:{user:newdata,tid:data}})
  }
  let loc = useLocation()
  let newdata = loc.state.key2
 

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

  const join_req = () => {

    if( id.length<5)
      {
        showalert("invalid data ")
         //setid('')
          setmob('')
      }
      else{
        if(id.length>5 && mob.length!=0)
          {
            setmob('')
          }
    const url = 'https://hatua.000webhostapp.com/join_req.php';

    let fData = new FormData();
    fData.append('semail', newdata);
    fData.append('mob', mob);
    fData.append('id', id);
    axios.post(url, fData).then(response =>
      showalert(response.data), setmob(''),
      //navigate('/studentDashboard',{state:{key2:data!=null?data:email}})
    ).catch(error => alert(error));
  }
    
  }


  const [msg, setmsg] = useState([]);
  const [appr,sappr]=useState(0);

  const fetchdata=()=>{
    fetch(`https://hatua.000webhostapp.com/check.php?email=${newdata}`)
      .then((response) => response.json())
      .then(data => (setmsg(data),sappr(parseInt((parseInt(data[1].appr)/parseInt(data[1].texams))*100))))
      .catch(error => console.error('Error:', error));
   }

   
useEffect(() => {
  //const socket = new WebSocket('ws://localhost:8080');

  /*socket.onopen = () => {
    console.log('WebSocket connection established');
    fetchdata();
  };*/

  //socket.onmessage = (event) => {
    //const data = JSON.parse(event.data);
   
    //if (data.type === 'approval') {
      // Assuming `msg` is used to display messages or approvals
      fetchdata();
   // }
  //};

 /* socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  socket.onclose = () => {
    console.log('WebSocket connection closed');
  };*/

  // Fetch data initially



}, []); // Ensure dependencies are correctly listed if any

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
        <Snav email={newdata} />
       
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">


            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Hello,&nbsp;
              {msg.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <strong className='text-indigo-400'>{ data.name }</strong>
              
              ))}
            </h1>


          </div>
        </header>

       
        <main>
               


<div className="flex flex-wrap -mx-3 mb-5">
  <div className="w-full max-w-full px-3 mb-6  mx-auto bg-white">
    <div className="flex flex-wrap mt-5 mx-5 removable">
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/3 sm:flex-none xl:mb-0 xl:w-1/3 drop-zone">
        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable" draggable="true">
           
            <div className="flex flex-col items-start justify-between flex-auto py-8 px-9">
                <div className="m-0">
                    <img className="w-[50px] h-[50px]" src="https://logodix.com/logo/1895291.jpg" alt="youtube"/>
                </div>
                <br></br>
                <div className="flex flex-col ">
                    <div className="m-0">
                        <span className="font-medium text-secondary-dark text-lg/normal">Total Exams</span>
                    </div>
                    {msg.map((data) => (
               
                    <span className="text-secondary-inverse text-4xl tracking-[-0.115rem] font-bold">{data.texams}</span>
                    ))}
                </div>
                <br></br>
                <span className="inline-flex items-center px-1 py-1 font-semibold text-center align-baseline rounded-lg text-base/none text-success bg-success-light border border-success">
                    
                    Updated {d.getSeconds() } seconds ago
                </span>
            </div>
           
        </div>
    </div>
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/3 sm:flex-none xl:mb-0 xl:w-1/3 drop-zone">
        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable" draggable="true">
           
            <div className="flex flex-col items-start justify-between flex-auto py-8 px-9">
                <div className="m-0">
                    <img className="w-[80px] h-[25px]" src="https://th.bing.com/th/id/OIP.a1LwP3pzIQRQ2OpJECI7zAAAAA?rs=1&pid=ImgDetMain" alt="youtube"/>
                </div>
                <div className="flex flex-col my-7">
                    <div className="m-0">
                        <span className="font-medium text-secondary-dark text-lg/normal">Appearance in Exams</span>
                    </div>
                   
               
               <span className={`text-secondary-inverse text-3xl tracking-[-0.115rem] font-medium1 ${appr<60?appr>20?'text-yellow-600':'text-red-600':'text-green-600'}`}>{appr}%</span>

                </div>
                <span className="inline-flex items-center px-1 py-1  font-semibold text-center align-baseline rounded-lg text-base/none text-success bg-success-light border border-success">
                  Updated {d.getSeconds() } seconds ago
                </span>
            </div>
            
        </div>
    </div>
    <div className="w-full max-w-full px-3 mb-6 sm:w-1/3 sm:flex-none xl:mb-0 2xl:w-1/3 drop-zone">
        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl  bg-light/30 draggable" draggable="true">
           
            <div className="flex flex-col items-start justify-between flex-auto py-8 px-9">
            <div className="m-0">
                    <img className="w-[80px] h-[90px]" src="https://static.vecteezy.com/system/resources/previews/012/714/977/non_2x/join-now-banner-label-icon-flat-design-isolated-on-white-background-vector.jpg" alt="youtube"/>
                </div>
                <div className="flex flex-col ">
              
                    <span className="font-medium text-secondary-dark text-lg/normal ">
                    <b className='text-xl font-bold'> Teachers</b> :&nbsp;
                      {
                      
                      msg.map((data)=>(
                         data.total 
                      ))
                      
                      }
                   
                      </span>
                    
                      
                </div>
                <br></br>
                <span className="inline-flex items-center px-2 py-1 mr-auto font-semibold text-center align-baseline rounded-lg text-base/none ">
                <button className="rounded-md bg-green-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50 btn-lg"   data-toggle="modal" data-target="#exampleModal16" >join</button>
                </span>
            </div>
       
        </div>
    </div>
    
</div>
  </div>
</div>

          

          <b><p className="text-2xl pl-10 pb-4">Teachers</p>
          </b>
        
          <div className='grid gap-4 grid-cols-2 '>
            {msg.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <div>
               {data.id==null?
                 ''
                :
              <div className="max-w-sm w-full lg:max-w-full lg:flex pl-5  ">
                   
                < div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden pl-4  bg-black"  >
                  <img src="https://ui-avatars.com/api/?name=TEAACHER&font-size=1&length=2&background=&color=0000FF" className='w-40 h-48 ' />
                </div>
                  
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                      </svg>
                      Members only
                    </p>
                    <p className="text-gray-700 text-base"><b>{data.tname}</b></p>
                    <p className="text-gray-700 text-base"><b>subject:</b> {data.subject}</p>
                  </div>


                  <div className="text-sm">
                    <p>
                      <button  className="w-3/4 h-12 text-purple-50 bg-teal-500 hover:bg-sky-900 text-sm py-2 px-4 rounded-md transition duration-300 ease-in-out"  onClick={()=>{show(data.id)}}>view</button>
                    </p>
                  </div>

                </div>


              </div>
            }
            </div>
            ))}
          </div>
        </main>
        <br></br>
      </div>


      <div className="modal bg-stone-400" id="exampleModal16" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        
      <Alert setmode={alrt}/>
        <div className="modal-dialog " >
        <div className="modal-content bg-stone-400 border-stone-400" >

            <div className="modal-body  " >
              
            <div className="mx-auto max-w-7xl py-6 sm:px-3 lg:px-3 ">
              <div className="size-96 space-y-1 ">
                <div className="bg-dark shadow-lg rounded-lg p-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className='pb-20'>
                      <div className="p-2  bg-purple-200 rounded-full">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>



                      </div>
                    </div>
                    <div>
                      <div className="grid grid-cols-1 text-gray-900 ">

                        <div className="form-group w-56 ">
                          <input type="text" className="form-control " value={mob} onChange={(e) => setmob(e.target.value)} placeholder="teacher's mobile no." id="inputZip" />
                        </div>

                        <b className='text-gray-50'>OR</b>

                        <div className="pt-2">

                          <input type="text" className="form-control" value={id} onChange={(e) => setid(e.target.value)} placeholder="enter teacher's id" id="inputZip" />


                        </div>

                      </div>

                    </div>
                  </div>
                  <div className="relative d-flex gap-3">
                  <button className="w-80 text-purple-50 bg-teal-500 hover:bg-sky-900 text-sm py-2 px-4 rounded-md transition duration-300 ease-in-out " onClick={join_req}>
                    Join Request
                  </button>
                            <button type="button" className="rounded-md bg-rose-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50 " data-dismiss="modal">Close</button>
                           
                          </div>
                </div>
              </div>
              
          </div>
              </div>
              </div>
              </div>
            </div>
            
    </>
  )
}
