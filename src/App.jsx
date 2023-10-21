import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./pages/PrivateRoutes";
import { useSelector } from "react-redux";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const { isUserAuthenticated } = useSelector((state) => state.authState);

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* Private Routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/" exact element={<Home />} />
          </Route>

          {/* Public Route */}
          <Route
            path="/login"
            element={isUserAuthenticated ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
