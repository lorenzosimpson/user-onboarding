import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const UserForm = ({values, errors, touched}) => {
    return (
        <div className='form'>
            <Form>
                {/* username: */}
                <label>
                Username: 
                    <Field
                    type='text'
                    name='username'
                    />
                    {touched.username && errors.username && (<p>{errors.username}</p>)}
                </label>
            
                {/* email: */}
                <label>
                    Email:
                    <Field 
                    type='text'
                    name='email'
                    />
                    {touched.email && errors.email && (<p>{errors.email}</p>)}
                </label>

                {/* password: */}
                <label>
                    Password:
                    <Field
                    type='password'
                    name='password'
                    />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}
                </label>
                
                {/* terms of service checkbox: */}
                <label>
                {errors.tos && (<p>{errors.tos}</p>)}
                    I have read the Terms of Service: 
                    <Field
                    type='checkbox'
                    name='tos'
                    />
                </label>

                <button>Submit</button>
            </Form>
    </div>
        
    )
}

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

    handleSubmit(values) {
        console.log(values);
        //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
      }
})(UserForm);

export default FormikUserForm;