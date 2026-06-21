import { useEffect, useState } from "react";
import { logoutUser } from "../api/authApi";
import axios from "../app/axios";

function Meals({ setIsLoggedIn }) {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    try {
      const res = await axios.get("/public/meals");
      setMeals(res.data.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    await logoutUser();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-semibold">Meals 🍽️</h1>
        <button
          onClick={handleLogout}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div
            key={meal.id}
            className="bg-white p-4 rounded-xl shadow-sm"
          >
            <img
              src={meal.strMealThumb}
              alt=""
              className="rounded-md mb-2"
            />
            <h2 className="text-sm font-medium">{meal.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;