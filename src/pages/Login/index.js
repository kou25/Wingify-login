import { useEffect, useState } from "react";
import "../../Assests/CSS/login.css";

import { LoginBackground } from "./components/LoginBackground";
import { LoginForm } from "./components/LoginForm";
function Login() {
  const [years, setYears] = useState([]);
  useEffect(() => {
    let getyears = generateYearsBetween();
    setYears(getyears);
  }, []);

  const generateYearsBetween = (startYear = 1970, endYear = 2003) => {
    const endDate = endYear;
    let newYears = [];
    for (var i = startYear; i <= endDate; i++) {
      newYears.push(startYear);
      startYear++;
    }
    return newYears;
  };


  return (
    <div className="main__container">
      <div className="login__container">
        <LoginBackground/>
        <LoginForm years={years}/>
       </div>
    </div>
  );
}

export default Login;
