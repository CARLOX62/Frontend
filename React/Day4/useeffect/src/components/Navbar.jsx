import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
    //  Run on every render
    useEffect(() => {
        alert('Hello from useEffect!')
    })

    // run on first render only
    useEffect(() => {
        alert('Hello from useEffect - First Render!')
    }, [])

    // run only on certain values chanhe 
    useEffect(() => {
        alert(`Color has been updated to: ${color}`);
    }, [color])

    // example of cleanup function

    // setup code here (e.g., event listeners)
    useEffect(() => {
        alert(`First has been updated to: ${first}`);
        return () => {
            alert("components was unmounted");
        }
    }, [])

    return (
        <div>
            I am a Navbar with {color} color
        </div>
    )
}

export default Navbar
