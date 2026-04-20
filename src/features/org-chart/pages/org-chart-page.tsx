import { employees } from "../data";
import { OrgChartViewer } from "../components/org-chart-viewer";

export function OrgChartPage() {
  return (
    <div className="flex h-full flex-col -mx-17 -mt-6">
      <div className="flex-1 min-h-0">
        <OrgChartViewer data={employees} />
      </div>
    </div>
  );
}
