import { useState } from "react";


function App() {
    const [showHello, setShowHello] = useState(false)
    const x = 5;
    let helloDiv = <div></div>
    if (showHello) {
        helloDiv = <div style={{ fontWeight: "bold" }}>Hello !!!</div>
    } else {
        helloDiv = <div></div>
    }

    return (
        <div >
            <div style={{ display: "flex" }}>
                <div onClick={() => { setShowHello(true); }} style={{
                    width: 50,
                    height: 50,
                    padding: 10,
                    border: "1px solid black",
                    cursor: 'pointer',
                    backgroundColor: "red",

                }}>
                    say hello
                </div>
                
                <div onClick={() => { setShowHello(false); }} style={{
                    width: 50,
                    height: 50,
                    padding: 10,
                    border: "1px solid black",
                    cursor: 'pointer',
                    backgroundColor: "orange",
                    display: "flex"
                }}>
                    hide hello


                </div>
                
            </div>
            {helloDiv}


        </div>

    )
}

export default App