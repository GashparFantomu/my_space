import {Box, Paper, Typography} from "@mui/material";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <Navbar/>
            <Box component="main" sx={{flexGrow: 1, p:3}}>
                <Paper
                    elevation={3}
                    sx={{
                        backgroundColor: "rgba(31, 99, 135, 0.169)",
                        color: 'white',
                        borderRadius: '16px',
                        padding: '24px',
                    }}>

                        paper test
                    </Paper>
                </Box>
            <Footer/>
        </Box>

    );
}export default Home
