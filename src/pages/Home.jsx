import {Avatar, Box, Button, CssBaseline, Grid, IconButton, Paper, Stack, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const webDesc="short text for flexgrow"

const cardSx = {
    backgroundColor: "rgba(31, 99, 135, 0.169)",
    color: 'white',
    borderRadius: '16px',
    padding: '24px',
};

const columnSx = {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    flexGrow: 1,
    width: '100%',
};
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
                    {/*c1*/}
                    <Grid item xs={12} md={12} sx={{display: 'flex'}}>
                        <Box sx={columnSx}>
                            <Paper elevation={3} sx={cardSx}>
                                <Box sx={{ flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', gap: 2}}>
                                    <Box sx={{ textAlign: 'center', justifyContent: 'center' }}>
                                        <Typography variant="h4">
                                            personal space 1 nenea nenea
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            idk how you got here, but thanks for dropping by :D
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                            <Paper
                                elevation={3}
                                sx={cardSx}>
                                <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', gap: 2
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

                            <Paper elevation={3} sx={cardSx}>
                                <Box sx={{textAlign: 'center'}}>
                                    <Typography variant="h4">Hall of fame for my projects</Typography>
                                </Box>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                    <Button variant="outlined" sx={{borderRadius: '16px'}}>
                                        <Typography variant="subtitle1">
                                            nothing 1
                                        </Typography>
                                    </Button>
                                    <Button variant="outlined">
                                        <Typography variant="subtitle1">
                                            nothing 2
                                        </Typography>
                                    </Button>
                                    <Button variant="outlined">
                                        <Typography variant="subtitle1">
                                            project 3 - some hullshi-
                                        </Typography>
                                    </Button>
                                </Box>
                            </Paper>
                            <Paper elevation={3} sx={cardSx}>
                                <Box sx={{textAlign: 'center'}}>
                                    <Typography variant="h4">
                                        My Socials
                                    </Typography>
                                    <Stack direction="row" spacing={3} sx={{alignItems: 'center', justifyContent: 'center'}}>
                                        <IconButton component="a"
                                                    href="https://github.com/GashparFantomu"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '12px'}}>
                                            <GitHubIcon sx={{fontSize: 26}} />
                                        </IconButton>
                                        <IconButton component="a"
                                                    href="https://github.com/GashparFantomu"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '12px'}}>
                                            <InstagramIcon sx={{fontSize: 26}} />
                                        </IconButton>
                                        <IconButton component="a"
                                                    href="https://github.com/GashparFantomu"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '12px'}}>
                                            <LinkedInIcon sx={{fontSize: 26}} />
                                        </IconButton>
                                        <IconButton component="a"
                                                    href="https://github.com/GashparFantomu"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    sx={{color: 'white', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '12px'}}>
                                            <YouTubeIcon sx={{fontSize: 26}} />
                                        </IconButton>
                                    </Stack>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    {/*c2*/}
                    <Grid item xs={12} md={12}>
                        <Box sx={columnSx}>
                            <Paper elevation={3} sx={{...cardSx, flexGrow: 1}}>
                                <Box sx={{textAlign: 'center'}}>
                                    <Typography variant="h4">About this website</Typography>
                                    <Typography variant="subtitle1">{webDesc}</Typography>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                    {/*c3*/}
                    <Grid item xs={12} md={12}>
                        <Box sx={columnSx}>
                            <Paper elevation={3} sx={{...cardSx, flexGrow: 1}}>
                                <Box sx={{textAlign: 'center'}}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant="h4">
                                            personal space 2
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            idk how you got here, but thanks for dropping by :D
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </Box>

    );
}export default Home
