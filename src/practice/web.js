
import React, { useState } from "react"
export default function Web(props) {




    const handleUpclick = () => {
        let newtext = text.toUpperCase();

        setText(newtext)
    }


    const handleLoclick = () => {
        let lowtext = text.toLowerCase()

        setText(lowtext)
    }



    // const handleExNum=()=> {
    //     let ext = text.match(/\d+/g)

    //     setText(ext)
    //     if(ext){
    //         console.log(ext)


    //        }
    //        else{console.log("a")}
    //     setText(ext)
    // }

    const handlecopy = ()=>{
        let text = document.getElementById('texu')
        text.select();
        navigator.clipboard.writeText(text.value)

    }





    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState('')
    return (
        <>
            <header>
                <div className="name" style={{color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <div>
                        <h1 > Congratulation</h1>
                    </div>

                    <label htmlFor="form" className="my-form"></label>
                    <textarea className="textt" value={text} onChange={handleonChange} style={{ backgroundColor: props.mode === 'dark' ? '#003344' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}name="text" id="texu" cols="30" rows="10"></textarea>

                    <div>
                        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
                            Get Upercase</button>
                        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Get Lowercase</button>
                        <button className="btn btn-primary mx-2" onClick={handlecopy} >Copy Text</button>
                    
                        {/* <button className="btnn" onClick={handleExNum}>get extract</button> */}



                    </div>
                    <h2 >Page Analycis</h2>
                    <p >{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word {text.length}charactor</p>
                    <p >{0.08 * text.split(' ').filter((element)=>{return element.length!==0}).length}</p>

                    <h2 >Preview</h2>
                    <p >{text}</p>
                    <h2 >Extract Number</h2>
                    <p >{text.length>0?text:'Enter something in the textarea above to preview it here'} </p>

                </div>



            </header>
        </>
    )
}

