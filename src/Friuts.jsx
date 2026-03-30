export default Friuts;
import Friut from "./Friut";

function Friuts() {
  //const friuts = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 9, emoji: "🍎", soldout: false },
    { name: "Banana", price: 7, emoji: "🍌", soldout: true },
    { name: "Orange", price: 10, emoji: "🍊", soldout: true },
    { name: "Mango", price: 6, emoji: "🥭", soldout: false },
    { name: "Pineapple", price: 4, emoji: "🍍", soldout: false },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          // <li key={index}>
          //   {fruit.name} - ${fruit.price}{" "}
          //   <span
          //     className="emoji laugh"
          //     role="img"
          //     aria-label={`${fruit.name} laughing`}
          //   >
          //     {fruit.emoji}
          //   </span>
          // </li>
          <Friut
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
