import { AboutMe } from "./AboutMe";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Skills } from "./Skills";
import { Archiving } from "./Archiving";
import { Project } from "./Project";

export const Body = () => {
	return (
		<div className="flex flex-col">
			{/* 이미지 포함 소개 */}
			<div className="relative flex justify-center">
				<img
					className="h-auto min-h-[500px] w-full object-cover"
					src="/assets/bg_img.jpg"
					alt="Background"
					style={{ filter: "blur(3px)" }}
				/>
				<div className="absolute inset-0 bg-gray-700 opacity-20"></div>

				<div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 text-center">
					<span className="font-dynapuff text-5xl text-rose-100 md:text-7xl">
						INHWA
					</span>
					<span className="font-jua text-2xl text-white md:text-3xl">
						Frontend Developer Portfolio
					</span>
					<div className="flex flex-col items-center gap-0 font-sans text-lg font-bold text-white opacity-80">
						<span>
							성장하는 프론트엔드
							개발자
						</span>
						<span>정인화입니다</span>
					</div>
					<button className="mt-5 flex h-12 w-12 items-center justify-center">
						<FaAngleDoubleDown className="text-4xl font-bold text-gray-400 hover:text-white" />
					</button>
				</div>
			</div>

			<div className="relative flex justify-center">
				<div className="h-[700px] w-full bg-white md:h-[500px]">
					<AboutMe />
				</div>
			</div>

			{/* skills 부분 */}
			<div className="relative flex justify-center">
				<div className="h-[700px] w-full bg-rose-200 md:h-[500px]">
					<Skills />
				</div>
			</div>

			{/* archiving 부분 */}
			<div className="relative flex justify-center">
				<div className="h-[500px] w-full bg-teal-950 md:h-[400px]">
					<Archiving />
				</div>
			</div>

			{/* archiving 부분 */}
			<div className="relative flex justify-center">
				<div className="h-[1800px] w-full bg-gray-50 md:h-[1000px]">
					<Project />
				</div>
			</div>
		</div>
	);
};
