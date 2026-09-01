import svgPaths from "./svg-4f7dbczc4t";
import imgAb6AXuCnYfUnU98PyByV7SP0Jy1Dsyr9RQArvnBzdf52PI46StrxhcCsviqvr7ClluvBJcw0NNiWbN0BlzwZd1G7KeyfxSgKgf9MWlEakPeEulkdpRycznB3CqpEvQl9ZbPpRtcvOaj6OWzbqRizGu5ZQyFkMcLcz3FdwccPsFlsQXlJkuKMqXQDnridI15Om8VU3GzwsFp1AjJjWkr8CDrKlx22WdIpj1OBb5ZPj3Us4MeP61FhiWK from "./3e8f51e9b7244bcae7a651d01eb0ad840b89e65c.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Daily Report</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f172a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
          <p className="leading-[12px]">Daily</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[12px]">Weekly</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[12px]">Monthly</p>
        </div>
      </div>
    </div>
  );
}

function PeriodSegmentedControl() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-start p-[5px] relative rounded-[8px] shrink-0" data-name="Period Segmented Control">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[11.667px] relative shrink-0 w-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 10.5 11.6667" width="10.5">
        <g id="Container">
          <path d={svgPaths.p3bb7dc80} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">Oct 24, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[2.917px] relative shrink-0 w-[5.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="2.91667" preserveAspectRatio="none" viewBox="0 0 5.83333 2.91667" width="5.83333">
        <g id="Container">
          <path d={svgPaths.p1f887d80} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-[#f8fafc] content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[8px] shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <PeriodSegmentedControl />
      <BackgroundBorderShadow />
    </div>
  );
}

function BreadcrumbsHeader() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Breadcrumbs & Header">
      <Container />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] w-full">
          <p className="leading-[14px]">Sales</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[48px] tracking-[-0.96px] w-full">
          <p className="leading-[57.6px]">฿124,500.00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f8fafc] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.1)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[#f8fafc] inset-[0_0_0.41px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Overlay+Shadow" />
        <Heading2 />
        <Container4 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] w-full">
          <p className="leading-[14px]">Food Cost</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[48px] tracking-[-0.96px] w-full">
          <p className="leading-[57.6px]">฿32,370.00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f8fafc] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.1)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[#f8fafc] inset-[0_0_0.41px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Overlay+Shadow" />
        <Heading3 />
        <Container5 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] w-full">
          <p className="leading-[14px]">Gross Profit</p>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[48px] tracking-[-0.96px] w-full">
          <p className="leading-[57.6px]">฿92,130.00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#f8fafc] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.1)] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[#f8fafc] inset-[0_0_0.41px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Overlay+Shadow" />
        <Heading4 />
        <Container6 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] w-full">
          <p className="leading-[14px]">Profit Margin</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[48px] tracking-[-0.96px] w-full">
          <p className="leading-[57.6px]">74.0%</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#f8fafc] drop-shadow-[0px_2px_5px_rgba(0,0,0,0.1)] flex-[1_0_0] h-[188px] min-w-px relative rounded-[12px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[#f8fafc] inset-[0_0_0.41px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Overlay+Shadow" />
        <Heading5 />
        <Container7 />
      </div>
    </div>
  );
}

function MetricsOverview() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Metrics Overview">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
          <p className="leading-[28px]">Product Performance</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] w-full">
          <p className="leading-[21px]">Top performing dishes by sales and margin.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[25px] pt-[24px] px-[24px] relative size-full">
        <Heading6 />
        <Container8 />
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[218.94px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] whitespace-nowrap">
          <p className="leading-[12px]">Dish</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[134.22px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right whitespace-nowrap">
          <p className="leading-[12px]">Sales</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[116.84px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right whitespace-nowrap">
          <p className="leading-[12px]">Margin</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <Cell />
      <Cell1 />
      <Cell2 />
    </div>
  );
}

