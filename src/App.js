import React from 'react'

const App = () => {
    const names = [
        {
            name: "John",
            surname: "Doe",
            age: 47,
            r: 172,
            g: 214,
            b: 199
        },
        {
            name: "Jane",
            surname: "Smith",
            age: 28,
            r: 203,
            g: 185,
            b: 220
        },
        {
            name: "Alice",
            surname: "Johnson",
            age: 33,
            r: 225,
            g: 253,
            b: 241
        },
        {
            name: "Bob",
            surname: "Brown",
            age: 65,
            r: 248,
            g: 192,
            b: 255
        },
        {
            name: "Charles",
            surname: "Davis",
            age: 50,
            r: 215,
            g: 234,
            b: 255
        },
        {
            name: "Eve",
            surname: "White",
            age: 70,
            r: 234,
            g: 250,
            b: 210
        },
        {
            name: "Mallory",
            surname: "Harris",
            age: 38,
            r: 255,
            g: 244,
            b: 172
        },
        {
            name: "Sam",
            surname: "Clark",
            age: 80,
            r: 190,
            g: 200,
            b: 253
        },
        {
            name: "Trudy",
            surname: "Thompson",
            age: 15,
            r: 233,
            g: 222,
            b: 171
        },
        {
            name: "Oscar",
            surname: "Anderson",
            age: 95,
            r: 199,
            g: 204,
            b: 251
        }
    ]
    return (

        names.map(mard => <div style = {{display:"flex"}}>
            <div style={{ border: "1px solid black", width: "100px" }}> {mard.name} </div>
            <div style={{ border: "1px solid black", width: "100px", }}> {mard.surname} </div>
            <div style={{ border: "1px solid black", width: `${mard.age}px`, backgroundColor: `rgb(${mard.r},${mard.g},${mard.b})` }}> {mard.age} </div>


        </div>)



        // <div>Koryun Avetisyan</div>
    )
}

export default App