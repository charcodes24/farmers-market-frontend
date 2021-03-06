import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { userLogin } from "../features/login/loginSlice";

import Loading from "./Loading";

export default function Login() {
  //USEFORM HOOK
  const { register, handleSubmit, setFocus, formState: { errors } } = useForm();


  //DISPATCH ACTIONS FROM REDUX STORE
  const dispatch = useDispatch();

  //REDUX STORE
  const cartItems = useSelector(state => state.cart.cartItems)
  const isLoading = useSelector(state => state.login.isLoading)
  
  useEffect(() => {
   setFocus("username")
  }, [setFocus]);

  function loginSubmit(data) {
    dispatch(userLogin(data))
  }

    
      return (isLoading) ? (
        <Loading />
      ) : (
        <div>
          <form onSubmit={handleSubmit(loginSubmit)}>
            <input
              {...register("username", { required: true })}
              placeholder="username"
              />
              {errors.username?.type === 'required' && "Username is required"}
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="password"
              />
              {errors.password?.type === 'required' && "Password is required"}
            <button type="submit">Log-In!</button>

            <p>
              Don't have an account? Sign-up{" "}
              <Link to="/signup_customer">here.</Link>
            </p>
          </form>
          {cartItems.length > 0 ? (
            <div>
              <h3>Please login or sign-up to place an order.</h3>
            </div>
          ) : null}
        </div>
      );
}