import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import axios from 'axios';
export const AddMovie=()=>{
    const formik=useFormik({
        initialValues:{name:"",poster:"",rating:"",summary:"",trailer:""},
        onSubmit:(values)=>{
            console.log(values)
            postMovie(values)
        }
    })
    console.log(formik)
    //post method axios
    const postMovie=async(newmovie)=>{
        let res=await axios.post('https://670760d2a0e04071d22a0624.mockapi.io/movie/movie',newmovie)
        console.log(res)
        console.log(res.data)
    }
    return(
        <Box sx={{border:"1px solid red",width:"40%"}}>
         <Box
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{ '& > :not(style)': { m: "1% 10% 1% 10%", width: '80%' } }}
            noValidate
            autoComplete="off"
            >
            
            <TextField id="standard-basic" label="MovieName" variant="standard"   size="small" 
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}  
            // error={formik.error.name}
            // helperText={}          
            />
            <TextField id="standard-basic" label="MoviePoster" variant="standard" size="small"
             name="poster"
             value={formik.values.poster}
             onChange={formik.handleChange} 
            />
            <TextField id="standard-basic" label="MovieRating" variant="standard"   size="small"  
             name="rating"
             value={formik.values.rating}
             onChange={formik.handleChange} 
            />
            <TextField id="standard-basic" label="MovieSummary" variant="standard"   size="small" 
             name="summary"
             value={formik.values.summary}
             onChange={formik.handleChange} 
            />
            <TextField id="standard-basic" label="MovieTrailer" variant="standard"   size="small" 
             name="trailer"
             value={formik.values.trailer}
             onChange={formik.handleChange} 
            />
            <Button variant="contained" size="small" type='submit'>
          Small
        </Button>
    </Box>
        </Box>
    )
}