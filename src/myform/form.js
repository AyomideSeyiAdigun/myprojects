import css from './form.css'
import { Field, Form, Formik } from 'formik'
import { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import {useHistory}  from 'react-router-dom';



function MyForm() {
   let history = useHistory()
   const loginDetails=(values) => {
  
    axios.post('http://localhost:3100/LoggedIn',values).then( res=>{
       let registeredUser = res.data
        if (registeredUser!==false){
           localStorage.setItem('token',registeredUser)
            history.push('/dashboard')
        }
      
    }
    )
       
    }
   
  
     return (
         <Formik  initialValues={{ Email:'' ,Password:''}}
          onSubmit= {loginDetails}
          >
           
        <>
              {/* <Form>
                  <Field name="Email" placeholder="Email" /> <br/>
                  <Field name="Password" placeholder="Password"/> 
                  <button type="submit">submit</button>
              </Form> */}

<div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <Form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br/>
                                <Field type="text" name="username" id="username" class="form-control"/>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br/>
                                <Field type="text" name="password" id="password" class="form-control"/>
                            </div>
                            <div id="register-link" class="text-right">
                            <span className="float-left">Remember me <input id="remember-me" name="remember-me" type="checkbox"/></span>   <Link  to="/signup" class="text-info">Register here</Link>
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"></label><br/>
                                <Field type="submit" name="submit" class="btn btn-info btn-md"   value="submit"/>
                            </div> 
                            
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
             
         </>
         
 
       </Formik>
     );
 }
 export default MyForm