import { useDispatch, useSelector } from 'react-redux';
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';
import { clearCart, removeLastItem } from '../utils/cartSlice';
import { useNavigate } from 'react-router-dom';

export const CartPage=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const cartItems=useSelector(store=>store.cart.items)
    console.log("FROM cartPage",cartItems,cartItems.length)
    
    const cartStyle={
        display:"flex",
        border:"1px solid navy",
        flexDirection:"column",
        margin:"5%",
        borderRadius:"2%",
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)'   ,
        padding:"1%"  
    }

    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    const handleRemoveLastItem=()=>{
        dispatch(removeLastItem())
    }
    return(
        <>

       {cartItems.length>0?
       <>
        <Button variant="outlined"
            onClick={()=>handleClearCart()}
            >Clear Cart</Button>
        <Button variant="outlined"
            onClick={()=>handleRemoveLastItem()}
            >Remove Last Item</Button>
        {cartItems.map((element)=>(
            <>
            <div style={cartStyle}>
            <div style={{display:"flex",justifyContent:"space-between",color:"purple",fontSize:"20px",fontWeight:"bold"}}>
                <h1>{element.name}</h1>
                <h4><StarIcon/>{element.rating}</h4>
            </div>
                <div style={{display:"flex",gap:"3%"}}>
                <img src={element.poster}style={{height:"200px",width:"250px" }}/>
                {/* Trailer of it */}
                <iframe width="100%" height="200" src={element.trailer} title="Iron Man (2008) Trailer #1 | Movieclips Classic Trailers" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                
            </div>

            </>
        ))}
        </>
        :<Button variant="outlined" sx={{width:"90%",fontSize:"25px",margin:"5%",padding:"5%"}}
        onClick={()=>navigate('/allmovies')}
        >NO ITEMS IN CART 😔😔😔😔</Button>

    }
        </>
    )
}