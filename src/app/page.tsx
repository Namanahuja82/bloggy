import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Content from '@/components/Content'

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}