import styles from "./Contact.module.css";

import { useState } from "react";

import Section from "../layouts/Section";

import Input from "../form/Input";
import Select from "../form/Select";
import Textarea from "../form/Textarea";
import SubmitButton from "../form/SubmitButton";
import Form from "../form/Form";
import SuccessfulForm from "../form/SuccessfulForm";

/**
 * Renders the 'Contact' page component for submitting project requests.
 * 
 * This component allows the user to fill the fields to specify the project request details,
 * with input field for name, email, category and description.
 * Upon successful submission, a success message is displayed using the 'SuccessfulForm' component.
 * 
 * Main features:
 * - handles all the input values changes using a state object 'userData';
 * - Sends the 'userData' object to a backend endpoint 'localhost:5000/userDatas' via a 'POST' request.
 * - Shows a component when the submission is successfully using the 'Successfully' component.
 *
 * @returns {JSX.Element} A form for users to submit project requests or a success message after the submission.
 */
function Contact() {
    // The object that contains the values provided in the form.
    const [userData, setUserData] = useState({
        userName: "",
        userEmail: "",
        category: "",
        desc: "",
    });
    // A state that controls the visibility of the 'SuccessfulForm' component, 
    // showed when the submission logic of the form is successfully. 
    const [successfulForm, setSuccessfulForm] = useState(false);

    const projectTypes = [
        "Landing Page",
        "E-commerce",
        "Single Page Application (SPA)",
        "Dashboards",
        "Blogs",
    ];

    function onInputChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    }

    function onSelectChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.options[e.target.selectedIndex].text,
        });
    }

    async function onSubmitClick(e) {
        e.preventDefault();

        try {
            const resp = await fetch("http://localhost:5000/userDatas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!resp.ok) {
                throw new Error(`HTTP error! Status: ${resp.status}`);
            }

            const data = await resp.json();
            console.log(data);
        } catch (err) {
            console.error("An error occurred: ", err);
            return false;
        }

        setUserData({
            userName: "",
            userEmail: "",
            category: "",
            desc: "",
        });
        setSuccessfulForm(true);
    }

    return (<main>
            {successfulForm ? (
                <SuccessfulForm />
            ) : (
                <div className={styles.contact}>
                    <div className={styles.top}>
                        <h1>Faça a solicitação do seu projeto</h1>
                        <p>
                            Preencha os campos abaixo e envie sua ideia para eu
                            ajudar:
                        </p>
                    </div>

                    <Section>
                        <Form handleSubmit={onSubmitClick}>
                            <Input
                                type="text"
                                label="Digite seu nome:"
                                placeholder="Insira seu nome"
                                value={userData.userName}
                                autoComplete="name"
                                name="userName"
                                handleChange={onInputChange}
                            />
    
                            <Input
                                type="email"
                                label="Digite seu email:"
                                placeholder="Insira seu email"
                                value={userData.userEmail}
                                autoComplete="email"
                                name="userEmail"
                                handleChange={onInputChange}
                            />
    
                            <Select
                                label="Escolha a categoria do projeto:"
                                options={[
                                    ...projectTypes,
                                    "Outra (especifique na descrição)",
                                ]}
                                value={userData.category}
                                name="category"
                                handleChange={onSelectChange}
                            />
    
                            <Textarea
                                placeholder="Descreva seu projeto"
                                label="Deixe sua mensagem:"
                                value={userData.desc}
                                name="desc"
                                handleChange={onInputChange}
                            />
    
                            <SubmitButton text="Enviar" type="submit" />
                        </Form>
                    </Section>
                </div>
            )}
        </main>);
}

export default Contact;
