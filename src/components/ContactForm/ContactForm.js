import React from "react";
import '../../styles/ContactForm.css'


const ContactForm = () => {
    return (
        <div className="contact">
            <form
                name="contact"
                method="post"
                className="contact_form"
                data-netlify="true"
                onSubmit="submit"
                >


<input type="hidden" name="form-name" value="contact" />
                <label>Nom:  </label>
                <input type="text" name="name" />

                <label>Email: </label>
                <input type="email" name="email" />

                <label>Message: </label>
                <textarea name="message"></textarea>

                <button type="submit">Envoyer</button>

            </form>
        </div>
    )
}

export default ContactForm