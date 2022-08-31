import Router from "./router/Router";
import { ModalProvider } from "./context/useModalContext";

function App() {
  return (
    <ModalProvider>
      <Router />
    </ModalProvider>
  );
}

export default App;
