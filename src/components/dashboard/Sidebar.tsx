import Link from 'next/link';
import { LayoutDashboard, Users, MessageSquare, Settings } from 'lucide-react';
import Image from 'next/image';
import GroupLogo from '@/app/images/Group.png';

const Sidebar = () => {
  // Sidebar component implementationmy-next-app\src\components\dashboard\Group.png
  return(
  <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-colors duration-200">
        <div className="p-4">
          <Image src={GroupLogo} alt="Vasitum Logo" width={120} height={40} className="mb-6" />
          <nav className="space-y-2">
            <Link
              href="#"
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900 rounded-md transition-colors duration-200"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            {['Recruitment', 'Schedule', 'Employee', 'Department'].map((item, index) => (
              <Link key={index} href="#" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200">
                <Users className="h-5 w-5" />
                <span>{item}</span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Link href="#" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200">
            <MessageSquare className="h-5 w-5" />
            <span>Support</span>
          </Link>
          <Link href="#" className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </div>
      </aside>
      );
}
export default Sidebar;