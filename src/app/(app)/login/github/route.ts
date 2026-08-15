// import { generateState } from "arctic";
// import { github } from "@/lib/oauth";
// import { cookies } from "next/headers";

export async function POST(): Promise<Response> {
    // EurekaHACKS 2025 is over and the database is offline, so the OAuth flow has nowhere to land.
    return new Response("Login is closed. EurekaHACKS 2025 has concluded.", {status: 503});

    // const state = generateState();
    // const url = github.createAuthorizationURL(state, ["read:user"]);
    //
    // (await cookies()).set("github_oauth_state", state, {
    //     path: "/",
    //     secure: process.env.DEV !== "true",
    //     httpOnly: true,
    //     maxAge: 60 * 10,
    //     sameSite: "lax"
    // });
    //
    // // Return url to redirect to
    // return Response.json({ url });
}
