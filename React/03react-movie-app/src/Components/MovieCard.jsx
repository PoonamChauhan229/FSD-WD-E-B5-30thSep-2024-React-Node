import {BtnCounter} from './BtnCounter'
export function MovieCard({name,poster,rating,summary}){
    const nameStyle={
        color:"black"
    }
    const ratingStyle={
        // color:"green"
        color:rating<=8?"red":"green"// conditional styling
    }
   
    return(
        <>
            <div className="movieContainer">
                <img src={poster} alt="" className="moviePoster"/>
                <div className="movieSpecs">
                    <h5 className="movieName" style={nameStyle}>{name}</h5>
                     <BtnCounter/>
                    <h5 className="rating" style={ratingStyle}>⭐{rating}</h5>
                    
                </div>
                <p className="summary" style={{color:"navy",fontSize: "14px"}}>{summary.substring(0, 100)+"..."}</p>
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