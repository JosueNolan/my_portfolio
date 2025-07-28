import { langDictionary } from "@/lib/utils"
import { useTheme } from "./ThemeProvider"
import { Button } from "./ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Switch } from "./ui/switch"
import { useTranslation } from "react-i18next"
import { useEffect, useRef } from "react"

const Header = () => {
	const { setTheme, theme } = useTheme()
	const { t, i18n } = useTranslation()
	const headerRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const scrollEvent = () => {
			if (window.scrollY > 75) {
				headerRef.current?.classList.add("border", "border-b-blue-500")
				headerRef.current?.classList.add("bg-background")
			} else {
				headerRef.current?.classList.remove("border", "border-b-blue-500")
				headerRef.current?.classList.remove("bg-background")
			}
		}
		
		window.addEventListener("scroll",  scrollEvent)
		return () => {
			window.removeEventListener("scroll", scrollEvent)
		}
	}, [])

	return (
		<header
			ref={headerRef}
			className="fixed top-0 px-10 py-4 w-full flex max-sm:flex-col items-center justify-between max-h-[75px] max-sm:max-h-fit max-sm:gap-y-2 z-[1000]"
			style={{
				transition: "border-bottom 200ms ease-in-out, background 200ms ease-in-out"
			}}
		>
			<p className="text-2xl">{t("headerTitle")}</p>

			<div className="flex items-center gap-10">
				<label className="flex items-center gap-2 cursor-pointer">
					<Switch
						defaultChecked={theme === "light"}
						onCheckedChange={val => setTheme(val ? "light" : "dark")}
						className="cursor-pointer"
					/>
					{t(`${theme}ThemeTranslation`)}
				</label>

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button className="cursor-pointer">
							{langDictionary[i18n.language as keyof typeof langDictionary] ||
								i18n.language}
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="z-[10001]">
						<DropdownMenuLabel>{t("langChangeLabel")}</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={() => i18n.changeLanguage("es-419")}>
							{t("langChangeItem1")}
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>
							{t("langChangeItem2")}
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	)
}

export default Header
