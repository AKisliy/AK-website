import Image from "next/image";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaJsSquare } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

export default function MainPreview() {
    return (
        <div className="flex flex-row max-w-full mt-24 gap-10">
            <div className="flex flew-row items-center justify-start">
                <Image 
                    src={"/main.jpeg"} 
                    alt="mehappy"
                    width={500}
                    height={500}
                />
            </div>
            <div className="flex flex-col text-center items-start  gap-16">
                <div className="font-bold text-xl mt-10 uppercase">
                    Hi there
                </div>
                <div className="flex flex-col gap-3 items-start font-bold text-5xl">
                    <span>I’m Alexey Kiselev</span>
                    <span>FULL-STACK DEVELOPER</span>
                    <span>based in Moscow</span>
                </div>
                <div className="flex flex-row gap-8">
                    <AiOutlineDotNet size={80} />
                    <FaJsSquare size={80} />
                    <SiPostgresql size={80} />
                </div>
            </div>
        </div>
    )
}