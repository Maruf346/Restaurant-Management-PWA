import svgPaths from "./svg-dx48yvuliv";
import imgAb6AXuCnYfUnU98PyByV7SP0Jy1Dsyr9RQArvnBzdf52PI46StrxhcCsviqvr7ClluvBJcw0NNiWbN0BlzwZd1G7KeyfxSgKgf9MWlEakPeEulkdpRycznB3CqpEvQl9ZbPpRtcvOaj6OWzbqRizGu5ZQyFkMcLcz3FdwccPsFlsQXlJkuKMqXQDnridI15Om8VU3GzwsFp1AjJjWkr8CDrKlx22WdIpj1OBb5ZPj3Us4MeP61FhiWK from "./3e8f51e9b7244bcae7a651d01eb0ad840b89e65c.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">Dashboard Overview</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">{`Today's snapshot for Casa Thai — Casa 1`}</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="Page Header">
      <Container />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 16.5 12" width="16.5">
        <g id="Container">
          <path d={svgPaths.p25ac7380} fill="#1C1B1B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#ebe7e7] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">REVENUE</p>
      </div>
      <Background />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] tracking-[-0.96px] w-full">
        <p className="leading-[57.6px]">$12,450.00</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p26408280} fill="#059669" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">8.2% vs last week</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading2 />
        <Container5 />
      </div>
    </div>
  );
}

function RevenueCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Revenue Card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.41px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Revenue Card:shadow" />
        <Margin />
        <Container4 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 13.5 13.5" width="13.5">
        <g id="Container">
          <path d={svgPaths.p3470b200} fill="#1C1B1B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#ebe7e7] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">FOOD COST</p>
      </div>
      <Background1 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] tracking-[-0.96px] w-full">
        <p className="leading-[57.6px]">$3,610.50</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p26408280} fill="#DC2626" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">1.5% over theoretical</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading3 />
        <Container11 />
      </div>
    </div>
  );
}

function FoodCostCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Food Cost Card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.41px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Food Cost Card:shadow" />
        <Margin1 />
        <Container10 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[13.5px] relative shrink-0 w-[14.25px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.5" preserveAspectRatio="none" viewBox="0 0 14.25 13.5" width="14.25">
        <g id="Container">
          <path d={svgPaths.p10223900} fill="#1C1B1B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ebe7e7] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">GROSS PROFIT</p>
      </div>
      <Background2 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container14 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] tracking-[-0.96px] w-full">
        <p className="leading-[57.6px]">$8,839.50</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 size-[10.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.6667" preserveAspectRatio="none" viewBox="0 0 10.6667 10.6667" width="10.6667">
        <g id="Container">
          <path d={svgPaths.p26408280} fill="#059669" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">4.1% vs last week</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading4 />
        <Container17 />
      </div>
    </div>
  );
}

function GrossProfitCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Gross Profit Card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.41px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Gross Profit Card:shadow" />
        <Margin2 />
        <Container16 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
        <g id="Container">
          <path d={svgPaths.p1414c0a0} fill="#1C1B1B" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#ebe7e7] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Container21 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.7px] uppercase whitespace-nowrap">
        <p className="leading-[14px]">PROFIT MARGIN</p>
      </div>
      <Background3 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[8px] items-baseline leading-[0] not-italic relative shrink-0 text-[24px] w-full whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#1c1b1b] tracking-[-0.96px]">
        <p className="leading-[57.6px]">71.0</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#5c5f61]">
        <p className="leading-[33.6px]">%</p>
      </div>
    </div>
  );
}

function SmallProgressBarVisualization() {
  return (
    <div className="bg-[#e2e8f0] h-[8px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Small progress bar visualization">
      <div className="absolute bg-[#0f172a] inset-[0_29.01%_0_0]" data-name="Background" />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Paragraph />
        <SmallProgressBarVisualization />
      </div>
    </div>
  );
}

function ProfitMarginCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Profit Margin Card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0_0.41px_0] rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Profit Margin Card:shadow" />
        <Margin3 />
        <Container22 />
      </div>
    </div>
  );
}

