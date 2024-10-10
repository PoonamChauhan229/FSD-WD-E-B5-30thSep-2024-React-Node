import { MovieCard } from "./MovieCard"

export const MovieDisplay=({allmovies,setAllmovies})=>{
    console.log(allmovies)
    return(
        <div className="movieDisplay">
            {
                allmovies?.map((element,index)=>(
                    <MovieCard {...element}/>
                ))
            }
       
      
        
        
        </div>
    )
}