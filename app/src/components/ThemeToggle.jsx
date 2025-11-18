import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"

/**
 * Theme Toggle Component
 * Provides a button to toggle between light and dark themes
 * Features a rotating sun that transforms into a moon
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-2"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 opacity-100 transition-all duration-500 ease-in-out dark:-rotate-180 dark:scale-0 dark:opacity-0" />
      <Moon className="absolute h-5 w-5 rotate-180 scale-0 opacity-0 transition-all duration-500 ease-in-out dark:rotate-0 dark:scale-100 dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

