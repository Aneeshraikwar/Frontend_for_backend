import React from 'react';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import axios from "axios"

function Login() {
    const [identifier , setIdentifier ] = useState("")
    const [password, setPassword] = useState('')
    const [user,setUser]=useState({})

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        console.log(form.noValidate)
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const loginHandler = async (event) => {
        event.preventDefault()
       try {
         const loginData = await axios({
             method: 'post',
             url: '/api/v1/users/login',
             data: {
                 identifier,
                 password
             }
             
            })
            console.log(loginData)
                
         alert("logined in successfully")
       } catch (error) {
        alert("got some errors")
       
       }




    }
    return (
        <form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-5">
                    <div className="">
                        <div className="mb-4">
                            <label className="block mb-2 font-normal" htmlFor="email">
                                Email or Username
                            </label>
                            <input
                                type="text"
                                onChange={(e) => {
                                    setIdentifier(e.target.value)
                                }}
                                className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                                id="email"
                                placeholder="Enter Email or Username"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-normal" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                onChange={(e)=>setPassword(e.target.value)}
                                htmlFor='password'
                                className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                                id="password"
                                placeholder="Enter Password"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="checkbox"
                                className="mr-2"
                                id="remember-me"
                                defaultChecked
                            />
                            <label className="font-normal" htmlFor="remember-me">
                                Remember me
                            </label>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
                    <button
                        type="submit"
                              onClick={loginHandler}
                        className="bg-indigo-800 text-white px-7 py-3 rounded w-full"
                    >
                        Log In
                        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                    </button>
                    <div className="mt-3 flex justify-center items-center">
                        <a href="#!" className="opacity-75">
                            Forget Your Password?
                        </a>
                    </div>

                    <div className="relative">
                        <hr className="my-6 md:my-12 border-gray-400" />
                        <span className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 dark:bg-slate-800">
                            Or
                        </span>
                    </div>

                    <SocialLoginButton />
                </div>
            </div>
        </form>
    );
};

const SocialLoginButton = () => (
    <Fragment>
        <button className="w-full flex justify-center items-center bg-blue-600 rounded py-3 px-5 mb-3">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl text-white" />
            <span className="w-full text-center text-white">
                Continue with Facebook
            </span>
        </button>
        <button className="w-full flex justify-center items-center bg-red-500 rounded py-3 px-5 mb-3">
            <span className="fab fa-google text-white text-2xl"></span>
            <FontAwesomeIcon icon={faGoogle} className="text-white text-2xl" />
            <span className="w-full text-center text-white">
                Continue with Google
            </span>
        </button>
    </Fragment>
);

// const SignInForm = () => {
// 	const [validated, setValidated] = useState(false);

// 	const handleSubmit = (event) => {
// 		event.preventDefault();

// 		const form = event.currentTarget;
// 		if (form.checkValidity() === false) {
// 			event.preventDefault();
// 			event.stopPropagation();
// 		}

// 		setValidated(true);
// 	};

// 	return (
// 		<form noValidate validated={validated} onSubmit={handleSubmit}>
// 			<div className="grid grid-cols-12 gap-6">
// 				<div className="col-span-12 md:col-span-6 lg:col-span-5">
// 					<div className="">
// 						<div className="mb-4">
// 							<label className="block mb-2 font-normal" htmlFor="email">
// 								Email Address
// 							</label>
// 							<input
// 								type="text"
// 								className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
// 								id="email"
// 								placeholder="Enter Email Address"
// 							/>
// 						</div>
// 						<div className="mb-4">
// 							<label className="block mb-2 font-normal" htmlFor="password">
// 								Password
// 							</label>
// 							<input
// 								type="password"
// 								className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
// 								id="password"
// 								placeholder="Enter Password"
// 							/>
// 						</div>
// 						<div className="mb-4">
// 							<input
// 								type="checkbox"
// 								className="mr-2"
// 								id="remember-me"
// 								checked
// 							/>
// 							<label className="font-normal" htmlFor="remember-me">
// 								Remember me
// 							</label>
// 						</div>
// 					</div>
// 				</div>
// 				<div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8">
// 					<button
// 						type="submit"
// 						className="bg-indigo-800 text-white px-7 py-3 rounded w-full"
// 					>
// 						Log In
// 						<FontAwesomeIcon icon={faArrowRight} className="ml-2" />
// 					</button>
// 					<div className="mt-3 flex justify-center items-center">
// 						<a href="#!" className="opacity-75">
// 							Forget Your Password?
// 						</a>
// 					</div>

// 					<div className="relative">
// 						<hr className="my-6 md:my-12 border-gray-400" />
// 						<span className="px-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 dark:bg-slate-800">
// 							Or
// 						</span>
// 					</div>

// 					<SocialLoginButton />
// 				</div>
// 			</div>
// 		</form>
// 	);
// };

export function SignIn5_4OGu4sTs() {
    return (
        <section className="ezy__signin5_4OGu4sTs py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center items-center h-full max-w-6xl mx-auto">
                    <div className="w-full bg-blue-100 bg-opacity-70 dark:bg-slate-800 shadow-xl p-6 md:p-12 xl:p-14 rounded-2xl">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-12">
                            <h2 className="text-indigo-900 dark:text-white text-3xl font-bold mb-4">
                                Welcome to My Website!
                            </h2>
                            <p className="mb-4 md:text-end">
                                <span className="opacity-50 mr-2">Don't have an account?</span>
                                <a
                                    href="signUp    "
                                    className="btn btn-link p-0 text-dark text-decoration-none"
                                >
                                    Create Account
                                </a>
                            </p>
                        </div>
                        <Login />
                    </div>
                </div>
            </div>
        </section>
    );
};


