import './App.css'
import {useState} from "react";

function padTime(time) {
    return time.toString().padStart(2, '0')
}

export default function App() {
    const [ title, setTitle ] = useState('Let the countdown begin')
    const [ timeLeft, setTimeLeft ] = useState(10)

    function startTimer() {
        setInterval(() => {
            setTimeLeft(
                timeLeft => {
                    if (timeLeft >= 1) return timeLeft - 1

                    return 0
                }
            )
        }, 1000)
    }

    const stop = () => {

    }

    const reset = () => {

    }

    const minutes = padTime(Math.floor(timeLeft / 60))
    const seconds = padTime((timeLeft - minutes*60))

    return (
        <div className="flex h-screen items-center justify-evenly">
            <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-semibold">{title}</h2>
                    <h1 className="text-4xl m-4 font-semibold" id="timer">
                        <span>{minutes}</span>
                        <span>:</span>
                        <span>{seconds}</span>
                    </h1>

                <div className="flex space-x-4">
                    <button onClick={startTimer} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg shadow-md">Start</button>
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md">Stop</button>
                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md">Reset</button>
                </div>
            </div>
        </div>

    )
}
