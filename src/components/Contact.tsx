import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Typography, Container, Grid, Box } from '@mui/material';
import styled from 'styled-components';


interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('Form Data Submitted:', formData);
    alert('Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <StyledContainer maxWidth="lg" className='animate__animated animate__backInUp'>
      <StyledFormBox>
        <Typography variant="h4" gutterBottom sx={{ color: '#000' }}>
          Contáctenos
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#000' }}>
          Si tiene alguna pregunta o desea hacer una reserva, por favor complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nombre"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Correo Electrónico"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mensaje"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      </StyledFormBox>
    </StyledContainer>
  );
};

export default ContactUs;

const StyledContainer = styled(Container)`
  display: flex;
  margin-top: 45px;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
  height: 80vh; 

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const StyledFormBox = styled(Box)`
  flex: 1;
  max-width: 400px; 
  margin-right: auto; 
  margin-top: 16px; 

  @media (max-width: 960px) {
    margin-right: 0;
    margin-top: 0;
  }
`;