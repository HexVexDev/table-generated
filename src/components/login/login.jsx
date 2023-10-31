import "../../assets/css/login/login.css"
import world from "../../assets/images/world.png";
import logo from "../../assets/images/logo.svg";
import info from "../../assets/images/info.svg";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [focused, setFocused] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showTooltip, setShowTooltip] = useState(false);
	const [isDisable, setIsDisable] = useState(true);

	const [animateContainer, setAnimatecontainer] = useState(false);
	const [animateColumn, setAnimateColumn] = useState(false);


	const navigate = useNavigate();

	useEffect(() => {
		username !== "" && password !== "" ? setIsDisable(false) : setIsDisable(true);
	}, [username, password])

	const loginClick = (e) => {
		e.preventDefault();
		setAnimatecontainer(true);
		setAnimateColumn(true);
	}

	const handleAnimationEnd = () => {
		navigate("/dashboard")
	}

	return (
		<section className="login">
			<img className="world" src={world} alt="ProdensaAutomation" />
			<div className="container">
				<div className="row">
					<div className="col-10 offset-1 col-lg-4 offset-lg-7">
						<img className="logo" src={logo} alt="ProdensaAutomation" />
						<form onSubmit={(e) => loginClick(e)}>
							<div className="inputContainer">
								<span className="username">Username</span>
								<input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" autoComplete="username" onFocus={() => setFocused(!focused)} onBlur={() => setFocused(!focused)} />
								<span className={`noteUser ${focused ? "show" : ""}`}>
									<img src={info} alt="ProdensaAutomation" />
									Enter your email address
								</span>
							</div>
							<div className="inputContainer passwordContainer">
								<span className="password">Password</span>
								<input onChange={(e) => setPassword(e.target.value)} type={`${!showPassword ? "password" : "text"}`} placeholder="Password" autoComplete="current-password" />
								<div className={`passwordIcon ${showPassword ? "show" : ""}`} onClick={() => setShowPassword(!showPassword)} onMouseEnter={() => setShowTooltip(!showTooltip)} onMouseLeave={() => setShowTooltip(!showTooltip)} />
								<span className={`passwordTooltip ${showTooltip ? "show" : ""}`}>{showPassword ? "Hide password" : "Show password"}</span>
							</div>
							<div className="rememberContainer">
								<input id="rememberMe" type="checkbox" />
								<label htmlFor="rememberMe">Remember me</label>
							</div>
							<button disabled={isDisable} className={`${isDisable ? "loginDisable" : "loginSubmit"}`} type="submit">
								<span>Login</span>
							</button>
						</form>
					</div>
				</div>
			</div >
			<span className="privacy">Privacy</span>

			<div className={`animationContainer ${animateContainer ? "show" : ""}`} onAnimationEnd={handleAnimationEnd}>
				<div className={`columnAnimation ${animateColumn ? "animate" : ""}`}></div>
				<div className={`columnAnimation ${animateColumn ? "animate" : ""}`}></div>
				<div className={`columnAnimation ${animateColumn ? "animate" : ""}`}></div>
				<div className={`columnAnimation ${animateColumn ? "animate" : ""}`}></div>
			</div>
		</section >
	)
}

export default Login;
