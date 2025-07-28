import { useTranslation } from "react-i18next"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

const Contact = () => {
	const { t } = useTranslation()
	return (
		<section className="my-52 max-sm:my-20 flex justify-center">
			<div className="flex flex-col justify-between gap-6 sm:w-full md:w-[1080px]">
				<Card>
					<CardHeader>
						<CardTitle className="text-3xl">{t("contactMe")}</CardTitle>
					</CardHeader>
					<CardContent>
						<ul className="!list-disc mx-12">
							<li className="text-xl">{t("emailmeat")}</li>
                            <li className="text-xl">{t("phonecallme")}<Button variant="link" className="text-xl" asChild>{<a href="https://wa.me/528342523284">{t("whatsappmessage")}</a>}</Button></li>
						</ul>

                        <p className="text-xl mt-2">{t("justremote")}</p>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

export default Contact
