import AdsPages from "./AdsPages";
import AdsSidebar from "./AdsSidebar";

export default function AdsLayout() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex  gap-4 w-full">
        <div className="w-1/4">
          <AdsSidebar />
        </div>

        <div className="w-full py-2">
          <AdsPages />
        </div>
      </div>
    </div>
  );
}
