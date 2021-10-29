import css from './interest.css'
import { useState } from 'react'
const Interests = ['News','Sport','Arts','Music','Video','Fictions','Science','Religion','Media','Politics','Computer']
    
function Interest(props){
let [pickedInterests,handleInterest]=useState([])
 
function interestPicked(info,inn){
for (let i = 0; i < pickedInterests.length; i++) {
    const element = pickedInterests[i];
    if (element == info){
      handleInterest(pickedInterests.filter((_,ind)=>(ind !== inn)))
      return
    }  
}
     handleInterest([...pickedInterests,info])
     
}

// add intrest btn starts /
const addInterestToAccount = ()=>{
props.history.push('/login')
}

    return(
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                    <h3>Choose Topics you would like to always get Informations On</h3>
                        {
                            Interests.map((info,i) =>
                                <div>
                                    <input type="checkbox" id={i} onClick={()=>interestPicked(info,i)}   /> {info}
                                </div>
                                )    
                        }
                    <button onClick={addInterestToAccount}>Create account</button>
            </div>
        </div>
       
    </div>
    
    </>
    
    )}

export default Interest