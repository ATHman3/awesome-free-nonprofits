import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

/**
 * Search Bar Component
 * Provides a search input for filtering services
 * 
 * @param {Object} props - Component props
 * @param {string} props.value - Current search value
 * @param {Function} props.onChange - Callback when search value changes
 */
export function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search services..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10"
      />
    </div>
  )
}

