/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react';

function Timec(props) {

  const [time, setTime] = useState(props.time);
  

  useEffect(() => {
    let timerId;

    if (time > 0) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 60000);
    }
   


    else {
      props.func()
    }

    return () => {
      clearInterval(timerId)

    };
  }, [time]);



  return (
    <div>
      <div className="flow-root">
        <h1 className={`float-left text-2xl ${time <= 10 ? time <= 5 ? 'text-red-400' : 'text-yellow-400' : 'text-green-400'} font-bold tracking-tight text-gray-900`}> { time+' minutes left'}   </h1>
        <img className="float-right h-14 w-14" src="http://localhost/pg/project/image.png"></img>
      </div>

    </div>
  );
}

export default Timec;
  