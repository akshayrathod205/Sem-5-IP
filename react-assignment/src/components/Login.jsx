import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const change = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "Akshay Rathod" && formData.password === "pass") {
      alert(`Hello ${formData.username}!`);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleReset = () => {
    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={formData.username}
              onChange={(e) => change(e, "username")}
              required
              style={{
                width: "300px",
                height: "30px",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={formData.password}
              onChange={(e) => change(e, "password")}
              required
              style={{
                width: "300px",
                height: "30px",
                borderRadius: "5px",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              marginTop: "30px",
              padding: "10px",
              width: "100px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Login
          </button>
          <button
            type="reset"
            className="btn btn-primary"
            style={{
              marginTop: "30px",
              padding: "10px",
              width: "100px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={handleReset}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
