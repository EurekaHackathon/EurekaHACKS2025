import ArchivedNotice from "@/components/ArchivedNotice";

// import Link from "next/link";

export default async function ResetPasswordSuccessPage() {
    // EurekaHACKS 2025 is over and the database is offline, so this page is no longer reachable.
    // return <>
    //     <div className="bg-secondary-200 flex items-center justify-center p-32 flex-grow min-h-screen">
    //         <div
    //             className="bg-gray-50 p-8 md:p-12 lg:p-16 rounded-2xl text-gray-700 min-w-[70vw] lg:min-w-[40vw] max-w-[90vw] lg:w-[750px]">
    //             <h1 className="text-xl md:text-4xl font-bold">Successfully reset password</h1>
    //             <h2 className="md:text-xl font-medium pt-2">
    //                 Your password has been changed
    //             </h2>
    //             <p className="pt-6">You may
    //                 <Link className="lg:pt-6 whitespace-pre font-semibold text-secondary-600"
    //                       href="/login"> log in</Link> now.
    //             </p>
    //         </div>
    //     </div>
    // </>;

    return <ArchivedNotice
        title="Password resets are unavailable"
        description="Hacker accounts for EurekaHACKS 2025 have been archived."
    />;
}
