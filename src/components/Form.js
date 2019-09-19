import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const UserForm = ({values, errors}) => {
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
                </label>

                {/* email: */}
                <label>
                    Email:
                    <Field 
                    type='text'
                    name='email'
                    />
                </label>

                {/* password: */}
                <label>
                    Password:
                    <Field
                    type='password'
                    name='password'
                    />
                </label>
                
                {/* terms of service checkbox: */}
                <label>
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
        name: Yup.string().required(),
        email: Yup.string().email().required(),
    }),

    handleSubmit(values) {
        console.log(values);
        //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
      }
})(UserForm);

export default FormikUserForm;