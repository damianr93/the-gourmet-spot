import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';


export const NavBar = () => {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: '100%' },
                height: `65px`,
                paddingRight:"35px"
            }}
        >
            <Toolbar>

                <IconButton
                    color='inherit'
                    edge="start"

                    sx={{ mr: 2, display: { sm: 'none' } }}
                >

                    <MenuOutlined />

                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>

                    <Typography variant='h6' noWrap component='div'> The Gourmet Spot </Typography>
                    <Grid item>

                        <Button color="inherit">Welcome</Button>
                        <Button color="inherit">Catálogo</Button>
                        <Button color="inherit">Contácto</Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}