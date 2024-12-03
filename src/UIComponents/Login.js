import React from 'react';
import { Formik ,Form ,Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import foodLogo from "../../public/Assets/images/Food_Deliver.png";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    return(
        <>
        <div className=' grid grid-cols-12'>
        <div className='col-span-6'>
        <img className=" mt-14 ml-14" src={foodLogo} />
        </div>
        <div className='col-span-6 mt-10 ml-56 border-4 w-[360px] rounded-lg shadow-xl'>
            <div className='ml-32 font-serif text-2xl text-blue-700'>Foodie 🍔</div>
            <div className='ml-32 font-serif text-xs text-blue-700'>Login to Continue</div>
        <Formik 
        initialValues={{username: '', password: ''}}
        validationSchema={Yup.object({
            username: Yup.string().matches(/^[a-zA-Z0-9_]{4,}$/,'Username must be at least 4 characters and alphanumeric').required('Required'),
            password: Yup.string().min(6,'Password must be at least 6 characters').required('Required')
        })}

        onSubmit={(values)=>{

            const {username , password} = values;
            console.log(username)
            if(username === 'sarthak' && password === 'Abcd@1234'){
                navigate('/app')
            }
        }}
        >
       <Form>
        <div className='p-2'>
            <div className='p-2 font-sans'>
            <label htmlFor='username'>Username</label>
            </div>
       
            <Field name='username' className='border-2 rounded-lg ml-2'></Field>
            
            <div className='ml-2 text-red-400'>
            <ErrorMessage name='username'></ErrorMessage>
            </div>
        </div>

        <div className='p-2'>
        <div className='p-2 font-sans'>
            <label htmlFor='password'>Password</label>
            </div>
            <Field name='password' type="password" className='border-2 rounded-lg ml-2 ' autoComplete="off"></Field>
            <div className='ml-2 text-red-400'>
            <ErrorMessage name='password'></ErrorMessage>
            </div>
        </div>
        <div className='flex justify-center mt-[14px] mb-2 ml-32 p-1 border rounded-2xl bg-blue-900 w-20 text-white'>
        <button type="submit" >Submit</button>
        </div>
       </Form>
       </Formik>
       </div>
      
       </div>
        <div className='flex justify-center mt-64 text-blue-600'>Version 1.0.0</div>
        </>
    )
}

export default Login