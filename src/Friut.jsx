export default function Friut({ name, price, emoji, soldout }) {
  return (
    <>
      <li>
        {/* {emoji} {name} - ${price}
        {price >= 5 ? (
          <h3>
            {emoji} {name} - ${price}
          </h3>
        ) : null} */}
        {soldout ? (
          <h3>
            {emoji} {name} - ${price}
          </h3>
        ) : null}
      </li>
    </>
  );
}
