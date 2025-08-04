import { useTranslation } from "react-i18next"

const Footer = () => {
    const {t} = useTranslation()
    return (
        <footer className="w-full min-h-[50px] p-2 border bg-background">
            <div className="flex justify-center items-center">
                <p>{t("footermadewith")} <span className="dark:text-background not-dark:hover:text-foreground not-dark:text-white dark:hover:text-white transition-all">{t("footermadewith2")}</span></p>
            </div>
        </footer>
    )
}

export default Footer