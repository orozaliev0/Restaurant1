import React, {useState} from 'react';
import "./Tab.scss"
const Tabb = ({panel}) => {
    const [index, setIndex] = useState(0)
    console.log(index)
    return (
           <>
               <div className={"tab_tab"}>
                   <div onClick={ () => setIndex(0)}
                        className={`tab_item ${index === 0 ? "active" : null}`}
                   >wertyu
                   </div>
                   <div onClick={ () => setIndex(1)}
                        className={`tab_item ${index === 1 ? "active" : null}`}>
                       wertyu
                   </div>
                   <div onClick={ () => setIndex(2)}
                        className={`tab_item ${index === 2 ? "active" : null}`}>
                       wertyu
                   </div>
                   <div onClick={ () => setIndex(3)}
                        className={`tab_item ${index === 3 ? "active" : null}`}>
                       wertyu
                   </div>
               </div>

           <div className="tab_element" hidden={index !==0}>

               <div>{panel}</div>
           </div>
           </>

    );
};

export default Tabb;