import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';

// useNavigate() >> Hook
const Navbar = () => {
    const navigate=useNavigate()
    const navStyle={color:'white',textDecoration:"none"}
  return (
    <div style={{display:"flex",justifyContent:"space-between",padding:"10px",backgroundColor:"black",color:"white"}}>
        <div>Logo</div>
        <div style={{display:"flex",justifyContent:"space-between",gap:"10px"}}>
        {/* <div>Home</div>
        <div>About</div>
        <div>All Movies</div> */}

        {/* <div><a href="/">Home</a></div>
        <div><a href="/about">About</a></div>
        <div><a href="/allmovies">All Movies</a></div> */}

        <div><Link to='/' style={navStyle}>Home</Link></div>
        <div><Link to='/about' style={navStyle}>About</Link></div>
        <div><Link to ='/allmovies' style={navStyle}>All Movies</Link></div>
        <Button variant="text" onClick={()=>{navigate('/addmovie')}}>Add Movie</Button>


        {/* <div onClick={()=>navigate('/')}>Home-Nav</div>
        <div onClick={()=>navigate('/about')}>About-Nav</div>
        <div onClick={()=>navigate('/allmovies')}>All Movies-Nav</div>  */}
        
        </div> 
    
        
    </div>
  )
}

export default Navbar