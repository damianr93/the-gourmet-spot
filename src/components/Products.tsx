import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function Products() {
  return (
      <ImageList className="animate__animated animate__backInLeft" sx={{ width: "100%", height: "82vh", marginTop: "35px" }}>
        <ImageListItem key="Subheader" cols={2}></ImageListItem>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.price}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}

const itemData = [
  {
    img: "https://www.allrecipes.com/thmb/WqWggh6NwG-r8PoeA3OfW908FUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg",
    title: "Pancakes",
    price: "$10",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0__FillWzExNzAsNTgzXQ.jpg",
    title: "Cheeseburger",
    price: "$12",
  },
  {
    img: "https://www.albal.net/portal/pics/Recetas/Sushi-Albal2_Teaser-738x595.jpg",
    title: "Sushi",
    price: "$15",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Espresso",
    price: "$5",
    cols: 2,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3yDGc4ejQiwoMi4nsV7-kepLzAOc_SFXhEA&s",
    title: "Tacos",
    price: "$8",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey Cake",
    price: "$20",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPxLYKZRHAadvV7J1h8qqWhhOTE2_C74MCQ&s",
    title: "Basketball Pizza",
    price: "$18",
  },
  {
    img: "https://www.clarin.com/img/2020/06/05/58WVOlTTF_1200x630__1.jpg",
    title: "Guiso de lentejas",
    price: "$15",
  },
];
