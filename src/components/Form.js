import React from 'react';
import { withFormik, Form, Field } from 'formik';

const UserForm = () => {
    return (
        <Form>
            {/* username: */}
            <label>
                Username: 
                <input 
                type='text'
                name='username'
                />
            </label>

            {/* email: */}
            <label>
                Email:
                <input 
                type='text'
                name='email'
                />
            </label>
            
            {/* password: */}
            <label>
                Password:
                <input
                type='password'
                name='password'
                />
            </label>








        </Form>
        
    )
}

export default UserForm;