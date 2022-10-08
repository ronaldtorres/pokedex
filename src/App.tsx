import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { customTheme } from "./theme";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