function KeyMetricsBentoGrid() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Key Metrics Bento Grid">
      <RevenueCard />
      <FoodCostCard />
      <GrossProfitCard />
      <ProfitMarginCard />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 20 19" width="20">
        <g id="Container">
          <path d={svgPaths.p3e30af00} fill="#059669" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container23 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] whitespace-nowrap">
          <p className="leading-[33.6px]">Best Performing Dishes</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Heading5 />
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[102.47px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px] mb-0">DISH</p>
        <p className="leading-[12px]">NAME</p>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-end pb-[18.5px] pt-[17.5px] px-[24px] relative shrink-0 w-[92.91px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">SALES</p>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-end px-[24px] py-[12px] relative shrink-0 w-[84.53px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px] mb-0">FOOD</p>
        <p className="leading-[12px]">COST</p>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-end pb-[18.5px] pt-[17.5px] px-[24px] relative shrink-0 w-[94.45px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">PROFIT</p>
      </div>
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-end pb-[18.5px] pt-[17.5px] px-[24px] relative shrink-0 w-[100.16px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">MARGIN</p>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Header → Row">
      <Cell />
      <Cell1 />
      <Cell2 />
      <Cell3 />
      <Cell4 />
    </div>
  );
}

function Data() {
  return (
    <div className="relative shrink-0 w-[102.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px] mb-0">Pad</p>
          <p className="leading-[21px] mb-0">Thai</p>
          <p className="leading-[21px]">Chicken</p>
        </div>
      </div>
    </div>
  );
}

function Data1() {
  return (
    <div className="relative shrink-0 w-[92.91px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[37.5px] pt-[37px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$1,240</p>
        </div>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="relative shrink-0 w-[84.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[37.5px] pt-[37px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$285</p>
        </div>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[37.5px] pt-[37px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$955</p>
        </div>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-center justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">77%</p>
      </div>
    </div>
  );
}

function Data4() {
  return (
    <div className="relative shrink-0 w-[100.16px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[37px] pt-[38.5px] px-[24px] relative size-full">
        <Background4 />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[102.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px] mb-0">Green</p>
          <p className="leading-[21px] mb-0">Curry</p>
          <p className="leading-[21px]">Beef</p>
        </div>
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[92.91px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[37.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$980</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[84.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[37.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$245</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[37.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$735</p>
        </div>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-center justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">75%</p>
      </div>
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[100.16px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[37px] pt-[39px] px-[24px] relative size-full">
        <Background5 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Data5 />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[102.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px] mb-0">Tom</p>
          <p className="leading-[21px] mb-0">Yum</p>
          <p className="leading-[21px]">Soup</p>
        </div>
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[92.91px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[37.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$850</p>
        </div>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[84.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[37.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$153</p>
        </div>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[37.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$697</p>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-center justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">82%</p>
      </div>
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[100.16px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[37px] pt-[39px] px-[24px] relative size-full">
        <Background6 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
    </div>
  );
}

function Data15() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[102.47px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px] mb-0">Mango</p>
        <p className="leading-[21px] mb-0">Sticky</p>
        <p className="leading-[21px]">Rice</p>
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[37px] pt-[37.5px] px-[24px] relative shrink-0 w-[92.91px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">$620</p>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[37px] pt-[37.5px] px-[24px] relative shrink-0 w-[84.53px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">$93</p>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[37px] pt-[37.5px] px-[24px] relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#059669] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">$527</p>
      </div>
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#ecfdf5] content-stretch flex items-center justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#065f46] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">85%</p>
      </div>
    </div>
  );
}

function Data19() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[36.5px] pt-[39px] px-[24px] relative shrink-0 w-[100.16px]" data-name="Data">
      <Background7 />
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Data15 />
      <Data16 />
      <Data17 />
      <Data18 />
      <Data19 />
    </div>
  );
}

function Body() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[474.52px]" data-name="Table">
      <HeaderRow />
      <Body />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <Table />
      </div>
    </div>
  );
}

function BestPerformingDishes() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Best Performing Dishes">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder />
        <Container24 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[19px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19" preserveAspectRatio="none" viewBox="0 0 22 19" width="22">
        <g id="Container">
          <path d={svgPaths.p7555480} fill="#DC2626" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container25 />
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] whitespace-nowrap">
          <p className="leading-[33.6px]">Worst Performing Dishes</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[25px] pt-[24px] px-[24px] relative size-full">
          <Heading6 />
        </div>
      </div>
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start px-[24px] py-[12px] relative shrink-0 w-[107.3px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px] mb-0">DISH</p>
        <p className="leading-[12px]">NAME</p>
      </div>
    </div>
  );
}

function Cell6() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-end pb-[18.5px] pt-[17.5px] px-[24px] relative shrink-0 w-[88.98px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">SALES</p>
      </div>
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-end px-[24px] py-[12px] relative shrink-0 w-[84.53px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px] mb-0">FOOD</p>
        <p className="leading-[12px]">COST</p>
      </div>
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-end pb-[18.5px] pt-[17.5px] px-[24px] relative shrink-0 w-[94.45px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">PROFIT</p>
      </div>
    </div>
  );
}

function Cell9() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-end pb-[18.5px] pt-[17.5px] px-[24px] relative shrink-0 w-[100.16px]" data-name="Cell">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-right tracking-[0.6px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">MARGIN</p>
      </div>
    </div>
  );
}

function HeaderRow1() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Header → Row">
      <Cell5 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
      <Cell9 />
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[107.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px] mb-0">Seafood</p>
          <p className="leading-[21px]">Platter</p>
        </div>
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[88.98px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[27px] pt-[26.5px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$450</p>
        </div>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[84.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[27px] pt-[26.5px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$279</p>
        </div>
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[27px] pt-[26.5px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$171</p>
        </div>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-center justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#991b1b] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">38%</p>
      </div>
    </div>
  );
}

function Data24() {
  return (
    <div className="relative shrink-0 w-[100.16px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[26.5px] pt-[28px] px-[24px] relative size-full">
        <Background8 />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
      <Data24 />
    </div>
  );
}

function Data25() {
  return (
    <div className="relative shrink-0 w-[107.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px] mb-0">Duck</p>
          <p className="leading-[21px]">Curry</p>
        </div>
      </div>
    </div>
  );
}

function Data26() {
  return (
    <div className="relative shrink-0 w-[88.98px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[27px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$380</p>
        </div>
      </div>
    </div>
  );
}

function Data27() {
  return (
    <div className="relative shrink-0 w-[84.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[27px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$209</p>
        </div>
      </div>
    </div>
  );
}

function Data28() {
  return (
    <div className="relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[27px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$171</p>
        </div>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-center justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#991b1b] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">45%</p>
      </div>
    </div>
  );
}

function Data29() {
  return (
    <div className="relative shrink-0 w-[100.16px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[26.5px] pt-[28.5px] px-[24px] relative size-full">
        <Background9 />
      </div>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Data25 />
      <Data26 />
      <Data27 />
      <Data28 />
      <Data29 />
    </div>
  );
}

function Data30() {
  return (
    <div className="relative shrink-0 w-[107.3px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[16.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
          <p className="leading-[21px] mb-0">Steamed</p>
          <p className="leading-[21px] mb-0">Whole</p>
          <p className="leading-[21px]">Fish</p>
        </div>
      </div>
    </div>
  );
}

function Data31() {
  return (
    <div className="relative shrink-0 w-[88.98px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[37.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$320</p>
        </div>
      </div>
    </div>
  );
}

function Data32() {
  return (
    <div className="relative shrink-0 w-[84.53px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[37.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$166</p>
        </div>
      </div>
    </div>
  );
}

function Data33() {
  return (
    <div className="relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[24px] py-[37.5px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">$154</p>
        </div>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-center justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#991b1b] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">48%</p>
      </div>
    </div>
  );
}

function Data34() {
  return (
    <div className="relative shrink-0 w-[100.16px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[37px] pt-[39px] px-[24px] relative size-full">
        <Background10 />
      </div>
    </div>
  );
}

function Row6() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-1px] pb-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <Data30 />
      <Data31 />
      <Data32 />
      <Data33 />
      <Data34 />
    </div>
  );
}

function Data35() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[107.3px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px] mb-0">Crab</p>
        <p className="leading-[21px] mb-0">Fried</p>
        <p className="leading-[21px]">Rice</p>
      </div>
    </div>
  );
}

function Data36() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[37px] pt-[37.5px] px-[24px] relative shrink-0 w-[88.98px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">$290</p>
      </div>
    </div>
  );
}

function Data37() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[37px] pt-[37.5px] px-[24px] relative shrink-0 w-[84.53px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">$145</p>
      </div>
    </div>
  );
}

function Data38() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[37px] pt-[37.5px] px-[24px] relative shrink-0 w-[94.45px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#dc2626] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">$145</p>
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="bg-[#fef2f2] content-stretch flex items-center justify-end px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#991b1b] text-[12px] text-right whitespace-nowrap">
        <p className="leading-[16px]">50%</p>
      </div>
    </div>
  );
}

