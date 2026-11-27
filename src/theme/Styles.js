export const pageContainerSx = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundImage: `url(/rails1.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    backgroundAttachment: 'fixed'
};

export const cardSx = {
    backgroundColor: "rgba(31, 99, 135, 0.169)",
    color: 'white',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '24px',
    breakInside: 'avoid',
};

export const glassInputSx = {
    '& .MuiOutlinedInput-root': {
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '12px',
        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.25)' },
        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
        '&.Mui-focused fieldset': { borderColor: 'white' },
    },
    '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
    '& .MuiInputLabel-root.Mui-focused': { color: 'white' },
};
// o sa las astea aci pentru mai tarziu cand o sa ma ocup de tema dinam