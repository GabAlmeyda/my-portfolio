import styles from './Contact.module.css'

import { useState } from 'react'

import Navbar from '../layouts/Navbar'

import Input from '../form/Input'
import Select from '../form/Select'
import Textarea from '../form/Textarea'
import SubmitButton from '../form/SubmitButton'
import Form from '../form/Form'

function Contact() {
    const [userData, setUserData] = useState({
        userName: "",
        userEmail: "",
        category: "",
        desc: ""
    });

    const projectTypes = ["Landing Page", "E-commerce", "Single Page Application (SPA)", "Dashboards", "Blogs"];

    function onInputChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    function onSelectChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.options[e.target.selectedIndex].text
        })
    }

    function onSubmitClick(e) {
        e.preventDefault();
    }

    return (<div className={styles.contact}>
        <div className={styles.top}>
            <h1>Faça a solicitação do seu projeto</h1>
            <p>Preencha os campos abaixo e envie sua ideia para eu ajudar:</p>
        </div>

        <Form handleSubmit={onSubmitClick}>
            <Input
                type="text"
                label="Digite seu nome:"
                placeholder="Insira seu nome"
                value={userData.userName}
                autoComplete='name'
                name="userName"
                handleChange={onInputChange}
            />

            <Input
                type="email"
                label="Digite seu email:"
                placeholder="Insira seu email"
                value={userData.userEmail}
                autoComplete='email'
                name="userEmail"
                handleChange={onInputChange}
            />
    
            <Select
                label="Escolha a categoria do projeto:"
                options={[...projectTypes, "Outra (especifique na descrição)"]}
                value={userData.category}
                name="category"
                handleChange={onSelectChange}
            />
    
            <Textarea
                placeholder="Descreva seu projeto"
                label="Digite sua mensagem"
                value={userData.desc}
                name="desc"
                handleChange={onInputChange}
            />
    
            <SubmitButton
                text='Enviar'
                type='submit'
            />
        </Form>
        
    </div>)
}

export default Contact