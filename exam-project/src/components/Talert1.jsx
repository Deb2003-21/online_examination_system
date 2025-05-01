/* eslint-disable react/prop-types */


function Talert1(props) {
  return (
    <>
    {props.setmode && <center>
      <div className="p-2 bg-yellow-950 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span className="flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3">Warning</span>
        <span className="font-semibold mr-2 text-left flex-auto">{props.setmode.msg}</span>
       
      </div>
      </center>
}
</>
  )
}

export default Talert1