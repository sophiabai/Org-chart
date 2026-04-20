import { Bell, ChevronsUpDown, Monitor, Moon, Search, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useThemeStore, type Theme } from "@/stores/theme-store";

const themeOptions: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "system", label: "System", icon: Monitor },
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

export function TopNav() {
  const { theme, setTheme } = useThemeStore();
  return (
    <header className="flex h-(--top-nav-height) shrink-0 items-center justify-between border-b border-border bg-top-nav px-4">
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-2 px-2">
          <div className="flex size-6 items-center justify-center rounded-md bg-berry-600" />
        </div>
        <Button variant="ghost" size="sm" className="gap-1.5 text-sm font-medium">
          Acme Inc <ChevronsUpDown className="size-3.5 text-muted-foreground" />
        </Button>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" className="size-8"><Search className="size-4" /><span className="sr-only">Search</span></Button>
        <Button variant="ghost" size="icon" className="size-8"><Bell className="size-4" /><span className="sr-only">Notifications</span></Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8 rounded-full">
              <Avatar className="size-6">
                <AvatarImage src="/avatars/shadcn.jpg" alt="me" />
                <AvatarFallback className="text-[10px]">CN</AvatarFallback>
              </Avatar>
              <span className="sr-only">User menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-56 rounded-lg" align="end" sideOffset={8}>
            <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">Theme</DropdownMenuLabel>
            <DropdownMenuGroup>
              {themeOptions.map((opt) => (
                <DropdownMenuItem
                  key={opt.value}
                  onClick={() => setTheme(opt.value)}
                  className={theme === opt.value ? "font-medium text-foreground" : "text-muted-foreground"}
                >
                  <opt.icon /> {opt.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
