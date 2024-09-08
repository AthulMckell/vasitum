import StatsCards from './StatsCards';
import ChartsAndActivity from './ChartsAndActivity';
import AnnouncementsAndSchedule from './AnnouncementsAndSchedule';

export default function DashboardContent() {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Dashboard</h1>
      <StatsCards />
      <ChartsAndActivity />
      <AnnouncementsAndSchedule />
    </main>
  );
}