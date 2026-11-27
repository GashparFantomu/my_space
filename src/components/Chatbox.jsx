import {Box} from "@mui/material";
import { glassInputSx} from "../theme/Styles";
import {useState, useEffect} from "react";
import {Button, Divider, TextField, Typography} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';


const API_URL = "http://localhost:5000/api/posts";

function Chatbox(){
    const [post, setPost] = useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState("");

    const fetchPost = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setPost(data);
        } catch (error) {
            setError("Error fetching posts, uite aci eroarea (oricum nu cred ca te ajuta): " + error);
        }
    };
    useEffect(() => {
        fetchPost();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(""); //reseteaza eroarea la fiecare submit an plm
        if(!author.trim() || !content.trim()) {
            setError("Author and content are required");
            return;
        }
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ author, content }),
            });

            if(response.ok) {
                setContent("");
                fetchPost();
            }
        } catch (error) {
            setError("Error submitting post, uite aci eroarea (oricum nu cred ca te ajuta): " + error);
        }
    };


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box component="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5' }}>
                <TextField label="your name" 
                variant="outlined" 
                size="small" 
                value={author} 
                onChange={(e) => setAuthor(e.target.value)} sx={glassInputSx} />
                <TextField label="your message" variant="outlined"
                    size="small"
                    multiline
                    rows={2}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    sx={glassInputSx} 
                />
                {error && (
                    <Typography variant="caption" sx={{ color: '#ff8a80' }}>
                        {error}
                    </Typography>
                )}  

                <Button type="submit" variant="outlined" endIcon={<SendIcon />} sx={{color: 'white', 
                        borderColor: 'rgba(255, 255, 255, 0.4)', 
                        borderRadius: '12px','&:hover': { borderColor: 'white', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}}>Post</Button>
            </Box>

            <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.15)', my: 1 }} />
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 1.5, 
                maxHeight: '300px', 
                overflowY: 'auto',
                pr: 0.5
            }}>
                {post.length === 0 ? (
                    <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.7 }}>no messages yet, be the first to post! </Typography>) : (
                    post.map((post) => (
                        <Box key={post.id} 
                            sx={{ 
                                backgroundColor: 'rgba(0, 0, 0, 0.25)', 
                                p: 1.5, 
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 255, 255, 0.08)'
                            }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#90caf9' }}>
                                    {post.author}
                                </Typography>
                                {post.created_at && (
                                    <Typography variant="caption" sx={{ opacity: 0.5, fontSize: '0.7rem' }}>
                                        {new Date(post.created_at).toLocaleDateString('ro-RO')}
                                    </Typography>
                                )}
                            </Box>
                            <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                                {post.content}
                            </Typography>
                        </Box>
                    ))
                )}
            </Box>
        </Box>

    )
}

export default Chatbox;