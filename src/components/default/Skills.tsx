import { useTranslation } from "react-i18next"
import { FaReact } from "react-icons/fa"
import {
	SiExpo,
	SiDotnet,
	SiMysql,
	SiMongodb,
	SiCodeigniter,
} from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"
import { BiLogoPostgresql } from "react-icons/bi"
import { DiMsqlServer } from "react-icons/di"
import { FaPhp, FaLaravel, FaNode, FaHtml5, FaCss3Alt } from "react-icons/fa"
import FlipCard from "../FlipCard"

const Skills = () => {
	const { t } = useTranslation()

	return (
		<section className="my-40 max-sm:my-20 flex justify-center relative">
			<div className="flex flex-col items-center sm:w-full md:w-[1080px]">
				<div className="sticky top-[75px] z-10 bg-background p-4 rounded ring-2 ring-blue-500 w-full">
					<p className="text-3xl" style={{ letterSpacing: ".2rem" }}>
						{t("skillsTitle")}
					</p>
				</div>

				<div className="grid grid-cols-4 p-5 w-full gap-8 items-stretch flex-wrap mt-4">
					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*1}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<FaHtml5 size={96} />
									<p className="text-3xl my-2 text-center">HTML 5</p>
								</>
							}
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*2}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<FaCss3Alt size={96} />
									<p className="text-3xl my-2 text-center">CSS 3</p>
								</>
							}
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*3}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<FaReact size={96} />
									<p className="text-3xl my-2">React</p>
								</>
							}
							back={
								<div className="flex flex-col items-center">
									<p className="font-medium">{t("reactSkillsDescription")}:</p>
									<ul className="!list-disc">
										<li>Tanstack react query</li>
										<li>React Router</li>
										<li>Mui Material</li>
										<li>Shadcn/UI</li>
										<li>Zustand</li>
										<li>Context</li>
										<li>Redux</li>
										<li>React Hook Form</li>
										<li>Zod</li>
										<li>Custom Hooks</li>
										<li>Lottie</li>
										<li>TypeScript</li>
									</ul>
								</div>
							}
							backCardTitle="React"
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*4}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<TbBrandReactNative size={96} />
									<p className="text-3xl my-2">React Native</p>
								</>
							}
							back={
								<div className="flex flex-col items-center">
									<p className="font-medium">
										{t("reactNativeSkillsDescription")}:
									</p>
									<ul className="!list-disc">
										<li>Tanstack react query</li>
										<li>Zustand</li>
										<li>Context</li>
										<li>Redux</li>
										<li>React Hook Form</li>
										<li>Zod</li>
										<li>Custom Hooks</li>
										<li>Lottie</li>
										<li>React Navigation</li>
										<li>React Native Paper</li>
										<li>React Native Elements</li>
										<li>React Native IAP</li>
										<li>React Native Reanimated</li>
										<li>Gorhom Bottom Sheet</li>
										<li>Async Storage</li>
										<li>TypeScript</li>
									</ul>
								</div>
							}
							backCardTitle="React Native"
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*5}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<SiExpo size={96} />
									<p className="text-3xl my-2 text-center">Expo</p>
								</>
							}
							back={
								<div className="flex flex-col items-center">
									<p className="font-medium">{t("expoSkillsDescription")}:</p>
									<ul className="!list-disc">
										<li>Expo File System</li>
										<li>Expo Camera</li>
										<li>Document Picker</li>
										<li>Image Picker</li>
										<li>Location ({t("expoLocation")})</li>
										<li>Expo Font</li>
										<li>{t("pushNotifications")}</li>
										<li>Expo Application Services</li>
										<li>{t("storePublishing")}</li>
									</ul>
								</div>
							}
							backCardTitle="Expo"
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*6}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<FaNode size={96} />
									<p className="text-3xl my-2 text-center">Node JS</p>
								</>
							}
							back={
								<div className="flex flex-col items-center">
									<p className="font-medium">{t("nodeSkillsDescription")}:</p>
									<ul className="!list-disc">
										<li>Express</li>
										<li>Sequelize</li>
										<li>Moongoose</li>
										<li>Passport</li>
										<li>Express Session</li>
										<li>Multer</li>
										<li>TypeScript</li>
										<li>Middleware</li>
										<li>File Management</li>
										<li>Nodemailer</li>
										<li>{t("fileManagement")} (node/fs)</li>
										<li>{t("oop")}</li>
										<li>{t("desingPatterns")}</li>
										<li>{t("functionalProgramming")}</li>
									</ul>
								</div>
							}
							backCardTitle="Node JS"
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*7}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<FaPhp size={96} />
									<p className="text-3xl my-2 text-center">PHP</p>
								</>
							}
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*8}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<SiCodeigniter size={96} />
									<p className="text-3xl my-2 text-center">CodeIgniter 3</p>
								</>
							}
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*9}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<FaLaravel size={96} />
									<p className="text-3xl my-2 text-center">Laravel</p>
								</>
							}
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*10}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<SiDotnet size={96} />
									<p className="text-3xl my-2 text-center">ASP .NET</p>
								</>
							}
							back={
								<div className="flex flex-col items-center">
									<p className="font-medium">{t("aspSkillsDescription")}:</p>
									<ul className="!list-disc">
										<li>Entity Framework</li>
										<li>LINQ</li>
										<li>MVC</li>
										<li>{t("dependencyInjection")}</li>
									</ul>
								</div>
							}
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*11}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<BiLogoPostgresql size={96} />
									<p className="text-3xl my-2 text-center">Postgres SQL</p>
								</>
							}
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*12}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<SiMysql size={96} />
									<p className="text-3xl my-2 text-center">MySQL</p>
								</>
							}
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*13}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<DiMsqlServer size={96} />
									<p className="text-2xl my-2 text-center">MS SQL Server</p>
								</>
							}
						/>
					</div>

					<div
						className="scale-up-center"
						style={{
							animationTimeline: "view()",
							animationRange: "0% 50%",
							animationDelay: `${100*14}ms`
						}}
					>
						<FlipCard
							front={
								<>
									<SiMongodb size={96} />
									<p className="text-3xl my-2 text-center">Mongo DB</p>
								</>
							}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
