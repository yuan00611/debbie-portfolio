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
    <NavigationMenu className="fixed bg-white/80 backdrop-blur-sm z-50 w-full border-b border-gray-200 mt-0 py-2">
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Works</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
         <NavigationMenuItem>
         <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Playground</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
          <NavigationMenuItem>
         <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
       
       
      </NavigationMenuList>
    </NavigationMenu>
  )
}