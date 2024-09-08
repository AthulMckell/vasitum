import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ChartsAndActivity: React.FC = () => {
  // Charts and activity component implementation
  return(
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {[
              { title: "Total Employees", value: "216", subtext: "120 Men, 96 Women", growth: "+2% Past month" },
              { title: "Talent Request", value: "16", subtext: "6 Men, 10 Women", growth: "+5% Past month" },
            ].map((item, index) => (
              <Card key={index} className="transition-all duration-200 transform hover:scale-105">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{item.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{item.subtext}</div>
                  <div className="text-sm text-green-500">{item.growth}</div>
                  <div className="mt-4 h-[200px] w-full bg-gray-100 dark:bg-gray-700 rounded-md animate-pulse"></div>
                </CardContent>
              </Card>
            ))}
            <Card className="bg-indigo-900 text-white transition-all duration-200 transform hover:scale-105">
              <CardHeader>
                <CardTitle>Recently Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs mb-2">10.40 AM, Fri 10 Sept 2021</p>
                <h3 className="text-lg font-semibold mb-2">You Posted a New Job</h3>
                <p className="text-sm mb-4">Kindly check the requirements and terms of work and make sure everything is right.</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Today you makes 12 Activity</span>
                  <Button variant="secondary" size="sm" className="hover:bg-white hover:text-indigo-900 transition-colors duration-200">
                    See All Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          );
}
export default ChartsAndActivity;
