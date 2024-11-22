export default async function Xyz() {
  await new Promise(resolve => setTimeout(resolve, 4000))
  return <h1>xyz</h1>
}