function Data39() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[36.5px] pt-[39px] px-[24px] relative shrink-0 w-[100.16px]" data-name="Data">
      <Background11 />
    </div>
  );
}

function Row7() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Row">
      <Data35 />
      <Data36 />
      <Data37 />
      <Data38 />
      <Data39 />
    </div>
  );
}

function Body1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row4 />
      <Row5 />
      <Row6 />
      <Row7 />
    </div>
  );
}

function Table1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[475.42px]" data-name="Table">
      <HeaderRow1 />
      <Body1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <Table1 />
      </div>
    </div>
  );
}

function WorstPerformingDishes() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[12px] self-stretch" data-name="Worst Performing Dishes">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder1 />
        <Container26 />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function PerformanceTablesSection() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center pt-[32px] relative shrink-0 w-full" data-name="Performance Tables Section">
      <BestPerformingDishes />
      <WorstPerformingDishes />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="bg-[#f8fafc] min-h-[1024px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="content-stretch flex flex-col gap-[32px] items-start min-h-[inherit] pb-[64.41px] pt-[96px] px-[40px] relative size-full">
        <PageHeader />
        <KeyMetricsBentoGrid />
        <PerformanceTablesSection />
      </div>
    </div>
  );
}

function Container27() {
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

function Container28() {
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

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container27 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Casa Thai — Casa 1</p>
      </div>
      <Container28 />
    </div>
  );
}

