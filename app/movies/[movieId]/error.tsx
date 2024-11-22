// error 페이지는 항상 client page여야 한다!!!
'use client'

export default function Error({ error }: { error: Error }) {
  return <h1>ERror: {error.message}</h1>
}
