import "./styles.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";

const foodItems = [
  {
    foodName: "Burger",
    img: "https://source.unsplash.com/800x600/?burger",
    price: "$8.99"
  },
  {
    foodName: "Pizza",
    img: "https://source.unsplash.com/800x600/?pizza",
    price: "$10.99"
  },
  {
    foodName: "Sushi",
    img: "https://source.unsplash.com/800x600/?sushi",
    price: "$12.49"
  },
  {
    foodName: "Pasta",
    img: "https://source.unsplash.com/800x600/?pasta",
    price: "$9.79"
  },
  {
    foodName: "Salad",
    img: "https://source.unsplash.com/800x600/?salad",
    price: "$7.99"
  }
];

export default function App() {
  return (
    <div className="App">
      <Nav />
      <div className="foodItems">
        {foodItems.map((x) => {
          return <Cards img={x.img} foodName={x.foodName} price={x.price} />;
        })}
      </div>
    </div>
  );
}
