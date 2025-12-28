import "./App.css";
import { Button } from "./components/ui/Button";
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-4 ">
      <Button>Login</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isLoading>Signing in</Button>
    </div>
  );
}

export default App;
