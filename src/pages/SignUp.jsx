import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";


import React from 'react'

function SignUp() {
    const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<form
			noValidate
			validated={validated}
			onSubmit={handleSubmit}
			className="w-full mt-6"
		>
			{/* <div className="flex justify-center mb-4">
				<input
					type="text"
					className="border-b border-black focus:outline-none focus:border-blue-600 py-2 text-sm w-1/2 mr-2"
					id="fname"
					placeholder="First Name"
				/>
				<input
					type="text"
					className="border-b border-black focus:outline-none focus:border-blue-600 py-2 text-sm w-1/2 ml-2"
					id="lname"
					placeholder="Last Name"
				/>
			</div> */}
			<div className="w-full relative mb-4">
				<input
					type="text"
					className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
					id="uname"
					placeholder="Full Name	"
				/>
				<FontAwesomeIcon
					icon={faUser}
					className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80"
				/>
			</div>
			<div className="w-full relative mb-4">
				<input
					type="email"
					className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
					id="email"
					placeholder="Email Address"
				/>
				<FontAwesomeIcon
					icon={faEnvelope}
					className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80"
				/>
			</div>
			<div className="w-full relative mb-4">
				<input
					type="password"
					className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
					id="pass"
					placeholder="Password"
				/>
				<FontAwesomeIcon
					icon={faLock}
					className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80"
				/>
			</div>
			<div className="w-full relative mb-4">
				<input
					type="password"
					className="border-b border-black focus:outline-none focus:border-blue-600 text-sm w-full py-2"
					id="con-pass"
					placeholder="Confirm Password"
				/>
				<FontAwesomeIcon
					icon={faLock}
					className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80"
				/>
			</div>

			<button
				type="submit"
				className="bg-gray-700 py-4 px-10 text-white hover:bg-opacity-95 mt-4"
			>
				Register <FontAwesomeIcon icon={faArrowRight} />
			</button>

			<div className="text-center mt-4">
				<p className="mb-0 text-sm">
					Already have an account?
					<a href="login" className="hover:text-blue-600  font-bold px-1 text-base">
						Log In
					</a>
				</p>
			</div>
		</form>
	);
} 

export function SignUp14_39Oiq1mg(){
	return (
		<section
			className="ezy__signup14_39Oiq1mg flex items-center justify-center py-14 md:py-24 text-black bg-cover bg-right bg-no-repeat relative overflow-hidden"
			style={{
				backgroundImage:
					"url(https://cdn.easyfrontend.com/pictures/background/background4.jpg)",
			}}
		>
			<div className="container px-4 mx-auto">
				<div className="flex justify-center">
					<div className="w-full md:w-2/3">
						<div className="bg-white shadow-xl p-4">
							<div className="flex flex-wrap items-center">
								<div className="w-full lg:w-1/2">
									<div className="flex items-center justify-center h-full">
										<img
											src="https://cdn.easyfrontend.com/pictures/background/abstract-background3.jpg"
											alt=""
											className="max-h-[300px] w-full lg:max-h-full lg:h-full object-cover"
										/>
									</div>
								</div>
								<div className="w-full lg:w-1/2 mt-6 lg:mt-0 lg:pl-6">
									<div className="flex flex-col justify-center items-center text-center h-full p-2">
										<h2 className="text-[26px] leading-none font-bold mb-2">
											REGISTRATION FORM
										</h2>

										<SignUp />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
