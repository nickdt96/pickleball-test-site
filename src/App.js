import './App.css';
import Header from "./components/common/Header";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


function App() {

  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
