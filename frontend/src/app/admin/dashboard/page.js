
"use client";
import Dashboard from "../../../Admin/index"; // Adjust path if needed
import ProtectedRoutes from "../../../ProtectedRoutes";

export default function Page() {
    return (
        <ProtectedRoutes>
            <Dashboard />
        </ProtectedRoutes>
    );
}
