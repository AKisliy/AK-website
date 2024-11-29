import SectionTitle from "../common/section-title";
import { Button } from "../ui/button";

export default function AboutSection() {
    return (
        <div className="flex flex-col justify-start gap-8">
            <SectionTitle sectionTitle="About me"/>
            <div className="text-base lg:text-2xl font-normal">
                I'm HSE CS student and part time Junior FullStack developer (.NET + JS) from Russia. I'm currently learning .NET, web concepts and machine learning 
                🧠 Regulary practicing on LeetCode
                🎯 Aiming to become senior .NET developer.
            </div>
            <div className="flex flex-row justify-center mt-4">
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