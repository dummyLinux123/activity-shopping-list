import { useState } from "react";



const MainComponent = () => {


    /* use state */
    const [input, setInput] = useState();
    const [itemList, setItemList] = useState([]);


    /* event handlers */
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        setItemList( prevState => [
            ...prevState,
            {itemName :  input}
        ])
    }

    const handleX = (itemToRemove) => {
        const newItems = itemList.filter((item) => {
            return item.itemName !== itemToRemove;
        });
        setItemList(newItems);
    }


    /* components */
    const ShowItemList = () => {
        return (
            itemList.map((eachItem,index) => 
                <div key={index} style={{display:"flex", justifyContent:"space-between", marginTop:"20px", border:"1px solid black", padding:"10px", borderRadius:"5px"}}>
                    <h3 >{eachItem.itemName}</h3>
                    <button 
                        onClick={()=>handleX(eachItem.itemName)}
                        style={{color:"red", backgroundColor: "transparent" , border:"none"}}
                    >
                        X
                    </button>
                </div>
                
            )
        )
        
    }

    const EmptyItemList = () => {
        return (
            <div style={{marginTop:"20px", color:"gray", textAlign:"center"}}>There is no Item added Yet.</div>
        )
    }




    return ( 
       <div style={{backgroundColor:"white", padding:"20px", marginTop:"100px" , paddingLeft:"100px" , paddingRight:"100px", border:"1px dashed black"}}>

        <div style={{display:"flex", justifyContent:"center"}}>
            <h2 style={{margin:"10px"}}>Items to buy</h2>
        </div>
       
            
        <div className="clickable">
            <div>
                <input placeholder="Enter the item name" onChange={(e)=>handleChange(e)}></input>
                <button onClick={handleClick}>Add</button>
            </div>
        </div>

        <div>
            {
                itemList.length!=0 ? <ShowItemList/> : <EmptyItemList/>
            }
        </div>

       </div>
       
    );
}
 
export default MainComponent;