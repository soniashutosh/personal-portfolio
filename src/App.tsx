import {
  About,
  Contact,
  Education,
  Footer,
  FrontPage,
  Navbar,
  Projects
} from "./components";
import Skills from "./components/Skills";
import { TracingBeam } from "./components/ui/tracing-beam";

function App() {
  return (
    <>
      <div className="bg-pink-600 mb-0 pb-0">
        <div className="min-h-[100vh] bg-black max-w-full">
          <TracingBeam className="px-1">
            <div className="mx-auto pt-2">
              <Navbar />
            </div>

            <div className="mx-auto pt-2">
              <FrontPage />
            </div>

            <div id="about" className="mx-auto pt-2">
              <About />
            </div>

            <div id="education" className="mx-auto pt-2">
              <Education />
            </div>

            <div id="skills" className="mx-auto pt-2">
              <Skills />
            </div>

            <div id="project" className="pt-2">
              <Projects />
            </div>

            <div id="contact" className="mx-auto pt-2">
              <Contact />
            </div>

            <div className="mx-auto pt-2 relative">
              <Footer />
            </div>
          </TracingBeam>
        </div>
      </div>
    </>
  );
}

export default App;
