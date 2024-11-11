import { IoLinkOutline } from "react-icons/io5";

export const Project = () => {
	return (
		<div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 px-5">
			<div>
				<div className="flex flex-row items-center gap-2">
					<IoLinkOutline className="font-archivo text-5xl font-bold text-gray-400" />
					<span className="font-dynapuff text-4xl font-bold text-black md:text-6xl">
						PROJECT
					</span>
				</div>
				<hr className="mb-4 border-2 border-gray-200" />
			</div>

			<div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:max-w-5xl lg:grid-cols-2">
				<div className="flex transform flex-col rounded-3xl border bg-white p-8 shadow-2xl transition duration-300 hover:scale-105">
					<div className="mb-4 flex items-center justify-between rounded-lg bg-rose-100 px-3 py-1 text-center font-jua text-lg text-black">
						<span>
							CodePlay - 개발자
							커뮤니티
						</span>
						<span className="text-sm text-black">
							2024.08 ~ 2024.11
						</span>
					</div>

					<span className="mb-2 font-bold">
						📌React와 NestJS를 이용한 개발자
						통합 커뮤니티 플랫폼
					</span>
					<div className="mb-2 ml-1 flex flex-col gap-1 text-sm">
						<span>
							1. 다양한 게시판 및 관련
							기능 제공
						</span>
						<span>
							2. 데일리 랭킹 기능 제공
						</span>
						<span>
							3. 팀원 모집 게시판과
							실시간 채팅 개발
						</span>
						<span>
							4. 텍스트 에디터 및
							템플릿 개발
						</span>
						<span>
							5. 댓글/좋아요/채택 기능
							개발
						</span>
					</div>

					<a
						href="http://13.125.188.241/"
						className="mb-4 text-sm text-blue-700 hover:text-teal-800"
					>
						http://13.125.188.241/
					</a>
					<div className="flex flex-wrap gap-2">
						<span className="rounded-md bg-orange-600 px-3 text-sm text-white">
							React
						</span>
						<span className="rounded-md bg-rose-200 px-2 text-sm text-black">
							TypeScript
						</span>
						<span className="rounded-md bg-cyan-800 px-3 text-sm text-white">
							TailwindCSS
						</span>
						<span className="rounded-md bg-yellow-400 px-3 text-sm text-black">
							NestJS
						</span>
						<span className="rounded-md bg-blue-800 px-3 text-sm text-white">
							Zustand
						</span>
						<span className="rounded-md bg-pink-800 px-3 text-sm text-white">
							Figma
						</span>
						<span className="rounded-md bg-pink-800 px-3 text-sm text-white">
							Slack
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
