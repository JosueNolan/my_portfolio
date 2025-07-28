import AboutMe from "@/components/default/AboutMe"
import Contact from "@/components/default/Contact"
import Education from "@/components/default/Education"
import Jobs from "@/components/default/Jobs"
import Projects from "@/components/default/Projects"
import Skills from "@/components/default/Skills"
import ThatsAllFolks from "@/components/default/ThatsAllFolks"

const DefaultPage = () => {
	return (
		<div className="min-h-[80dvh]">
			<div className="mt-12 mb-56">
				<AboutMe />
			</div>
			<Jobs/>
			<Education/>
            <Projects/>
			<Skills/>
			<Contact/>
			<ThatsAllFolks/>
		</div>
	)
}

export default DefaultPage