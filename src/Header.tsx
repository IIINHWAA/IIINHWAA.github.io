import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

type HeaderProps = {
	mainRef: React.RefObject<HTMLDivElement>;
	aboutMeRef: React.RefObject<HTMLDivElement>;
	skillsRef: React.RefObject<HTMLDivElement>;
	archivingRef: React.RefObject<HTMLDivElement>;
	projectRef: React.RefObject<HTMLDivElement>;
};

export const Header = ({
	mainRef,
	aboutMeRef,
	skillsRef,
	archivingRef,
	projectRef,
}: HeaderProps) => {
	const [isScrolled, setIsScrolled] = useState(false);
	const handleScroll = () => {
		setIsScrolled(window.scrollY > 0);
	};

	const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
		ref.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div
			className={`fixed left-0 top-0 z-40 flex h-20 w-full items-center py-5 text-sm transition-all duration-300 ${
				isScrolled
					? "bg-white text-black"
					: "bg-transparent text-white"
			}`}
		>
			<nav className="mx-auto flex w-full max-w-5xl justify-between gap-x-10 px-4 lg:px-0">
				<button
					onClick={() => scrollToSection(mainRef)}
					className="font-dynapuff text-xl"
				>
					INHWA's Portfolio
				</button>
				<div className="flex items-center gap-7">
					<div className="flex flex-row gap-7 md:hidden">
						<IoMenu className="text-3xl" />
					</div>
					<div className="hidden gap-7 md:flex">
						<button
							onClick={() =>
								scrollToSection(
									aboutMeRef
								)
							}
							className="font-dynapuff text-lg"
						>
							About Me
						</button>
						<button
							onClick={() =>
								scrollToSection(
									skillsRef
								)
							}
							className="font-dynapuff text-lg"
						>
							Skills
						</button>
						<button
							onClick={() =>
								scrollToSection(
									archivingRef
								)
							}
							className="font-dynapuff text-lg"
						>
							Archiving
						</button>
						<button
							onClick={() =>
								scrollToSection(
									projectRef
								)
							}
							className="font-dynapuff text-lg"
						>
							Projects
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};