function Data() {
  return (
    <div className="relative shrink-0 w-[218.94px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">Wagyu Ribeye</p>
        </div>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[134.22px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">฿45,000</p>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#e0f2fe] content-stretch flex items-start justify-end px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0369a1] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">78%</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[116.84px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[16.5px] relative size-full">
        <Background />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <Data />
      <Data1 />
      <Data2 />
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[218.94px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">Truffle Risotto</p>
        </div>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[134.22px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">฿22,500</p>
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#e0f2fe] content-stretch flex items-start justify-end px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0369a1] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">82%</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[116.84px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[16.5px] relative size-full">
        <Background1 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <Data3 />
      <Data4 />
      <Data5 />
    </div>
  );
}

function Data6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[17.5px] pt-[18px] px-[24px] relative shrink-0 w-[218.94px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Lobster Thermidor</p>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[17.5px] pt-[18px] px-[24px] relative shrink-0 w-[134.22px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">฿18,200</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fef9c3] content-stretch flex items-start justify-end px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#a16207] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">65%</p>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="content-stretch flex flex-col items-end px-[24px] py-[16px] relative shrink-0 w-[116.84px]" data-name="Data">
      <Background2 />
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Data6 />
      <Data7 />
      <Data8 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <HeaderRow />
      <Body />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[198px] relative size-full">
        <Table />
      </div>
    </div>
  );
}

function ProductPerformance() {
  return (
    <div className="bg-[#f8fafc] content-stretch drop-shadow-[0px_2px_5px_rgba(0,0,0,0.1)] flex flex-[1_0_0] flex-col items-start min-w-px p-px relative rounded-[12px] self-stretch" data-name="Product Performance">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[#f8fafc] inset-[0_0_-0.5px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Product Performance:shadow" />
      <OverlayHorizontalBorder />
      <Container9 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
          <p className="leading-[28px]">Inventory Usage</p>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] w-full">
          <p className="leading-[21px]">Summary of key ingredient depletion.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder1() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[25px] pt-[24px] px-[24px] relative size-full">
        <Heading7 />
        <Container11 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Wagyu Beef (A5)</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f1edec] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-[128px]" data-name="Background">
      <div className="absolute bg-[#0f172a] inset-[0_20.01%_0_0]" data-name="Background" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">8kg</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Container14 />
    </div>
  );
}

function Item() {
  return (
    <div className="relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between relative size-full">
          <Container12 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Black Truffle</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f1edec] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-[128px]" data-name="Background">
      <div className="absolute bg-[#0f172a] inset-[0_55.01%_0_0]" data-name="Background" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">450g</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background4 />
      <Container17 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Item">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Saffron</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f1edec] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-[128px]" data-name="Background">
      <div className="absolute bg-[#ba1a1a] inset-[0_10.01%_0_0]" data-name="Background" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ba1a1a] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">12g</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <Background5 />
      <Container20 />
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Item">
      <Container18 />
      <Container19 />
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-[422px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Item />
        <Item1 />
        <Item2 />
      </div>
    </div>
  );
}

function InventoryUsage() {
  return (
    <div className="bg-[#f8fafc] content-stretch drop-shadow-[0px_2px_5px_rgba(0,0,0,0.1)] flex flex-col gap-[24px] items-center pb-[25px] pt-px px-px relative rounded-[12px] shrink-0 w-full" data-name="Inventory Usage">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[#f8fafc] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Inventory Usage:shadow" />
      <OverlayHorizontalBorder1 />
      <List />
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[18px] w-full">
          <p className="leading-[28px]">Theoretical vs Actual</p>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] w-full">
          <p className="leading-[21px]">Variance based on sales vs depletion.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayHorizontalBorder2() {
  return (
    <div className="bg-[rgba(248,250,252,0.5)] relative rounded-tl-[12px] rounded-tr-[12px] shrink-0 w-full" data-name="Overlay+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none rounded-tl-[12px] rounded-tr-[12px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[25px] pt-[24px] px-[24px] relative size-full">
        <Heading8 />
        <Container21 />
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[261.39px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] whitespace-nowrap">
          <p className="leading-[12px]">Item</p>
        </div>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative shrink-0 w-[208.61px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right whitespace-nowrap">
          <p className="leading-[12px]">Variance</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[261.39px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[14px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">Wagyu Beef</p>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-start justify-end px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#991b1b] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">+2.5%</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[208.61px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[12.5px] relative size-full">
        <Background6 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f8fafc] border-b border-solid inset-0 pointer-events-none" />
      <Data9 />
      <Data10 />
    </div>
  );
}

function Data11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[13.5px] pt-[14px] px-[24px] relative shrink-0 w-[261.39px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Caviar</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#dcfce7] content-stretch flex items-start justify-end px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#166534] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">-0.5%</p>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="content-stretch flex flex-col items-end px-[24px] py-[12px] relative shrink-0 w-[208.61px]" data-name="Data">
      <Background7 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Data11 />
      <Data12 />
    </div>
  );
}

function Body1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row3 />
      <Row4 />
    </div>
  );
}

function Table1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <HeaderRow1 />
        <Body1 />
      </div>
    </div>
  );
}

function TheoreticalVsActual() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start p-px relative rounded-[12px] shrink-0 w-full" data-name="Theoretical vs Actual">
      <div aria-hidden className="absolute border border-[#f8fafc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[#f8fafc] inset-[0_0_-0.5px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Theoretical vs Actual:shadow" />
      <OverlayHorizontalBorder2 />
      <Table1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative" data-name="Container">
      <InventoryUsage />
      <TheoreticalVsActual />
    </div>
  );
}

