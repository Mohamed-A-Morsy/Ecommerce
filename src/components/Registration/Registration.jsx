import axios from "axios";
import { Formik, useFormik } from "formik";
import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Registration() {
  const [success, setsuccess] = useState(false);
  const [errorMassage, seterrorMassage] = useState(undefined);
  const [loading, setloading] = useState(false);
  const  navegate = useNavigate()

  const schema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "name at least 3 carcters")
      .max(12),
    email: Yup.string().required("Email is required").email("Invaled email"),
    password: Yup.string().required("Password is required").min(6),
    rePassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    phone: Yup.string().required("Phone is required"),
  });

  const userData = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  };

  function registrationSubmit(values) {
    setloading(true);

        axios
      .post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .then((x) => {
        // in case of success
        setsuccess(true);
        setTimeout(() => {
          setsuccess(false);
          navegate('/Login');
        }, 3000);
        
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
    onSubmit: registrationSubmit,
    // validate: function (values) {
    //   const errors = {};
    //   const nameRegex = /^[A-Z][a-z]{3,6}$/;
    //   const phoneRegex = /^201[012][0-9]{8}$/;

    //   if (nameRegex.test(values.name) === false) {
    //     errors.name = "Invalid Name must be between 4 to 6 carcters";
    //   }
    //   if (
    //     values.email.includes("@") !== true ||
    //     values.email.includes(".") !== true
    //   ) {
    //     errors.email = "Invalid Email";
    //   }
    //   if (phoneRegex.test(values.phone) === false) {
    //     errors.phone = "Invalid Phone Number";
    //   }
    //   if (values.password.length < 6 || values.password > 12) {
    //     errors.password = "Password must be at least 6 characters";
    //   }
    //   if (values.repassword !== values.password) {
    //     errors.repassword = "Passwords do not match";
    //   }

    //   return errors;
    // },
    validationSchema: schema,
  });




  return (
    <>
      <div className="w-50 m-auto pt-5">
        {success ? (
          <div className="alert alert-success text-center">
            
            You have been regester successfully
          </div>
        ) : (
          ""
        )}
        {errorMassage ? (
          <div className="alert alert-danger text-center">{errorMassage}</div>
        ) : (
          ""
        )}

        <h2>Register Now :</h2>

        <form onSubmit={myFormik.handleSubmit}>
          <label className="py-2" htmlFor="name">
            Name
          </label>
          <input
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            value={myFormik.values.name}
            type="text"
            className="form-control"
            id="name"
          />
          {myFormik.errors.name && myFormik.touched.name ? (
            <div className="alert alert-warning mt-1">
              {myFormik.errors.name}
            </div>
          ) : (
            ""
          )}

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

          <label className="py-2" htmlFor="rePassword">
            repassword
          </label>
          <input
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            value={myFormik.values.rePassword}
            type="password"
            className="form-control"
            id="rePassword"
          />
          {myFormik.errors.rePassword && myFormik.touched.rePassword ? (
            <div className="alert alert-warning mt-1">
              {myFormik.errors.rePassword}
            </div>
          ) : (
            ""
          )}

          <label className="py-2" htmlFor="phone">
            phone
          </label>
          <input
            onBlur={myFormik.handleBlur}
            onChange={myFormik.handleChange}
            value={myFormik.values.phone}
            type="number"
            className="form-control"
            id="phone"
          />
          {myFormik.errors.phone && myFormik.touched.phone ? (
            <div className="alert alert-warning mt-1">
              {myFormik.errors.phone}
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
            />: "Register"}
            
            
          </button>
        </form>
      </div>
    </>
  );
}
