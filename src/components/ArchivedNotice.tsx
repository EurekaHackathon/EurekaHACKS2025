import Link from "next/link";

interface ArchivedNoticeProps {
    title: string;
    description: string;
}

export default function ArchivedNotice({title, description}: ArchivedNoticeProps) {
    return (
        <div className="bg-secondary-200 flex items-center justify-center p-12 md:p-32 flex-grow min-h-screen">
            <div
                className="bg-gray-50 p-8 md:p-12 lg:p-16 rounded-2xl text-gray-700 min-w-[40vw] max-w-[90vw] lg:w-[750px]">
                <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
                <h2 className="md:text-xl font-medium pt-2">{description}</h2>
                <p className="pt-6">
                    EurekaHACKS 2025 has concluded and accounts are no longer available. You can head
                    <Link className="whitespace-pre font-semibold text-secondary-600" href="/"> back to the homepage </Link>
                    or reach us at
                    <a className="whitespace-pre font-semibold text-secondary-600"
                       href="mailto:hello@eurekahacks.ca"> hello@eurekahacks.ca</a>.
                </p>
            </div>
        </div>
    );
}
