import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  // const isMobile = useIsMobile()
  // viewport={isMobile}
  return (
    <NavigationMenu >
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Works</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
         <NavigationMenuItem>
         <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Playground</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
          <NavigationMenuItem>
         <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
       
       
      </NavigationMenuList>
    </NavigationMenu>
  )
}