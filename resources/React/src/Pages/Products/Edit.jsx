import TextField from "../../ui/TextField.jsx";
import Button from "../../ui/Button.jsx";
import {router} from "@inertiajs/react";
import Page from "../../components/Page.jsx";

export default function Edit({errors, product}) {

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        formData.append('_method', 'PATCH')

        router.post(`/products/${product.id}`, formData);
    }

    return (
        <Page title={`Edit ${product.name}`}>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <TextField errorMessage={errors.name} label='Name' name='name' defaultValue={product.name}></TextField>
                <TextField errorMessage={errors.price} label='Price' type="number" name='price'
                           step={0.1} defaultValue={product.price}></TextField>
                <TextField errorMessage={errors.description} label='description' name='description'
                           defaultValue={product.description}></TextField>
                <Button className='border' type='submit'>Submit</Button>
            </form>
        </Page>
    )
}
