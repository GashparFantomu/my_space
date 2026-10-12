import {Avatar, Box, Button, CssBaseline, IconButton, Paper, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const webDescription="web description empty text to fill space more text even more text, long words like: thisisaverylongword," +
    " ieabfibshbhueabiasebf esbf uaeshfubahsfib sekfn jen fjn sekjnfesfsenj kjneskf kjes jkneskfjnesk jfjknesfjknsefkjnse";
const profileDescription="h uihuy yuasgfy asyd gyASGY fgusf hsuf ghug euhgf swfehs fhuwehu fegwyugyfgwegfyw aegyfgyage uyi" +
    "gfawugf awegfwgefagwyf uagwkesr ygeshysezgt ryzwse";
const backgroundThemes ={

}

const socialButtonSx = {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: '12px',
};

const cardSx = {
    backgroundColor: "rgba(31, 99, 135, 0.169)",
    color: 'white',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '24px',
    breakInside: 'avoid',
};

const socials = [
    {label: 'GitHub', icon: <GitHubIcon sx={{fontsize: 26}} />, href: "https://github.com/GashparFantomu"},
    {label: 'Instagram', icon: <InstagramIcon sx={{fontsize: 26}} />, href: "https://github.com/GashparFantomu"},
    {label: 'Youtube', icon: <YouTubeIcon sx={{fontsize: 26}} />, href: "https://github.com/GashparFantomu"},
    {label: 'LinkedIn', icon: <LinkedInIcon sx={{fontsize: 26}} />, href: "https://github.com/GashparFantomu"}];


const wallSx ={
    columnCount: {xs: 1, md: 3},
    columnWidth: '340px',
    columnGap: '24px'
};

function Card({children}) {
    return <Paper elevation={3} sx={cardSx}>{children}</Paper>
}

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

            <Box component="main" sx={{flexGrow: 1, px: 3, pt: 3}}>
                <Box sx={wallSx}>
                    <Card>
                        <Box sx={{textAlign: 'center'}}>
                            <Typography variant="h4">personal space 1 nenea nenea</Typography>
                            <Typography variant="subtitle1">
                                idk how you got here, but thanks for dropping by
                            </Typography>
                        </Box>
                    </Card>
                    <Card>
                        <Box sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, alignItems: {xs: 'center', md: 'flex-start'}, gap: 3}}>
                            <Avatar src="/profile1.jpg" alt="stai sa se incarce poza..." sx={{width: 164, height: 164}}/>
                            <Box sx={{flexGrow: 1, minWidth: 0, textAlign: 'center'}}>
                                <Typography variant="h4">Gashpar Fantomu'</Typography>
                                <Typography variant="subtitle1">{profileDescription}</Typography>
                            </Box>
                        </Box>
                    </Card>
                    <Card>
                        <Typography variant="h4" sx={{textAlign: 'center', mb: 2}}>
                            Hall of fame for my projects
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                            <Button variant="outlined" sx={{borderRadius: 3}}>Windows</Button>
                            <Button variant="outlined" sx={{borderRadius: 3}}>The linux kernel</Button>
                            <Button variant="outlined" sx={{borderRadius: 3}}>Every linux distro</Button>
                        </Box>
                    </Card>
                    <Card>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'center'}}>
                            <Typography variant='h4'>My Socials</Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                                {socials.map(({label, icon, href}) => (
                                        <IconButton key={label} component="a" href={href} aria-label={label} sx={socialButtonSx}>{icon}</IconButton>))}
                            </Box>
                        </Box>
                    </Card>
                    <Card>
                        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center ',textAlign:'center', gap: 4}}>
                            <Box component="img" src="/pet-tux1.gif" sx={{width: 164, height: 164}}/>
                            <Box>
                                <Typography variant="h4">About this website</Typography>
                                <Typography variant="subtitle1">{webDescription}</Typography>
                            </Box>
                        </Box>
                    </Card>
                    <Card>
                        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'center', textAlign:'flex-start', gap: 4}}>
                            <Box component="img" src="/tey.gif" sx={{width: 164, height: 164}}/>
                            <Box>
                                <Typography variant="h4">To do</Typography>
                                <Typography variant="subtitle1">-dynamic theme based on time of day and season</Typography>
                                <Typography variant="subtitle1">-task 2</Typography>
                                <Typography variant="subtitle1">-task 3</Typography>
                            </Box>
                        </Box>
                    </Card>
                    <Card>
                        <Typography variant="h4" sx={{textAlign: 'center', mb: 2}}>
                            Featured video
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 3}}>

                            <Box sx={{
                                flex: 1,
                                minWidth: 0,
                                position: 'relative',
                                aspectRatio: '16 / 9',
                                borderRadius: 2,
                                overflow: 'hidden'}}>
                                <Box component="iframe"
                                     src="https://www.youtube-nocookie.com/embed/q-43l_paCtw"
                                     title="Description of the video"
                                     loading="lazy"
                                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                     allowFullScreen
                                     sx={{position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0}}/>
                            </Box>
                            <Box component="img" src="/ltt-linus.gif" alt="short description"
                                 sx={{display: {xs: 'none', md: 'block'}, width: 120, height: 120, flexShrink: 0}}/>
                        </Box>
                    </Card>
                </Box>
            </Box>

            <Footer/>
        </Box>
    );
}export default Home
