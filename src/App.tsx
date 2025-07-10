import "./App.css";
import ChooseUs from "./component/ChooseUs/ChooseUs";
import ExpertiseSection from "./component/Expertise/Expertise";
import Header from "./component/Header/Header";
import LogoTicker from "./component/LogoTicker/LogoTicker";
import PartnerAndFooterSection from "./component/PartnerAndFooter/PartnerAndFooter";
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
          <ChooseUs />
          <PartnerAndFooterSection />
        </main>
      </div>
    </>
  );
}

export default App;
