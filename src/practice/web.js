
import React, { useState } from "react"
export default function Web(props) {
   



    // const handleUpclick=()=> {
    //     let newtext = text.toUppercase() ;
       
    //     setText(newtext)}


    // const handleLoclick=()=> {
    //     let lowtext = text.toLowerCase()
       
    //     setText(lowtext)}



    const handleExNum=()=> {
        let ext = text.match(/\d+/g)
       
        setText(ext)
        // if(ext){
        //     console.log(ext)
        
            
        //    }
        //    else{console.log("a")}
        // setText(ext)
    }

   

    
   

    
    
    
    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const [text,setText] = useState('')
    return(
        <>
            <header>
                <div className="name">

                    <h1> Congratulation</h1>

                    <label htmlFor="form" className="my-form"></label>
                    <textarea className="textt" value={text} onChange={handleonChange} name="text" id="texu" cols="30" rows="10"></textarea>

                    <div>
                        {/* <button className="btnn" onClick={handleUpclick}>
                        Get Upercase</button>
                        <button className="btnn2" onClick={handleLoclick}>Lowercase</button> */}
                        <button className="btnn" onClick={handleExNum}>get extract</button>

                    

                    </div>
                    {/* <h2>Page Analycis</h2> */}
                    {/* <p>{text.split(' ').length} word {text.length}charactor</p>
                    <p>{0.08*text.split(' ').length}</p> */}

                    {/* <h2>Preview</h2>
                    <p>{text}</p> */}
                    {/* <h2>Extract Number</h2> */}
                    {/* <p>{text} </p> */}

                    
                </div>
            </header>
        </>
    )
}

