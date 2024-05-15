import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import AppleSignin from "react-apple-signin-auth";

function Login() {
  const [google_code, set_google_code] = useState("");

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      set_google_code(codeResponse.code);
    },
    redirect_uri: "https://social-auth-web.vercel.app",
    flow: "auth-code",
  });

  return (
    <div
      style={{
        display: "flex",
        felxDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: 10,
          margin: 10,
          color: "green",
        }}
        onClick={login}
      >
        Register with google
      </button>
      <br />
      {google_code.length > 0 && (
        <>
          <code>{google_code}</code>
          <br />
          <button
            onClick={() => {
              navigator.clipboard.writeText(google_code);
            }}
          >
            Copy code
          </button>
        </>
      )}

      {/* <AppleLogin
        clientId="com.simplynikah.testauth.sid"
        redirectURI="https://social-auth-web.vercel.app"
        responseType="code"
        responseMode="form_post"
        usePopup={true}
        scope="name email"
        nonce="NONCE"
        callback={(response) => {
          if (response.error) {
            console.log(response.error);
          } else {
            console.log(response.code);
          }
        }}
      /> */}

      <AppleSignin
        authOptions={{
          clientId: "com.simplynikah.testauth.sid",
          scope: "email name",
          redirectURI: "https://social-auth-web.vercel.app",
          nonce: "NONCE",
          usePopup: true,
        }}
        uiType="dark"
        onSuccess={(response) => {
          set_google_code(response?.authorization?.code);
        }}
      />
    </div>
  );
}

export default Login;
