import { useTranslation } from "react-i18next"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"
import { Badge } from "../ui/badge"

const Projects = () => {
	const { t } = useTranslation()
	return (
		<section className="my-40 max-sm:my-20 flex justify-center py-6 relative">
			<div className="flex flex-col justify-between gap-6 sm:w-full md:w-[1080px]">
				<div className="sticky top-[70px] z-10 bg-background p-4">
					<p className="text-3xl" style={{ letterSpacing: ".2rem" }}>
						{t("projectSectionTitle")}
					</p>
				</div>
				<div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6">
					<Card className="basis-1/2 scroll-anim-slide-in-left">
						<CardHeader>
							<CardTitle className="text-2xl">Conecta Tamaulipas</CardTitle>
							<CardDescription className="text-[18px]">
								{t("projectConectaTampsDescription")}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Carousel
								opts={{
									loop: true,
								}}
							>
								<CarouselContent>
									<CarouselItem>
										<img
											src="img/conecta_tamps_1.webp"
											className="h-[380px] mx-auto object-contain"
										/>
									</CarouselItem>
									<CarouselItem>
										<img
											src="img/conecta_tamps_2.webp"
											className="h-[380px] mx-auto object-contain"
										/>
									</CarouselItem>
									<CarouselItem>
										<img
											src="img/conecta_tamps_3.webp"
											className="h-[380px] mx-auto object-contain"
										/>
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious className="left-0.5" />
								<CarouselNext className="right-0.5" />
							</Carousel>
							<hr className="my-4" />
							<p className="text-xl">{t("projectCardFooterTitle")}</p>
							<p className="font-[500]">Frontend</p>
							<div className="flex gap-4 flex-wrap mt-2">
								<Badge>Expo</Badge>
								<Badge>React Native</Badge>
								<Badge>React Navigation</Badge>
								<Badge>Lottie</Badge>
								<Badge>React Native Paper</Badge>
								<Badge>React Native Maps</Badge>
								<Badge>Expo Camera</Badge>
							</div>
							<p className="font-[500] mt-4">Backend</p>
							<div className="flex gap-4 flex-wrap mt-2">
								<Badge>Node JS</Badge>
								<Badge>Express</Badge>
								<Badge>Passport</Badge>
								<Badge>Express session</Badge>
								<Badge>MSSQL</Badge>
							</div>
						</CardContent>
					</Card>

					<Card className="basis-1/2 scroll-anim-slide-in-right">
						<CardHeader>
							<CardTitle className="text-2xl">
								Plataforma Integral de Análisis, Información, Georreferenciación
								y Estudios sobre Seguridad (PIAIGES)
							</CardTitle>
							<CardDescription className="text-[18px]">
								{t("projectPiaigesDescription")}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Carousel opts={{ loop: true }}>
								<CarouselContent>
									<CarouselItem>
										<img
											src="img/piaiges_movil_1.webp"
											className="h-[380px] mx-auto object-contain"
										/>
									</CarouselItem>
									<CarouselItem>
										<img
											src="img/piaiges_movil_2.webp"
											className="h-[380px] mx-auto object-contain"
										/>
									</CarouselItem>
									<CarouselItem>
										<img
											src="img/piaiges_movil_3.webp"
											className="h-[380px] mx-auto object-contain"
										/>
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious className="left-0.5" />
								<CarouselNext className="right-0.5" />
							</Carousel>

							<hr className="my-4" />
							<p className="text-xl">{t("projectCardFooterTitle")}</p>
							<p className="font-[500]">Frontend</p>
							<div className="flex gap-4 flex-wrap mt-2">
								<Badge>Expo</Badge>
								<Badge>React Native</Badge>
								<Badge>React Navigation</Badge>
								<Badge>Lottie</Badge>
								<Badge>React Native Paper</Badge>
								<Badge>React Native Maps</Badge>
							</div>
							<p className="font-[500] mt-4">Backend</p>
							<div className="flex gap-4 flex-wrap mt-2">
								<Badge>Node JS</Badge>
								<Badge>Express</Badge>
								<Badge>Passport</Badge>
								<Badge>Express session</Badge>
								<Badge>MSSQL</Badge>
							</div>
						</CardContent>
					</Card>

					<Card className="basis-1/2 scroll-anim-slide-in-left">
						<CardHeader>
							<CardTitle className="text-2xl">Mexplor</CardTitle>
							<CardDescription className="text-[18px]">
								{t("projectMexplorDescripcion")}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Carousel
								opts={{
									loop: true,
								}}
							>
								<CarouselContent>
									<CarouselItem>
										<img
											src="img/mexplor_1.webp"
											className="h-[380px] mx-auto object-contain"
										/>
									</CarouselItem>
									<CarouselItem>
										<img
											src="img/mexplor_2.webp"
											className="h-[380px] mx-auto object-contain"
										/>
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious className="left-0.5" />
								<CarouselNext className="right-0.5" />
							</Carousel>

							<hr className="my-4" />
							<p className="text-xl">{t("projectCardFooterTitle")}</p>
							<p className="font-[500]">Frontend</p>
							<div className="flex gap-4 flex-wrap mt-2">
								<Badge>Expo</Badge>
								<Badge>React Native</Badge>
								<Badge>React Navigation</Badge>
								<Badge>Lottie</Badge>
								<Badge>React Native Paper</Badge>
								<Badge>React Native Maps</Badge>
								<Badge>React Native In App Purchases</Badge>
								<Badge>React Native Track Player</Badge>
							</div>
						</CardContent>
					</Card>

					<Card className="basis-1/2 scroll-anim-slide-in-right">
						<CardHeader>
							<CardTitle className="text-2xl">
								Plataforma Integral de Análisis, Información, Georreferenciación
								y Estudios sobre Seguridad (PIAIGES) Web
							</CardTitle>
							<CardDescription className="text-[18px]">
								{t("projectPiaigesWebDescription")}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Carousel
								opts={{
									loop: true,
								}}
							>
								<CarouselContent>
									<CarouselItem>
										<img
											src="img/piaiges_web_1.png"
											className="w-[380px] h-[380px] mx-auto object-contain"
										/>
									</CarouselItem>
									<CarouselItem>
										<img
											src="img/piaiges_web_2.png"
											className="w-[380px] h-[380px] mx-auto object-contain"
										/>
									</CarouselItem>
								</CarouselContent>
								<CarouselPrevious className="left-0.5" />
								<CarouselNext className="right-0.5" />
							</Carousel>

							<hr className="my-4" />
							<p className="text-xl">{t("projectCardFooterTitle")}</p>
							<div className="flex gap-4 flex-wrap mt-2">
								<Badge>ASP .NET</Badge>
								<Badge>.NET Framework 4.5</Badge>
								<Badge>Google Maps API for Javascript</Badge>
								<Badge>HighCharts</Badge>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	)
}

export default Projects
