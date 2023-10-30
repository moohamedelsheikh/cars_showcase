"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";

// import { CustomButton } from "@components";
import { CustomBoton } from ".";

const ShowMore = ({ pageNumber, isNext,setLimit }: ShowMoreProps) => {
    // const router = useRouter();

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;

        // const newPathname = updateSearchParams("limit", `${newLimit}`);

        // router.push(newPathname);
        setLimit(newLimit)
    };

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {!isNext && (
                <CustomBoton
                    btnType="button"
                    title="Show More"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )}
        </div>
    );
};

export default ShowMore;