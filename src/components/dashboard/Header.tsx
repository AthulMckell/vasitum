import { Bell, ChevronDown, MessageSquare, Moon, Sun } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ isDarkMode, toggleDarkMode }: HeaderProps) => {
  // Header component implementation
  return(
  <header className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center w-1/3">
            <Input
              type="search"
              placeholder="Search"
              className="w-full"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                className="data-[state=checked]:bg-blue-600"
              />
              {isDarkMode ? (
                <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              )}
            </div>
            <Avatar>
              <AvatarImage src="/placeholder.svg" alt="Admirra John" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div className="flex items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Admirra John</span>
              <ChevronDown className="h-4 w-4 ml-1 text-gray-500 dark:text-gray-400" />
            </div>
          </div>
        </header>
        );
}
export default Header;