import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom"; // ✅ Import BrowserRouter
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box minH={"100vh"} useColorModeValue={("gray.100", "gray.900")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
