import { useTranslation } from "react-i18next"
import { useTheme } from "../ThemeProvider"
import { Button } from "../ui/button"
import { FaLinkedin } from "react-icons/fa"
import { IoDocumentText } from "react-icons/io5"

const AboutMe = () => {
	const { theme } = useTheme()
	const { t, i18n } = useTranslation()
	return (
		<section className="flex justify-center py-6 my-32">
			<div className="flex items-center justify-between gap-[72px] sm:w-full md:w-[1080px] max-sm:flex-col">
				<img
					src="img/foto_josue.jpg"
					className="w-[22rem] h-[22rem] rounded shadow-accent-foreground"
					style={{
						transition: "box-shadow 0.3s ease, filter 0.3s ease",
						boxShadow:
							theme === "light"
								? "0 6px 20px rgba(0, 0, 0, 0.1)"
								: "0 2px 24px rgba(255, 255, 255, 0.6)",
						filter: theme === "dark" ? "brightness(0.9)" : undefined,
					}}
				/>
				<div className="flex flex-col gap-8">
					<p
						className="text-4xl max-sm:text-center"
						style={{ letterSpacing: ".4rem" }}
					>
						Josué Nolasco
					</p>
					<p
						className="text-xl max-sm:text-[18px]"
						style={{ letterSpacing: ".2rem" }}
					>
						{t("aboutMe")}
					</p>
					<div className="flex gap-6 items-center">
						<Button variant="link" asChild>
							<a href="https://www.linkedin.com/in/josue-nolasco-97b9b5247" target="_blank">
								<FaLinkedin />
								Linkedin
							</a>
						</Button>

						<Button variant="link" asChild>
							<a href={`/my_portfolio/docs/${i18n.language === "en" ? "Josue_Nolasco_CV_2025_ENGLISH" : "CV_Josue_Nolasco_2025"}.pdf`} target="_blank">
								<IoDocumentText />
								{t("resume")}
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
