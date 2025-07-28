import { useRef, useState, type FC } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { cn } from "@/lib/utils"

type TFlipCard = {
	front: React.ReactNode
	back?: React.ReactNode
	frontCardTitle?: string
	backCardTitle?: string
}

const FlipCard: FC<TFlipCard> = ({
	front,
	back,
	frontCardTitle,
	backCardTitle,
}) => {
	const [state, setState] = useState(false)
	const cardRef = useRef<HTMLDivElement>(null)

	return (
		<div
			ref={cardRef}
			className={cn(
				"relative size-full transition duration-500 [transform-style:preserve-3d] min-h-50 max-sm:min-h-72",
				state && "[transform:rotateY(180deg)]"
			)}
		>
			<Card
				className={cn("absolute size-full backface-hidden gap-2", back && "cursor-pointer hover:ring-4 hover:ring-blue-500")}
				onClick={() => back && setState(prev => !prev)}
			>
				{frontCardTitle && (
					<CardHeader>
						<CardTitle className="text-xl">{frontCardTitle}</CardTitle>
					</CardHeader>
				)}
				<CardContent className="flex flex-col justify-center items-center !h-full">
					{front}
				</CardContent>
			</Card>

			<Card
				className="gap-2 absolute size-full hover:ring-4 hover:ring-blue-500 cursor-pointer backface-hidden [transform:rotateY(180deg)] overflow-auto py-2"
				onClick={() => setState(prev => !prev)}
                style={{
                    scrollbarColor: "#CCC transparent"
                }}
			>
                {backCardTitle && (
					<CardHeader>
						<CardTitle className="text-xl">{backCardTitle}</CardTitle>
					</CardHeader>
				)}
				<CardContent className="flex flex-col justify-center items-center">
					{back}
				</CardContent>
			</Card>
		</div>
	)
}

export default FlipCard
