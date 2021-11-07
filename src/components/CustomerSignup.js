import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form";

import { createCustomer } from "../features/login/loginSlice";

export default function CustomerSignup() {
  //USEFORM HOOK
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm();

  //REDUX
  const dispatch = useDispatch()

  
  useEffect(() => {
    setFocus("name")
  }, [setFocus]);

    function submitCreateCustomer(data) {
        dispatch(createCustomer(data))
    }

    return (
      <div>
        <form
          onSubmit={handleSubmit(submitCreateCustomer)}
        >
          <input {...register("name", { required: true })} placeholder="name" />
          {errors.name?.type === "required" && "*required"}
          <input
            {...register("email", { required: true })}
            placeholder="email"
          />
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
            placeholder="re-type password"
          />
          {errors.passwordConfirmation?.type === "required" && "*required"}
          <button>Sign Up!</button>
          <p>
            Are you a vendor? Sign-up <Link to="/signup_vendor">here.</Link>
          </p>
        </form>
      </div>
    );

    


}