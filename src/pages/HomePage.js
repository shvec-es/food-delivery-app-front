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
import burger from "../images/burger.jpg";

const data = [
  { id: 12341, img: { burger }, title: "Burger" },
  { id: 12342, img: { burger }, title: "Burger" },
  { id: 12343, img: { burger }, title: "Burger" },
  { id: 12344, img: { burger }, title: "Burger" },
  { id: 12345, img: { burger }, title: "Burger" },
  { id: 12346, img: { burger }, title: "Burger" },
  { id: 12347, img: { burger }, title: "Burger" },
];

const HomePage = () => {
  return (
    <Box
      component="main"
      sx={{ display: "flex", justifyContent: "space-around" }}
    >
      <section>
        <h2>Shops:</h2>

        <List>
          {["McDonalds", "KFC", "Mafia", "Donner"].map((text) => (
            <ListItem
              button
              key={text}
              sx={{
                height: "70px",
                border: "1px solid grey",
                borderRadius: "10px",
                mb: "5px",
              }}
            >
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </section>
      <section>
        <ImageList cols={3} sx={{ width: "900px" }}>
          {data.map((item) => (
            <ImageListItem key={item.id} sx={{ width: "250px" }}>
              <img src={burger} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.title}`}
                    sx={{ color: "white" }}
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
