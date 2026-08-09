import {Box, Paper, Typography} from "@mui/material";
import Navbar from "../components/Navbar.jsx";

function Home() {
    return (
        <>
            <Navbar/>

            <Paper
                elevation={3}
                sx={{
                    backgroundColor: "rgba(31, 99, 135, 0.169)",
                    color: 'white',
                    borderRadius: '16px',
                    padding: '24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                paper test
            </Paper>
        </>
    );
}export default Home
