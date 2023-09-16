import './App.css'
import {useState} from "react";

function padTime(time) {
    return time.toString().padStart(2, '0')
}

function App() {
    const start = () => {

    }

    const stop = () => {

    }

    const reset = () => {

    }

    const [ timeLeft, setTimeLeft ] = useState(25*60)
    const minutes = padTime(Math.floor(timeLeft / 60))
    const seconds = padTime((timeLeft - minutes*60))

    return (
        <>
            <h1>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </h1>
            <div className="card">
                <button onClick={start}>
                    Start
                </button>
                <button onClick={stop}>
                    Stop
                </button>
                <button onClick={reset}>
                    Reset
                </button>
            </div>
        </>
    )
}

export default App
