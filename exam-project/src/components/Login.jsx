/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './login.css'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

  const [email, setemail] = useState('')
  const [email1, setemail1] = useState('')
  const [passw, setpass] = useState('')
  const [name, setname] = useState('')
  const [mob, setmob] = useState('')
  const [edu, setedu] = useState('')
  const [chk, mcheck] = useState(null)
  const [pk, mpk] = useState(null)
  const [ck, mck] = useState(null)
  let loc = useLocation()
  let data = loc.state?.key
  let msg = loc.state?.msg
  const navigate = useNavigate()

  const signf = () => {
    const url = 'https://hatua.000webhostapp.com/sign_in.php';

    let fData = new FormData();
    fData.append('email', data != null ? data : email);
    fData.append('pass', passw);
    axios.post(url, fData).then((response) => {

      if (response.data == "wc")
        navigate('/studentDashboard', { state: { key2: data != null ? data : email } })
      else
        mcheck(1)
      mpk(1)
    }

    ).catch(error => alert(error));

    setTimeout(() => {
      mcheck(2)
      mpk(2)
    }, 5000);
  }


  const subf = () => {


    if (email.length >= 10 && email.search('@gmail.com') > 0 && name.length != 0 && edu.length != 0 && mob.length == 10) {
      const url = 'http://localhost/pg/project/slog.php';
      //const url='https://hatua.000webhostapp.com/slog.php';
      let fData = new FormData();
      fData.append('email', email);
      fData.append('name', name);
      fData.append('mob', mob);
      fData.append('edu', edu);

      axios.post(url, fData).then((response) => {
        {
          if (response.data == "sucess") {

            navigate('/slogin', { state: { key: email, msg: 'The password was sent to your email id' } })
            // eslint-disable-next-line no-undef
            $('#exampleModal').modal('hide');
          }
          else {
            mck(1)
          }

        }

      }
      ).catch(error => alert(error));
      //console.log(check.length)
    }
    else {
      mck(1)
    }


  }



  return (

    <div>


      <section className="flex flex-col md:flex-row h-screen items-center">

        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src="https://img.freepik.com/premium-photo/architecture-courtyard-is-classic-style-facade-building-is-classical-style-3d-rendering_295714-4572.jpg?w=740" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

          <div className="w-full h-100">
            <br></br>
            <div>
              {

                msg != null && <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                  <p>{msg == null ? '' : msg}.</p></div>

              }

            </div>
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

            <div className="mt-6" >
              <div>
                <label htmlFor="validationServer02" className="block text-gray-700">Email Address</label>
                <input type="email" name="" id="validationServer02" placeholder="Enter Email Address" value={data == null ? email : data} onChange={(e) => setemail(e.target.value)} className={`${email.length > 5 && email.search("@gmail.com") > 0 && chk != 1 || data != null ? "form-control is-valid" : "form-control is-invalid"} w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none`} required />
                {chk != 2 && <div className="valid-feedback">
                  valid email!!
                </div>}
                {chk == 1 && <div className="invalid-feedback">
                  Please check the email.
                </div>}
              </div>

              <div className="mt-4">
                <label htmlFor="validationServer01" className="block text-gray-700">Password</label>
                <input type="password" value={passw} onChange={(e) => setpass(e.target.value)} name="" id="validationServer01" placeholder="Enter Password" minLength="6" className={`${passw.length == 10 && pk != 1 ? "form-control is-valid" : "form-control is-invalid"} w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none`} required />
                {pk != 2 && <div className="valid-feedback">
                  Looks good!
                </div>}
                {pk == 1 && <div className="invalid-feedback">
                  Please check the password.
                </div>}
              </div>



              <button type="submit" onClick={signf} className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
            </div>

            <hr className="my-6 border-gray-300 w-full" />



            <p className="mt-8">Need an account? <strong data-toggle='modal' data-target="#exampleModal" className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer">Create an
              account</strong></p>





          </div>
        </div>

      </section>



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
                        <label htmlFor="email1" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                        <input type="email" name="email1" id="email1" value={email1} onChange={(e) => setemail1(e.target.value)} placeholder="example@gmail.com" className={`${email1.length > 5 && email1.search("@") > 0 && email1.search("gmail") > 0 ? 'form-control is-valid' : 'form-control is-invalid'} w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500`} />
                      </div>
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <label htmlFor="number" className="text-sm text-gray-600 dark:text-gray-400">Mobile No.</label>

                        </div>
                        <input type="text" name="number" id="number" value={mob} onChange={(e) => setmob(e.target.value)} placeholder="+91-xxxx-xxxx-xx" className={`${mob.length < 10 || mob.charAt(0) == 0 ? 'form-control is-invalid' : 'form-control is-valid'} w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500`} />
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
                        <a href="/slogin" className="font-semibold text-indigo-500 focus:text-indigo-600  focus:outline-none focus:underline "> Login</a>.
                      </p>

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

export default Login
