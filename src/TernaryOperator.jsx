import Welcome from "./Welcome.jsx";
import LoggedOut from "./LoggedOut.jsx";
export default function TurnaryOperator({ loggedIn }) {
  let message = loggedIn ? <Welcome /> : <LoggedOut />;
  return message;
}
