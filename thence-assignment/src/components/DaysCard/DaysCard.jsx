import { Box, Typography } from "@mui/material"


function DaysCard() {
  return (
    <>
    <Box sx={{width:'248px',height:'88px',borderRadius:'111.54px',padding:'18px'}}>
        <Typography component={'h4'} variant="h4" sx={{fontWeight:600,color:'black'}}>10 Days</Typography>
        <Typography component={'h6'} variant="h6" sx={{color:'grey'}}>Staff deployment</Typography>

    </Box>
    </>
  )
}

export default DaysCard