// React
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

// Services
import * as authService from "./services/authService";
import * as weatherService from "./services/weatherService";
import * as locationService from "./services/locationService";

// Files
import "./App.css";

// Main Pages
import FavoriteBar from "./pages/FavoriteBar/FavoriteBar";
import Todolist from "./pages/TodoList/TodoList";
import SideBar from "./components/SideBar/SideBar";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import Weather from "./pages/Weather/Weather";

// Packages
import { ChevronLeft } from "@mui/icons-material";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [open, setOpen] = useState(true);

  const getLocationDetails = async () => {
    if (user) {
      try {
        locationService.getLocation().then((location) => {
          weatherService.getWeatherDetails(location).then((details) => {
            setWeather(details);
          });
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      return "boston";
    }
  };

  const [weather, setWeather] = useState({});
  const [searchLocation, setSearchLocation] = useState(getLocationDetails);

  useEffect(() => {
    const fetchWeatherDetails = async () => {
      const weatherDetails = await weatherService.getWeatherDetails(
        searchLocation
      );
      setWeather(weatherDetails);
    };

    fetchWeatherDetails();
  }, [searchLocation]);

  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    setUser(null);
    navigate("/");
  };

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
    setSearchLocation(getLocationDetails);
  };

  function handleSideBarClose() {
    setOpen(false);
  }

  function handleSideBarOpen() {
    setOpen(true);
  }

  return (
    <>
      <NavBar
        user={user}
        handleSignupOrLogin={handleSignupOrLogin}
        handleLogout={handleLogout}
        handleSideBarOpen={handleSideBarOpen}
        handleSideBarClose={handleSideBarClose}
        open={open}
      />
      <SideBar
        open={open}
        handleSideBarOpen={handleSideBarOpen}
        handleSideBarClose={handleSideBarClose}
        user={user}
      />
      <main className="app-layout-container | flex flex-wrap justify-between">
        {user ? (
          <section className="app-layout-favorite-bar w-full flex gap-14">
            <FavoriteBar user={user} />
          </section>
        ) : (
          ""
        )}
        <section className="app-layout-top-container">
          <NewsFeed />
          <Todolist user={user} />
        </section>
        <section className="app-layout-bottom-container">
          <Weather
            user={user}
            weather={weather}
            setWeather={setWeather}
            searchLocation={searchLocation}
            setSearchLocation={setSearchLocation}
          />
        </section>
      </main>
    </>
  );
};

export default App;
