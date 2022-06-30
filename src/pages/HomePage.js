import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { getOneShop, getProduct, getShops } from "../services/api";

const HomePage = ({ setProductsInCart }) => {
  const [shops, setShops] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getShops().then((data) => setShops(data).catch((err) => console.log(err)));
    getOneShop(shops[0]._id)
      .then((data) => setMenu(data.menu))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMenu = (id) => {
    getOneShop(id)
      .then((data) => setMenu(data.menu))
      .catch((err) => console.log(err));
  };

  const addToCart = (id) => {
    getProduct(id)
      .then((data) => {
        const prod = data.find((item) => item !== null);
        // добавить на бек свойство кол-во (по умолчанию 0)
        // добавить следующую проверку:
        // products.forEach((prod) => {
        //   if (prod.quantity > 1) {
        //     return (prod.quantity += 1);
        //   } else {
        //     return (prod.quantity = 1);
        //   }
        // });
        setProductsInCart((prev) => [prod, ...prev]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      component="main"
      sx={{ display: "flex", justifyContent: "space-around" }}
    >
      <section>
        <h2>Shops:</h2>
        {shops && (
          <List>
            {shops.map(({ _id, title }) => (
              <ListItem
                button
                key={_id}
                sx={{
                  height: "70px",
                  border: "1px solid grey",
                  borderRadius: "10px",
                  mb: "5px",
                }}
                onClick={() => getMenu(_id)}
              >
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </List>
        )}
      </section>
      <section>
        <ImageList cols={3} sx={{ width: "900px" }}>
          {menu.map(({ _id, img, product }) => (
            <ImageListItem key={_id} sx={{ width: "250px" }}>
              <img src={img} alt={product} />
              <ImageListItemBar
                title={product}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${product}`}
                    sx={{ color: "white" }}
                    onClick={() => addToCart(_id)}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </Box>
  );
};

export default HomePage;
