import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants"
import { LayoutHeader, LayoutSidebar } from "@/shared/layout"
import { cn } from "@/shared/lib/utils"
import { SidebarInset, SidebarProvider } from "@/shared/ui/sidebar"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import React from "react"
import "./globals.css"

const montserrat = Montserrat({
	subsets: ["latin", "cyrillic"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
	style: "normal",
	variable: "--font-montserrat"
})

export const metadata: Metadata = {
	title: {
		template: `%s | ${SITE_NAME}`,
		default: SITE_NAME
	},
	description: SITE_DESCRIPTION,
	icons: {
		icon: "/icon.png",
		apple: "/apple-icon.png",
		shortcut: "/favicon.ico"
	},
	openGraph: {
		images: "/og-image.png"
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang={"en"}>
			<body className={cn(montserrat.variable, montserrat.className)}>
				<SidebarProvider>
					<LayoutSidebar />
					<SidebarInset>
						<LayoutHeader />
						<div className={"flex flex-1 flex-col gap-4 p-4"}>{children}</div>
					</SidebarInset>
				</SidebarProvider>
			</body>
		</html>
	)
}
