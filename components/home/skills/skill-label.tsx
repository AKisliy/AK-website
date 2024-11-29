export default function SkillLabel({ label }: { label: string }) {
    return (
        <div className="bg-card border text-base lg:text-lg font-semibold rounded-full py-3 px-6 w-fit mr-4 mb-4">
            { label }
        </div>
    )
}