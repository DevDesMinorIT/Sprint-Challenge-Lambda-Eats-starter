import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import * as yup from 'yup';
const PizzaForm = (props) => {
    const [formData, setFormData] = useState( {
        name: '',
        select: 'medium',
        cheese: true,
        pepperoni: false,
        sausage: false,
        veggie: false,
        special: ''
    })
    const schema=yup.object().shape({
        name: yup.string().required(),
        select: yup.string().required(),
        cheese: yup.boolean(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        veggie: yup.boolean()
    })
    const submit = () => {
        schema.validate(formData.then (() =>{
            axios.post('https://reqres.in/api/users', formData).then((res) =>{
                console.log('This is your posted data', res.data)
            })
        }))
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleToppings = (e) => {
        setFormData({...formData, [e.target.name]: e.target.checked})
    }
    return(
        <>
            <Form onSubmit = {(e) => {
                e.preventDefault()
                submit();
                console.log()
            }}style={{margin: '5%'}}>
               <FormGroup>
                    <Label htmlFor='name'>Name</Label>
                    <Input type='text' name='name' data-cy='name' id='name' defaultValue={formData.name}  />
                </FormGroup> 
                <FormGroup>
                    <Label htmlFor='pizzaSize'>Choose Size: </Label>
                    <Input type='select' name='select' >
                        <option>kids</option>
                        <option>small</option>
                        <option>medium</option>
                        <option>large</option>
                    </Input>
                </FormGroup>
                <FormGroup check>
                    <Label htmlFor= 'cheese' />
                        <Input  id='cheese' type='checkbox' name='cheese'  data-cy='checkbox1' value={formData.cheese} onChange={handleChange} />
                            Cheese
                </FormGroup>
                <FormGroup check>
                    <Label htmlFor= 'pepperoni' />
                        <Input  id='pepperoni' type='checkbox' name='pepperoni'  data-cy='checkbox' value={formData.pepperoni} onChange={handleChange}/>
                            Pepperoni
                </FormGroup>
                <FormGroup check>
                    <Label htmlFor= 'sausage' />
                        <Input  id='sausage' type='checkbox' name='sausage'  data-cy='checkbox' value={formData.sausage} onChange={handleChange} />
                            Sausage
                </FormGroup>
                <FormGroup check>
                    <Label htmlFor= 'veggie' />
                        <Input  id='veggie' type='checkbox' name='veggie'  data-cy='checkbox' value={formData.veggie} onChange={handleChange}/>
                            Veggie Lovers
                </FormGroup>
                <FormGroup>
            <Label htmlFor='special' >Special Instructions:</Label>
            <input id='special' type='textarea' name='special' />
        </FormGroup>
        <Button> </Button>
            </Form>
        </>
    )
}

export default PizzaForm;