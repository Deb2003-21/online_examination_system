
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'
import axios from 'axios';
import { isInteger } from 'mathjs';






function Tsign() {


    const [sub, fsub] = useState('')
    const [email, semail] = useState('');
    const [fname, sfname] = useState('')
    const [lname, slname] = useState('')
    const [mob, smob] = useState('')
    const [exp, mexp] = useState('')


    const [tid, mtid] = useState('')
    const [tpass, mpass] = useState('')

    let navigate = useNavigate();







    const tlog = () => {

        const url = 'http://localhost/pg/project/tlog.php';
        let fData = new FormData();
        fData.append('tid', tid);
        fData.append('tpass', tpass);
        axios.post(url, fData).then((response) =>

            response.data == 'wc' ? navigate('/teacherDashboard', { state: { key: tid } }) : alert(response.data)
        ).catch(error => alert(error));

        mtid('')
        mpass('')

        // window.location.replace("http://localhost:3000/sdash");

    }

    const submit = () => {

        if (email.length<=10 || fname.length == 0 || lname.length == 0 || sub.length == 0 || mob.length!=10 || isInteger(mob)==false ||exp.length == 0 || email.search('@gmail.com') < 0 || /^[a-zA-Z]+$/.test(fname) == false || /^[a-zA-Z]+$/.test(lname) == false) {
            alert("please fill the form properly")
        }
        else {
            const url = 'http://localhost/pg/project/tsign.php';
            let fData = new FormData();
            fData.append('email', email);
            fData.append('fname', fname);
            fData.append('lname', lname);
            fData.append('sub', sub);
            fData.append('mob', mob);
            fData.append('exp', exp);


            axios.post(url, fData)
                .then((response) =>
                response.data.length>79?alert("succesfully submitted!! please see the email for password and id"):alert(response.data)
                )
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <div>

            <section className="bg-white dark:bg-gray-900">

                <div className="flex justify-center min-h-screen">

                    <div className="hidden bg-cover lg:block lg:w-2/5" id="tsbdy" >
                    </div>

                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                                Get your free account now.

                            </h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                            </p>

                            <div className="mt-6">
                                <h1 className="text-gray-500 dark:text-gray-300">Account Type</h1>

                                <div className="mt-3 md:flex md:items-center md:-mx-2">
                                    <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>

                                        <span className="mx-2">
                                            Teacher
                                        </span>

                                    </button>
                                    <br></br>

                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                    <input type="text" placeholder="John" value={fname} onChange={(e) => sfname(e.target.value)} className={`block w-full px-5 py-3 mt-2 ${/^[a-zA-Z]+$/.test(fname) ? "form-control is-valid" : "form-control is-invalid"} text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`} />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                                    <input type="text" placeholder="Snow" value={lname} onChange={(e) => slname(e.target.value)} className={`block w-full px-5 py-3 mt-2 ${/^[a-zA-Z]+$/.test(lname) ? "form-control is-valid" : "form-control is-invalid"} text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`} />
                                </div>

                                <div>
                                    <label htmlFor='validationServer01' className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                                    <input type="text" id="validationServer01" placeholder="+91-XXX-XXXX-XXX" value={mob} onChange={(e) => smob(e.target.value)} className={`block w-full px-5 py-3 mt-2 ${mob.length == 10 && !isNaN(mob) ? "form-control is-valid" : "form-control is-invalid"} text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`} />
                                </div>

                                <div>
                                    <label htmlFor='validationServer02' className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input type="email" id='validationServer02' placeholder="johnsnow@example.com" value={email} onChange={(e) => semail(e.target.value)} className={`block w-full   px-5 py-3 mt-2 ${email.length > 10 && email.search('@gmail.com') > 0 ? "form-control is-valid" : "form-control is-invalid"} text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`} />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">subject</label>
                                    <input type="email" placeholder="eg: physics" value={sub} onChange={(e) => fsub(e.target.value)} className={`block w-full px-5 py-3 mt-2 ${sub.length != 0 ? "form-control is-valid" : "form-control is-invalid"} text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`} />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Experience</label>
                                    <div className="dropdown shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required>
                                        <button className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                            {exp == '' ? 'choice' : exp}
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" value={exp}  >
                                            <button className="dropdown-item" onClick={() => mexp('0-5')}  >0 - 5</button>
                                            <button className="dropdown-item" onClick={() => mexp('5-10')}> 5 - 10 </button>
                                            <button className="dropdown-item" onClick={() => mexp('10-20')}> 10 - 20</button>
                                            <button className="dropdown-item" onClick={() => mexp('20+')}> 20+</button>
                                        </div>
                                    </div>

                                </div>

                                <button
                                    onClick={() => submit()}
                                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Sign Up </span>

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                </button>

                                <button
                                    data-toggle="modal" data-target="#exampleModal2"
                                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50">
                                    <span>Log in </span>


                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal bg-stone-400" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog " >
                    <div className="modal-content bg-stone-400 border-stone-400" >

                        <div className="modal-body  " >


                            <div className="h-screen font-sans login bg-cover">
                                <div className="container mx-auto h-full flex flex-1 justify-center items-center">
                                    <div className="w-full max-w-lg" >
                                        <div className="leading-loose">
                                            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl " id="log">
                                                <button data-dismiss="modal" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-dark stroke-white w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                                </button>
                                                <p className="text-white font-medium text-center text-lg font-bold">LOGIN</p>
                                                <div className="mt-2">
                                                    <label className='text-white bg-blue-400 rounded-lg'>Teacherid</label>
                                                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white" value={tid} onChange={(e) => mtid(e.target.value)} type="text" id="email" placeholder="(A-D)-xx...xxx" aria-label="email" required />
                                                </div>
                                                <div className="mt-2">
                                                    <label className='text-white bg-blue-400 rounded-lg'>password</label>
                                                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                                        type="password" id="password" placeholder="(xxxxx)" value={tpass} onChange={(e) => mpass(e.target.value)} required />
                                                </div>

                                                <div className="mt-4 items-center flex justify-between">
                                                    <button className="px-4 py-1 text-white font-light tracking-wider bg-yellow-600 hover:bg-red-800 rounded"
                                                        type="submit" onClick={() => tlog()} data-dismiss="modal">Login</button>

                                                </div>
                                                <div className="text-center">
                                                    <br></br>
                                                    <p className='text-white'>Don&apos;t have account?
                                                        <button className="inline-block right-0 align-baseline font-light text-sm text-500 text-blue-400 hover:text-red-400" data-dismiss="modal" onClick={() => { navigate('/teacher') }}>
                                                            &nbsp; <strong className='text-yellow-200 text-xl hover:text-indigo-200'>Create</strong>
                                                        </button></p>
                                                </div>

                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tsign