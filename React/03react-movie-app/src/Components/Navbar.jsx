import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { AddShoppingCart } from '@mui/icons-material';
import { Badge, IconButton, Stack } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '../utils/cartContext';
import AnchorIcon from '@mui/icons-material/Anchor';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { useSelector } from 'react-redux';

// useNavigate() >> Hook
const Navbar = () => {
  const cartItems=useSelector(store=>store.cart.items)
  console.log("FROM Store",cartItems,cartItems.length)
  const cartVal=useContext(CartContext)
    const navigate=useNavigate()
    const navStyle={color:'white',textDecoration:"none"}
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"1% 2% 1% 0.5%",backgroundColor:"black",color:"white",}}>
        <div>
        <IconButton color="secondary" aria-label="add to shopping cart" size="large">
           <AnchorIcon />
       </IconButton>

        </div>
        <div style={{display:"flex",justifyContent:"space-between",gap:"10px"}}>

        <Button><Link to='/' style={navStyle}>Home</Link></Button>
        <Button><Link to='/about' style={navStyle}>About</Link></Button>
        <Button><Link to ='/allmovies' style={navStyle}>All Movies</Link></Button>
        <Button variant="text" onClick={()=>{navigate('/addmovie')}}>Add Movie</Button>
      
        <Badge badgeContent={cartVal} color="success" sx={{marginTop:"3%"}}>
          <AddShoppingCart color="secondary" />
        </Badge>

        <Badge badgeContent={cartItems.length} color="error" sx={{marginTop:"3%"}}>
          <AgricultureIcon color="primary" 
          onClick={()=>{navigate('/cartpage')}}
          />
        </Badge>


        {/* <div onClick={()=>navigate('/')}>Home-Nav</div>
        <div onClick={()=>navigate('/about')}>About-Nav</div>
        <div onClick={()=>navigate('/allmovies')}>All Movies-Nav</div>  */}
        
        </div> 

           
        
    </div>
  )
}

export default Navbar