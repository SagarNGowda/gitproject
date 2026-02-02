import Welcome from "./Welcome.jsx";
import LoggedOut from "./LoggedOut.jsx";

export default function ConditionalComponent({ isLoggedIn }) {
  // {
  //   if (isLoggedIn) {
  //     return <Welcome />;
  //   } else {
  //     return <LoggedOut />;
  //   }
  // }

  let message;
  if (isLoggedIn) {
    message = <Welcome />;
  } else {
    message = <LoggedOut />;
  }
  return message;
}
