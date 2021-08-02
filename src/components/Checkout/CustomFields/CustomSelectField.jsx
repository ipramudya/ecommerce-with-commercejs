import { Grid, InputLabel, MenuItem, Select } from '@material-ui/core';

const CustomSelectField = ({
  label,
  shippingItem,
  setShippingItem,
  shippingObject,
}) => {
  const newArrayOfObjects = Object.entries(shippingObject).map(
    ([code, name]) => {
      return { id: code, label: name };
    }
  );

  return (
    <Grid item xs={12} sm={6}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={shippingItem}
        fullWidth
        onChange={(e) => setShippingItem(e.target.value)}
      >
        {newArrayOfObjects.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export default CustomSelectField;
