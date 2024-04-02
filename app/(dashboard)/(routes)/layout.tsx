import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

import { checkSubscription } from '@/lib/subscription'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

  const isPro = await checkSubscription()
  return (
    <div className="h-full relative">
      <div className=" hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-gray-900">
        <Sidebar isPro={isPro} />
      </div>
      <main className=" md:pl-72">
        <Navbar /> {children}
      </main>
    </div>
  )
}

export default DashboardLayout
