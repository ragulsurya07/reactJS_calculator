import { useState } from 'react';
import './style.css';

function App() {
    
    const [text,setText] = useState("");
    // const click = useRef(null);
    // var inp=user.current.value;

     const display = (i) => {
        setText(text.concat(i.target.name));
    }

    const backspace = () => {
        setText(text.slice(0, -1));
    }

    const clear = () => {
        setText("");
    }

    const calculate = () => {
        try {
            setText(eval(text));
        } catch(err){
            alert("Invalid input(s)");
        }
    }

    return (

        <div className="container">
        <div className="w-50 m-auto mt-5 pt-5">
            <div className="card">
                <div className="card-body calc">
                    <div className='calculator'>
                        <input type='text' placeholder='00.0' value={text}></input><br></br>
                        {text}<br></br>

                        <div className='row'>
                            <div className='col'>
                            <button className='highlight' onClick={clear}>&#8705;</button>
                            <button className='highlight' onClick={backspace}>&larr;</button>
                            <button className='symbol' name='/' onClick={display}>/</button>
                            <button className='symbol' name='%' onClick={display}>%</button>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <button name='7' onClick={display}>7</button>
                                <button name='8' onClick={display}>8</button>
                                <button name='9' onClick={display}>9</button>
                                <button className='symbol' name='*' onClick={display}>*</button>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <button name='4' onClick={display}>4</button>
                                <button name='5' onClick={display}>5</button>
                                <button name='6' onClick={display}>6</button>
                                <button className='symbol' name='-' onClick={display}>-</button>
                            </div>
                        </div>
                        
                        <div className='row'>
                            <div className='col'>
                                <button name='1' onClick={display}>1</button>
                                <button name='2' onClick={display}>2</button>
                                <button name='3' onClick={display}>3</button>
                                <button className='symbol' name='+' onClick={display}>+</button>
                            </div>
                        </div>
                        
                        <div className='row'>
                            <div className='col'>
                                <button name='0' onClick={display}>0</button>
                                <button name='.' onClick={display}>.</button>
                                <button className='equal highlight' onClick={calculate}>=</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default App;