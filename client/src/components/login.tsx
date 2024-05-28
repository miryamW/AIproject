
import React, { useState } from 'react';
import RMGButton from './RMGButton.component';
import RMGInput from './RMGInput.component';
import RMGText from './RMGText.component';
import RMGHeader from './RMGHeader.component';

const Login = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
// Logic to handle login
console.log(`Logging in with username: ${username} and password: ${password}`);
};

return (
<div>
	<RMGHeader text="Login" level="1" className="login-header" />

	<RMGInput type="text" placeholder="Enter your username" value={username} onChange={(e)=>
		setUsername(e.target.value)} onKeyDown={()=>{}}
		className="login-input"
		/>

		<RMGInput type="password" placeholder="Enter your password" value={password} onChange={(e)=>
			setPassword(e.target.value)} onKeyDown={()=>{}}
			className="login-input"
			/>

 			<RMGButton title="Login" onClick={handleLogin} className="login-button" />

 			<RMGText text="Forgot Password?" className="forgot-password" />
</div>
);
};

export default Login;