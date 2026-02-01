function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.name}{" "}
        <span className="emoji wave" role="img" aria-label="waving hand">
          {person.emoji}
        </span>{" "}
        , {person.message} Your seat numbers are{" "}
        {person.seatNumbers?.join(", ")}
      </h1>
    </div>
  );
}
export default Hello;
