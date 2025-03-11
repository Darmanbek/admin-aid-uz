import { menuData } from "@/shared/data/menu.data"
import { NavLogo } from "@/shared/layout/layout-sidebar/nav-logo"
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/shared/ui/sidebar"
import { type FC } from "react"
import { NavMenu } from "./layout-sidebar/nav-menu"

const LayoutSidebar: FC = () => {
	return (
		<Sidebar collapsible={"icon"}>
			<SidebarHeader>
				<NavLogo />
			</SidebarHeader>
			<SidebarContent>
				<NavMenu items={menuData} />
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	)
}

export { LayoutSidebar }
