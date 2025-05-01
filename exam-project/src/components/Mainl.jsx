/* eslint-disable no-undef */
import React from 'react';
import Typed from 'typed.js';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import axios from 'axios'
import { useState } from 'react'
import Pricing from './Pricing'
import Trust from './Trust'
import Reach from './Reach'
import { useNavigate, Link } from 'react-router-dom';
import './App.css'
import About from './About'


const navigation = [
  { name: " Home", id: 1 },
  { name: 'Instructions', href: '/' },
  { name: 'About us', href: '' },
  { name: 'Partners', href: '/' },
]



export default function Mainl() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [mob, setmob] = useState('')
  const [edu, setedu] = useState('')
  const [ck, mcheck] = useState(null)

  const [tid, mtid] = useState('')
  const [tpass, mpass] = useState('')


  let navigate = useNavigate();



  const tlog = () => {
    const url = 'http://localhost:3000/pg/project/tlog.php';
    //const url='https://hatua.000webhostapp.com/tlog.php';

    let fData = new FormData();
    fData.append('tid', tid);
    fData.append('tpass', tpass);
    axios.post(url, fData).then(response => {
      if (response.data == 'wc1') {
        navigate('/teacherDashboard', { state: { key: tid } });
        $('#exampleModal2').modal('hide');
      } else {
        alert(response.data);
      }
    }).catch(error => alert(error));
    mtid('');
    mpass('');
  };


  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [' Are you a Student?  ', ' or a Teacher?', 'click below'],
      typeSpeed: 90,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  const subf = () => {


    if (email.length >= 10 && email.search('@gmail.com') > 0 && name.length != 0 && edu.length != 0 && mob.length == 10) {
      const url = 'http://localhost:3000/php_files/slog.php';
      //const url='https://hatua.000webhostapp.com/slog.php';
      let fData = new FormData();
      fData.append('email', email);
      fData.append('name', name);
      fData.append('mob', mob);
      fData.append('edu', edu);

      axios.post(url, fData).then((response) => {
        {
          alert("wait we are checking....")
          if (response.data.length > 35) {

            navigate('/slogin', { state: { key: email, msg: 'The password was sent to your email id' } })
            // eslint-disable-next-line no-undef
            $('#exampleModal').modal('hide');
          }
          else {
            mcheck(1)
          }

        }

      }
      ).catch(error => alert(error));
      //console.log(check.length)
    }
    else {
      mcheck(1)
    }


  }
  const changepage = (data) => {
    if (data == 1)
      window.location.replace("http://localhost:5173/")

  }

  return (

    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-14 w-14"
                src="http://localhost:3000/php_files/image.png"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <button key={item.name} id={item.id} className=" text-xl font-semibold leading-6 text-yellow-100 hover:text-indigo-100 " onClick={() => { changepage(item.id) }} >
                {item.name}
              </button>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/slogin" ><button className="text-l font-semibold leading-6 text-yellow-300 hover:text-indigo-200">
              Student Log-in <span aria-hidden="true">&rarr;</span>
            </button></Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only ">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <button key={item.name} id={item.id}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50  hover:bg-indigo-900"
                      onClick={() => { changepage(item.id) }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
                <div className="py-6">

                  <Link to="/slogin" ><button className="text-l font-semibold leading-6 text-yellow-300 hover:text-indigo-200">
                    Student Log-in <span aria-hidden="true">&rarr;</span>
                  </button></Link>

                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div id="bck" className="relative isolate px-6 pt-14 lg:px-8">

        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >

        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6  ring-1 bg-sky-100 ring-indigo-600 hover:ring-gray-500/20">
              Don&apos;t understand what&apos;s going?{' '}
              <a href="/" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl  font-bold tracking-tight text-white sm:text-6xl">
              <span className='bg-yellow-200 text-green-700' ref={el} />

            </h1>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button data-toggle="modal" data-target="#exampleModal"
                className="rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Student
              </button>

              <button data-toggle="modal" data-target="#exampleModal2" className="rounded-md bg-red-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-800">
                Teacher
              </button>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >

        </div>
      </div>

      <div className="modal bg-stone-400" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog " >
          <div className="modal-content bg-stone-400 border-stone-400" >

            <div className="modal-body " >


              <div className="flex justify-center bg-gray-100 rounded-md">

                <div className="container sm:mt-40 mt-16 my-auto max-w-md border-2 border-gray-100 p-3 bg-gray-100">
                  <button data-dismiss="modal" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-dark stroke-white w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  </button>
                  <div className="text-center my-6">
                    <h1 className="text-3xl font-semibold text-gray-700">New student</h1>
                    <p className="text-gray-500">create your account and login</p>
                  </div>
                  <center>
                    <p className="text-red-500 font-bold">{ck == 1 ? "INVALID: please check the data" : ''}</p>
                  </center>
                  <div className="m-6">
                    <div className="mb-4">
                      <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                        <input type="text" name="name" id="name" placeholder="your name" value={name} onChange={(e) => setname(e.target.value)} className={`${name.length < 5 ? 'form-control is-invalid' : 'form-control is-valid'} w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500`} />

                      </div>
                      <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="example@gmail.com" className={`${email.length > 5 && email.search("@gmail.com") > 0 ? 'form-control is-valid' : 'form-control is-invalid'} w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500`} />
                      </div>
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <label htmlFor="number" className="text-sm text-gray-600 dark:text-gray-400">Mobile No.</label>

                        </div>
                        <input type="text" name="number" id="number" value={mob} onChange={(e) => setmob(e.target.value)} placeholder="+91-xxxx-xxxx-xx" className={`${mob.length == 10 && mob.charAt(0) != 0 ? 'form-control is-valid' : 'form-control is-invalid'} w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500`} />
                      </div>
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <label htmlFor="edu" className="text-sm text-gray-600 dark:text-gray-400">Highest Education</label>

                        </div>
                        <input type="text" name="edu" id="edu" value={edu} onChange={(e) => setedu(e.target.value)} placeholder="eg: class 10/graduate" className={`${edu.length < 5 ? 'form-control is-invalid' : 'form-control is-valid'} w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500`} />
                      </div>

                      <div className="mb-6">
                        <button type="button" className="w-full px-3 py-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out" onClick={() => subf()}>Enter</button>

                      </div>
                      <p className="text-sm text-center text-gray-400">
                        Already have an account?
                        <a href="/slogin" className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"> Login</a>.
                      </p>

                    </div>




                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


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
                            onClick={() => tlog()} >Login</button>

                        </div>
                        <div className="text-center">
                          <br></br>
                          <p className='text-white'>Don&apos;t have account?
                            <button className="inline-block right-0 align-baseline font-light text-sm text-500 text-blue-400 hover:text-red-400" data-dismiss="modal" onClick={() => { navigate('/teacher') }}>
                              &nbsp; <strong className='text-yellow-200 text-xl hover:text-indigo-200 '>Create</strong>
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

      <Reach />
      <Pricing />
      <Trust />
      <About />
    </div>


  )

}
