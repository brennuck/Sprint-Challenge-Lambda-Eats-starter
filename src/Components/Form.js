import React, { useState } from 'react';
import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field.").min(2)
});

const Form = () => {

    const [formState, setFormState] = useState({
        name: "",
        pizzaSize: "",
        toppings: "",
        specInst: ""
    })

    const addNewPizza = pizza => {
        const newPizza = {
            name: pizza.name,
            pizzaSize: pizza.pizzaSize,
            toppings: pizza.toppings,
            specInst: pizza.specInst
        };
        setFormState([...formState, newPizza])
    }

    const handleChanges = e => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    const submitForm = e => {
        e.preventDefault();
        addNewPizza(formState);
        setFormState({ name: "", pizzaSize: "", toppings: "", specInst: "" })
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">
                    Name
                    <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChanges}
                    />
                </label>
                <label htmlFor="pizzaSize">
                    Choice of Size
                    <select id="pizzaSize" name="pizzaSize" onChange={handleChanges}>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </label>
                <label htmlFor="toppings">
                    <input
                        type="checkbox"
                        name="toppings"
                        checked={formState.toppings}
                        onChange={handleChanges}
                    />
                    Toppings
                </label>
                <label htmlFor="specInst">
                    Special Instruction
                    <textarea
                        name="specInst"
                        value={formState.specInst}
                        onChange={handleChanges}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;