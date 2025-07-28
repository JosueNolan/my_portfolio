import { useTranslation } from "react-i18next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const Education = () => {
	const { t } = useTranslation()

	return (
		<section className="md:my-40 sm:my-20 flex justify-center">
			<div className="flex flex-col items-center max-sm:w-full md:w-[1080px]">
				<div className="sticky top-[5px] sm:top-[75px] z-10 bg-background p-4 rounded ring-2 ring-blue-500 w-full">
					<p className="text-3xl" style={{ letterSpacing: ".2rem" }}>
						{t("educationTitle")}
					</p>
				</div>

				<div className="flex items-center gap-4 w-full mt-4">
					<p className="text-xl flex-1/7 hidden sm:block">{t("tecvictoriadates")}</p>
					<div className="h-full w-[1px] border-l border-neutral-300 hidden sm:block"></div>
					<Card className="flex-6/7 scroll-width-grow-left">
						<CardHeader>
							<CardTitle className="text-xl">
								{t("tecvictoriatitle")}
							</CardTitle>
							<CardDescription className="block sm:hidden">
								{t("tecvictoriadates")}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p>{t("tecvictoriadescription")}</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}

export default Education
