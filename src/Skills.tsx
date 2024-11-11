import { IoLinkOutline } from "react-icons/io5";
import { TbMessageLanguage } from "react-icons/tb";
import { SiFramework } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { GiMatterStates } from "react-icons/gi";
import { AiFillDatabase } from "react-icons/ai";
import { FaPaintBrush } from "react-icons/fa";
export const Skills = () => {
	return (
		<div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 px-5">
			<div>
				<div className="flex flex-row items-center gap-2">
					<IoLinkOutline className="font-archivo text-5xl font-bold text-gray-400" />
					<span className="font-dynapuff text-4xl font-bold text-black md:text-6xl">
						SKILLS
					</span>
				</div>
				<hr className="mb-4 border-2 border-rose-300" />
			</div>

			<div className="grid w-full grid-cols-1 rounded-2xl bg-rose-50 p-5 shadow-2xl sm:grid-cols-2 md:max-w-5xl lg:grid-cols-3">
				{/* 이름 */}
				<div className="flex items-center gap-5 p-4">
					<TbMessageLanguage className="text-3xl" />
					<div className="flex flex-col gap-1">
						<span className="text-base font-bold">
							Language
						</span>
						<div className="flex flex-row gap-2">
							<span className="rounded-md bg-red-700 px-3 text-sm text-white">
								JavaScript
							</span>
							<span className="rounded-md bg-rose-200 px-2 text-sm text-black">
								TypeScript
							</span>
						</div>
					</div>
				</div>

				{/* 생년월일 */}
				<div className="flex items-center gap-5 p-4">
					<SiFramework className="text-3xl" />
					<div className="flex flex-col gap-1">
						<span className="text-base font-bold">
							Framework
						</span>
						<div className="flex flex-row gap-2">
							<span className="rounded-md bg-orange-600 px-3 text-sm text-white">
								React
							</span>
							<span className="rounded-md bg-yellow-400 px-3 text-sm text-black">
								Next.js
							</span>
						</div>
					</div>
				</div>

				{/* 거주지 */}
				<div className="flex items-center gap-5 p-4">
					<SiStyledcomponents className="text-3xl" />
					<div className="flex flex-col gap-1">
						<span className="text-base font-bold">
							Style
						</span>
						<div className="flex flex-row gap-2">
							<span className="rounded-md bg-green-800 px-3 text-sm text-white">
								HTML/CSS
							</span>
							<span className="rounded-md bg-cyan-800 px-3 text-sm text-white">
								TailwindCSS
							</span>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-5 p-4">
					<GiMatterStates className="text-3xl" />
					<div className="flex flex-col gap-1">
						<span className="text-base font-bold">
							State
						</span>
						<div className="flex flex-row gap-2">
							<span className="rounded-md bg-blue-800 px-3 text-sm text-white">
								Zustand
							</span>
							<span className="rounded-md bg-lime-200 px-3 text-sm text-black">
								Redux
							</span>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-5 p-4">
					<AiFillDatabase className="text-3xl" />
					<div className="flex flex-col gap-1">
						<span className="text-base font-bold">
							Others
						</span>
						<div className="flex flex-row gap-2">
							<span className="rounded-md bg-slate-700 px-3 text-sm text-white">
								Node.js
							</span>
							<span className="rounded-md bg-violet-900 px-3 text-sm text-white">
								MySQL
							</span>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-5 p-4">
					<FaPaintBrush className="text-3xl" />
					<div className="flex flex-col gap-1">
						<span className="text-base font-bold">
							Design
						</span>
						<div className="flex flex-row gap-2">
							<span className="rounded-md bg-pink-800 px-3 text-sm text-white">
								Figma
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
