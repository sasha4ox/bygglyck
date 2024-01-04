
import Header from "@/components/Header";
import styles from "@/styles/Discount.module.css";
import Footer from "@/components/Footer";
import sendEmail from "@/components/sendEmail";
import { useState } from "react";

export default function Discount() {
    const initialValues = {
        address: '',
        firstAndLastname: '',
        municipality: '',
        region: '',
        state: '',
        zip: '',
    };

    const [form, setForm] = useState(initialValues);
    const [formSent, setFormSent] = useState(false);
    const [isEmtyForm, setIsEmtyForm] = useState(false);

    const buttonMessage = isEmtyForm ? 'alla fält är obligatoriska' : 
        formSent ? 'du har skickat' : 'Skicka';

    const changeHandler = e => {
        setForm({...form, [e.target.name]: e.target.value});
        const isEmpty = Object.values(form).some(x => x === null || x === '');
        isEmpty ?  setIsEmtyForm(true) :  setIsEmtyForm(false);
     }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const sendingEmailHndler = async () => {
      const isEmpty = Object.values(form).some(x => x === null || x === '');
      if (isEmpty) {
        setIsEmtyForm(true);
        return;
      }
      sendEmail(form);
      setFormSent(true);
      setForm(initialValues);
    }

    return (
        <>
            <Header />
            <section className={styles.root}>
                <h1 className={styles.heading}>rabattkort för bygg- och renoveringstjänster för år 2024</h1>

                <section className={styles.description}>Denna kort ger exklusiva rabatter på olika tjänster inom byggande och renovering för år 2024.
                 Antalet kort är begränsat, så passa på att utnyttja detta unika erbjudande för att ge nytt liv åt ditt hem eller arbetsplats.</section>
                <section className={styles.rootForm}>
                    <form className={styles.form} onSubmit={submitHandler}>
                        <h1>Kontaktuppgifter</h1>
                        <label>
                            Land
                            <input
                                value={form.state}
                                placeholder='Ange ditt svar.'
                                name="state"
                                type="text"
                                onChange={changeHandler} />
                        </label>
                        <label>
                            Ort
                            <input
                                value={form.municipality}
                                placeholder='Ange ditt svar.'
                                name="municipality"
                                type="text"
                                onChange={changeHandler} />
                        </label>
                        <label>
                            Region
                            <input
                                value={form.region}
                                placeholder='Ange ditt svar.'
                                name="region"
                                type="text"
                                onChange={changeHandler} />
                        </label>
                        <label>
                            Gatuadress
                            <input
                                value={form.address}
                                placeholder='Ange ditt svar.'
                                name="address"
                                type="text"
                                onChange={changeHandler} />
                        </label>
                        <label>
                            Postnummer
                            <input
                                value={form.zip}
                                placeholder='Ange ditt svar.'
                                name="zip"
                                type="text"
                                onChange={changeHandler} />
                        </label>
                        <label>
                            För-och efternamn
                            <input
                                value={form.firstAndLastname}
                                placeholder='Ange ditt svar.'
                                name="firstAndLastname"
                                type="text"
                                onChange={changeHandler} />
                        </label>
                    </form>
                    <button 
                        className={styles.button}
                        onClick={sendingEmailHndler}
                        > {buttonMessage} </button>
                </section>
            </section>
            
            
            <Footer/>
        </>

    )
}
