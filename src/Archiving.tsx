import { IoLinkOutline } from "react-icons/io5";

export const Archiving = () => {
	return (
		<div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 px-5">
			<div>
				<div className="flex flex-row items-center gap-2">
					<IoLinkOutline className="font-archivo text-5xl font-bold text-gray-400" />
					<span className="font-dynapuff text-4xl font-bold text-white md:text-6xl">
						ARCHIVING
					</span>
				</div>
				<hr className="mb-4 border-2 border-teal-900" />
			</div>

			<div className="grid w-full grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:max-w-3xl lg:grid-cols-2">
				<a
					href="https://github.com/IIINHWAA"
					className="flex transform items-center gap-5 rounded-3xl bg-white p-4 transition duration-300 hover:scale-105"
				>
					<img
						className="h-20 w-20"
						src="src/assets/25231.png"
					/>
					<div className="flex flex-col">
						<span className="font-dynapuff text-4xl font-bold hover:text-teal-800">
							GitHub
						</span>
						<span className="font-jua">
							깃허브 저장소 이동하기
						</span>
					</div>
				</a>

				<a
					href="https://dev-inamon.tistory.com/"
					className="flex transform items-center gap-5 rounded-3xl bg-white p-4 transition duration-300 hover:scale-105"
				>
					<img
						className="h-20 w-20"
						src="src/assets/14343537.png"
					/>
					<div className="flex flex-col">
						<span className="font-dynapuff text-4xl font-bold hover:text-teal-800">
							Tistory
						</span>
						<span className="font-jua">
							Tistory 블로그 이동하기
						</span>
					</div>
				</a>
			</div>
		</div>
	);
};
