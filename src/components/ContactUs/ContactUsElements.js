import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
min-height: 692px;
position: relative;
bottom: 0;
left: 0;
right: 0;
z-index: 0;
overflow: hidden;
background: #000;

`

export const FormWrap = styled.div`
height: 100%;
padding: 200px;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 700px){
    height: 80%;
    padding: 80px;
    margin-top: 50px;
};
`

export const Icon = styled(Link)`
margin-left: 32px;
margin-top: 32px;
text-decoration: none;
color: #fff;
font-weight: 700;
font-size: 32px;

@media screen and (max-width: 480px){
    margin-left: 16px;
    margin-top: 8px;
};
`

export const FormContent = styled.div`

height: 100%;
display: flex;
flex-direction: column;
justify-content: center;

@media screen and (max-width: 480px) {
    padding: 10px;
};
`

export const Form = styled.form`
background: #101522;
max-width: 400px;
height: auto;
width: 100%;
z-index: 1;
display: grid;
margin: 0 auto;
padding: 80px 32px;
border-radius: 4px;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width: 700px){
    padding: 16px 16px;
    align-items: center;
};
`

export const Formh1= styled.h1`
margin-bottom: 40px;
color: #FFF;
font-size: 20px;
font-weight: 400;
text-align: center;
`

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`

export const FormInput = styled.input`
padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px;

@media screen and (max-width: 700px){
    width: 100%;
    padding: 8px 8px;
 };
`

export const FormButton = styled.button`
background: #01bf71;
padding: 16px 0;
border: none;
border-radius: 4px;
color: #fff;
font-size: 20px;
cursor: pointer;
`

export const Text = styled.span`
text-align: center;
margin-top: 24px;
color: #fff;
font-size: 14px;
`