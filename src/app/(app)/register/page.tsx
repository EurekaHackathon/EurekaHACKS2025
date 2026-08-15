import ArchivedNotice from "@/components/ArchivedNotice";

// import RegistrationForm from "@/components/RegistrationForm";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { validateSessionToken } from "@/lib/sessions";

export default async function SignUpPage() {
    // EurekaHACKS 2025 is over and the database is offline, so new accounts can no longer be created.
    // const cookieStore = await cookies();
    // const sessionToken = cookieStore.get("session");
    // if (sessionToken) {
    //     const sessionValidationResult = await validateSessionToken(sessionToken.value);
    //     if (sessionValidationResult.session && sessionValidationResult.user) {
    //         redirect("/dashboard");
    //     }
    // }
    //
    // return (
    //     <div className="bg-secondary-200 flex items-center justify-center py-32 flex-grow">
    //         <RegistrationForm/>
    //     </div>
    // );

    return <ArchivedNotice
        title="Registration is closed"
        description="New accounts can no longer be created for EurekaHACKS 2025."
    />;
}
