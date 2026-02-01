export default Friuts;

function Friuts() {
  //const friuts = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 9, emoji: "🍎" },
    { name: "Banana", price: 7, emoji: "🍌" },
    { name: "Orange", price: 10, emoji: "🍊" },
    { name: "Mango", price: 6, emoji: "🥭" },
    { name: "Pineapple", price: 4, emoji: "🍍" },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name} - ${fruit.price}{" "}
            <span
              className="emoji laugh"
              role="img"
              aria-label={`${fruit.name} laughing`}
            >
              {fruit.emoji}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
