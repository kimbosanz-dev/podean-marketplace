import "./App.css";
import ExpertiseSection from "./component/Expertise/Expertise";
import Header from "./component/Header/Header";
import LogoTicker from "./component/LogoTicker/LogoTicker";
import Solutions from "./component/Solutions/Solutions";
import StatsSection from "./component/StatsSection/StatsSection";
import TrustPlatformSection from "./component/TrustSection/TrustSection";
import WeDoItAllSection from "./component/WeDoItAllSection/WeDoItAllSection";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <main>
          <ExpertiseSection />
          <LogoTicker rotationDegree={-3} />
          <StatsSection />
          <LogoTicker rotationDegree={3} />
          <WeDoItAllSection />
          <Solutions />
          <TrustPlatformSection />
        </main>
      </div>
    </>
  );
}

export default App;
