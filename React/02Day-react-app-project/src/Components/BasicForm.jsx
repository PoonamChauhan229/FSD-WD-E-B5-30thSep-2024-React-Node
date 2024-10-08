import { useFormik } from "formik";
import * as yup from 'yup';

export const BasicForm = () => {

    const formValidationSchema=yup.object({
        email:yup.string().email("Invalid Email").min(12,"InAppropriate Email Address").required(""),
        password:yup.string().min(4,"Weak Password").max(5,"Too Big Password").required()
    })

    const formik=useFormik({
        initialValues:{email:"",password:""},
        validationSchema:formValidationSchema,
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    console.log(formik)
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <input type="email" placeholder="Enter Email" 
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        />
        {formik.errors.email}
        <br />
        <br />
        <input type="password" placeholder="Enter Password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        />
        <i style={{color:"red"}}>{formik.errors.password}</i>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
