/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Navt from './Navt';
import Sreq from './Sreq';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Talert1 from './Talert1';

function Tdash() {

    const navigate = useNavigate();

    const loc = useLocation();
    const [min, mmin] = useState('')
    const [exmnm, mexmnm] = useState('')
    const [ques, mques] = useState('')
    const [pos, mpos] = useState(2)
    const [neg, mneg] = useState(1)
    const [alt, malt] = useState(null);
    const [inc, minc] = useState();

    const [ndata, setdata] = useState([])
    // const [access,maccess]=useState(null)

    const tid = loc.state?.key;

    const showalert = (message) => {
        malt({
            msg: message
        }
        )
        setTimeout(() => {
            malt(null)
        }, 4500)
    }


    const showaccess = (message) => {

        //maccess(message)
        if (message.length >= 20) {
            showalert(message);
        }
        else
            navigate('/Editer', { state: { key0: tid, key: message, key1: exmnm, key2: ques } })
        //console.log(message)

    }

    useEffect(() => {

        fetch_detail();
    }, []);

    const fetch_detail = () => {
        fetch(`http://localhost/pg/project/tsinfo.php?id=${tid}`)
            .then((response) => { return response.json() })
            .then(data => { setdata(data), minc(parseInt(data[0].tots)) }
            )
            .catch(error => console.error('Error:', error));
    }


    const require = () => {


        const url = 'http://localhost/pg/project/add_rtest.php';
        let fData = new FormData();
        fData.append('tid', tid);
        fData.append('examnm', exmnm);
        fData.append('time', min);
        fData.append('tques', ques);
        fData.append('pos', pos);
        fData.append('neg', neg);
        axios.post(url, fData)
            .then(response => {
                showaccess(response.data.number);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }






    return (
        <div>



            <body className="body bg-white dark:bg-[#0F172A]">
                <Navt setmodal={"#exampleModal"} setid={tid} />

                <div className="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 ">
                   
                    <Talert1 setmode={alt} />

                    {ndata.map((data) => (


                        <div>
                            <div className="flex flex-wrap my-5 -mx-2">
                                <div className="w-full lg:w-1/3 p-2">
                                    <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                                        <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="object-scale-down transition duration-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                            </svg>
                                        </div>
                                        <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                                            <div className="text-xs whitespace-nowrap">
                                                Total Students
                                            </div>
                                            <div className="">
                                                {inc}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/3 p-2 ">
                                    <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                                        <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="object-scale-down transition duration-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                            </svg>

                                        </div>
                                        <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                                            <div className="text-xs whitespace-nowrap">
                                                Total Exams
                                            </div>
                                            <div className="">
                                                {data.exams}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/3 p-2">
                                    <div className="flex items-center flex-row w-full bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
                                        <div className="flex text-indigo-500 dark:text-white items-center bg-white dark:bg-[#0F172A] p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">

                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="object-scale-down transition duration-500">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                                            </svg>

                                        </div>
                                        <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                                            <div className="text-xs whitespace-nowrap">
                                                Contact us
                                            </div>
                                            <div className="">
                                                examio663@gmail.com
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <center>

                                <span className="inline-flex items-center rounded-md bg-sky-50 px-2 py-4 text-xl font-medium text-green-700 ring-1 ring-inset ring-green-600/10">

                                    You have {parseInt(data.exams) - parseInt(data.pd)} pendings, please submit the exams

                                </span>
                            </center>
                        </div>
                    ))}
                    <br></br>




                    <Sreq setid={tid} tot={inc} mtot={minc} />


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
                                    <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Requirments</h1>


                                    <div className="mb-4">
                                        <label htmlFor="examid" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Test name</label>
                                        <input type="text" id="examid" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="subject/paper (unique)" value={exmnm} onChange={(e) => mexmnm(e.target.value)} required />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="id" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Total Questions</label>
                                        <input type="text" id="id" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="1-100" value={ques} onChange={(e) => mques(e.target.value)} required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Total Time</label>
                                        <input type="text" id="time" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="in mintues" value={min} onChange={(e) => mmin(e.target.value)} required />
                                    </div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Posetive/Negetive</label>
                                    <div className="grid grid-cols-3 gap-x-4 my-2">
                                        <div className="pl-1 bg-green-600 rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                                            <strong className='text-gray-50'>+</strong><input className="w-1/2 bg-green-600 pl-2 pt-0.5 block text-sm font-medium text-gray-50 " type="text" value={pos} onChange={(e) => mpos(e.target.value)} />
                                        </div>
                                        <div className="pl-2 bg-red-600  rounded-lg bg-gray-100 cursor-text dark:bg-gray-800 w-14 aspect-square flex items-center justify-center">
                                            <strong className='text-gray-50'>-</strong><input className="w-1/2 bg-red-600 pl-2 pt-0.5 block text-sm font-medium text-gray-50 " type="text" value={neg} onChange={(e) => mneg(e.target.value)} />
                                        </div>
                                    </div>


                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-dismiss="modal" onClick={require}>Let's Go</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tdash
