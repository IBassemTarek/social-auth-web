import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./Login";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: "100vh",
      }}
    >
      <GoogleOAuthProvider clientId="532140398269-ebko5ec94sdm30ldt8cnobvb5hca7hnm.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
