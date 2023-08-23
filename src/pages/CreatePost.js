import React, { useEffect } from 'react';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

function CreatePost() {

    let navigate = useNavigate();

    const initialValues = {
        title: '',
        postText: '',
    };

    useEffect(() => {

        if (!localStorage.getItem('accessToken')) {
            navigate('/login');
        }
        
    }, [navigate]);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must input a title!"),
        postText: Yup.string().required(),
    })

    const onSubmit = (data) => {

        axios.post("http://localhost:3001/posts", data, {headers: {accessToken: localStorage.getItem('accessToken')}}, data).then((response) => {
            navigate("/");
        })
        console.log(data);
    };

  return (
    <div className='createPostPage'>
        <Formik initialValues={initialValues}
         onSubmit={onSubmit}
          validationSchema={validationSchema}
          >
            <Form className='formContainer'>
                <label>Title:</label>
                <ErrorMessage name='title' component={'span'}></ErrorMessage>
                <Field 
                id='inputCreatePost' 
                name='title'
                 placeholder='(Ex. Title)'
                 />
                 <label>Post:</label>
                 <ErrorMessage name='postText' component={'span'}></ErrorMessage>
                <Field 
                id='inputCreatePost' 
                name='postText'
                 placeholder='(Ex. Post)'
                 />

                 <button type='submit'>Create post</button>
            </Form>
        </Formik>
    </div>
  );
}

export default CreatePost;