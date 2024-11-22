interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

export default async function MovieDetailsPage({
  params, // 동적 세그먼트 값 가져오고 싶을 때
  searchParams // 쿼리도 가져오고 싶을 때
}: {
  params: Promise<{ moviedId: string }>
  searchParams: Promise<{ a: string; b: string }>
}) {
  const { movieId } = await params
  const { a, b } = await searchParams
  await new Promise(resolve => setTimeout(resolve, 500)) // loading이라는 컴포넌트를 같은 폴더 내에 만들어두면 서버 응답 받을때까지 로딩 표시됨.
  const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&i=${movieId}`)
  const movie: MovieDetails = await res.json()
  return (
    <>
      <h1>Movie Details Page</h1>
      <h2>
        {movieId} / {a} / {b}
      </h2>
      <h2>{movie.Title}</h2>
      <h2>{movie.Plot}</h2>
    </>
  )
}
