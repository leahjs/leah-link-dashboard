import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinkDashboard from "./pages/link-dashboard";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinkDashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
