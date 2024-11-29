import SectionTitle from "@/components/common/section-title";
import SkillsGrid from "./skills-grid";

export default function SkillsSection() {
    const coreSkills = [
        ".NET",
        "C#",
        "Postgres",
        "JavaScript",
        "React",
        "HTML + CSS",
        "Docker",
        "Git"
    ];

    const otherSkills = [
        "Python",
        "ML/DL",
        "RabbitMQ",
        "C++",
        "Java",
        "Figma"
    ]

    return (
        <div className="flex flex-col lg:flex-row justify-around w-full gap-4"> 
            <div className="flex flex-col w-full lg:w-1/2 justify-start gap-8">
                <SectionTitle sectionTitle="Core skills" />
                <SkillsGrid skills={coreSkills} />
            </div>
            <div className="flex flex-col w-full lg:w-1/2 justify-start gap-8">
                <SectionTitle sectionTitle="Other skills" />
                <SkillsGrid skills={otherSkills} />
            </div>
        </div>
    )
}