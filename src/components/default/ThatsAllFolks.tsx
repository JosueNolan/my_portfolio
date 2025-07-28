import Lottie from "lottie-react"
import confetti from "../../assets/lottie/confetti.json"
import { useTranslation } from "react-i18next"

const ThatsAllFolks = () => {
    const {t} = useTranslation()
    return (
        <div className="my-72 max-sm:my-20 flex justify-center">
            <div className="w-[1080px] max-sm:w-full flex flex-col items-center">
                <Lottie
                    animationData={confetti}
                    loop
                />

                <p className="text-6xl">{t("thanks")}</p>
                <p className="text-4xl mt-7 text-center">{t("thanks2")}</p>
            </div>
        </div>
    )
}

export default ThatsAllFolks