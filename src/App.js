import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/Signup";
import Trending from "./pages/Trending";
import AiMl from "./pages/AiMl";
import Blockchain from "./pages/Blockchain";
import CloudComputing from "./pages/CloudComputing";
import CyberSecurity from "./pages/CyberSecurity";

import DigitalMarketing from "./pages/DigitalMarketing";
import DataScience from "./pages/DataScience";
import DevOps from "./pages/DevOps";

import FullStackDevelopment from "./pages/FullStackDevelopment";

import MostRecentArticle from "./components/mostrecentarticle/MostRecentArticle";

import AguidetoLearnBC from "./pages/AguidetoLearnBC";
import Chatbot from "./pages/Chatbot";

import HowToSRNE from "./pages/HowToSRNE";

import { useState } from "react";
import AguideforDev from "./pages/AguideforDev";
import BuildCMDNode from "./pages/BuildCMDNode";
import UseofReactFetch from "./pages/UseofReactFetch";
import AppleVision from "./pages/AppleVision";
import MechanicalEngineeringProjects from "./pages/MechanicalEngineeringProjects";
import ReactNativeEnv from "./pages/ReactNativeEnv";
import Footer from "./components/footer/Footer";
import EffetiveCloudComputing from "./pages/EffectiveCloudComputing";
import Hacking from "./pages/Hacking";
import RolesRespofDataScientist from "./pages/RoleRespofDataScientist";
import LearnDevops from "./pages/LearnDevops";
import DigitalMarketingHistory from "./pages/DigitalMarketingHistory";
import FsdDeveloper from "./pages/FsdDeveloper";

const App = () => {
  const [sidebarVal, setSidebarVal] = useState("aiml");

  const handleChange = (e) => {
    setSidebarVal(e);
    //alert(e);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <Router>
              <Navbar />

              <Routes>
                <Route path="/register" element={<Signup />} />
                <Route path="/" element={<MostRecentArticle />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/aiml" element={<AiMl />} />
                <Route path="/blockchain" element={<Blockchain />} />
                <Route path="/cloudcomputing" element={<CloudComputing />} />
                <Route
                  path="/cloud-computing-career-roadmap"
                  element={<EffetiveCloudComputing />}
                />
                <Route
                  path="cloudcomputing/cloud-computing-career-roadmap"
                  element={<EffetiveCloudComputing />}
                />
                <Route path="/cybersecurity" element={<CyberSecurity />} />
                <Route
                  path="/digitalmarketing"
                  element={<DigitalMarketing />}
                />
                <Route path="/datascience" element={<DataScience />} />
                <Route path="/devops" element={<DevOps />} />
                <Route path="/fsd" element={<FullStackDevelopment />} />
                <Route
                  path="/non-coding-jobs-in-blockchain"
                  element={<AguidetoLearnBC />}
                />
                <Route
                  path="/blockchain/non-coding-jobs-in-blockchain"
                  element={<AguidetoLearnBC />}
                />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/aiml/chatbot" element={<Chatbot />} />
                <Route path="/applevision" element={<AppleVision />} />
                <Route path="/aiml/applevision" element={<AppleVision />} />
                <Route
                  path="/mechanical-engineering-project-ideas"
                  element={<MechanicalEngineeringProjects />}
                />
                <Route
                  path="/trending/mechanical-engineering-project-ideas"
                  element={<MechanicalEngineeringProjects />}
                />
                <Route
                  path="steps-to-setup-react-native-environment"
                  element={<HowToSRNE />}
                />
                <Route
                  path="guide-for-reactjs-architecture"
                  element={<AguideforDev />}
                />
                <Route
                  path="build-a-command-line-interface-with-nodejs"
                  element={<BuildCMDNode />}
                />
                <Route
                  path="how-to-fetch-and-display-data-from-api-in-react"
                  element={<UseofReactFetch />}
                />
                <Route
                  path="/trending/how-to-fetch-and-display-data-from-api-in-react"
                  element={<UseofReactFetch />}
                />
                <Route
                  path="/steps-to-setup-react-native-environment"
                  element={<ReactNativeEnv />}
                />
                <Route path="/what-is-hacking" element={<Hacking />} />
                <Route
                  path="cybersecurity/what-is-hacking"
                  element={<Hacking />}
                />
                <Route
                  path="/roles-and-responsibilities-of-a-data-scientist"
                  element={<RolesRespofDataScientist />}
                />
                <Route
                  path="datascience/roles-and-responsibilities-of-a-data-scientist"
                  element={<RolesRespofDataScientist />}
                />
                <Route
                  path="/how-long-will-it-take-to-learn-devops"
                  element={<LearnDevops />}
                />{" "}
                <Route
                  path="devops/how-long-will-it-take-to-learn-devops"
                  element={<LearnDevops />}
                />
                <Route
                  path="history-and-evolution-of-digital-marketing"
                  element={<DigitalMarketingHistory />}
                />
                <Route
                  path="digitalmarketing/history-and-evolution-of-digital-marketing"
                  element={<DigitalMarketingHistory />}
                />
                <Route
                  path="full-stack-developer-skills"
                  element={<FsdDeveloper />}
                />
                <Route
                  path="fsd/full-stack-developer-skills"
                  element={<FsdDeveloper />}
                />
              </Routes>
            </Router>
          </div>
        </div>
        <div className="col-md-2"></div>
        <Footer />
      </div>
    </>
  );
};

export default App;
