import { Routes, Route } from "react-router-dom";
import { SharedLayout, Landing } from "./routes/index.route";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default App;
