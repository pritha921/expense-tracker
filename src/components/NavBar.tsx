import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext } from "react";
import appLogo from "../assets/appLogo.png";

import ColorContext from "../models/ColorContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import addNewExpenses from "../assets/addNewExpenses.webp";

export default function ButtonAppBar() {
  const { selectedColor, setSelectedColor: onSetSelectedColor } =
    useContext(ColorContext);

  const handleChange = (event: SelectChangeEvent) => {
    onSetSelectedColor(event.target.value as string);
  };

  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#7C90DB" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <img
              src={appLogo}
              alt="Logo"
              style={{ height: "50px", marginRight: "10px" }}
              onClick={handleCancel}
            />
          </Box>
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

          <Link to="/add" style={{ color: "#ffffff" }}>
            {/* <button style={{ color: 'inherit', background: 'none', border: 'none' }}>
              Add New Expense
            </button> */}

            <img
              src={addNewExpenses}
              alt="Logo"
              style={{ height: "50px", margin: "10px 10px" }}
            />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
