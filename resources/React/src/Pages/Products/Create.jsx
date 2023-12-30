import TextField from "../../ui/TextField.jsx";
import Button from "../../ui/Button.jsx";
import {router} from "@inertiajs/react";
import Page from "../../components/Page.jsx";

export default function Create({errors}) {

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        router.post('/products', formData);
    }

    return (
        <Page title='Create Product'>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <TextField errorMessage={errors.name} label='Name' name='name'></TextField>
                <TextField errorMessage={errors.price} label='Price' type="number" name='price'
                           step={0.1}></TextField>
                <TextField errorMessage={errors.description} label='description' name='description'></TextField>
                <Button className='border' type='submit'>Submit</Button>
            </form>
        </Page>
    )
}
