import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { FormContainer, PaymentFormcontainer } from './payment-form.styles'



import React from 'react'
import { Button } from './../button/button.component';
import { useSelector } from 'react-redux';
import { selectCartTotal } from './../../store/cart/cart.selector';
import { selectCurrentUser } from './../../store/user/user.selector';

const Paymentform = () => {
    const stripe = useStripe()
    const elements = useElements()
    const totalAmount = useSelector(selectCartTotal)

    const userName = useSelector(selectCurrentUser)
    const [isLoading, setIsLoading] = useState(false)



    const paymentHandler = async (event) => {
        event.preventDefault()
        setIsLoading(true)
        if (!stripe || !elements) {
            return;
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {

            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: totalAmount })

        }).then(res => res.json())

        const { paymentIntent: { client_secret } } = response

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: userName ? userName?.displayName : 'Guest'
                }
            }
        })
        if (paymentResult.error) {
            setIsLoading(false)
            alert(paymentResult.error.message)
        } else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                setIsLoading(false)
                alert('payment successful')
            }
        }



    }




    return (
        <PaymentFormcontainer>

            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment</h2>
                <CardElement />
                <Button isLoading={isLoading} onClick={paymentHandler} buttonType='inverted'>pay now</Button>

            </FormContainer>

        </PaymentFormcontainer>
    )
}

export default Paymentform