import svgPaths from "./svg-gpu29ti6ky";

function Container() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p20793584} fill="#1A1C1C" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

export default function LinkActiveTabDashboard() {
  return (
    <div className="bg-[#f6f3f2] content-stretch flex gap-[12px] items-center pl-[12px] pr-[16px] py-[10px] relative rounded-[8px] size-full" data-name="Link - Active Tab: Dashboard">
      <div aria-hidden className="absolute border-[#5d5f5f] border-r-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container />
      <Container1 />
    </div>
  );
}