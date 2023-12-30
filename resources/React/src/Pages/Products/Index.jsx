import Page from "../../components/Page.jsx";
import Button from "../../ui/Button.jsx";
import {router} from "@inertiajs/react";
import {Cell, Column, Row, Table, TableBody, TableHeader} from 'react-aria-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'

export default function Index({products}) {

    const actionsMarkup = (
        <Button onClick={() => router.visit('/products/create')}>Add Products</Button>
    )

    return (
        <Page actions={actionsMarkup} title='Products'>


            <Table aria-label="Products" className='w-full'>
                <TableHeader className='border-b border-gray-200'>
                    <Column isRowHeader className='text-sm text-gray-500 font-medium text-left'>Name</Column>
                    <Column className='text-sm text-gray-500 font-medium text-left py-2'>Price</Column>
                    <Column className='text-sm text-gray-500 font-medium text-left py-2'>Edit</Column>
                </TableHeader>
                <TableBody>
                    {
                        products.data.map(
                            (product) => (
                                <Row className='border-b border-gray-200' key={product.id}>
                                    <Cell className='py-4'>{product.name}</Cell>
                                    <Cell className='py-4'>
                                        {
                                            new Intl.NumberFormat('es-NI', {
                                                currency: 'NIO',
                                                style: 'currency'
                                            }).format(product.price)
                                        }</Cell>
                                    <Cell className='py-4'>

                                        <button onClick={() => router.visit(`/products/${product.id}/edit`)}>
                                            <FontAwesomeIcon className='text-gray-500 hover:text-gray-800'
                                                             icon={faPenToSquare}/>

                                        </button>

                                    </Cell>
                                </Row>

                            )
                        )
                    }
                </TableBody>
            </Table>
        </Page>
    )
}
