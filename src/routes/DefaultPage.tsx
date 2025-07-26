import AboutMe from "@/components/default/AboutMe"
import Projects from "@/components/default/Projects"
import { useTheme } from "@/components/ThemeProvider"
import { useTranslation } from "react-i18next"

const DefaultPage = () => {
	const { t } = useTranslation()
	const { theme } = useTheme()
	return (
		<div className="min-h-[80dvh]">
			<AboutMe />
            <Projects/>
		</div>
	)
}

export default DefaultPage
