import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import styled from 'styled-components';

const UserForm = ({values, errors, touched, status}) => {
    const [users, setUser] = useState([])


    useEffect(() => {
        if (status) {
            setUser([...users, status])
        }
    }, [status])
    return (
        <div className='form'>
            <Form>
                {/* username: */}
                    <Field className='field'
                    type='text'
                    name='username'
                    placeholder='Username'
                    />
                    {touched.username && errors.username && (<p>{errors.username}</p>)}

            
                {/* email: */}
                    <Field className='field'
                    type='text'
                    name='email'
                    placeholder='Email'
                    />
                    {touched.email && errors.email && (<p>{errors.email}</p>)}

                {/* password: */}
                    <Field className='field'
                    type='password'
                    name='password'
                    placeholder='Password'
                    />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}
                
                {/* terms of service checkbox: */}
               
                {touched.tos && errors.tos && (<p>{errors.tos}</p>)}
                    I have read the Terms of Service: 
                    <Field
                    type='checkbox'
                    name='tos'
                    />
               

                <button className='button'>Log in</button>

            </Form>
            <div className='welcome-container'>
            {users.map(user => (
                    <h3>Welcome, {user.username}!</h3>
            ))}
            </div>
        </div>
        
    )
}
//make the above component into a Formik form
const FormikUserForm = withFormik({
    mapPropsToValues({username, email, password, tos}) {
        return {
            username: username || '',
            email: email || '',
            password: password || '',
            tos: tos || false
        }
    },


    // validation schema
    validationSchema: Yup.object().shape({
        username: Yup.string().required('You must tell us your name'),
        email: Yup.string().email().required('You must tell us your email'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('You must have a password'),
        tos: Yup
              .boolean()
              .oneOf([true], 'You must Accept the Terms and Conditions'),
    }),

    //what to do with the data: POST
    handleSubmit(values, { setStatus }) {
        axios
        .post('https://reqres.in/api/users/', values)
        .then(response => {
            setStatus(response.data)
            console.log(response)
        })
        .catch(error => {
            console.log(error.response)
        })
        
      }
})(UserForm);

export default FormikUserForm;