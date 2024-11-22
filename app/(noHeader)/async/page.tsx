import { Suspense } from 'react'
import Abc from './Abc'
import Xyz from './Xyz'
import Loader from '@/components/Loader'

export default function AsyncPage() {
  return (
    <>
      <h1>Async Page!</h1>
      {/* Suspense로 묶어주면 각각 별도로 뜬다(병렬로 실행됨) */}
      {/* 비동기 컴포넌트가 출력되기 전까지 fallback으로 정의해놓은 컴포넌트가 대신 표시된다. */}
      <Suspense fallback={<Loader />}>
        <Abc />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Xyz />
      </Suspense>

      {/* 비동기 컴포넌트들 중 가장 오래 걸리는 것 기준으로 한꺼번에 뜬다.
      <h1>Async Page!</h1>
      <Abc />
      <Xyz /> */}
    </>
  )
}
