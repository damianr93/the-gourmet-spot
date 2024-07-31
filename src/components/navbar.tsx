import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

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
                        display: 'none',
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
                            display: { xs: 'none', sm: 'block' } 
                        }}
                    >
                        <b>The Gourmet Spot</b>
                    </Typography>
                    <Grid item
                        sx={{
                            color: 'black',
                            display: 'flex',
                            gap: '20px' 
                        }}
                    >
                        <NavLink
                            style={{ color: 'inherit', textDecoration: 'none' }}
                            to="/"
                        ><b>Welcome</b>
                        </NavLink>
                        <NavLink
                            style={{ color: 'inherit', textDecoration: 'none' }}
                            to="/products"
                        ><b>Products</b>
                        </NavLink>
                        <NavLink
                            style={{ color: 'inherit', textDecoration: 'none' }}
                            to="/contactus"
                        ><b>Contact Us</b>
                        </NavLink>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}
