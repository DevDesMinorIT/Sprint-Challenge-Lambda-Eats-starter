import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const PizzaForm = (props) => {
    return(
        <>
            <Form>
                <FormGroup>
                    <Label htmlFor='name'>Name</Label>
                    <Input type='name' placeholder='enter first name'></Input>
                </FormGroup>

            </Form>
        </>
    )
}

export default PizzaForm;