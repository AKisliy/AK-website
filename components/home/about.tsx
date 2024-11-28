import { Button } from "../ui/button";

export default function AboutSection() {
    return (
        <div className="flex flex-col justify-start gap-6">
            <div className="block w-fit text-lg uppercase font-bold relative after:content-[''] after:block  after:h-[4px] after:mt-1 after:bg-purple-600">
                About me
            </div>
            <div className="text-2xl font-normal">
                I'm HSE CS student and part time Junior FullStack developer (.NET + JS) from Russia. I'm currently learning .NET, web concepts and machine learning 
                🧠 Regulary practicing on LeetCode
                🎯 Aiming to become senior .NET developer.
            </div>
            <div className="flex flex-row justify-center mt-6">
                <Button
                    className="text-purple-600 border-purple-600 text-sm p-6 uppercase rounded-full font-bold tracking-widest hover:bg-foreground hover:text-background"
                    variant="outline"
                >
                    Download resume
                </Button>
            </div>
        </div>
    )
}