import React from 'react';
import {Formik} from 'formik';
import Form from './Form';
import * as yup from 'yup';
import {Submit} from './App';
const phone = /[0-9]{10}$/
function Formik1()
{
    return(
      <Formik
      initialValues={{
          FirstName:''
      }}
      onSubmit={Submit}
          validationSchema={
            yup.object({
                FirstName:yup.string()
                .required("Required")
                .min(4,"Minimum 4 characters required")
                .max(8,"Maximum length is 8 character"),
                SecondName:yup.string()
                .required("Required")
                .min(4,"Minimum 4 characters required")
                .max(8,"Maximum length is 8 characters"),
                PhoneNumber:yup.string()
                .required("Required")
                .matches(phone,"Phone number is invalid"),
                Password:yup.string()
                .required("Required")
                .min(4,"Minimum 4 characters required")
                .max(8,"Maximum length is 8 characters"),
               ConfirmPassword:yup.string()
               .required("Required")
               .oneOf([yup.ref('Password'),null],"Password doesn't match")
              })
          }
      component={Form}
      >

      </Formik>
    );
}
export default Formik1;