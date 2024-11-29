export default function SectionTitle({ sectionTitle }: { sectionTitle: string }) {
    return (
        <div className="block w-fit text-lg uppercase font-bold relative after:content-[''] after:block  after:h-[4px] after:mt-1 after:bg-purple-600">
            { sectionTitle }
        </div>
    )
}