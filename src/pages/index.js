import Head from "next/head";
import { useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
const HomePage = () => {
  const { data } = useSession();
  const [user] = useAuthState(auth);

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      {/* <h2 style={{ textAlign: "center" }}>Logged in user {data?.user?.name}</h2> */}
      <h2 style={{ textAlign: "center" }}>Logged in user {user?.email}</h2>
    </div>
  );
};

export default HomePage;
