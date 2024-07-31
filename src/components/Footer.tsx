import { Box, Container, Typography } from '@mui/material';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: .1  , 
                px: 2,
                mt: 'auto',
                backgroundColor: 'transparent',
                borderTop: '1px solid #e0e0e0',
                bottom: 0,
                width: '100%'
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="h6" color="black" align="center" gutterBottom>
                    The Gourmet Spot
                </Typography>
                <Typography variant="body2" color="black" align="center">
                    La mejor opción gastronómica, siempre.
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center" mt={1}>
                    {'© '}
                    {new Date().getFullYear()}
                    {' The Gourmet Spot. Todos los derechos reservados.'}
                </Typography>
            </Container>
        </Box>
    );
};
