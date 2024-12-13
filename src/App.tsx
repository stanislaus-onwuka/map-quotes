import { BrowserRouter, Routes, Route } from "react-router";
import DashboardLayout from "./components/layouts/dashboard-layout";
import QuotesPage from "./pages/quotes";
import QuoteDetails from "./pages/quotes/quote-details";
import ViewQuote from "./pages/quotes/view-quote";
import DefaultPage from "./pages/default";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="quotes">
            <Route index element={<QuotesPage />} />
            <Route path=":id" element={<QuoteDetails />} />
            <Route path=":id/respond" element={<ViewQuote />} />
          </Route>
          <Route path="*" element={<DefaultPage />} />
          {/* <Route path="*" element={<Navigate to="/quotes" replace />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
