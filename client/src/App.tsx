import "./App.css";
import { Input } from "./components/ui/Input";
function App() {
  return (
    <>
      <div className="max-w-sm p-10 space-y-4">
        <Input label="Email" placeholder="you@example.com" />
        <Input
          label="Password"
          placeholder="password"
          type="password"
          error="Invalid password"
        />
      </div>
    </>
  );
}

export default App;
