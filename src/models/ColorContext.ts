import { createContext } from "react";

interface ColorContextProps {
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

const ColorContext = createContext<ColorContextProps>({
  selectedColor: "",
  setSelectedColor: () => {},
});

export default ColorContext;
