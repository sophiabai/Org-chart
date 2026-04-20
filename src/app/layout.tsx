import { Link, Outlet, useLocation } from "react-router";
import { AppSidebar } from "@/components/app-sidebar";
import { TopNav } from "@/components/top-nav";
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList,
  BreadcrumbPage, BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const SEGMENT_TITLES: Record<string, string> = {
  "org-chart": "Org Chart",
  people: "People",
  teams: "Teams",
  analytics: "Analytics",
  inbox: "Inbox",
  search: "Search",
};

function useBreadcrumbs() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return { crumbs: [], page: "Home" };
  const crumbs = segments.slice(0, -1).map((s, i) => ({
    title: SEGMENT_TITLES[s] ?? s,
    href: "/" + segments.slice(0, i + 1).join("/"),
  }));
  const last = segments[segments.length - 1];
  return { crumbs, page: SEGMENT_TITLES[last] ?? last };
}

export function RootLayout() {
  const { crumbs, page } = useBreadcrumbs();
  return (
    <div className="flex h-svh flex-col">
      <TopNav />
      <SidebarProvider defaultOpen={false} className="min-h-0 flex-1">
        <AppSidebar />
        <SidebarInset className="relative min-w-0 min-h-0 overflow-hidden">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border transition-[width,height] ease-in-out-quart group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {crumbs.map((c, i) => (
                    <span key={c.href} className="contents">
                      {i > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                      <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink asChild><Link to={c.href}>{c.title}</Link></BreadcrumbLink>
                      </BreadcrumbItem>
                    </span>
                  ))}
                  {crumbs.length > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                  <BreadcrumbItem><BreadcrumbPage>{page}</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex w-full flex-1 flex-col gap-6 overflow-y-auto px-17 pt-6">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
