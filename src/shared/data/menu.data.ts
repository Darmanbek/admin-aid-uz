import { Calendar, Home, Inbox, type LucideIcon, Search } from "lucide-react"

export interface MenuItem {
	title: string
	url: string
	icon: LucideIcon
	items?: {
		title: string
		url: string
	}[]
}

// Menu items.
export const menuData: MenuItem[] = [
	{
		title: "Новости",
		url: "#",
		icon: Home
	},
	{
		title: "Ассоциация",
		url: "#",
		icon: Calendar,
		items: [
			{
				title: "Сотрудники",
				url: "#"
			},
			{
				title: "Список совета",
				url: "#"
			},
			{
				title: "Список членов",
				url: "#"
			},
			{
				title: "Годовые отчеты",
				url: "#"
			}
		]
	},
	{
		title: "Деятельность",
		url: "#",
		icon: Inbox,
		items: [
			{
				title: "Проекты",
				url: "#"
			},
			{
				title: "История успеха",
				url: "#"
			},
			{
				title: "Исследование",
				url: "#"
			},
			{
				title: "Семинары и конференции",
				url: "#"
			}
		]
	},
	{
		title: "Заявки",
		url: "#",
		icon: Search
	}
]
