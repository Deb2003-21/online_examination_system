/* eslint-disable react/prop-types */

function Alert(props) {
    return (
        props.setmode && <div className="bg-yellow-100 border-t border-b border-blue-500  px-4 py-3" role="alert">
        <p className="font-bold text-red-900 text-2xl">Informational message</p>
        <p className="text-xl text-blue-700">  {props.setmode.msg}</p>
      </div>
    )
}

export default Alert
