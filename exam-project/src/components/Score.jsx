/* eslint-disable react/jsx-key */
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';
import Snav from './Snav';
import { useLocation, useNavigate } from 'react-router-dom';
import Navt from './Navt';


function Score() {

  let loc = useLocation();
  const email = loc.state.email;
  const eid = loc.state.eid;
  const mob = loc.state.mob;
  const t=loc.state.t;

  let nav=useNavigate();

  const [teacher]=useState(  t!=null?t:0);


  const [message, setMessage] = useState([]);
  const [p, spdf] = useState(0);
  const [c, scer] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [d, md] = useState(0)
   const [name, sname] = useState('');

  useEffect(() => {
    fetch(`http://localhost/pg/project/fetchresult.php?id=${eid}&email=${email}`)
      .then((response) => response.json())
      .then(data => {
        setMessage(data);
        spdf(data[0].pdf_s);
        scer(data[0].cer_s);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setIsLoading(false);
      });

  }, []);


  useEffect(() => {
    fetch(`http://localhost/pg/project/fetch_name.php?email=${email}`)
      .then((response) => response.json())
      .then(data => {
        sname(data);
        
      })
      .catch(error => {
        console.error('Error:', error);
        
      });

  }, []);






  const pdf_dwn=()=>
    {
      nav('/G_pdf',{state:{rpt:message,email:email,name:name
      }})
    }
    

    const cer_dwn=()=>
      {
        nav('/G_cer',{state:{rpt:message,name:name}})
      }
      

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (message.length === 0) {
    return <div>No data available</div>;
  }

  const down = () => {
    const url = 'http://localhost/pg/project/answer.php'
   
    md(1)
      setTimeout(() => {
        md(2)
      }, 800);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url+"?examid="+eid;
        document.body.appendChild(a);
        a.click();
       
      }
    
     
  

  const data = [
    { name: 'right', value: (message[0].right / message[0].total) * 100 },
    { name: 'wrong', value: (message[0].wrong / message[0].total) * 100 },
    { name: 'unseen', value: (message[0].np / message[0].total) * 100 },
  ];

  const data1 = [

    { name: 'highest', score: message[0].top, total: message[0].total, amt: 2100 },
    { name: 'you', score: message[0].score, total: message[0].total, amt: 2200 },
  ]


  const COLORS = ['#90EE99', '#FF7F7F', '#d3d3d3'];
  return (
    

    <div>
            


{
      teacher.length>0?
     <> <Navt col={"bg-cyan-500 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"} p1={3} setid={teacher} p={2} text={"showing score"}/>
     <header className="bg-white shadow">
        
        <div className="flow-root mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="float-left text-3xl font-bold tracking-tight text-gray-900">Statistics </h1>
         
      </div>
      </header>
     </>:
      <Snav current="2" email={email} />
}


      <div className='pt-6'>

        <div className="px-1 t-6  2xl:container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1" >
              <div className=" rounded-xl border border-gray-200 bg-white">
                <PieChart width={400} height={400}>
                  <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
                <div >
                  <h5 className="text-xl text-gray-600 text-center">Legend</h5>
                  <br></br>
                  <div className='pl-6 pr-4 grid grid-cols-3 gap-5'>
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500/10">
                      <strong >Right</strong> <h className="pl-2">{message[0].right}</h>
                    </span>
                    <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-600 ring-1 ring-inset ring-red-500/10">
                      <strong >Wrong</strong> <h className="pl-2">{message[0].wrong}</h>
                    </span>
                    <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      <strong >N.A</strong> <h className="pl-2">{message[0].np}</h>

                    </span>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
            <div>
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">

                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    layout="vertical"
                    data={data1}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#82ca9d" />
                    <Bar dataKey="total" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>

                {
                  <div>
                  
                    <h4 className='font-semibold'>Your Score: {message[0].score} </h4>
                    <h4>Total: {message[0].total} </h4>
                  </div>


                }

              </div>
            </div>
            <div>

            
              <div className="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">

                 
                <div className="mt-6">
                  <h5 className="text-xl text-gray-700 text-center">{teacher.length>0?'This student ranks':'Your Rank'}</h5>
                  <div className="mt-2 flex justify-center gap-4">
                    <h3 className="text-3xl font-bold text-gray-700">{message[0].yrank}/{message[0].tstud} </h3>
                    <div className="flex items-end gap-1 text-green-500">


                    </div>
                  </div>
                  

                  <span className="block text-center text-gray-500">Showing top 5</span>
                </div>
                <table className="mt-6 -mb-2 w-full text-gray-600">

                  <tbody>
                    <td className="text-xl font-semiboiled py-1 pl-4" >Name</td>
                    <td className="text-xl font-semiboiled text-gray-500 ">Score</td>
                    {


                      message.map((data) => (


                        <tr >
                          <td className='py-2 pl-4' >{data.s}</td>
                          <td className="pl-4 text-gray-500 ">{data.t}</td>
                          <td>

                          </td>
                        </tr>

                      ))
                    }
                  </tbody>
                </table>


              </div>

            </div>
          </div>
         
          {
          teacher.length>=0?
          <div className='pt-2'>
            <div className="rounded-xl border bg-yellow-600 shadow-xl shadow-indigo-200 py-10 px-20 ">
              <p className=" text-white"> student email:<span className="text-xl font-bold"> {' '+email} </span> </p>
              <p className=" text-white"> phone no:<span className="text-xl font-bold"> {' '+mob} </span> </p>
            </div>
         
          </div>:  
          
          p==1 || c==1?
        <div>
          <center className='pt-2'>
            <button className='rounded-xl border text-white bg-green-600  py-2 px-10 hover:bg-green-800' onClick={()=>pdf_dwn()}> <span className="text-2xl font-medium"> Download your report</span> </button>
          
        
          {'    '}{c==1?<button className='rounded-xl border text-white bg-yellow-600  py-2 px-10 hover:bg-yellow-800' onClick={()=>cer_dwn()} > <span className="text-2xl font-medium"> Download Certificate</span> </button>:''}
              </center>
         { p==1?<div className='pt-2'>
            <div className="rounded-xl border bg-indigo-600 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
              <p className=" text-white"> <span className="text-2xl font-medium"> Download your Q&A pdf</span> </p>
              <button onClick={() => { down() }} className={` rounded-md  ${d==2?'bg-green-400':'bg-yellow-400'} px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50 btn-lg`}>{d!=0?d==1?'Downloading...':'Completed':'Download'}</button>
            </div>
          </div>:
          <div className='pt-2'>
            <div className="rounded-xl border bg-gray-400 shadow-xl shadow-indigo-200 py-10 px-20 flex justify-between items-center">
              <p className=" text-white"> <span className="text-2xl font-medium"> Your teacher don&apos;t want to share the answer PDF </span> </p>
              
            </div>
          </div>}
          
          </div>
          
          :
          ''

        }
        </div>
      </div>

    </div>
  )
}

export default Score