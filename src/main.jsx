import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.jsx'
import { ThemeProvider } from './contextApi/themeContext.jsx';
import { ToDoContextProvider } from './contextApi/toDoContenxtApi.jsx';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ThemeProvider>
      <ToDoContextProvider>
        <App />
      </ToDoContextProvider>
    </ThemeProvider>/
  </StrictMode>
  ,
)
