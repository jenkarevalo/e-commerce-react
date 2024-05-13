import { Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import AddressInput from './AddressInput';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../stateProvider';
import { actionTypes } from '../../reducer';

const AddressForm = () => {
    const methods = useForm();
    const [{ shippingData }, dispatch]= useStateValue();
    return (
        <>
            <Typography variant='h6' gutterBottom>
                Datos de Envio
            </Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(data => {
                    dispatch({
                        type: actionTypes.SET_SHIPPINGDATA,
                        shippingData: data,
                    });
                })}>
                    <Grid container spacing={3}>
                        <AddressInput required name='firstName' label=' Primer Nombre' />
                        <AddressInput required name='lasttName' label=' Primer Apellido' />
                        <AddressInput required name='address1' label=' Dirección' />
                        <AddressInput required name='email' label=' Correo Electronico' />
                        <AddressInput required name='city' label=' Ciudad' />
                        <AddressInput required name='postCode' label=' Codigo Postal' />
                    </Grid>
                    <div style={{display:'flex', justifyContent:'space-between', marginTop: '2rem'}}>
                        <Button component={Link} to='/checkout-page'>Volver a la pagina anterior</Button>
                        <Button type='submit' variant='contained' color='primary'>Siguiente</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm