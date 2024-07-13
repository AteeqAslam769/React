import { useCallback, useEffect, useState, useRef } from 'react';
import './App.css';

function App() {

const [length,setLength] = useState(8);
const [number,setNumber] = useState(false);
const [character,setCharacter] = useState(false);
const [password,setPassword] = useState("");
const [copyButton,setCopyButton] = useState("Copy")

const passwordReference = useRef(null);


const copyClicked = ()=>{
  passwordReference.current.select();
  window.navigator.clipboard.writeText(password);
  setCopyButton("Copied");
}

const finalPasswordGenerator = useCallback(()=>{  
  let tempPassword = "";
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  if(number){
    str += "1234567890";
  }
  if(character){
    str += "!@#$%^&*()`|}{:?><.,/"
  }
  for(let i=0;i<length;i++){
    tempPassword += str.charAt(Math.floor((Math.random()*str.length)))
  }
  setPassword(tempPassword);
  setCopyButton("Copy")
  },[length,number,character])


useEffect(()=>{finalPasswordGenerator()},[length,number,character])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 bg-gray-200 space-y-10 rounded shadow-lg w-1/2">
        {/* First Div: Input and Copy Button */}
        <div className="flex items-center">
          <input type="text" ref={passwordReference} value={password} className="p-2 w-full border border-gray-300 rounded-tl-lg rounded-bl-lg focus:outline-none" readOnly placeholder="Enter text here" />
          <button className="p-2 bg-blue-500 text-white rounded-r hover:bg-blue-600" onClick={copyClicked}>{copyButton}</button>
        </div>

        {/* Second Div: Range Input, Label, and Checkboxes */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input type="range" id="length" className="w-full" min={8} max={30} value={length} onChange={(e)=>setLength(e.target.value)}/>
            <label htmlFor="length" className="mr-2">Length({length})</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="number" className="form-checkbox" onChange={()=>{
              setNumber(prev=>!prev)
            }}/>
            <label htmlFor="number" className="ml-2">Number</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="character" className="form-checkbox" onChange={()=>setCharacter(prev=>!prev)}/>
            <label htmlFor="character" className="ml-2">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 