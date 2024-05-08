import { Box, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Logo from "../../assets/Logo.svg"
function Header() {
  let navigate = useNavigate()
  const handleChange = () => {
    navigate("/login")

  }
  return (
    <>
      <div className="border-2 border-gray-100 pl-7 pr-4 py-3 m-8 rounded-full">
        <div className="flex justify-between items-center">
          <div>
            <div>
              <img src={Logo} width={90}/>
            </div>
          </div>
          <div className="flex items-center">
            <div className="px-7 py-4 border-2 border-gray-100 p-9  rounded-full mr-6">
              <p>Get Projects</p>
            </div>
            <div className="px-7 py-4 bg-black p-9  rounded-full">
              <button className="text-white">Get Projects</button>
            </div>
          </div>
        </div>
      </div>

      {/* <Box container sx={{height:'111px',display:'flex',flexDirection:'row',justifyContent:'space-between',borderRadius:'65px',padding:'50px'}}>
        <Typography component={'h1'} variant="h1" sx={{fontWeight:700,fontSize:'42px'}}>Brunel</Typography>

        <Box spacing={4} sx={{display:'flex',flexDirection:'row'}} item>
            <Button sx={{width:'190px',height:'78px',borderRadius:'107px',border:'1.15px',padding:'25px'
            }} onClick={handleChange} >
                Get Pojects
            </Button>
            <Button sx={{backgroundColor:'black',color:'white',width:'223px',height:'78px',padding:'28px',borderRadius:'107px' }} contained >
                  Onboard Talent
            </Button>
        </Box>


    </Box> */}
    </>
  )
}

export default Header