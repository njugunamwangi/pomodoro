import './App.css'

function App() {
    const start = () => {

    }

    const stop = () => {

    }

    const reset = () => {

    }

    return (
        <>
            <h1>
                <span>00</span>
                <span>:</span>
                <span>00</span>
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
