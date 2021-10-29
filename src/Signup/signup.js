
import { Field, Form, Formik,ErrorMessage } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import css from './signup.css'
import {Link} from 'react-router-dom';


function Signup(props) {
  let [registeredArray,handleRegArray]=useState([])

  const setValues= {FName:'',Email:'',Contact:'',LName:'',Password:'',ConPassword:''}
  
  const validateForm = Yup.object({
    FName:Yup.string().required('First Name is required'),
    Email:Yup.string().required('Email is required'),
    Contact:Yup.number().required('Number is required'),
    LName:Yup.string().required('Last Name is required'),
    Password:Yup.string().required().min(8,'minimun of 8 '),
    ConPassword:Yup.string().required()})

    const renderError =send=> <p className="errorColor"> *{send}</p>
  const submitDetails= async (values,{resetForm}) => {
    //  axios.post('http://localhost:3100/Registered',values).then(res=>
    //    console.log(res.data)
    // )
    
    if( registeredArray.length == 0){
      handleRegArray([...registeredArray,values])
    }else{
          
     for (let i = 0; i < registeredArray.length; i++) {
       const element = registeredArray[i];
       console.log(element)
       if ( element.Email == values.Email){
         alert('Email already Registered')
         return
       }
       else{
         handleRegArray([...registeredArray,values])
          props.history.push('/interest')
       }
       
     }
    }
    resetForm()
      let users = JSON.stringify(registeredArray)
      localStorage.setItem('USERS',users)
   }
   
 
    return (
      
      <Formik  initialValues={setValues}
         onSubmit= {submitDetails} validationSchema={validateForm}
         >
          
       <>
       
<div className="container" >
    <div class="container d-flex justify-content-center my-5">
    <div class="row my-2 mx-2 main">
        
        <div class="col-md-4 col-12 mycol d-none d-md-block">
             <img src="https://i.imgur.com/cEmbD0i.jpg" width="100%" height="100%"/> </div>
       
        <div class="col-md-8 col-12 xcol">
            <h2 class="title pt-5 pb-3">Sign up</h2>
          <Form class="myform">
                <div class="row rone">
                    <div class="form-group col-md-6 fone py-3">  <Field class="form-control" name="FName" placeholder="First Name" /> <ErrorMessage name="FName" render={renderError}/> </div>
                    <div class="form-group col-md-6 ftwo py-3">  <Field class="form-control" name="LName" placeholder="Last Name" />  <ErrorMessage name="LName" render={renderError}/> </div>
                </div>
                <div class="row rtwo">
                    <div class="form-group col-md-6 fthree py-3"> <Field class="form-control" name="Contact" placeholder="Contact"  />   <ErrorMessage name="Contact" render={renderError}/></div>
                    <div class="form-group col-md-6 ffour py-3"> <Field class="form-control" name="Email" placeholder="Email" type="email" />  <ErrorMessage name="Email" render={renderError}/> </div>
                </div>
                <div class="row rthree">
                    <div class="form-group col-md-6 ffive py-3"> <Field class="form-control" name="Password"  placeholder="Password" type="password" />  <ErrorMessage name="Password" render={renderError}/> </div>
                    <div class="form-group col-md-6 fsix py-3"> <Field class="form-control" name="ConPassword" placeholder="Confirm Password" type="password"/>  <ErrorMessage name="ConPassword" render={renderError}/>  </div>
                </div>
                <div class="row rfour">
                    <div class="form-group col-md-6 fseven py-3"> <button type="submit" class="btn btn-primary"><span>Create account</span></button> </div>
                    <div class="form-group col-md-6 feight py-3">
                        <p class="text-muted"> Already have an account?<br/><Link to="/login">Sign in</Link></p>
                    </div>
                </div>
          </Form>
        </div>
        </div>
        </div>
        </div>
        </>
      </Formik>





    );
 }
 export default Signup