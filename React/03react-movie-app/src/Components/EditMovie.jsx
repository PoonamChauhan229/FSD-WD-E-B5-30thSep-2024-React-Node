import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import axios from 'axios';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';

export const EditMovie=()=>{
    const {id}=useParams() // returns an object {id: 3}
    const [singleMovie,setSingleMovie]=useState(null)
    //console.log(id)
    const fetchEditMovie=async()=>{
        const res=await axios.get(`https://670760d2a0e04071d22a0624.mockapi.io/movie/movie/${id}`)
        console.log(res.data)
        setSingleMovie(res.data)
        formik.setValues(res.data)
    }
    useEffect(()=>{
        fetchEditMovie()
    },[])
    
    console.log(singleMovie)
    const navigate=useNavigate()
    // const {name}=singleMovie
 
    const formik=useFormik({
        initialValues:{name:"",poster:"",rating:"",summary:"",trailer:""},
        onSubmit:(values)=>{
            console.log(values)
            updateMovie(values)
        }
    })
    
    console.log(formik)
    //put method axios
    const updateMovie=async(movie)=>{
        let res=await axios.put(`https://670760d2a0e04071d22a0624.mockapi.io/movie/movie/${id}`,movie)
        console.log(res)
        console.log(res.data)
    }
    return(
        <>
        <input type="text" name="" id="" value={singleMovie?.name}/>
        <input type="text" name="" id="" value={singleMovie?.poster}/>

        <Box sx={{border:"1px solid red",width:"40%"}}>
            Test{id} 
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
            <Button variant="contained" size="small" type='submit'
            >
            Update Movie
            </Button>
            <Button variant="contained" size="small" type='submit'
            onClick={()=>navigate('/allmovies')}
            >
            <ArrowBackIosIcon/>
            Back
            </Button>
    </Box>
        </Box>

        </>
    )
}