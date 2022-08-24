import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Container, Form, FormButton, FormContent, Formh1, FormInput, FormLabel, FormWrap, Icon } from './ContactUsElements'

const ContactUs = () => {
  return ( 
    <>
    <Navbar/>
    <Container id="contactus">
        <FormWrap>  
            <FormContent>
                <Form action="mailto:grewalk55@gmail.com">
                    <Formh1>We'd Love to hear from you!</Formh1>
                    <FormLabel htmlFor='for'>Full Name</FormLabel>
                    <FormInput type='text' required/>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='for'>Message</FormLabel>
                    <FormInput type='text' required/>
                    <FormButton type='submit'>Submit</FormButton>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    <Footer />
    </>
  )
}

export default ContactUs