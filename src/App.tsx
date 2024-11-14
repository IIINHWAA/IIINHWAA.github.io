import { useRef } from "react";
import { Body } from "./Body";
import { Header } from "./Header";

function App() {
	const mainRef = useRef<HTMLDivElement>(null);
	const aboutMeRef = useRef<HTMLDivElement>(null);
	const skillsRef = useRef<HTMLDivElement>(null);
	const archivingRef = useRef<HTMLDivElement>(null);
	const projectRef = useRef<HTMLDivElement>(null);

	return (
		<div>
			<Header
				mainRef={mainRef}
				aboutMeRef={aboutMeRef}
				skillsRef={skillsRef}
				archivingRef={archivingRef}
				projectRef={projectRef}
			/>

			<Body
				mainRef={mainRef}
				aboutMeRef={aboutMeRef}
				skillsRef={skillsRef}
				archivingRef={archivingRef}
				projectRef={projectRef}
			/>
		</div>
	);
}

export default App;
