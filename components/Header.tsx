import Link from 'next/link'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/movies/tt4520988', label: 'Frozen  2' },
  { to: '/async', label: 'Async' },
  { to: '/dashboard', label: 'Dashboard' }
]

export default function Header() {
  return (
    <header className="flex gap-2">
      {navigations.map(nav => {
        return (
          <Link
            className="hover:underLine"
            href={nav.to}
            key={nav.to}>
            {nav.label}
          </Link>
        )
      })}
    </header>
  )
}
