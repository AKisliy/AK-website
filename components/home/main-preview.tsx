import Image from "next/image";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaJsSquare } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

export default function MainPreview() {
    return (
        <div className="flex flex-col lg:flex-row max-w-full mt-8 lg:mt-24 gap-10">
            <div className="flex items-center justify-start">
                <Image 
                    src={"/main.jpeg"} 
                    alt="mehappy"
                    width={500}
                    height={500}
                />
            </div>
            <div className="flex flex-col text-center items-start gap-4 lg:gap-16">
                <div className="font-medium text-base lg:text-xl lg:mt-10 uppercase">
                    Hi there
                </div>
                <div className="flex flex-col gap-3 items-start text-start font-bold text-3xl lg:text-5xl">
                    <span>I’m Alexey Kiselev</span>
                    <span>FULL-STACK DEVELOPER</span>
                    <span>based in Moscow</span>
                </div>
                <div className="flex flex-row gap-8">
                    <AiOutlineDotNet className="text-6xl sm:text-7xl"  />
                    <FaJsSquare className="text-6xl sm:text-7xl" />
                    <SiPostgresql className="text-6xl sm:text-7xl" />
                </div>
            </div>
        </div>
    )
}