import React from "react";
import emailjs from 'emailjs-com'

import '../../styles/ContactForm.css'


const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_rmm0pku',e.target,"T2-NhhYVYusOUqj7d").then(res=>{
            console.log(res);
        }).catch(err=> console.log(err))
        window.alert("Votre email à bien était envoyé !")
        window.location.reload(true);
    }
    return (
        <div className="contact">
            <form
                name="contact"
                method="post"
                className="contact_form"
                data-netlify="true"
                // onSubmit="submit"
                onSubmit={sendEmail}
                >
                {/* <form onSubmit={sendEmail}> */}


<input type="hidden" name="form-name" value="contact" />
                <label>Nom:  </label>
                <input type="text" name="name" />

                <label>Email: </label>
                <input type="email" name="user_email" />

                <label>Message: </label>
                <textarea name="message" rows='4'/>
                <input className="btn_send" type='submit' value='send'></input>
                {/* <button type="submit">Envoyer</button> */}

            </form>
        </div>
    )
};

export default ContactForm