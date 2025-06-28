import Info from "../../../Components/info/Info";
import { ProgressCircle } from "@tremor/react";

interface DetailCardData {
    title: string;
    value: number;
    color: string;
}

const detailCardsData: DetailCardData[] = [
    { title: "Very High", value: 32, color: "#4836FF" },
    { title: "High", value: 6, color: "#FE749B" },
    { title: "Medium", value: 30, color: "#A49BFF" },
    { title: "Low", value: 1, color: "#10DAB6" },
    { title: "Very Low", value: 4, color: "#FFC155" },
];

const PurchaseIntent = () => {

    return (
        <div className="bg-white dark:bg-dark-secondary-dark rounded-xl w-full flex flex-col gap-5 p-3 md:p-6">

            {/* Heading section */}
            <div className="flex flex-col lg:flex-row w-full relative gap-[10px] items-start justify-between">
                <div className="flex flex-col">
                    <div className="flex gap-1 items-center">
                        <span className="font-medium text-xl text-black dark:text-white">
                            Purchase Intent
                        </span>
                        <Info height={5} weight={5} isTooltip={true} />
                    </div>
                    <span className="mt-2 w-auto text-sm text-grey font-medium">
                        adidas Originals: Into the Metaverse (Phase 1) holders level of intent to purchase a web3 product in the next 1-3 next
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 w-full rounded-xl gap-3 md:gap-8">
                {/* <div className="w-full rounded-xl flex gap-8 flex-col lg:flex-row"> */}
                {detailCardsData.map((item, index) => (
                    <div key={index} className="flex gap-8 w-full flex-col sm:flex-row">
                        <div className="flex flex-col flex-1 p-6 lg:p-10 rounded-xl bg-light-black-light dark:bg-dark-black-light opacity-1">
                            <div className="flex flex-col relative h-full justify-center items-center">
                                <ProgressCircle
                                    value={item?.value}
                                    size="xl"
                                    strokeWidth={15}
                                    color={item?.color}
                                    className="circleChart"
                                >
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="text-lg text-grey">
                                            {item?.title}
                                        </div>
                                        <div className="text-[22px] font-semibold text-black dark:text-white">
                                            {item?.value}%
                                        </div>
                                    </div>
                                </ProgressCircle>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PurchaseIntent;