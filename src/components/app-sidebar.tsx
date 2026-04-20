import type { ComponentProps } from "react";
import { BarChart3, ChevronRight, Inbox, Network, Search, Users } from "lucide-react";
import { Link } from "react-router";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarRail,
  SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton,
  SidebarMenuSub, SidebarMenuSubItem, SidebarMenuSubButton,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
  Collapsible, CollapsibleContent, CollapsibleTrigger,
} from "@/components/ui/collapsible";

const quickAccess = [
  { title: "Inbox", url: "/inbox", icon: Inbox },
  { title: "Search", url: "/search", icon: Search },
];

const groups = [
  {
    name: "People", url: "/people", icon: Users,
    items: [
      { title: "All", url: "/people" },
      { title: "Teams", url: "/people/teams" },
    ],
  },
  { name: "Org Chart", url: "/org-chart", icon: Network },
  { name: "Analytics", url: "/analytics", icon: BarChart3 },
];

export function AppSidebar(props: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="pt-2">
        <SidebarGroup>
          <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
          <SidebarMenu>
            {quickAccess.map((i) => (
              <SidebarMenuItem key={i.title}>
                <SidebarMenuButton asChild tooltip={i.title}>
                  <Link to={i.url}><i.icon /><span>{i.title}</span></Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarMenu>
            {groups.map((g) => g.items ? (
              <Collapsible key={g.name} asChild className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={g.name}>
                      <g.icon /><span>{g.name}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 ease-out-quint group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {g.items.map((s) => (
                        <SidebarMenuSubItem key={s.title}>
                          <SidebarMenuSubButton asChild>
                            <Link to={s.url}>{s.title}</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={g.name}>
                <SidebarMenuButton asChild tooltip={g.name}>
                  <Link to={g.url}><g.icon /><span>{g.name}</span></Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
      <SidebarRail />
    </Sidebar>
  );
}
