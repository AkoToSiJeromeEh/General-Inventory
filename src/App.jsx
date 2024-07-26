import "./App.css";
import { Toaster } from "react-hot-toast";
import { LandingLayout } from "./layout";
import { Login , Inventory } from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const roles = {
  USER: "user",
  ADMIN: "admin",
  SUPERADMIN: "superadmin",
};

const client = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<Login />} />
        <Route path="inventory" element={<Inventory />} />

        {/* <Route element={<PrivateRoutes roles={[roles.USER]} />}>
          <Route path="user" element={}>
            
          </Route>
        </Route>
        
        <Route element={<PrivateRoutes roles={[roles.SUPERADMIN]} />}>
          <Route path="admin" element={}>
            
          </Route>
        </Route>

        <Route element={<PrivateRoutes roles={[roles.ADMIN]} />}>
          <Route path="superadmin" element={}>
           
          </Route>
        </Route> */}
      </Route>
    </>
  )
);
function App() {
  return (
    <>
        <QueryClientProvider client={client}>
          <Toaster position="top-center" />
          <RouterProvider router={router} />
        </QueryClientProvider>
    </>
  );
}

export default App;
