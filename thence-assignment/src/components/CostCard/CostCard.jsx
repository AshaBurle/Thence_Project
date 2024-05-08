import { Box, Typography } from "@mui/material"

function CostCard() {
  return (
    <>
    <Box sx={{width:'290.49px',backgroundColor:'#002E1B',color:'white',height:'239px',borderRadius:'28.39px',border:'1.18px',padding:'35px'}}>
        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:'20px'}}>
        <Typography component={'h1'} variant="h3" sx={{fontWeight:600,marginRight:'10px'}}>$0.5</Typography>
        <Typography component={'h6'} variant="h6" sx={{color:'grey'}}>MILLION</Typography>
        </Box>
        <Typography sx={{fontWeight:500,fontSize:'18px',color:'lightgray'}}>Reduced Client Expenses by saving on hiring and employee cost</Typography>

    </Box>
    
    </>
  )
}

export default CostCard