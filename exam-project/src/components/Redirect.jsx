/* eslint-disable no-unused-vars */
import React from 'react'
import {useNavigate} from 'react-router-dom'

function Redirect(props) {
    function SomeComponent() {
        let navigate = useNavigate();
      
        function handleClick() {
          navigate('/sdash'); // Use navigate(-1) to go back
        }
  return (
       // eslint-disable-next-line react/prop-types
       <button className="rounded-md bg-green-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-50 " onClick={props.subf}>signup</button>
    
  )
}
}

export default Redirect
