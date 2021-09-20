import React,{useState} from 'react'
import { MONTH } from "../../../Common/index";
export const LoginForm = ({years}) => {
    const [fields, setFields] = useState({});

    const handleInputChange = (e) => {
        setFields((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.value,
        }));
        if (e.target.checkValidity()) {
          e.target.classList.remove("has-error");
          e.target.nextElementSibling.classList.remove('has-error');
        } else {
          e.target.classList.add("has-error");
          e.target.nextElementSibling.classList.add('has-error');
        }
      };
    
    const handleFormSubmit = (event) => {
        console.log("entered", fields, event.target.checkValidity());
        event.preventDefault();
        if (event.target.checkValidity()) {
          //form submited
        } else {
          if (
            fields.email === "" ||
            fields.email === undefined
          ) {
            document.getElementById("login-email").classList.add("has-error");
            document.getElementById("login-email").nextElementSibling.classList.add('has-error');
          }
          if (
            fields.password === "" ||
            fields.password === undefined
          ) {
            document.getElementById("login-password").classList.add("has-error");
            document.getElementById("login-password").nextElementSibling.classList.add('has-error');
          }
        }
      };
    return (
        <div className="login__form">
        <div className="login__form-container">
          <h2>Create an account</h2>
          <form onSubmit={(e) => handleFormSubmit(e)} noValidate={true}>
            <div className="row">
              <div className="form-group">
                <label>Enter your email</label>
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  className="form-ctrl"
                  autoComplete="off"
                  pattern="([A-Za-z0-9._%+-])+@([a-zA-Z0-9.-]{2,})\.+[a-zA-Z]{2,}"
                  required
                  onChange={handleInputChange}
                  value={fields["email"]}
                  style={{position: "relative"}}
                />
                <span className="error-message">Please add valid email address</span>
              </div>
              <div className="form-group">
                <label>
                  Date of birth <span>(Optional)</span>
                </label>
                <div className="date_form-group-container">
                  <div className="date_form-group">
                    <label>Date</label>
                    <input
                      id="tpt_loginUsername"
                      className="form-ctrl"
                      autoComplete="off"
                    />
                  </div>
                  <div className="date_form-group">
                    <label>Month</label>
                    <select
                      id="tpt_loginUsername"
                      className="form-ctrl"
                      autoComplete="off"
                    >
                      {MONTH.map((d) => (
                        <option key={d.value} value={d.value}>
                          {d.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="date_form-group">
                    <label>Year</label>
                    <select
                      id="tpt_loginUsername"
                      className="form-ctrl"
                      autoComplete="off"
                    >
                      {years.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Choose a strong password</label>
                <input
                  id="login-password"
                  type="password"
                  name="password"
                  className="form-ctrl"
                  autoComplete="new-password"
                  pattern={
                    "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{1,}$"
                  }
                  required
                  onChange={handleInputChange}
                  value={fields["password"]}
                />
                <span className="error-message">Please add valid Password</span>
              </div>
              <div className="form-group">
                <label>Are you an agency or individual?</label>
                <div style={{ display: "flex" }}>
                  <input type="radio" name="type" id="Individual" />
                  <label
                    id="radio"
                    htmlFor="Individual"
                    style={{ marginRight: "40px" }}
                  >
                    Individual
                  </label>

                  <input type="radio" name="type" id="Agency" />
                  <label id="radio" htmlFor="Agency">
                    Agency
                  </label>
                </div>
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  id="loginButton"
                  className="btn sign-in"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    
    )
}
