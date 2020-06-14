import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

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
        name: yup.string().required().min(2),
        select: yup.string(). required(),
        cheese: yup.boolean(),
        pepperoni: yup.boolean(),
        sausage: yup.boolean(),
        veggie: yup.boolean()
    })
    const submit = () => {
        schema.validate(formData.then (() =>{
            axios.post('https://reqres.in/api/users', formData).then((res) =>{
                console.log('This is your posted data', res.data)
    return(
        <>
            <Form>
                <FormGroup>
                    <Label htmlFor='name'>Name</Label>
                    <Input type='name' placeholder='enter first name' value={formData.name}></Input>
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
                        <Input  id='cheese' type='checkbox' name='cheese' value={formData.cheese} />
                            Cheese
                </FormGroup>
                <FormGroup check>
                    <Label htmlFor= 'pepperoni' />
                        <Input  id='pepperoni' type='checkbox' name='pepperoni' value={formData.pepperoni}/>
                            Pepperoni
                </FormGroup>
                <FormGroup check>
                    <Label htmlFor= 'sausage' />
                        <Input  id='sausage' type='checkbox' name='sausage' value={formData.sausage} />
                            Sausage
                </FormGroup>
                <FormGroup check>
                    <Label htmlFor= 'veggie' />
                        <Input  id='veggie' type='checkbox' name='veggie' value={formData.veggie} />
                            Veggie Lovers
                </FormGroup>
                <FormGroup>
            <Label htmlFor='special' >Special Instructions:</Label><br/>
            <input id='special' type='textarea' name='special' />
        </FormGroup>
        <Button> </Button>
            </Form>
        </>
    )
}

export default PizzaForm;