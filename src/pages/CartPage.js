import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  ImageList,
  ImageListItem,
  IconButton,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import burger from "../images/burger.jpg";
import { validate } from "../helpers/FormValidate";

const data = [
  { id: 12341, img: { burger }, title: "Burger", price: "100" },
  { id: 12342, img: { burger }, title: "Burger", price: "100" },
  { id: 12343, img: { burger }, title: "Burger", price: "100" },
  { id: 12344, img: { burger }, title: "Burger", price: "100" },
  { id: 12345, img: { burger }, title: "Burger", price: "100" },
  { id: 12346, img: { burger }, title: "Burger", price: "100" },
  { id: 12347, img: { burger }, title: "Burger", price: "100" },
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  adress: "",
  quantity: 1,
};

const CartPage = () => {
  const [userData, setUserData] = useState(initialState);

  const { name, email, phone, adress, quantity } = userData;
  const [errors, setErrors] = useState(userData);

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setUserData({
      ...userData,
      [name]: value,
    });
    validate({ name, value, setErrors, errors });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData(initialState);
  };

  return (
    <Box component="main">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Box component="div" sx={{ width: "500px" }}>
          <TextField
            margin="normal"
            label="Name"
            name="name"
            value={name}
            fullWidth
            required
            onChange={handleChange}
            error={errors.name.length !== 0}
            helperText={errors.name}
          />
          <TextField
            margin="normal"
            label="Email"
            name="email"
            value={email}
            fullWidth
            required
            onChange={handleChange}
            error={errors.email.length !== 0}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            name="phone"
            label="Phone"
            type="phone"
            value={phone}
            fullWidth
            required
            onChange={handleChange}
            error={errors.phone.length !== 0}
            helperText={errors.phone}
          />
          <TextField
            margin="normal"
            name="adress"
            label="Adress"
            value={adress}
            fullWidth
            required
            onChange={handleChange}
            error={errors.adress.length !== 0}
            helperText={errors.adress}
          />
        </Box>
        <Box>
          <ImageList
            cols={1}
            sx={{ width: "500px", height: "70vh", mb: "15px" }}
          >
            {data.map((item) => (
              <Box
                key={item.id}
                component="div"
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <ImageListItem sx={{ width: "250px" }}>
                  <img src={burger} alt={item.title} />
                </ImageListItem>
                <Box
                  component="div"
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    aria-label="delete"
                    sx={{ position: "absolute", top: "5px", right: "5px" }}
                  >
                    <HighlightOffIcon />
                  </IconButton>
                  <Typography component="p">{item.title}</Typography>
                  <Typography component="p" sx={{ mb: "15px" }}>
                    Price: {item.price}$
                  </Typography>
                  <TextField
                    name="quantity"
                    value={quantity}
                    type="number"
                    size="small"
                    sx={{ width: "150px" }}
                    required
                    onChange={handleChange}
                  />
                </Box>
              </Box>
            ))}
          </ImageList>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              mr: "50px",
            }}
          >
            <Typography component="p" sx={{ mr: "30px" }}>
              Total price: ...$
            </Typography>
            <Button variant="contained" type="submit" color="secondary">
              Send order
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CartPage;
