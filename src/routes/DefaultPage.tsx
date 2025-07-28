import AboutMe from "@/components/default/AboutMe"
import Contact from "@/components/default/Contact"
import Projects from "@/components/default/Projects"
import Skills from "@/components/default/Skills"
import ThatsAllFolks from "@/components/default/ThatsAllFolks"

const DefaultPage = () => {
	return (
		<div className="min-h-[80dvh]">
			<div className="mt-12 mb-56">
				<AboutMe />
			</div>
            <Projects/>
			<Skills/>
			<Contact/>
			<ThatsAllFolks/>
		</div>
	)
}

export default DefaultPage