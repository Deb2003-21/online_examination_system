// src/Certificate.js
import './App.css'
import logo from './logo.png'

// eslint-disable-next-line react/prop-types
const Cer= ({name,grade,date}) => {
  return (
    <body  className="bg-gray-100 flex items-center justify-center h-screen">
    <div id="cer" className="bg-white border-2 border-blue-800 p-10 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <img src={logo} alt="Logo" className="mx-auto w-24 mb-4 rounded-full"/>
        <h1 className="text-3xl font-bold text-gray-700"><b className='text-green-500'>Certificate</b> <b className='text-yellow-500'>of Achievement</b></h1>
        <p className="text-gray-600">This is to certify that</p>
      </div>
     
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 inline-block py-2 px-4">{name}</h2>
      </div>
     
      <div  className="text-center mb-8">
        <p className="text-gray-600">has successfully achieved</p>
        <h3 className="text-xl font-semibold text-gray-700 border-b-2 border-gray-300 inline-block py-2 px-4">{grade}</h3>
      </div>
      <div className="text-center">
        <p className="text-gray-600 mb-4">on</p>
        <p className="text-lg font-semibold text-gray-700 border-b-2 border-gray-300 inline-block py-2 px-4">{date}</p>
      </div>
      </div>

  </body>
  
  );
};

export default Cer;
