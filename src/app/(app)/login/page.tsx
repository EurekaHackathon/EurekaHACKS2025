import ArchivedNotice from "@/components/ArchivedNotice";

// import LoginForm from "@/components/LoginForm";
// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { validateSessionToken } from "@/lib/sessions";

export default async function LoginPage() {
    // EurekaHACKS 2025 is over and the database is offline, so logging in is no longer possible.
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
    //         <LoginForm/>
    //     </div>
    // );

    return <ArchivedNotice
        title="Login is closed"
        description="Hacker accounts for EurekaHACKS 2025 have been archived."
    />;
}
