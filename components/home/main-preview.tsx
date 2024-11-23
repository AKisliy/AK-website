import Image from "next/image";

export default function MainPreview() {
    return (
        <div className="flex flex-row max-w-full justify-evenly">
            <div className="flex w-1/2">
                <Image 
                    src={"/main.jpeg"} 
                    alt="mehappy"
                    width={250}
                    height={250}
                />
            </div>
            <div className="flex flex-col text-center items-start w-1/2">
                Hi, there
            </div>
        </div>
    )
}