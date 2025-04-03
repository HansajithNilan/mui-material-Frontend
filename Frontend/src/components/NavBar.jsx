import {
  AppBar,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Pets from "@mui/icons-material/Pets";
import Mail from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import Notifications from "@mui/icons-material/Notifications";
import Avatar from '@mui/material/Avatar';


function NavBar() {
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display:'none',
    gap:'30px',
    alignItems:'center',
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }

  
    
  }));
//   const UserBox = styled(Box)(({ theme }) => ({
//     display:'flex',
//     gap:'30px',
//     alignItems:'center'

  
    
//   }));
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        {/* <Typography variant='h4' sx={{display:{xs:'none',sm:'block'}}}>Nilan Hansajith</Typography> */}
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail/>
          </Badge>
          <Badge badgeContent={4} color="error" >
            <Notifications/>
          </Badge>
          <Avatar alt="Remy Sharp" src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" />
          <Typography>Nilan</Typography>
        </Icons>
        
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={true}
        
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    
    </AppBar>
  );
}

export default NavBar;
