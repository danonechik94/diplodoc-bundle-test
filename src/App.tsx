import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Editor = lazy(() => import("./components/editor/editor"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading ...">
        <Routes>
          <Route path="/" element={<Link to="/editor">Go to editor</Link>} />
          <Route id="editor" path="/editor" element={<Editor />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
