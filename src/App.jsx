import style from "./App.module.css"
import { useState } from "react"

function App() {
   const [end,setend]=useState("0");
   const [result,setresult]=useState("");
return (
<div id={style.container}>
    <div id={style.display}>
        <p>{result}</p>
        <h1 id={style.result}>{end}</h1>
        </div>
    <div id={style.nums}>
        <h1 className={style.butt} id={style.whit} onClick={()=>{setresult("")
                                                                setend("0")}}>AC</h1>
        <h1 className={style.butt} id={style.whit} onClick={()=>{setresult(result+"")}}>+-</h1>
        <h1 className={style.butt} id={style.whit} onClick={()=>{setresult(result+"%")}}>%</h1>
        <h1 className={style.butt} id={style.org}  onClick={()=>{setresult(result+"/")}}>/</h1>
        <h1 className={style.butt}                 onClick={()=>{setresult(result+"7")}}>7</h1>
        <h1 className={style.butt}                 onClick={()=>{setresult(result+"8")}}>8</h1>
        <h1 className={style.butt}                 onClick={()=>{setresult(result+"9")}}>9</h1>
        <h1 className={style.butt} id={style.org}  onClick={()=>{setresult(result+"*")}}>*</h1>
        <h1 className={style.butt}                 onClick={()=>{setresult(result+"4")}}>4</h1>
        <h1 className={style.butt}                 onClick={()=>{setresult(result+"5")}}>5</h1>
        <h1 className={style.butt}                 onClick={()=>{setresult(result+"6")}}>6</h1>
        <h1 className={style.butt} id={style.org}  onClick={()=>{setresult(result+"-")}}>-</h1>
        <h1 className={style.butt}                 onClick={()=>{setresult(result+"1")}}>1</h1>
        <h1 className={style.butt}                 onClick={()=>{setresult(result+"2")}}>2</h1>
        <h1 className={style.butt}                 onClick={()=>{setresult(result+"3")}}>3</h1>
        <h1 className={style.butt} id={style.org}  onClick={()=>{setresult(result+"+")}}>+</h1>
        <h1 className={style.butt} id={style.zero} onClick={()=>{setresult(result+"0")}}>0</h1>
        <h1 className={style.butt}                 onClick={()=>{setresult(result+".")}}>.</h1>
        <h1 className={style.butt} id={style.org}  onClick={()=>{setend(eval(result))}}>=</h1>
    </div>
</div>
)
}

export default App
