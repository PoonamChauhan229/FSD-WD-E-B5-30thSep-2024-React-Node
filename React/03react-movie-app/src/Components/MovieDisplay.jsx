import axios from "axios"
import { MovieCard } from "./MovieCard"
import { useEffect, useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

export const MovieDisplay=()=>{
    const navigate=useNavigate()
    const [allmovies,setAllmovies]=useState([])
    // using axios
  const getMovie=async()=>{
    let res=await axios.get("https://670760d2a0e04071d22a0624.mockapi.io/movie/movie")   
    console.log("FROM AXIOS",res.data)
    setAllmovies(res.data)
  }
  useEffect(()=>{
    getMovie()
  },[])

  const deleteMovie=async(id)=>{
    console.log("Movie Deletion in Progress....",id)
    const res=await axios.delete(`https://670760d2a0e04071d22a0624.mockapi.io/movie/movie/${id}`)
    console.log(res.data)
    if(res.data){
        getMovie()
    }
    
}
    console.log(allmovies)
    return(
        <div className="movieDisplay">
            {
                allmovies?.map((element,index)=>(
                    <MovieCard {...element}
                    elementMovies={element}
                    key={element.id}
                    deleteBtn={                        
                        <IconButton color="error" aria-label=""                   
                            ><DeleteIcon  onClick={()=>{deleteMovie(element.id)}} />
                        </IconButton>
                    
                    }
                    editBtn={
                        <IconButton color="primary" aria-label=""
                    
                    > <EditIcon  onClick={()=>{navigate(`/edit/${element.id}`)}}/>
                    </IconButton>
                    }
                    
                    />
                ))
            }
       
      
        
        
        </div>
    )
}