import { useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />
      </div>
      <div className="options">
        <label>
          <input type="checkbox" {...register("rememberMe")} /> Remember Me
        </label>
        <a href="#">Forgot Password ?</a>
      </div>
      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting..." : "Submit"}
      />
      <p>
        Don't have an account ? <span class="register">Register</span>
      </p>
    </form>
  );
}

export default App;
