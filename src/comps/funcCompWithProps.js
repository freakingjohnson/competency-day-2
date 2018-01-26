import React from "react";

const FuncCompWithProps = ({name}) => {
 const hello = (e) => {
     alert(`sup ${name}`)
 }
 return(
 <div>
        this is a functional component with props. type above and
        <button
            onClick={hello}
        >
            click me
        </button>
    </div>
 )
}

export default FuncCompWithProps