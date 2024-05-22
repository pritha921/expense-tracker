import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export default function ButtonAppBar() {


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Expense Tracker
          </Typography>
          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       Color
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl} 
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Blue</MenuItem>
        <MenuItem onClick={handleClose}>Green</MenuItem>
      </Menu>
          <Button color="inherit">Add New Expense</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             My Expense Tracker
//           </Typography>
//           <Select
//             defaultValue=""
//             sx={{ color: 'white', borderColor: 'white', marginRight: 2 }}
//             variant="outlined"
//             inputProps={{ 'aria-label': 'Without label' }}
//           >
//             <MenuItem value="green">Green</MenuItem>
//             <MenuItem value="blue">Blue</MenuItem>
//           </Select>
//           <Button color="inherit">Add New Expense</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


