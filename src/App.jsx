import React from "react";

import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ArchivedPage from "./pages/archivedPage";

import { getUserLogged, putAccessToken } from "./utils/network-data";
import DetailPageWrapper from "./pages/detailPage";
import InputPage from "./pages/inputPage";
import HeaderNav from "./components/headerNav";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import ToggleTheme from "./contexts/toggleTheme";
import { ThemeProvider } from "./contexts/themeContext";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authedUser: null,
      initializing: true,
      theme: localStorage.getItem("theme") || "light",
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === "light" ? "dark" : "light";
          localStorage.setItem("theme", newTheme);
          return {
            theme: newTheme,
          };
        });
      },
    };

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  async onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
      };
    });
  }

  onLogout() {
    this.setState(() => {
      return {
        authedUser: null,
      };
    });
    putAccessToken("");
  }

  async componentDidMount() {
    document.documentElement.setAttribute("data-theme", this.state.theme);
    const { data } = await getUserLogged();
    this.setState(() => {
      return {
        authedUser: data,
        initializing: false,
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute("data-theme", this.state.theme);
    }
  }

  render() {
    if (this.state.initializing) {
      return null;
    }

    if (this.state.authedUser === null) {
      return (
        <ThemeProvider value={this.state}>
          <div className="notes-app">
            <header className="notes-app__header">
              <h1>Aplikasi Notes</h1>
              <ToggleTheme />
            </header>
            <main>
              <Routes>
                <Route
                  path="/*"
                  element={<LoginPage loginSuccess={this.onLoginSuccess} />}
                />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      );
    }

    return (
      <ThemeProvider value={this.state}>
        <header>
          <HeaderNav logout={this.onLogout} name={this.state.authedUser.name} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archived" element={<ArchivedPage />} />
            <Route path="/note/:id" element={<DetailPageWrapper />} />
            <Route path="/notes/new" element={<InputPage />} />
          </Routes>
        </main>
      </ThemeProvider>
    );
  }
}

export default App;
