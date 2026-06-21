import { useEffect, useState } from "react";
import { getCurrentUser } from "./api/authApi";
import Auth from "./pages/Auth";
import Meals from "./pages/Meals";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null = loading

  useEffect(() => {
    const checkUser = async () => {
      try {
        await getCurrentUser();
        setIsLoggedIn(true);
      } catch {
        setIsLoggedIn(false);
      }
    };

    checkUser();
  }, []);

  // loading state
  if (isLoggedIn === null) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <>
      {isLoggedIn ? (
        <Meals setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Auth setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;