import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface ButtonAppBarProps {
  buttonColor: string;
  setButtonColor: (color: string) => void;
}

export default function ButtonAppBar({ buttonColor, setButtonColor }: ButtonAppBarProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setButtonColor(event.target.value as string);
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
                value={buttonColor}
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
