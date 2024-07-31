import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';

export const NavBar = () => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: '100%',
                height: '65px',
                paddingRight: '35px',
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }}
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={{
                        mr: 2,
                        display: 'none', // Ocultar siempre el icono de menú
                    }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{
                            color: 'black',
                            display: { xs: 'none', sm: 'block' } // Ocultar en pantallas pequeñas
                        }}
                    >
                        <b>The Gourmet Spot</b>
                    </Typography>
                    <Grid item
                        sx={{
                            color: 'black',
                        }}
                    >
                        <Button color="inherit"><b>Welcome</b></Button>
                        <Button color="inherit"><b>Catálogo</b></Button>
                        <Button color="inherit"><b>Contácto</b></Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
