import { Header } from "./components/Header";
import background from "../../assets/background-3.png";

export function Hero() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Header />
    </div>
  );
}