import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const options = [
  "Binario a decimal",
  "Decimal a binario",
  "Hexadecimal a decimal",
  "Decimal a hexadecimal",
  "Binario a hexadecimal",
  "Hexadecimal a binario",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectComponent(props) {
  //const theme = useTheme();
  const [convertion, setConvertion] = React.useState("");

  const handleChange = (event) => {
    setConvertion(event.target.value);
    props.setSelection(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: 370 }}>
        <Select
          className="select"
          fullWidth
          displayEmpty
          value={convertion}
          onChange={handleChange}
          input={<OutlinedInput />}
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <em>Selecciona una opción</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
