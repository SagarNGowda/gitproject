export default function Friut({ name, price, emoji }) {
  return (
    <div>
      <li>
        {emoji} {name} - ${price}
      </li>
    </div>
  );
}
