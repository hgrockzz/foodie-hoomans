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
    foodName: "Masala Dosa",
    img: "https://source.unsplash.com/800x600/?dosa",
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
  },
  {
    foodName: "Taco",
    img: "https://source.unsplash.com/800x600/?taco",
    price: "$6.99"
  },
  {
    foodName: "Cappuccino",
    img: "https://source.unsplash.com/800x600/?cappuccino",
    price: "$15.99"
  },
  {
    foodName: "Sushi Roll",
    img: "https://source.unsplash.com/800x600/?sushi-roll",
    price: "$11.49"
  },
  {
    foodName: "Cheese Grilled Sandwich",
    img: "https://source.unsplash.com/800x600/?veg-cheese-grilled-sandwich",
    price: "$8.49"
  },
  {
    foodName: "Ice Cream",
    img: "https://source.unsplash.com/800x600/?ice-cream",
    price: "$4.99"
  }
];

export default function App() {
  return (
    <div className="App">
      <Nav />
      <h1 className="company-name">Foodie Hoomans</h1>
      <div className="foodItems">
        {foodItems.map((x) => {
          return <Cards img={x.img} foodName={x.foodName} price={x.price} />;
        })}
      </div>
    </div>
  );
}
