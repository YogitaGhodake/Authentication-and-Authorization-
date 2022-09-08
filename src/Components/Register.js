 import React from 'react';
import '../../src/App.css';

function Register() {
    return(
        <h3>hello</h3>
    )
}

export default Register;




// const Registration = () => {

//   const [usernameReg, setUsernameReg] = useState('');
//   const [passwordReg, setPasswordReg] = useState('');

//     const register = () => {
//     Axios.post('http://localhost:3001/register', {
//       username: usernameReg,
//       password: passwordReg,
//     }).then((response) => {
//       console.log(response.data.success);
//       if (usernameReg){
//         alert("User already exist");
//       }
//     });
//   };



//   return (
//     <div className="login-wrapper">
//       <div className="form">
//       {/* <h3>Please register your self</h3> */}
//         <img src="img/avatar.png" alt="" />
//         <h2>REGISTRATION</h2>
//         <div className="input-group">
//           <input type="text"
//             onChange={(e) => {
//               setUsernameReg(e.target.value);
//             }}
//             id="loginUser"
//             required />
//           <label htmlFor="loginUser">User Name</label>
//         </div>
//         <div className="input-group">
//           <input type="password"
//             onChange={(e) => {
//               setPasswordReg(e.target.value);
//             }}
//             // name="loginPassword" 
//             id="loginPassword"
//             required />
//           <label htmlFor="loginPassword">Password</label>
//         </div>
//         <button onClick={register} 
//           className="submit-btn"
//         >
//           Register
//         </button>
//         {/* <input 
//         onClick={register}
//         type="submit" value="Register" className="submit-btn" />
//         <a href="#forgot-pw" className="forgot-pw">Forgot Password?</a> */}
//       </div>

//       {/* <div id="forgot-pw">
//         <form action="" className="form">
//           <a href="#" className="close">&times;</a>
//           <h2>Reset Password</h2>
//           <div className="input-group">
//             <input type="email" name="email" id="email" required />
//             <label htmlFor="email">Email</label>
//           </div>
//           <input type="submit" value="Submit" className="submit-btn" />
//         </form>
//       </div> */}
//     </div>

//   )
// }

// export default Registration;