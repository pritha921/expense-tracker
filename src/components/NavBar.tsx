import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext } from "react";
import ColorContext from "../models/ColorContext";



export default function ButtonAppBar() {
  const {selectedColor, setSelectedColor:onSetSelectedColor}=useContext(ColorContext)
  
  const handleChange = (event: SelectChangeEvent) => {
    onSetSelectedColor(event.target.value as string);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Expense Tracker
          </Typography>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="color-select-label">Color</InputLabel>
              <Select
                labelId="color-select-label"
                id="color-select"
                value={selectedColor}
                label="Color"
                onChange={handleChange}
              >
                <MenuItem value={"blue"}>Blue</MenuItem>
                <MenuItem value={"green"}>Green</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button color="inherit">Add New Expense</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
