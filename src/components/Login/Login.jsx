import axios from "axios";
import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { authContext } from './../../Context/AuthContext';

export default function Login() {
  const [success, setsuccess] = useState(false);
  const [errorMassage, seterrorMassage] = useState(undefined);
  const [loading, setloading] = useState(false);
  const  navegate = useNavigate()
  const {setToken} =useContext(authContext)

  const schema = Yup.object({
   
    email: Yup.string().required("Email is required").email("Invaled email"),
    password: Yup.string().required("Password is required").min(6),
  });

  const userData = {
    email: "",
    password: "",
  };

  function loginSubmit(values) {
    setloading(true);

        axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .then((res) => {
        // in case of success
      if (res.data.message === 'success') {
        localStorage.setItem('tkn',res.data.token );
        setToken(res.data.token);
        setsuccess(true);
        setTimeout(() => {
          setsuccess(false);
          navegate('/home');
        }, 3000);
        

        
        
      }
      })
      .catch((err) => {
        // in case of error
        seterrorMassage(err.response.data.message);
        setTimeout(() => {
          seterrorMassage(undefined);
        }, 3000);
      }).finally(() => {
        setloading(false);
      });
      
  }
  let myFormik = useFormik({
    initialValues: userData,
    onSubmit: loginSubmit,
    validationSchema:schema,
  });




  return (
    <>
      <div className="w-50 m-auto pt-5">
        {success ? (
          <div className="alert alert-success terest-center text-center">
            
            Welcome Back
          </div>
        ) : (
          ""
        )}
        {errorMassage ? (
          <div className="alert alert-danger text-center">{errorMassage}</div>
        ) : (
          ""
        )}

        <h2>Login Now :</h2>

        <form onSubmit={myFormik.handleSubmit}>
    

          <label className="py-2" htmlFor="email">
            email
          </label>
          <input
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            value={myFormik.values.email}
            type="email"
            className="form-control"
            id="email"
          />
          {myFormik.errors.email && myFormik.touched.email ? (
            <div className="alert alert-warning mt-1">
              {myFormik.errors.email}
            </div>
          ) : (
            ""
          )}

          <label className="py-2" htmlFor="password">
            password
          </label>
          <input
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            value={myFormik.values.password}
            type="password"
            className="form-control"
            id="password"
          />
          {myFormik.errors.password && myFormik.touched.password ? (
            <div className="alert alert-warning mt-1">
              {myFormik.errors.password}
            </div>
          ) : (
            ""
          )}

        
          <button type="submit" className="btn bg-main mt-3 text-white me-auto">
            {loading ? <ColorRing
              visible={true}
              height="30"
              width="30"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
            />: "Log In"}
            
            
          </button>
        </form>
      </div>
    </>
  );
}
