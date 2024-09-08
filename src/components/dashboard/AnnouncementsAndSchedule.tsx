import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, MoreVertical } from 'lucide-react';

  const AnnouncementsAndSchedule :React.FC = () => {
  // Announcements and schedule component implementation
  return(
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {['Announcement', 'Upcoming Schedule'].map((section, index) => (
              <Card key={index} className="transition-all duration-200 transform hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <CardTitle>{section}</CardTitle>
                  <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400">
                    Today, 13 Sep 2021 <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: section === 'Announcement' ? "Outing schedule for every departement" : "Review candidate applications", time: section === 'Announcement' ? "5 Minutes ago" : "Today - 11.30 AM" },
                      { title: section === 'Announcement' ? "Meeting HR Department" : "Interview with candidates", time: section === 'Announcement' ? "Yesterday, 12:30 PM" : "Today - 10.30 AM" },
                      { title: section === 'Announcement' ? "IT Department need two more talents for UX/UI Designer position" : "Short meeting with product designer from IT Departement", time: section === 'Announcement' ? "Yesterday, 09:15 AM" : "Today - 09.15 AM" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between group">
                        <div>
                          <h4 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">{item.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.time}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button 
                    variant={section === 'Announcement' ? "link" : "outline"} 
                    className="mt-4 w-full justify-center hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-200"
                  >
                    {section === 'Announcement' ? "See All Announcement" : "Create a New Schedule"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
  );
}
export default AnnouncementsAndSchedule;

