// import ApplicationsTable from "@/components/ApplicationsTable";
// import { Suspense } from "react";
// import ApplicationTableSkeleton from "@/components/ApplicationTableSkeleton";

export default async function AdminApplicationView() {
    // EurekaHACKS 2025 is over and the database is offline. The dashboard layout renders the
    // archived notice, so this page only needs to avoid querying the dead database.
    return null;

    // return (
    //     <div className="mt-12">
    //         <Suspense fallback={<ApplicationTableSkeleton/>} key={(await searchParams).page}>
    //             <ApplicationsTable searchParams={searchParams}/>
    //         </Suspense>
    //     </div>
    // );
}
