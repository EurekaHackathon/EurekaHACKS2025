"use server";

// import { db } from "@/lib/database";
// import { addEmailToMailingList, getSubscribedEmail } from "@/lib/sqlc/mailing_list_sql";
// import { emailSchema } from "../validation";

export const subscribeToMailingList = async (prevState: any, formData: FormData): Promise<{
    error?: string,
    success?: boolean
}> => {
    // EurekaHACKS 2025 is over and the database is offline, so signups can no longer be stored.
    return {error: "Mailing list signups are closed. EurekaHACKS 2025 has concluded."};

    // const email = formData.get("email");
    // const validationResult = emailSchema.safeParse(email);
    // if (!validationResult.success) {
    //     return { error: validationResult.error.errors[0].message };
    // }
    //
    // try {
    //     // Check if email is already subscribed
    //     const subscribedEmail = await getSubscribedEmail(db, {
    //         email: email!.toString(),
    //     });
    //
    //     if (subscribedEmail !== null) {
    //         return { error: "Email is already subscribed" };
    //     }
    //
    //     // Add email to mailing list
    //     await addEmailToMailingList(db, {
    //         email: email!.toString(),
    //     });
    //
    //     return { success: true };
    // } catch (error) {
    //     console.error(error);
    //     return { error: "Internal server error, failed to subscribe" };
    // }
};
