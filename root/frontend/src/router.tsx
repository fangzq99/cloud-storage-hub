import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import LoginPage from './pages/login_page';
import HomePage from './pages/storage_main_page';

export function RoutePages() {
  return (
    <Routes>
      <Route
        path='/login'
        element={<LoginPage />}
      />
      {/* Redirect root to storage if logged in, adjust as needed */}
      <Route element={<PrivateRoute />}>
        {/* All routes inside here will require authentication */}
        <Route
          path='/storage_main_page'
          element={<HomePage />}
        />
      </Route>
      <Route
        path='*'
        element={
          <div>
            <h2>404 Page Not Found</h2>
          </div>
        }
      />
    </Routes>
  );
}

// Reference: https://medium.com/@chiragmehta900/creating-protected-routes-in-react-js-with-react-router-v6-28f3a3ac53d
export function PrivateRoute() {
  const auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to='/login' />;
}
