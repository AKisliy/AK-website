import SkillLabel from "./skill-label";

export default function SkillsGrid({ skills }: { skills: string[] }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            { skills.map((s, idx) => (
                <SkillLabel label={s} key={idx} />
            ))}
        </div>
    )
}