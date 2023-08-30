import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';

function Registration() {

    let navigate = useNavigate();

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required(),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/auth", data).then(() => {
            alert("User registration successful :)");
            navigate('/');
        });
    }

    return (
        <div>
            <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            >
                <Form className='formContainer'>
                    <label>Username:</label>
                    <ErrorMessage name='username' component={'span'}></ErrorMessage>
                    <Field 
                    autocomplete='off'
                    id='inputCreatePost' 
                    name='username'
                    placeholder='(Ex. pablo.gonzalez.2007)'
                    />

                    <label>Password:</label>
                    <ErrorMessage name='password' component={'span'}></ErrorMessage>
                    <Field 
                    autocomplete='off'
                    type='password'
                    id='inputCreatePost' 
                    name='password'
                    placeholder='Your password...'
                    />

                    <button type='submit'>Register</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Registration