function RestaurantSelector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Restaurant Selector">
      <Button />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[12px]">Daily</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[12px]">Weekly</p>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[12px] py-[4px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[12px]">Monthly</p>
        </div>
      </div>
    </div>
  );
}

function DatePeriodSelector() {
  return (
    <div className="bg-[#f6f3f2] content-stretch flex items-start p-[5px] relative rounded-[8px] shrink-0" data-name="Date Period Selector">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function LeftSideContextSelectors() {
  return (
    <div className="relative shrink-0" data-name="Left Side: Context Selectors">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <RestaurantSelector />
        <DatePeriodSelector />
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start px-[4px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-[rgba(196,199,200,0.3)] h-[24px] relative shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container29() {
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
      <Container29 />
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
        <Margin4 />
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

function Container30() {
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

function Background12() {
  return (
    <div className="bg-[#0f172a] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container30 />
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

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">Management Suite</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container32 />
    </div>
  );
}

function BrandHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Brand / Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <Background12 />
          <Container31 />
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

function Container33() {
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

function Container34() {
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

function LinkActiveTabDashboard() {
  return (
    <div className="bg-[#f6f3f2] relative rounded-[8px] shrink-0 w-full" data-name="Link - Active Tab: Dashboard">
      <div aria-hidden className="absolute border-[#5d5f5f] border-r-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center pl-[12px] pr-[16px] py-[10px] relative size-full">
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
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

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Inventory</p>
      </div>
    </div>
  );
}

function Link() {
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

function Container37() {
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

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Ingredients</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container37 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
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

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">{`Purchases & Prices`}</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container39 />
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
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

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Profitability</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16" preserveAspectRatio="none" viewBox="0 0 16 16" width="16">
        <g id="Container">
          <path d={svgPaths.p19344b40} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Reports</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container43 />
          <Container44 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
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

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Users</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative size-full">
          <Container45 />
          <Container46 />
        </div>
      </div>
    </div>
  );
}

function Margin5() {
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

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Settings</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <Margin5 />
          <Container47 />
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
          <LinkActiveTabDashboard />
          <Link />
          <Link1 />
          <Link2 />
          <Link3 />
          <Link4 />
          <Link5 />
          <Link6 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
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

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Logout</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container48 />
          <Container49 />
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
        <Link7 />
      </div>
    </div>
  );
}

function SideNavBarSharedComponentJsonExecution() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,248,248,0.8)] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 pr-px top-0 w-[256px]" data-name="SideNavBar (Shared Component JSON Execution)">
      <div aria-hidden className="absolute border-[rgba(196,199,200,0.3)] border-r border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <BrandHeaderMargin />
      <ScrollableNavigationList />
      <FooterActions />
    </div>
  );
}

export default function DashboardProfitPlate() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[256px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Dashboard - ProfitPlate">
      <MainContentCanvas />
      <HeaderTopAppBar />
      <SideNavBarSharedComponentJsonExecution />
    </div>
  );
}