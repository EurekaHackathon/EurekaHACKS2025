import ArchivedNotice from "@/components/ArchivedNotice";

// import RequestPasswordResetForm from "@/components/RequestPasswordResetForm";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { validateSessionToken } from "@/lib/sessions";

export default async function PasswordResetRequestPage() {
    // EurekaHACKS 2025 is over and the database is offline, so password resets can no longer be requested.
    // const cookieStore = await cookies();
    // const sessionToken = cookieStore.get("session");
    //
    // if (sessionToken) {
    //     const sessionValidationResult = await validateSessionToken(sessionToken.value);
    //     if (sessionValidationResult.session && sessionValidationResult.user) {
    //         redirect("/dashboard");
    //     }
    // }
    //
    // return (
    //     <div className="bg-secondary-200 flex items-center justify-center py-32 flex-grow">
    //         <RequestPasswordResetForm/>
    //     </div>
    // );

    return <ArchivedNotice
        title="Password resets are unavailable"
        description="Hacker accounts for EurekaHACKS 2025 have been archived."
    />;
}
