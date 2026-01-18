import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(4);

    let r =fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let res = await r;
    let result = await res.json();
    
    console.log(data);
    if (data.username === "admin") {
      setError("username", {
        type: "manual",
        message: "This username is not allowed",
      });
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      {isSubmitting && <div className="overlay">Submitting form data...</div>}

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <input
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Username must be at most 20 characters long",
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Username must contain only letters",
              },
            })}
            type="text"
            placeholder="Username"
          />

          {errors.username && <p>{errors.username.message}</p>}

          <br />

          {/* Password */}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                message:
                  "Password must contain uppercase, lowercase, number & special character",
              },
            })}
            type="password"
            placeholder="Password"
          />

          {errors.password && <p>{errors.password.message}</p>}

          <br />

          <input type="submit" value="Submit" disabled={isSubmitting} />
          
          {errors.form && <p>{errors.form.message}</p>}
          {isSubmitting && <p>Submitting form data...</p>}

        </form>
      </div>
    </>
  );
}

export default App;
