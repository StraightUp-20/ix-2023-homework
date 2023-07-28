import { React, useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onFormSubmit(e) {
    e.preventDefault();

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="container my-5">
      <div className="card card-body p-4">
        <h1>Register</h1>
        <p>Please enter your email and password to register</p>
        <form onSubmit={onFormSubmit}>
          <div class="mb-3">
            <label class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end mt-4">
            <button class="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
