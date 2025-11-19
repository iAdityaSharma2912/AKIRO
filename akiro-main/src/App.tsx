import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ConfirmationUndergraduate from "./pages/ConfirmationUndergraduate";
import ConfirmationGraduate from "./pages/ConfirmationGraduate";
import DashboardHighSchool from "./pages/DashboardHighSchool";
import DashboardUndergraduateTech from "./pages/DashboardUndergraduateTech";
import DashboardUndergraduateNonTech from "./pages/DashboardUndergraduateNonTech";
import DashboardGraduate from "./pages/DashboardGraduate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirmation/undergraduate" element={<ConfirmationUndergraduate />} />
            <Route path="/confirmation/graduate" element={<ConfirmationGraduate />} />
            <Route path="/dashboard/highschool" element={<DashboardHighSchool />} />
            <Route path="/dashboard/undergraduate-tech" element={<DashboardUndergraduateTech />} />
            <Route path="/dashboard/undergraduate-nontech" element={<DashboardUndergraduateNonTech />} />
            <Route path="/dashboard/graduate" element={<DashboardGraduate />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
