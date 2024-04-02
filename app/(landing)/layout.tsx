import { Metadata}  from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils-2'
import '../globals.css'




const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Dipassio | SaaS Development Agency',
  description: 'We are your development agency'
}

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main lang="en" className='light'>
      <div className={cn(
        'min-h-screen font-sans antialiased grainy',
        inter.className
      )}>{children}</div>
    </main>
  )
}

export default LandingLayout