function DetailedSections() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center pt-[32px] relative shrink-0 w-full" data-name="Detailed Sections">
      <ProductPerformance />
      <Container10 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="max-w-[1440px] relative shrink-0 w-full" data-name="Main Content">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] pb-[64px] pt-[96px] px-[24px] relative size-full">
        <BreadcrumbsHeader />
        <MetricsOverview />
        <DetailedSections />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[12px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13.5 12" width="13.5">
        <g id="Container">
          <path d={svgPaths.p172c6aa0} fill="#1C1B1B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[5.55px] relative shrink-0 w-[9px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="5.55" preserveAspectRatio="none" viewBox="0 0 9 5.55" width="9">
        <g id="Container">
          <path d={svgPaths.p4ab6c80} fill="#1C1B1B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container22 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Casa Thai — Casa 1</p>
      </div>
      <Container23 />
    </div>
  );
}

function RestaurantSelector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Restaurant Selector">
      <Button3 />
    </div>
  );
}

function LeftSideContextSelectors() {
  return (
    <div className="relative shrink-0" data-name="Left Side: Context Selectors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <RestaurantSelector />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start px-[4px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-[rgba(196,199,200,0.3)] h-[24px] relative shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 16 20" width="16">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[6px] relative shrink-0" data-name="Button">
      <Container24 />
    </div>
  );
}

