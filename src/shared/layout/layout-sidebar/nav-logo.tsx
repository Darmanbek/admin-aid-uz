import { SITE_DESCRIPTION, SITE_NAME } from "@/shared/constants"
import { SidebarMenuButton } from "@/shared/ui/sidebar"
import Image from "next/image"
import { type FC } from "react"

const NavLogo: FC = () => {
	return (
		<>
			<SidebarMenuButton
				size={"lg"}
				className={
					"data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
				}
			>
				<div
					className={
						"flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground"
					}
				>
					<Image src={"/logo.png"} alt={"Лого"} width={32} height={32} className={"size-8"} />
				</div>
				<div className={"grid flex-1 text-left text-sm leading-tight"}>
					<span className={"truncate font-semibold"}>{SITE_NAME}</span>
					<span className={"truncate text-xs"}>{SITE_DESCRIPTION}</span>
				</div>
			</SidebarMenuButton>
		</>
	)
}

export { NavLogo }
