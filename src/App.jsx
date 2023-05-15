import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import WhyUS from "./components/WhyUS";
import Testimonials from "./components/Testimonials";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Features />
			<Download />
			<WhyUS />
			<Testimonials />
			<JoinUs />
			<Footer />
		</div>
	);
}
export default App;
