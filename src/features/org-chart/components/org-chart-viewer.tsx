import { useRef, useEffect, useCallback } from "react";
import { OrgChart } from "d3-org-chart";
import type { Employee } from "../types";
import { DEPARTMENT_COLORS } from "../data";

interface OrgChartViewerProps {
  data: Employee[];
  onNodeClick?: (node: Employee) => void;
}

function isDark() {
  return document.documentElement.classList.contains("dark");
}

function nodeHTML(emp: Employee) {
  const color = DEPARTMENT_COLORS[emp.department] ?? "#64748b";
  const dark = isDark();
  const bg = dark ? "#1c1917" : "#ffffff";
  const border = dark ? "#44403c" : "#e2e0e6";
  const nameColor = dark ? "#fafaf9" : "#1a1523";
  const titleColor = dark ? "#a8a29e" : "#65636d";
  const avatarBg = dark ? "#292524" : "#f3f4f6";
  const shadow = dark ? "0 1px 3px rgba(0,0,0,0.3)" : "0 1px 3px rgba(0,0,0,0.06)";

  return `
    <div style="
      font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
      width: 258px; height: 118px;
      background: ${bg};
      border-radius: 12px;
      border: 1px solid ${border};
      display: flex; align-items: center; gap: 12px; padding: 16px;
      box-shadow: ${shadow}; cursor: pointer;
    ">
      <img src="${emp.imageUrl}" style="
        width: 48px; height: 48px; border-radius: 50%;
        background: ${avatarBg}; flex-shrink: 0; object-fit: cover;
      " />
      <div style="min-width: 0; flex: 1;">
        <div style="
          font-weight: 600; font-size: 13px; color: ${nameColor};
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        ">${emp.name}</div>
        <div style="
          font-size: 11px; color: ${titleColor}; margin-top: 2px;
          white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        ">${emp.title}</div>
        <div style="
          margin-top: 6px; display: inline-flex; align-items: center; gap: 4px;
          font-size: 10px; font-weight: 500; color: ${color};
          background: ${color}14; border: 1px solid ${color}30;
          border-radius: 999px; padding: 1px 8px 1px 6px;
        ">
          <span style="
            width: 6px; height: 6px; border-radius: 50%;
            background: ${color}; flex-shrink: 0;
          "></span>
          ${emp.department}
        </div>
      </div>
    </div>
  `;
}

export function OrgChartViewer({ data, onNodeClick }: OrgChartViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<OrgChart | null>(null);

  const renderChart = useCallback(() => {
    if (!containerRef.current || data.length === 0) return;

    if (!chartRef.current) {
      chartRef.current = new OrgChart();
    }

    const dark = isDark();

    chartRef.current
      .container(containerRef.current)
      .data(data)
      .nodeWidth(() => 260)
      .nodeHeight(() => 120)
      .compactMarginBetween(() => 35)
      .compactMarginPair(() => 60)
      .neighbourMargin(() => 40)
      .childrenMargin(() => 60)
      .initialExpandLevel(1)
      .nodeContent((d: unknown) => nodeHTML((d as { data: Employee }).data))
      .linkUpdate(function (this: SVGPathElement) {
        const el = this as unknown as SVGPathElement;
        el.setAttribute("stroke", dark ? "#57534e" : "#d6d3d1");
        el.setAttribute("stroke-width", "1.5");
      })
      .onNodeClick((d: unknown) => {
        onNodeClick?.((d as { data: Employee }).data);
      })
      .render();
  }, [data, onNodeClick]);

  useEffect(() => {
    renderChart();
  }, [renderChart]);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver(() => {
      chartRef.current?.render();
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
