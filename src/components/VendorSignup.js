import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import { createVendor } from "../features/login/loginSlice";


export default function VendorSignup() {
  //USEFORM HOOK
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();

  //REDUX
  const dispatch = useDispatch();

  useEffect(() => {
    setFocus("name")
  }, [setFocus]);

  function submitCreateVendor(data) {
    dispatch(createVendor(data));
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submitCreateVendor)}>
        <input {...register("name", { required: true })} placeholder="name" />
        {errors.name?.type === "required" && "*required"}
        <textarea
          {...register("description", { required: true })}
          placeholder="Shop description..."
        />
        {errors.description?.type === "required" && "*required"}
        <input {...register("email", { required: true })} placeholder="email" />
        {errors.email?.type === "required" && "*required"}
        <input
          {...register("username", { required: true })}
          placeholder="username"
        />
        {errors.username?.type === "required" && "*required"}
        <input
          {...register("password", { required: true })}
          placeholder="password"
        />
        {errors.password?.type === "required" && "*required"}
        <input
          {...register("passwordConfirmation", { required: true })}
          placeholder="password confirmation"
        />
        {errors.passwordConfirmation?.type === "required" && "*required"}
        <button type="submit" className="btn signup">
          Sign Up!
        </button>
        <p>
          Are you a customer? Sign-up <Link to="/signup_customer">here.</Link>
        </p>
      </form>
    </div>
  );
}