import { Box, Typography } from "@mui/material"

function DiscountCard() {
  return (
    <>
    <Box sx={{width:'267.86px',height:'239px',color:'black',borderRadius:'27.12px',padding:'40px',}}>
        <Typography component={'h3'} variant="h3" sx={{fontWeight:600}} >40%</Typography>
        <Typography component={'h6'} variant="h6" sx={{fontWeight:500,color:'gray',fontSize:'18px'}}>Achieved reduction in project execution time by optimising team availability</Typography>
    </Box>
    </>
  )
}

export default DiscountCard