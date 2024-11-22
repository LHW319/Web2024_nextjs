// router의 loader와 같은 역할

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('middleware 실행!!!!!')
  return NextResponse.next()
}

// matcher 속성에 일치하는 경로에서만 미들웨어가 호출됩니다.
// `config` 내보내기를 생략하면, 모든 경로에서 미들웨어가 호출됩니다.
export const config = {
  matcher: ['/dashboard'] // 특정 경로만 일치 - 이 경로로 실행될때만 middleware 실행!
}