function Ab6AXuCnYfUnU98PyByV7SP0Jy1Dsyr9RQArvnBzdf52PI46StrxhcCsviqvr7ClluvBJcw0NNiWbN0BlzwZd1G7KeyfxSgKgf9MWlEakPeEulkdpRycznB3CqpEvQl9ZbPpRtcvOaj6OWzbqRizGu5ZQyFkMcLcz3FdwccPsFlsQXlJkuKMqXQDnridI15Om8VU3GzwsFp1AjJjWkr8CDrKlx22WdIpj1OBb5ZPj3Us4MeP61FhiWK() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuCNYfUnU98PyByV7sP0JY1Dsyr9rQArvnBzdf52pI46StrxhcCSVIQVR7ClluvBJcw0nNiWbN0blzwZD1G7KEYFXSgKgf9mWLEakPeEULKDPRycznB3cqpEVQl9zbPPRtcvOaj6oWZBQRizGU5ZQyFkMcLcz3FdwccPsFLS-qXLJkuKMqX-QDnridI15OM8vU3-gzwsFP1AJJjWkr8cDRKlx22wd-IPJ1OBb5zPJ3US4meP61Fhi-wK">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuCnYfUnU98PyByV7SP0Jy1Dsyr9RQArvnBzdf52PI46StrxhcCsviqvr7ClluvBJcw0NNiWbN0BlzwZd1G7KeyfxSgKgf9MWlEakPeEulkdpRycznB3CqpEvQl9ZbPpRtcvOaj6OWzbqRizGu5ZQyFkMcLcz3FdwccPsFlsQXlJkuKMqXQDnridI15Om8VU3GzwsFp1AjJjWkr8CDrKlx22WdIpj1OBb5ZPj3Us4MeP61FhiWK} />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[32px]" data-name="Button">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Ab6AXuCnYfUnU98PyByV7SP0Jy1Dsyr9RQArvnBzdf52PI46StrxhcCsviqvr7ClluvBJcw0NNiWbN0BlzwZd1G7KeyfxSgKgf9MWlEakPeEulkdpRycznB3CqpEvQl9ZbPpRtcvOaj6OWzbqRizGu5ZQyFkMcLcz3FdwccPsFlsQXlJkuKMqXQDnridI15Om8VU3GzwsFp1AjJjWkr8CDrKlx22WdIpj1OBb5ZPj3Us4MeP61FhiWK />
      </div>
      <div aria-hidden className="absolute border border-[rgba(196,199,200,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function RightSideActions() {
  return (
    <div className="relative shrink-0" data-name="Right Side: Actions">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Margin />
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,248,248,0.8)] content-stretch flex h-[64px] items-center justify-between left-[256px] pb-px px-[24px] right-0 top-0" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[rgba(196,199,200,0.3)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <LeftSideContextSelectors />
      <RightSideActions />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 15 20" width="15">
        <g id="Container">
          <path d={svgPaths.p23cfd7c0} fill="white" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#0f172a] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container25 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] whitespace-nowrap">
        <p className="leading-[33.6px]">ProfitPlate</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">Management Suite</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container27 />
    </div>
  );
}

function BrandHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Brand / Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <Background8 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function BrandHeaderMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Brand / Header:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[24px] relative size-full">
        <BrandHeader />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[30px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 30 18" width="30">
        <g id="Margin">
          <path d={svgPaths.p20793584} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Dashboard</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <Margin1 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p643d217} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Inventory</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container29 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="Container">
          <path d={svgPaths.p18953040} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Ingredients</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container31 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p396ca1c0} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">{`Purchases & Prices`}</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[12px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 20 12" width="20">
        <g id="Container">
          <path d={svgPaths.p33125000} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Profitability</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container35 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[28px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 28 16" width="28">
        <g id="Margin">
          <path d={svgPaths.p19344b40} fill="#1A1C1C" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Reports</p>
        </div>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[#f6f3f2] content-stretch flex items-center pl-[12px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[239px]" data-name="Link">
      <div aria-hidden className="absolute border-[#5d5f5f] border-r-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Margin2 />
      <Container37 />
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[12px] relative shrink-0 w-[24px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 24 12" width="24">
        <g id="Container">
          <path d={svgPaths.p5df3d80} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Users</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container38 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.1px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 32.1 20" width="32.1">
        <g id="Margin">
          <path d={svgPaths.p3cdadd00} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Settings</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <Margin3 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function ScrollableNavigationList() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Scrollable Navigation List">
      <div className="overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start px-[8px] relative size-full">
          <Link />
          <Link1 />
          <Link2 />
          <Link3 />
          <Link4 />
          <Link5 />
          <Link6 />
          <Link7 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p3e9df400} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Logout</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function FooterActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer Actions">
      <div aria-hidden className="absolute border-[rgba(196,199,200,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] pt-[17px] px-[16px] relative size-full">
        <Link8 />
      </div>
    </div>
  );
}

function SideNavBarSharedComponentJsonExecution() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,248,248,0.8)] content-stretch flex flex-col h-[993px] items-start justify-between left-0 pr-px top-0 w-[256px]" data-name="SideNavBar (Shared Component JSON Execution)">
      <div aria-hidden className="absolute border-[rgba(196,199,200,0.3)] border-r border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <BrandHeaderMargin />
      <ScrollableNavigationList />
      <FooterActions />
    </div>
  );
}

export default function Reports() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[256px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Reports">
      <MainContent />
      <HeaderTopAppBar />
      <SideNavBarSharedComponentJsonExecution />
    </div>
  );
}