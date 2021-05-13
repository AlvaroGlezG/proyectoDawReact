import PadLock from 'components/PadLock/padLock';
import OpinionForm from 'components/OpinionForm/OpinionForm';
import { useState } from 'react';

export default function Form () {

    const [formState, setFormState] = useState(true);

    if (formState === false) {
        window.onload = () => {
            document.getElementById("formulario").onclick = () => { return false; }
            document.getElementById("formulario").style.filter = "blur(10px)";
            document.getElementById("titulo").disabled = true;
            document.getElementById("resena").disabled = true;
        }
    }

    return (

        formState ? 
        <OpinionForm /> 
        : 
        <>
            <PadLock />
            <OpinionForm />
        </>
    );
}