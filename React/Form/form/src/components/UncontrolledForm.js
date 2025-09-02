import React, { useRef } from 'react'

function UncontrolledForm() {
    const inputRef = useRef('');

    function handleClick() {
        alert(inputRef.current.value)
    }

    return (
        <div>
            <input type='text' ref={inputRef} />
            <button onClick={handleClick}>Save</button>
        </div>
    )
}

export default UncontrolledForm;;
