import {Avatar, Box, CssBaseline, Grid, Paper, Typography} from "@mui/material";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <Box sx={{display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundImage: `url(/rails1.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'left',
            backgroundAttachment: 'fixed'
        }}><CssBaseline />
            <Navbar/>

            <Box component="main" sx={{flexGrow: 1, p:3}}>
                <Grid container spacing={3}>

                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                backgroundColor: "rgba(31, 99, 135, 0.169)",
                                color: 'white',
                                borderRadius: '16px',
                                padding: '24px',
                            }}>

                            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: {xs: 'center', md: 'flex-start'}, gap: 2
                            }}>
                                <Box sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                                    <Typography variant="h4">
                                         personal space
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        idk how you got here, but thanks for dropping by :D
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4    }>
                        <Paper

                            elevation={3}
                            sx={{
                                backgroundColor: "rgba(31, 99, 135, 0.169)",
                                color: 'white',
                                borderRadius: '16px',
                                padding: '24px',
                            }}>
                            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: {xs: 'center', md: 'center'}, gap: 2
                            }}>
                                <Avatar sx={{width: 150, height: 150}}  alt="stai sa se incarce poza..." src="/profile1.jpg"></Avatar>
                                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                                    <Typography variant="h4">
                                        nenea nenea nenea nenea
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        nenea NENEA
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                backgroundColor: "rgba(31, 99, 135, 0.169)",
                                color: 'white',
                                borderRadius: '16px',
                                padding: '24px',
                            }}>

                            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: {xs: 'center', md: 'flex-start'}, gap: 2
                            }}>
                                <Box sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                                    <Typography variant="h4">
                                         personal space
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        idk how you got here, but thanks for dropping by :D
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper
                            elevation={3}
                            sx={{
                                backgroundColor: "rgba(31, 99, 135, 0.169)",
                                color: 'white',
                                borderRadius: '16px',
                                padding: '24px',
                            }}>

                            <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: {xs: 'center', md: 'flex-start'}, gap: 2
                            }}>
                                <Box sx={{ textAlign: { xs: 'center', md: 'center' } }}>
                                    <Typography variant="h4">
                                         personal space
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        idk how you got here, but thanks for dropping by :D
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </Box>

    );
}export default Home
