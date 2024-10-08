import Image from "next/image";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutP from "./components/AboutP";
import ProjectPart from "./components/ProjectPart";
import EmailPart from "./components/EmailPart";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto py-4 px-12">
      <Header/>
      <Achievements/>
      <AboutP/>
      <ProjectPart/>
      <EmailPart/>
      </div>
      <Footer/>
    </main>
  );
}
