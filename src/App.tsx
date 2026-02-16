
import Hero from "./components/main/Hero";
import About from "./components/main/About";
import Experiences from "./components/main/Experiencies";
import Projects from "./components/main/Projects";
import Contact from "./components/footer/Contact";
import { LanguageProvider } from "./context/LanguajeContext";
import "@fontsource/open-sans";
import Navbar from "./components/nav/Navbar";
import Technologies from "./components/main/Technologies";
import { MouseTrail } from "./components/MouseTrail";


const App = () => {
	return (
		<LanguageProvider>
			<MouseTrail />
			<div className="overflow-x-hidden text-slate-300 antialiased selection:bg-purple-200/30 selection:text-slate-900">
				<div className="fixed top-0 -z-10 h-full w-full">
					<div className="relative h-full w-full bg-slate-950">
						{/* Enhanced background gradients */}
						<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-radial from-purple-600/20 via-transparent to-transparent animate-pulse"></div>
						<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[600px] w-[600px] rounded-full bg-gradient-radial from-pink-600/20 via-transparent to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-gradient-radial from-blue-600/10 via-transparent to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
						
						{/* Subtle mesh gradient overlay */}
						<div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
					</div>
				</div>
				<div className="container mx-auto px-8 relative z-10">
					<Navbar />
					<Hero />
					<About />
					<Technologies />
					<Experiences />
					<Projects />
					<Contact />
				</div>
			</div>
		</LanguageProvider>
	);
};

export default App;
