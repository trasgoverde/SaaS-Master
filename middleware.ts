import { authMiddleware } from '@clerk/nextjs'

// Этот пример защищает все маршруты, включая маршруты api/trpc
// Пожалуйста, отредактируйте это, чтобы позволить другим маршрутам быть общедоступными по мере необходимости..
// See https://clerk.com/docs/nextjs/middleware для получения дополнительной информации о настройке промежуточного программного обеспечения.
export default authMiddleware({
  publicRoutes: ['/', '/api/webhook']
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
