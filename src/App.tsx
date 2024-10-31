import { Route, Routes } from "react-router-dom";
import Test from "./components/test/test";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./pages/Layout/Layout"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<Layout />} />
        </Routes>
      </Suspense>
      {/* <Test /> */}
    </>
  );
}

export default App;
