"use client";

import ArchivedNotice from "@/components/ArchivedNotice";

// Backstop for anything that still reaches the shut-down database. Without this, a failed query
// surfaces as Next.js's default error screen.
export default function Error() {
    return <ArchivedNotice
        title="This page is no longer available"
        description="EurekaHACKS 2025 has concluded and this part of the site has been archived."
    />;
}
