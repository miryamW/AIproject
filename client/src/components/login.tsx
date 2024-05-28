

// // import React, { useState } from 'react'

// // const Login = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogin = () => {
// //     // Add login logic here
// //     console.log('Logging in with username:', username, 'and password:', password);
// //   };
// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <input
// //         type="text"
// //         placeholder="Username"
// //         value={username}
// //         onChange={(e) => setUsername(e.target.value)}
// //       />
// //       <br />
// //       <input
// //         type="password"
// //         placeholder="Password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //       <br />
// //       <button onClick={handleLogin}>Login</button>
// //     </div>
// //  );
// // };

// // export default Login;

// // function UserProfileCard({ imageUrl, fullName }) {
// // return (
// // <div className="user-profile-card">
// // 	<img src={imageUrl} alt="Profile" />
// // 	<h3>{fullName}</h3>
// // 	<button>עקוב</button>
// // </div>
// // );
// // }

// import React from 'react';

// const Login = () => {
// return (
// <div>
// 	{/* Login form goes here */}
// </div>
// );
// }

// export default Login;


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
		setUsername(e.target.value)}
		className="login-input"
		/>

		<RMGInput type="password" placeholder="Enter your password" value={password} onChange={(e)=>
			setPassword(e.target.value)}
			className="login-input"
			/>

			<RMGButton title="Login" onClick={handleLogin} className="login-button" />

			<RMGText text="Forgot Password?" className="forgot-password" />
</div>
);
};

export default Login;