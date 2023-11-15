import { useRef, useState } from "react";
import supabase from "../../services/Supabase";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { emailRef, passwordRef } = useRef();

  const handleLogin = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        <form className="form-widget" onSubmit={handleLogin}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button className={"button block"} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { Eye, EyeSlash, Google } from "react-bootstrap-icons";
// import Loader from "../../ui/Loader";
// import supabase from "../../services/Supabase";

// export default function Login() {
//   const [showPswd, setShowPswd] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [email, setEmail] = useState("");
//   function handleShowPswd() {
//     setShowPswd(!showPswd);
//   }

//   const handleLogin = async (event) => {
//     event.preventDefault();

//     setLoading(true);
//     const { error } = await supabase.auth.signInWithOtp({ email });

//     if (error) {
//       alert(error.error_description || error.message);
//     } else {
//       alert("Check your email for the login link!");
//     }
//     setLoading(false);
//   };
//   return (
//     <div className="mx-auto w-2/3 ">
//       <h1>Login to your account</h1>

//       <form className="bg-white px-6 py-8 my-5 space-y-5">
//         <div className="flex flex-col gap-2">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             name="email"
//             className="border border-grey rounded-md px-2 py-1 focus:outline-none w-64"
//           />
//         </div>
//         <div className="flex flex-col gap-2 w-64">
//           <label className="text-black" htmlFor="email">
//             Password
//           </label>
//           <div className="flex items-center border border-grey rounded-md pl-1">
//             <input
//               type={showPswd ? "password" : "text"}
//               className="rounded-md px-2 py-1 focus:outline-none "
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             {showPswd ? (
//               <EyeSlash onClick={handleShowPswd} />
//             ) : (
//               <Eye onClick={handleShowPswd} />
//             )}
//           </div>
//         </div>

//         <div className="flex gap-5 items-center">
//           <button
//             className="bg-green rounded-lg text-white px-3 py-2 w-24"
//             onClick={handleLogin}
//           >
//             {loading ? <span>Loading</span> : <span>Login</span>}
//           </button>
//           <p>or</p>
//           <button className="flex items-center gap-1 bg-maroon px-3 py-2 rounded-md w-24">
//             <Google /> <span className="text-white">Google</span>
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
