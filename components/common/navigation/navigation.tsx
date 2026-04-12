import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  return (
    <header
      className="fixed z-50 w-full mt-0"
      style={{
        backgroundColor: 'oklch(0.985 0.006 172 / 0.92)',
        borderBottom: '1px solid oklch(0.88 0.015 172)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 60px',
        height: '60px',
      }}>
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-gloock), Georgia, serif',
            fontSize: '20px',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            color: 'oklch(0.17 0.022 172)',
            textDecoration: 'none',
          }}
        >
          Debbie Chen
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/" style={{ fontFamily: 'var(--font-onest), system-ui, sans-serif', fontSize: '14px' }}>Work</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about" style={{ fontFamily: 'var(--font-onest), system-ui, sans-serif', fontSize: '14px' }}>About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
