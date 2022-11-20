import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import emailjs from 'emailjs-com';

import '../../styles/ContactForm.css'

const ContactFormTest = () => {
	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required("ce champ est obligatoire")
			.min(5, "trop petit!")
			.max(50, "trop long!"),
		email: Yup.string()
			.email("email invalide")
			.required("l'email est obligatoire"),
	});

	const { register, handleSubmit, formState, reset } = useForm({
		mode: "onBlur",
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
			acceptTerms: false,
		},
		resolver: yupResolver(validationSchema),
	});

	const { errors } = formState;

	const onSubmit = (data) => {
		console.log(data);
		reset()
	};

	function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_rmm0pku',e.target,"T2-NhhYVYusOUqj7d").then(res=>{
            console.log(res);
        }).catch(err=> console.log(err))
        window.alert("Votre email à bien était envoyé !")
        window.location.reload(true);
    };

	return (
		<div className="contact">
					<form onSubmit={handleSubmit(onSubmit) && sendEmail} className="contact_form">
						<h1 className="contact_title">Contact</h1>
						<div className="contact_card">

							<label htmlFor="name">
								Nom Complet:
							</label>
							<input
								type="text"
								className="form-control"
								{...register("name")}
								name="name"
								id="name"
							/>
							<small className="text-danger">
								{errors.name?.message}
							</small>
						</div>

						<div className="contact_card">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								className="form-control"
								name="user_email"
								{...register("user_email")}
							/>
							<small className="text-danger">
								{errors.email?.message}
							</small>
						</div>

						<div className="contact_card">
							<label htmlFor="message">Message:</label>
							<textarea
								name="message"
								rows='4'
								className="form-control"
								{...register("message")}
							/>
							<small className="text-danger">
								{errors.email?.message}
							</small>
						</div>
							<button
								type="submit"
								className="btn_send"
							>
								Envoie
								
							</button>
					</form>
				</div>
	);
};

export default ContactFormTest;
