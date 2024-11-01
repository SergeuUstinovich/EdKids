import { Route, Routes } from "react-router-dom";
import Test from "./components/test/test";
import { lazy, Suspense } from "react";

const Layout = lazy(() => import("./pages/Layout/Layout"));
const Hero = lazy(() => import("./pages/Hero/Hero"));
const Courses = lazy(() => import("./pages/Courses/Courses"));
const Lesson1 = lazy(() => import("./pages/Lesson1/Lesson1"));
const Games = lazy(() => import("./pages/Games/Games"));
const Friends = lazy(() => import("./pages/Friends/Friends"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/"} element={<Layout />}>
            <Route path={"hero"} element={<Hero />} />
            <Route path={"courses"} element={<Courses />}>
              <Route path={"lesson-1"} element={<Lesson1 />} />
            </Route>
            <Route path={"games"} element={<Games />} />
            <Route path={"friends"} element={<Friends />} />
          </Route>
        </Routes>
      </Suspense>
      {/* <Test /> */}
    </>
  );
}

export default App;
