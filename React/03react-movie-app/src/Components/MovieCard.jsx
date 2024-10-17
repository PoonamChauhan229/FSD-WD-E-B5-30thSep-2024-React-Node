import { IconButton } from '@mui/material';
import {BtnCounter} from './BtnCounter'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../utils/cartContext';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

export function MovieCard({name,poster,rating,summary,id,deleteBtn,editBtn,elementMovies}){
    //console.log(id)
    const dispatch=useDispatch()
    const [cartUctxt,setCartUctxt]=useContext(CartContext)
    const [allmovies,setAllmovies]=useState([])
    const nameStyle={
        color:"black"
    }
    const ratingStyle={
        // color:"green"
        color:rating<=8?"red":"green"// conditional styling
    } 
    const handleItem=()=>{
        console.log("Adding Items to the Store...",elementMovies)
        //perform here an action >> dipatch an action
        // useDipatch hook  >> dispatch an action
        dispatch(addItem(elementMovies))
    }
      
    //fetch
    return(
        <>
            <div className="movieContainer">
                <img src={poster} alt="" className="moviePoster"/>
                <div className="movieSpecs">
                    <h5 className="movieName" style={nameStyle}>{(name.length<12)?name:(name.substring(0, 12)+"...")}</h5>
                   
                    <IconButton color="secondary" aria-label="add to shopping cart"
                     onClick={()=>{
                        setCartUctxt(cartUctxt+1)
                     }}
                     >  <AddShoppingCartIcon />
                    </IconButton>

                    
                     {/* DElete btn */}
                     {deleteBtn} {editBtn}
                     {/*  create a icon >> Video on the page */}
                    

                    <h5 className="rating" style={ratingStyle}>⭐{rating}</h5>
                    
                </div>
                <div style={{display:"flex",gap:"70%"}}>
                <AgricultureIcon color="primary" 
                onClick={()=>{handleItem()}}
                />     
                <BtnCounter/>
                </div>
              
                {/* <p className="summary" style={{color:"navy",fontSize: "14px"}}>{summary.substring(0, 100)+"..."}</p> */}
            </div>            
        </>
    )
}
// Styling
// Conditional Styling >>> >8 =green <8 =red 
// inline styling >>
// style={object} >> object {}
// ternary opertaors in js 
// condition?"true Value":"false value"

// 1==1?"Yes,its correct":"No its incorrect"
// 'Yes,its correct'
// 1==2?"Yes,its correct":"No its incorrect"
// 'No its incorrect'