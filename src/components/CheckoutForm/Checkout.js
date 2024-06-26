import { Paper, Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import useStyles from './styles';
import { useState } from 'react';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

const Checkout = () => {
    const classes = useStyles();
    const [activeStep, setActivestep] = useState(0);
    const steps = ['shipping address', 'Payment details'];

    const nextStep = () => setActivestep((prevActivestep) => prevActivestep + 1);
    const backStep = () => setActivestep((prevActivestep) => prevActivestep - 1);

    const Form = () => activeStep === 0 ? <AddressForm /> : <PaymentForm />

    return (
        <main className={classes.laout}>
            <Paper className={classes.paper}>
                <Typography component='h1' variant='h4' align='center'>
                Compra más rápido y fácil
                </Typography>
                <Stepper activeStep={0} className={classes.stepper}>
                    {steps.map(step => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Form />
            </Paper>
        </main>
    )
}

export default Checkout