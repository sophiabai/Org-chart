declare module "d3-org-chart" {
  export class OrgChart {
    container(el: HTMLElement | string): this;
    data(data: unknown[]): this;
    nodeWidth(fn: (d: unknown) => number): this;
    nodeHeight(fn: (d: unknown) => number): this;
    compactMarginBetween(fn: (d: unknown) => number): this;
    compactMarginPair(fn: (d: unknown) => number): this;
    neighbourMargin(fn: (n1: unknown, n2: unknown) => number): this;
    childrenMargin(fn: (d: unknown) => number): this;
    siblingsMargin(fn: (d: unknown) => number): this;
    initialExpandLevel(level: number): this;
    nodeContent(fn: (d: unknown, i: number, arr: unknown[], state: unknown) => string): this;
    buttonContent(fn: (params: { node: unknown; state: unknown }) => string): this;
    linkUpdate(fn: (this: SVGPathElement, d: unknown, i: number, arr: unknown[]) => void): this;
    onNodeClick(fn: (d: unknown) => void): this;
    onExpandOrCollapse(fn: (d: unknown) => void): this;
    render(): this;
    expandAll(): this;
    collapseAll(): this;
    fit(): this;
    svgWidth(width: number): this;
    svgHeight(height: number): this;
    compact(enabled: boolean): this;
    layout(direction: "top" | "left" | "right" | "bottom"): this;
    duration(ms: number): this;
    setActiveNodeCentered(centered: boolean): this;
    setCentered(nodeId: string): this;
    setExpanded(nodeId: string): this;
    setHighlighted(nodeId: string): this;
    clearHighlighting(): this;
    getChartState(): unknown;
  }
}
