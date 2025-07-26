import { useTranslation } from "react-i18next"
import { useTheme } from "../ThemeProvider"

const AboutMe = () => {
	const { theme } = useTheme()
    const {t} = useTranslation()
	return (
		<section className="mt-10 flex justify-center py-6">
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
					<p className="text-4xl max-sm:text-center" style={{ letterSpacing: ".4rem" }}>
						Josué Nolasco
					</p>
					<p className="text-xl max-sm:text-[18px]" style={{ letterSpacing: ".2rem" }}>
						{t("aboutMe")}
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutMe
