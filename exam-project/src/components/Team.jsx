import Navt from "./Navt"
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Team() {



  const loc = useLocation();
  const setid = loc.state.key;

  const [people, mpeople] = useState([])
  useEffect(() => {

    fetch(`http://localhost/pg/project/teams.php?id=${setid}`)
      .then((response) => { return response.json() })
      .then(data => (mpeople(data)))

  }, []);

  
  
      
  const del = (data) => {
    const url = 'http://localhost/pg/project/del.php';
    let fData = new FormData();
    fData.append('email', data);

      fData.append('id', setid);

      axios.post(url, fData)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error:', error);
        });


    

    const element = document.getElementById(data);
    element.remove();
 
  }

    
  return (
    <div>
      <Navt col={"bg-cyan-500 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"} p2={1} p1={3} p={2} text={"view"} setid={setid} />
      <div className="bg-white py-24 sm:py-32">

        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <center>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet your students</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                You can see the details and remove students
              </p>
            </div>
          </center>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li id={person.email} key={person.email}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src="https://img.freepik.com/premium-photo/3d-boy-cartoon-character-educational-classroom-generative-ai_951618-427.jpg" alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}  </h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.email} </p>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">+91-{person.mob} </p>
                    <p className="text-sm font-semibold leading-6 text-indigo-600"><i className="bi bi-backpack2-fill">  {' '+person.edu}</i> </p>
                    <p className="text-sm font-semibold leading-6 text-green-600">Appearance: {person.appr}%</p>
                    
                  </div>
                 
                    <button className="bg-red-600 hover:bg-red-800 px-1 py-1 rounded-lg "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={()=>del(person.email)} className="text-white w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                    </button>
                    
                   
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
