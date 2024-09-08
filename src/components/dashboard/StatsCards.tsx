import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

 const StatsCards :React.FC = () => {
  // Stats cards component implementation
  return(
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { title: "Available Position", value: "24", subtext: "4 Urgently needed", color: "bg-red-50 dark:bg-red-900" },
              { title: "Job Open", value: "10", subtext: "4 Active hiring", color: "bg-blue-50 dark:bg-blue-900" },
              { title: "New Employees", value: "24", subtext: "4 Department", color: "bg-purple-50 dark:bg-purple-900" },
            ].map((item, index) => (
              <Card key={index} className={`${item.color} transition-all duration-200 transform hover:scale-105`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <p className="text-xs text-gray-600 dark:text-gray-300">{item.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          );
}
  
export default StatsCards;
