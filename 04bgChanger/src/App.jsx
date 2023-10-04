import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");
  return (
      <div className="w-full h-screen"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center inset-x-2 bottom-12">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"red"}}
              onClick = {() => setColor("red")}
              >
                Red
              </button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"blue"}}
              >
                Blue
              </button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"green"}}
              onClick = {() => setColor("green")}
              >
                Green
              </button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"pink"}}
              onClick = {() => setColor("pink")}
              >
                Pink
              </button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"purple"}}
              onClick = {() => setColor("Purple")}
              >
                Purple
              </button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"yellow"}}
              onClick = {() => setColor("yellow")}
              >
                Yellow
              </button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"white"}}
              onClick = {() => setColor("white")}
              >
                White
              </button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"black"}}
              onClick = {() => setColor("black")}
              >
                Black
              </button>
              <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"orange"}}
              onClick = {() => setColor("orange")}
              >
                Orange
              </button>
          </div>
        </div>
      </div>
  )
}

export default App
