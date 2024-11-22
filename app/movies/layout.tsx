export default function MoviesLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1>영화 페이지의 레이아웃!!</h1>

      {/* Outlet의 개념... */}
      {children}
    </>
  )
}
