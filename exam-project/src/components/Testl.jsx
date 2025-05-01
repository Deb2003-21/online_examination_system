/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */

// eslint-disable-next-line no-unused-vars
import { useLocation,Navigate, useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react';
import Snav from './Snav';



function Testl() {

    const[msg,setmsg]=useState([])
  

    const navigate=useNavigate()

    function getCurrentDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const day = String(date.getDate()).padStart(2, '0');
  
      return `${year}-${month}-${day}`;
  }



    const testwidw=(ex_id,end)=>
    {
      if(getCurrentDate()==end)
        {
          alert('Exam Ended!! You are late')
        }
        else
        navigate('/exam',{state:{email:email,id:ex_id}})
    }
    const loc= useLocation()
    const email=loc.state?.user
    const  id=loc.state?.tid
    useEffect(() => {
        fetch(`https://hatua.000webhostapp.com/test_req.php?id=${id}&email=${email}`
          
        )
          .then((response) => { return response.json() })
          .then(data => (setmsg(data),console.log(data)))
          .catch(error => console.error('Error:', error));
      }, []);
   
    return (
        <div>
            <Snav email={email}/>
           <div> 
           {msg.map((data,index=0) => (
         index==0 && <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
    <div className="md:flex">
        <div className="md:flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src="https://static.vecteezy.com/system/resources/previews/000/350/886/original/vector-teaching-icon.jpg" alt="Event image"/>
        </div>
            
        <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Your Teacher</div>
       
        
        <p className="block mt-1 text-lg leading-tight font-medium text-black">{data.tname}</p>
        <p className="mt-2 text-gray-500">In my <strong>{data.exp}</strong> years as a <strong>{data.sub} teacher</strong>, 'Education is not the filling of a pail, but the lighting of a fire.' My goal is to ignite a lifelong passion for reading and critical thought.</p>
        </div>
        </div>
    </div>
        ))}
    </div>
          {msg.map((data,index=0)=>( 
             index!=0 &&
       <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
    <div className="md:flex">
        <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Test: <strong className='text-xl'>{data.paper}</strong> </div>
        
        
        <p className="mt-2 text-gray-500"> Distribution:  <strong className='text-green-600'>Posetive +{data.pos}</strong> with <strong className='text-red-600'>Negetive -{data.neg}</strong> </p>
        {data.end==null?'':<p className="mt-2 text-gray-500 font-bold">End date:  {data.end} 12 AM </p>}
        <p className="mt-2 text-gray-500">Marks:  {parseFloat(data.pos) * parseFloat(data.tot)}  </p>
        <p className="mt-2 text-gray-500">Total {data.tot} questions </p>    
        <p className="mt-2 text-gray-500">Time:  {data.time} min </p>
        {
        data.check=='ok'?
        <div className='pt-3'>
        <span className="pinline-flex items-center rounded-md bg-purple-500 px-2 py-2 text-xs font-medium text-gray-50 ring-1 ring-inset ring-red-600/10">
          
          Already Submitted
           
      </span></div>
        :

        <button className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" onClick={()=>{testwidw(data.exm_id,data.end)}}>
          
          Let's Go  
        </button> 
        }
         
        </div>
    </div>
    </div>

    
    ))} 
    </div>
  )
}

export default Testl
