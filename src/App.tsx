import "./App.css";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import ExpertiseSection from "./components/Expertise/Expertise";
import Header from "./components/Header/Header";
import LogoTicker from "./components/LogoTicker/LogoTicker";
import PartnerAndFooterSection from "./components/PartnerAndFooter/PartnerAndFooter";
import Solutions from "./components/Solutions/Solutions";
import StatsSection from "./components/StatsSection/StatsSection";
import TrustPlatformSection from "./components/TrustSection/TrustSection";
import WeDoItAllSection from "./components/WeDoItAllSection/WeDoItAllSection";

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
          <ChooseUs />
          <PartnerAndFooterSection />
        </main>
      </div>
    </>
  );
}

export default App;
