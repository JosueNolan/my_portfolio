import { useTranslation } from "react-i18next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const Jobs = () => {
    const {t} = useTranslation()

    return (
        <section className="my-42 max-sm:my-20 flex justify-center">
            <div className="flex flex-col md:w-[1080px] max-sm:w-full gap-6">
                <div className="sticky top-[5px] sm:top-[75px] z-10 bg-background p-4 rounded ring-1 ring-blue-500">
					<p className="text-3xl" style={{ letterSpacing: ".2rem" }}>
						{t("jobSectionTitle")}
					</p>
				</div>

                <div className="flex items-center gap-4">
                    <p className="text-xl flex-1/7 hidden sm:block">{t("smartcitydates")}</p>
                    <div className="h-full w-[1px] border-l border-neutral-300 hidden sm:block"></div>
                    <Card className="flex-6/7 scroll-width-grow-left">
                        <CardHeader>
                            <CardTitle className="text-xl">Smart City Soft</CardTitle>
                            <CardDescription className="block sm:hidden">{t("smartcitydates")}</CardDescription>
                            <CardDescription>{t("parttimejob")}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{t("smartcitydescription")}</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex items-center gap-4">
                    <p className="text-xl flex-1/7 hidden sm:block">{t("sesespDates")}</p>
                    <div className="h-full w-[1px] border-l border-neutral-300 hidden sm:block"></div>
                    <Card className="flex-6/7 scroll-width-grow-left">
                        <CardHeader>
                            <CardTitle className="text-xl">Secretariado Ejecutivo del Sistema Estatal de Seguridad Pública Tamaulipas</CardTitle>
                            <CardDescription className="block sm:hidden">{t("sesespDates")}</CardDescription>
                            <CardDescription>{t("fulltimejob")}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{t("sesespDescription")}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Jobs