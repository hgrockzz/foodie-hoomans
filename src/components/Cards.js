export default function Cards(props) {
  return (
    <div className="cards">
      <img src={props.img} />
      <h1> {props.foodName} </h1>
      <p> {props.price} </p>
    </div>
  );
}
