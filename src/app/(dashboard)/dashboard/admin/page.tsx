// import { Suspense } from "react";
// import AdminStats from "@/components/AdminStats";
// import AdminStatsSkeleton from "@/components/AdminStatsSkeleton";
// import AdminGraphs from "@/components/AdminGraphs";

export default async function AdminOverview() {
    // EurekaHACKS 2025 is over and the database is offline. The dashboard layout renders the
    // archived notice, so this page only needs to avoid querying the dead database.
    return null;

    // return (
    //     <Suspense fallback={<AdminStatsSkeleton/>}>
    //         <AdminStats/>
    //         <AdminGraphs/>
    //     </Suspense>
    // );
}
