import { BodyRecordsChart } from "@/components/records/body-records-chart";
import { DiaryEntries } from "@/components/records/diary-entries";
import ExerciseLog from "@/components/records/exercise-log";
import { TrackingSections } from "@/components/records/tracking-sections";

export default function RecordsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-8 bg-white">
        <div className="container mx-auto md:px-4 max-w-[960px]">
          <TrackingSections />
          <BodyRecordsChart />
          <ExerciseLog />
          <DiaryEntries />
        </div>
      </section>
    </div>
  );
}
