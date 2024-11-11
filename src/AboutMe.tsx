import { IoLinkOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BsCalendarDateFill } from "react-icons/bs";
import { FaMapMarker } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoSchool } from "react-icons/io5";

export const AboutMe = () => {
	return (
		<div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4">
			<div>
				<div className="flex flex-row items-center gap-2">
					<IoLinkOutline className="font-archivo text-5xl font-bold text-gray-400" />
					<span className="font-dynapuff text-4xl font-bold text-black md:text-6xl">
						ABOUT ME
					</span>
				</div>
				<hr className="mb-4 border-2 border-rose-50" />
			</div>

			<div className="grid w-full max-w-5xl grid-cols-1 px-4 sm:grid-cols-2 lg:grid-cols-3">
				{/* 이름 */}
				<div className="flex items-center gap-5 p-4">
					<FaUser className="text-3xl" />
					<div className="flex flex-col">
						<span className="text-base font-bold">
							이름
						</span>
						<span className="text-sm text-gray-600">
							정인화
						</span>
					</div>
				</div>

				{/* 생년월일 */}
				<div className="flex items-center gap-5 p-4">
					<BsCalendarDateFill className="text-3xl" />
					<div className="flex flex-col">
						<span className="text-base font-bold">
							생년월일
						</span>
						<span className="text-sm text-gray-600">
							2000.07.11
						</span>
					</div>
				</div>

				{/* 거주지 */}
				<div className="flex items-center gap-5 p-4">
					<FaMapMarker className="text-3xl" />
					<div className="flex flex-col">
						<span className="text-base font-bold">
							거주지
						</span>
						<span className="text-sm text-gray-600">
							인천광역시 계양구
						</span>
					</div>
				</div>

				{/* 연락처 */}
				<div className="flex items-center gap-5 p-4">
					<FaPhone className="text-3xl" />
					<div className="flex flex-col">
						<span className="text-base font-bold">
							연락처
						</span>
						<span className="text-sm text-gray-600">
							010-2973-3021
						</span>
					</div>
				</div>

				{/* 이메일 */}
				<div className="flex items-center gap-5 p-4">
					<MdEmail className="text-3xl" />
					<div className="flex flex-col">
						<span className="text-base font-bold">
							이메일
						</span>
						<span className="text-sm text-gray-600">
							dlsghk0711@naver.com
						</span>
					</div>
				</div>

				{/* 학력 */}
				<div className="flex items-center gap-5 p-4">
					<IoSchool className="text-3xl" />
					<div className="flex flex-col">
						<span className="text-base font-bold">
							학력
						</span>
						<span className="text-sm text-gray-600">
							인천대학교 컴퓨터공학부
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
