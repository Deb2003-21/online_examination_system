/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Snav(props) {


  const nav = useNavigate();



  const [message, setMessage] = useState([])
  useEffect(() => {



    fetch(`https://hatua.000webhostapp.com/student_d.php?email=${props.email}`)
      .then((response) => { return response.json() })
      .then(data => setMessage(data)
      )
      .catch(error => console.error('Error:', error));




  }, []);

  const change = (id) => {
    if (id == 1) {
      nav('/studentDashboard', { state: { key2: props.email } })
    }
    if (id == 4) {

      nav('/')
    }
    if (id == 2)
      nav('/Results', { state: { key2: props.email } })
  }
  console.log(props.name)
  const user = {

    email: props.email,

    imageUrl:
      'https://img.freepik.com/premium-photo/university-graduates-celebrating-graduation-day-ai-generated_893571-559.jpg',
  }
  const navigation = [
    { name: 'Dashboard', id: 1, current: props.current == 1 || props.current == 2 ? false : true },

    { name: 'Reports', id: 2, current: props.current == 2 ? true : false },

  ]
  const userNavigation = [
    { name: "profile", id: 3 },
    { name: 'Sign out', id: 4 },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  return (



    <div>

      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12"
                      src="http://localhost/pg/project/image.png"

                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => { change(item.id) }}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">


                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex max-w-xs items-center ring-2 ring-green-400 rounded-full bg-gray-800 text-sm  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a

                                  onClick={() => { change(item.id) }}
                                  data-toggle="modal" data-target={`${item.id == 3 ? '#exampleModal' : ''}`}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    onClick={() => { change(item.id) }}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full ring-2 ring-green-400" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{user.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >

                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      onClick={() => { change(item.id) }}
                      data-toggle="modal" data-target={`${item.id == 3 ? '#exampleModal' : ''}`}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {message.map((data) => (
        <div className="modal bg-stone-400" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog " >
            <div className="modal-content bg-stone-400 border-stone-400" >

              <div className="modal-body  " >

                <div className="mx-auto right-0 mt-2 w-60">
                  <div className="bg-white rounded overflow-hidden shadow-lg">
                    <div className="text-center p-6 bg-gray-800 border-b">
                      <img src='https://img.freepik.com/premium-photo/university-graduates-celebrating-graduation-day-ai-generated_893571-559.jpg'
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
                            <p className="text-sm font-medium text-gray-800 leading-none">{data.edu}</p>

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

export default Snav