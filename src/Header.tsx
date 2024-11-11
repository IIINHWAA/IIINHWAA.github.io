import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const handleScroll = () => {
		setIsScrolled(window.scrollY > 0);
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
				<div className="font-dynapuff text-xl">
					INHWA's Portfolio
				</div>
				<div className="flex items-center gap-7">
					<div className="flex flex-row gap-7 md:hidden">
						<IoMenu className="text-3xl" />
					</div>
					<div className="hidden gap-7 md:flex">
						<div className="font-dynapuff text-lg">
							About Me
						</div>
						<div className="font-dynapuff text-lg">
							Skills
						</div>
						<div className="font-dynapuff text-lg">
							Archiving
						</div>
						<div className="font-dynapuff text-lg">
							Projects
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};
