// import { Suspense } from "react";
// import UserQRCode from "@/components/UserQRCode";
// import UserQRCodeSkeleton from "@/components/UserQRCodeSkeleton";

export default async function QRCodePage() {
    // EurekaHACKS 2025 is over and the database is offline. The dashboard layout renders the
    // archived notice, so this page only needs to avoid querying the dead database.
    return null;

    // return (
    //     <Suspense fallback={<UserQRCodeSkeleton/>}>
    //         <UserQRCode/>
    //     </Suspense>
    // );
}
