import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import { Loader } from "./components/Loader/Loader";

import { EventsBoardPage } from "./pages/EventsBoardPage";
import { EventRegistrationPage } from "./pages/EventRegistrationPage";
import { EventParticipantsPage } from "./pages/EventParticipantsPage";
import { NotFoundPage } from "./pages/NotFoudPage";

// const EventsBoardPage = lazy(() => import("./pages/EventsBoardPage"));
// const EventRegistrationPage = lazy(() =>
//   import("./pages/EventRegistrationPage")
// );
// const EventParticipantsPage = lazy(() =>
//   import("./pages/EventParticipantsPage")
// );
// const NotFoundPage = lazy(() => import("./pages/NotFoudPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<EventsBoardPage />} />
          <Route path="/register" element={<EventRegistrationPage />} />
          <Route path="/participants" element={<EventParticipantsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
