// import DashboardSkeleton from "@/components/DashboardSkeleton";
// import { Suspense } from "react";
// import DashboardHome from "@/components/ui/DashboardHome";

export default async function Dashboard() {
    // EurekaHACKS 2025 is over and the database is offline. The dashboard layout renders the
    // archived notice, so this page only needs to avoid querying the dead database.
    return null;

    // return (
    //     <Suspense fallback={<DashboardSkeleton/>}>
    //         <DashboardHome/>
    //     </Suspense>
    // );
}
