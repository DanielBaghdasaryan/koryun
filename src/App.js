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
                <div onClick={() => { setShowHello(!showHello); }} style={{
                    width: 128,
                    height: 128,
                    padding: 10,
                    border: "1px solid black",
                    cursor: 'pointer',
                    

                }}>
                    <img src={showHello ? "https://cdn-icons-png.flaticon.com/128/2767/2767146.png":"https://cdn-icons-png.flaticon.com/128/709/709612.png"} />
                </div>
                
              
                
            </div>
            {helloDiv}


        </div>

    )
}

export default App