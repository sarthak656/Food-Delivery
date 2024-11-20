import React from 'react';
import { Formik ,Form ,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const Login = () => {
    [submitflag, setSubmitflag] = useState(false)
    return(
        <div className='row'>
        <div className='col-lg-6'></div>
        <div className='card col-lg-6'>
        <Formik 
        initialValues={{username: '', password: ''}}
        validationSchema={Yup.object({
            username: Yup.string().matches(/^[a-zA-Z0-9_]{4,}$/,'Username must be at least 3 characters and alphanumeric').required('Required'),
            password: Yup.string().min(6,'Password must be at least 6 characters').required('Required')
        })}

        onSubmit={(values)=>{
            setSubmitflag(true);
            console.log(values)
        }}
        >
       <Form>
        <div>
            <div className='uname'>
            <label htmlFor='username'>Username</label>
            </div>
            <div>
            <Field name='username'></Field>
            </div>
            <span>
            <ErrorMessage name='username'></ErrorMessage>
            </span>
        </div>

        <div>
            <label htmlFor='password'>Password</label>
            <div>
            <Field name='password'></Field>
            </div>
            <span>
            <ErrorMessage name='password'></ErrorMessage>
            </span>
        </div>
        <span className='submit'>
        <button type="submit" disabled={submitflag}>Submit</button>
        </span>
       </Form>
       </Formik>
       </div>
       </div>
    )
}

export default Login