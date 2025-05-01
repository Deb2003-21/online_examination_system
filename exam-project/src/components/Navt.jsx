/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Navt(props) {
    const sidebar = useRef(null);
    const maxSidebar = useRef(null)
    const miniSidebar = useRef(null)
    const maxToolbar = useRef(null)
    function openNav() {
        if (sidebar.current.classList.contains('-translate-x-48')) {
            // max sidebar 
            sidebar.current.classList.remove("-translate-x-48")
            sidebar.current.classList.add("translate-x-none")
            maxSidebar.current.classList.remove("hidden")
            maxSidebar.current.classList.add("flex")
            miniSidebar.current.classList.remove("flex")
            miniSidebar.current.classList.add("hidden")
            maxToolbar.current.classList.add("translate-x-0")
            maxToolbar.current.classList.remove("translate-x-24", "scale-x-0")

        } else {
            // mini sidebar
            sidebar.current.classList.add("-translate-x-48")
            sidebar.current.classList.remove("translate-x-none")
            maxSidebar.current.classList.add("hidden")
            maxSidebar.current.classList.remove("flex")
            miniSidebar.current.classList.add("flex")
            miniSidebar.current.classList.remove("hidden")
            maxToolbar.current.classList.add("translate-x-24", "scale-x-0")
            maxToolbar.current.classList.remove("translate-x-0")


        }
    }
    const [message, setMessage] = useState([]);
    useEffect(() => {

        fetch(`http://localhost/pg/project/tinfo.php?id=${props.setid}`)
            .then((response) => { return response.json() })
            .then(data => setMessage(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const c = useNavigate();

    const home = () => {
        if (props.p == 2) {
            c('/teacherDashboard', { state: { key: props.setid } });
        }
    }
    const change = () => {

        c('/your sets', { state: { key: props.setid } });
    }
    const teams = () => {

        c('/Teams', { state: { key: props.setid } });
    }
    const logout = () => {

        c('/');
    }




    return (
        <div>
            <div>

                <body className="body bg-white dark:bg-[#0F172A]">
                    {
                        props.p1 != 3 ?
                            <div className="fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10">

                                <div className="grow h-full flex items-center justify-center"></div>

                                <div className="flex-none h-full text-center flex items-center justify-center">
                                    {message.map((data) => (

                                        <div className="flex space-x-3 items-center px-3">
                                            <div className="flex-none flex justify-center">
                                                <div className="w-10 h-10 flex ">
                                                   <button  data-toggle="modal" data-target= '#exampleModal2'> <img src="https://i.pinimg.com/236x/bc/3f/63/bc3f631459b30602865e9f2fd3ef6457.jpg" alt="profile" className="shadow rounded-full object-cover" />
                                                    </button> 
                                                </div>
                                            </div>
                                            <div className="hidden md:block text-sm md:text-md text-black dark:text-white">{data.name}</div>
                                        </div>

                                    ))}
                                </div>

                            </div>
                            :
                            ''
                    }
                    <aside className={`w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen ${props.col == null ? "bg-[#1E293B]" : ''} `} ref={sidebar}>

                        <div className="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12" ref={maxToolbar}>

                            <div className="flex pl-4 items-center space-x-2 ">
                                <div>
                                </div >

                            </div>
                            <div className="flex items-center space-x-3 group bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-purple-500  pl-10 pr-2 py-1 rounded-full text-white  ">
                                <div className="transform ease-in-out duration-300 mr-12">
                                    Active
                                </div>
                            </div>
                        </div>
                        <div onClick={openNav} className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                            </svg>
                        </div>

                        <div className="max hidden text-white mt-20 flex-col space-y-2 w-full h-[calc(100vh)]" ref={maxSidebar} >

                            <div className={`${props.p == 1 ? props.col : "hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"}`} data-toggle="modal" data-target={`${props.setmodal}`} onClick={() => { home() }} >
                                {
                                    props.p == 2 ?
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4" >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />

                                        </svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                                        </svg>


                                }
                                <div>
                                    {props.p == 2 ? props.text != null ? "Home" : props.text : "create test"}
                                </div>

                            </div>

                            <div className={`${props.p == 2 && props.p2 != 1 ? props.col : "hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"}`} onClick={() => { change() }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>


                                <div>
                                    {props.p == 2 && props.p2 != 1 ? props.text : "View/Edit"}

                                </div>
                            </div>
                            <div className={`${props.p2 == 1 ? props.col : "hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-[#1E293B] p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3"}`} onClick={() => { teams() }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>

                                <div>
                                    Your Teams
                                </div>

                            </div>

                            <div className="hover:ml-4 w-full text-white hover:text-purple-500 dark:hover:text-blue-500 bg-red-400 p-2 pl-8 rounded-full transform ease-in-out duration-300 flex flex-row items-center space-x-3" onClick={() => { logout() }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                </svg>


                                <div>
                                    Logout
                                </div>
                            </div>
                        </div>

                        <div className="mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]" ref={miniSidebar}>

                            <div className={`hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full ${props.p == 1 ? props.col : 'bg-[#1E293B]'} p-3 rounded-full transform ease-in-out duration-300 flex `} data-toggle="modal" data-target={`${props.setmodal}`} onClick={() => { home() }}>

                                {props.p == 2 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg> :
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                                    </svg>

                                }

                            </div>
                            <div className={`hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full ${props.p == 2 && props.p2 != 1 ? props.col : 'bg-[#1E293B]'} p-3 rounded-full transform ease-in-out duration-300 flex `} onClick={() => { change() }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                                </svg>
                            </div>
                            <div className={`hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full ${props.p2 == 1 ? props.col : 'bg-[#1E293B]'} p-3 rounded-full transform ease-in-out duration-300 flex `} onClick={() => { teams() }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                </svg>

                            </div>
                            <div className="hover:ml-4 justify-end pr-5 text-white hover:text-purple-500 dark:hover:text-blue-500 w-full  bg-red-400 p-3 rounded-full transform ease-in-out duration-300 flex " onClick={() => { logout() }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                </svg>


                            </div>

                        </div>

                    </aside>



                </body>


            </div>
            {message.map((data) => (
        <div className="modal bg-stone-400" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog " >
            <div className="modal-content bg-stone-400 border-stone-400" >

              <div className="modal-body  " >

                <div className="mx-auto right-0 mt-2 w-60">
                  <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="text-center p-6 bg-gray-800 border-b">
                      <img src='https://i.pinimg.com/236x/bc/3f/63/bc3f631459b30602865e9f2fd3ef6457.jpg'
                        className="h-24 w-24 text-white rounded-full mx-auto" width="32" height="32"
                      ></img>

                      <p className="pt-2 text-lg font-semibold text-gray-50">{data.name}</p>
                      <p className="text-sm text-gray-100">{data.email}</p>

                    </div>
                    <div className="border-b">
                      <a  >
                        <a className="px-4 py-2 hover:bg-gray-100 flex">
                          <div className="text-green-600">

                            <svg xmlns="http://www.w3.org/2000/svg"
                              fill="none" viewBox="0 0 24 24" strokeWidth={1} strokeLinecap="round"
                              strokeLinejoin="round" stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                          </div>
                          <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">
                              +91-{data.mob}
                            </p>

                          </div>
                        </a>
                      </a>
                      <a  >
                        <a className="px-4 py-2 hover:bg-gray-100 flex">
                          <div className="text-gray-800">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              viewBox="0 0 24 24"
                              className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>

                          </div>
                          <div className="pl-3">
                            <p className="text-sm font-medium text-gray-800 leading-none">{data.sub} </p>

                          </div>
                        </a>
                      </a>
                      <div className="pl-1 pb-1">
                        <button className=" h-4 px-4 py-1 pb-4 bg-red-400 rounded-full text-l text-white hover:bg-red-800 flex" data-dismiss="modal">
                          close
                        </button>
                      </div>

                    </div>


                  </div>
                </div>



              </div>

            </div>

          </div>
        </div>
      ))}
        </div>
    )
}

export default Navt
