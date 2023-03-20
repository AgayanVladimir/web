import { Header } from "./components/Header/Header";
import { InformationBlock } from "./components/InformationBlock/InformationBlock";
import { WeOffer } from "./components/WeOffer/WeOffer";
import "./reset.css";
import "./app.css";
import { OurWorks } from "./components/ourWorks/OurWorks";
import { OurServices } from "./components/OurServices/OurServices";

function App() {
  return (
    <div>
      <Header />
      <InformationBlock />
      <WeOffer />
      <OurWorks />

      <OurServices />
    </div>
  );
}

export default App;
