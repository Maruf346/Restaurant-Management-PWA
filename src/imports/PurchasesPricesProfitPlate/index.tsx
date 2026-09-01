import svgPaths from "./svg-iparjpttkb";
import imgAb6AXuCnYfUnU98PyByV7SP0Jy1Dsyr9RQArvnBzdf52PI46StrxhcCsviqvr7ClluvBJcw0NNiWbN0BlzwZd1G7KeyfxSgKgf9MWlEakPeEulkdpRycznB3CqpEvQl9ZbPpRtcvOaj6OWzbqRizGu5ZQyFkMcLcz3FdwccPsFlsQXlJkuKMqXQDnridI15Om8VU3GzwsFp1AjJjWkr8CDrKlx22WdIpj1OBb5ZPj3Us4MeP61FhiWK from "./3e8f51e9b7244bcae7a651d01eb0ad840b89e65c.png";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[32px] tracking-[-0.32px] whitespace-nowrap">
        <p className="leading-[40px]">{`Purchases & Prices`}</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Manage and monitor ingredient purchase records. Track quantity, cost,</p>
        <p className="leading-[24px] mb-0">and historical pricing to maintain accurate inventory valuation and cost</p>
        <p className="leading-[24px]">analysis.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[18px] relative shrink-0 w-[26px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 26 18" width="26">
        <g id="Margin">
          <path d={svgPaths.p8a35e00} fill="#444748" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#747878] text-[14px] w-full">
        <p className="leading-[normal]">Search ingredients...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip py-[2px] relative rounded-[inherit] size-full">
        <Container3 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[256px]" data-name="Background+Border">
      <div className="content-stretch flex items-center overflow-clip px-[13px] py-px relative rounded-[inherit] size-full">
        <Margin />
        <Input />
      </div>
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <BackgroundBorder />
    </div>
  );
}

function HeaderSection() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Header Section">
      <Container />
      <Container2 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f172a] content-stretch flex flex-col items-end justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Add Entry</p>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="relative shrink-0 w-[317.66px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Ingredient</p>
        </div>
      </div>
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative shrink-0 w-[216.8px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] text-right tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Purchase Quantity</p>
        </div>
      </div>
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative shrink-0 w-[184.47px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] text-right tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Purchase Price</p>
        </div>
      </div>
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative shrink-0 w-[159.08px]" data-name="Cell">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] text-right tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Date</p>
        </div>
      </div>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="bg-[#f8fafc] mb-[-1px] relative shrink-0 w-full" data-name="Header → Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pb-px pr-[64px] relative size-full">
          <Cell />
          <Cell1 />
          <Cell2 />
          <Cell3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p58ad0e0} fill="#444748" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f1edec] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Rice Noodles (Premium)</p>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative shrink-0 w-[317.66px]" data-name="Data">
      <Background />
      <Container5 />
    </div>
  );
}

function Data1() {
  return (
    <div className="content-stretch flex flex-col items-end px-[16px] py-[18px] relative shrink-0 w-[216.8px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">50 kg</p>
      </div>
    </div>
  );
}

function Data2() {
  return (
    <div className="content-stretch flex flex-col items-end px-[16px] py-[18px] relative shrink-0 w-[184.47px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">฿ 2,500.00</p>
      </div>
    </div>
  );
}

function Data3() {
  return (
    <div className="content-stretch flex flex-col items-end px-[16px] py-[18px] relative shrink-0 w-[159.08px]" data-name="Data">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[21px]">Oct 24, 2023</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#747878" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 pb-[5px] relative shrink-0" data-name="Button">
      <Container6 />
    </div>
  );
}

function Data4() {
  return (
    <div className="content-stretch flex flex-col items-center p-[16px] relative shrink-0 w-[64px]" data-name="Data">
      <Button1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-0.5px] relative shrink-0 w-full" data-name="Row">
      <Data />
      <Data1 />
      <Data2 />
      <Data3 />
      <Data4 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[11.069px] relative shrink-0 w-[12.833px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.0688" preserveAspectRatio="none" viewBox="0 0 12.8333 11.0688" width="12.8333">
        <g id="Container">
          <path d={svgPaths.pcb40c00} fill="#444748" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f1edec] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Black Tiger Shrimp</p>
      </div>
    </div>
  );
}

function Data5() {
  return (
    <div className="relative shrink-0 w-[317.66px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Background1 />
        <Container8 />
      </div>
    </div>
  );
}

function Data6() {
  return (
    <div className="relative shrink-0 w-[216.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">20 kg</p>
        </div>
      </div>
    </div>
  );
}

function Data7() {
  return (
    <div className="relative shrink-0 w-[184.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">฿ 8,400.00</p>
        </div>
      </div>
    </div>
  );
}

function Data8() {
  return (
    <div className="relative shrink-0 w-[159.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">Oct 23, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#747878" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 pb-[5px] relative shrink-0" data-name="Button">
      <Container9 />
    </div>
  );
}

function Data9() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[16px] relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-0.5px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Data5 />
      <Data6 />
      <Data7 />
      <Data8 />
      <Data9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p11fa4cc0} fill="#444748" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f1edec] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Firm Tofu</p>
      </div>
    </div>
  );
}

function Data10() {
  return (
    <div className="relative shrink-0 w-[317.66px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Background2 />
        <Container11 />
      </div>
    </div>
  );
}

function Data11() {
  return (
    <div className="relative shrink-0 w-[216.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">500 units</p>
        </div>
      </div>
    </div>
  );
}

function Data12() {
  return (
    <div className="relative shrink-0 w-[184.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">฿ 1,500.00</p>
        </div>
      </div>
    </div>
  );
}

function Data13() {
  return (
    <div className="relative shrink-0 w-[159.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">Oct 22, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#747878" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 pb-[5px] relative shrink-0" data-name="Button">
      <Container12 />
    </div>
  );
}

function Data14() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[16px] relative size-full">
        <Button3 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-0.5px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Data10 />
      <Data11 />
      <Data12 />
      <Data13 />
      <Data14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[10.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 10.5 10.5" width="10.5">
        <g id="Container">
          <path d={svgPaths.pebf0200} fill="#444748" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f1edec] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Oyster Sauce (Gallon)</p>
      </div>
    </div>
  );
}

function Data15() {
  return (
    <div className="relative shrink-0 w-[317.66px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Background3 />
        <Container14 />
      </div>
    </div>
  );
}

function Data16() {
  return (
    <div className="relative shrink-0 w-[216.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">10 liters</p>
        </div>
      </div>
    </div>
  );
}

function Data17() {
  return (
    <div className="relative shrink-0 w-[184.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">฿ 1,200.00</p>
        </div>
      </div>
    </div>
  );
}

function Data18() {
  return (
    <div className="relative shrink-0 w-[159.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end px-[16px] py-[18px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">Oct 20, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#747878" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 pb-[5px] relative shrink-0" data-name="Button">
      <Container15 />
    </div>
  );
}

function Data19() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-[16px] relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start justify-center mb-[-0.5px] pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Data15 />
      <Data16 />
      <Data17 />
      <Data18 />
      <Data19 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[9.912px] relative shrink-0 w-[9.914px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="9.91218" preserveAspectRatio="none" viewBox="0 0 9.91401 9.91218" width="9.91401">
        <g id="Container">
          <path d={svgPaths.p2f459b80} fill="#444748" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f1edec] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Background">
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Thai Basil</p>
      </div>
    </div>
  );
}

function Data20() {
  return (
    <div className="relative shrink-0 w-[317.66px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
        <Background4 />
        <Container17 />
      </div>
    </div>
  );
}

function Data21() {
  return (
    <div className="relative shrink-0 w-[216.8px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[17.5px] pt-[18px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">5 kg</p>
        </div>
      </div>
    </div>
  );
}

function Data22() {
  return (
    <div className="relative shrink-0 w-[184.47px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[17.5px] pt-[18px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">฿ 450.00</p>
        </div>
      </div>
    </div>
  );
}

function Data23() {
  return (
    <div className="relative shrink-0 w-[159.08px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pb-[17.5px] pt-[18px] px-[16px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] text-right whitespace-nowrap">
          <p className="leading-[21px]">Oct 19, 2023</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[13.333px] relative shrink-0 w-[3.333px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.3333" preserveAspectRatio="none" viewBox="0 0 3.33333 13.3333" width="3.33333">
        <g id="Container">
          <path d={svgPaths.p246f4800} fill="#747878" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 pb-[5px] relative shrink-0" data-name="Button">
      <Container18 />
    </div>
  );
}

function Data24() {
  return (
    <div className="relative shrink-0 w-[64px]" data-name="Data">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[15.5px] pt-[16px] px-[16px] relative size-full">
        <Button5 />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start justify-center pt-px relative shrink-0 w-full" data-name="Row">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <Data20 />
      <Data21 />
      <Data22 />
      <Data23 />
      <Data24 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Body">
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
    </div>
  );
}

function Table() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <HeaderRow />
        <Body />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">Showing 1 to 5 of 42 entries</p>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 6.16667 10" width="6.16667">
        <g id="Container">
          <path d={svgPaths.p30c9c200} fill="#747878" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center opacity-50 pb-[10px] pt-[4px] px-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container21 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] flex items-center justify-center pb-[10.5px] pt-[9.5px] px-px relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">1</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">2</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">3</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#747878] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">...</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[10px] relative shrink-0 w-[6.167px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10" preserveAspectRatio="none" viewBox="0 0 6.16667 10" width="6.16667">
        <g id="Container">
          <path d={svgPaths.p2ba68100} fill="#747878" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[10px] pt-[4px] px-[4px] relative rounded-[4px] shrink-0" data-name="Button">
      <Container23 />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Container22 />
        <Button10 />
      </div>
    </div>
  );
}

function PaginationFooter() {
  return (
    <div className="bg-[#f8fafc] relative shrink-0 w-full" data-name="Pagination Footer">
      <div aria-hidden className="absolute border-[#f1f5f9] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[12px] pt-[13px] px-[16px] relative size-full">
          <Container19 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function DataTableCard() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Data Table Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Table />
        <PaginationFooter />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="max-w-[1440px] min-h-[1024px] relative shrink-0 w-full" data-name="Main Canvas">
      <div className="flex flex-col items-end max-w-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-end max-w-[inherit] min-h-[inherit] pb-[392px] pt-[96px] px-[40px] relative size-full">
          <HeaderSection />
          <Button />
          <DataTableCard />
        </div>
      </div>
    </div>
  );
}

function Container24() {
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

function Container25() {
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

function Button11() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center px-[13px] py-[7px] relative rounded-[6px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container24 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Casa Thai — Casa 1</p>
      </div>
      <Container25 />
    </div>
  );
}

function RestaurantSelector() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Restaurant Selector">
      <Button11 />
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

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start px-[4px] relative shrink-0 w-[9px]" data-name="Margin">
      <div className="bg-[rgba(196,199,200,0.3)] h-[24px] relative shrink-0 w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container26() {
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

function Button12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pb-[6px] relative shrink-0" data-name="Button">
      <Container26 />
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

function Button13() {
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
        <Margin1 />
        <Button12 />
        <Button13 />
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

function Container27() {
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

function Background5() {
  return (
    <div className="bg-[#0f172a] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container27 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] whitespace-nowrap">
        <p className="leading-[33.6px]">ProfitPlate</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">Management Suite</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading1 />
      <Container29 />
    </div>
  );
}

function BrandHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Brand / Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <Background5 />
          <Container28 />
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

function Margin2() {
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

function Container30() {
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
          <Margin2 />
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
          <path d={svgPaths.p643d217} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
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
          <Container31 />
          <Container32 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
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

function Container34() {
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
          <Container33 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[30px]" data-name="Margin">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 30 20" width="30">
        <g id="Margin">
          <path d={svgPaths.p396ca1c0} fill="#1A1C1C" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">{`Purchases & Prices`}</p>
        </div>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[#f6f3f2] content-stretch flex items-center pl-[12px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[239px]" data-name="Link">
      <div aria-hidden className="absolute border-[#5d5f5f] border-r-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Margin3 />
      <Container35 />
    </div>
  );
}

function Container36() {
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

function Container37() {
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
          <Container36 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
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

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Reports</p>
      </div>
    </div>
  );
}

function Link5() {
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

function Container40() {
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

function Container41() {
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
          <Container40 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Margin4() {
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

function Container42() {
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
          <Margin4 />
          <Container42 />
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

function Container43() {
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

function Container44() {
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
          <Container43 />
          <Container44 />
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
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,248,248,0.8)] content-stretch flex flex-col h-[1024px] items-start justify-between left-0 pr-px top-0 w-[256px]" data-name="SideNavBar (Shared Component JSON Execution)">
      <div aria-hidden className="absolute border-[rgba(196,199,200,0.3)] border-r border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <BrandHeaderMargin />
      <ScrollableNavigationList />
      <FooterActions />
    </div>
  );
}

export default function PurchasesPricesProfitPlate() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[256px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Purchases & Prices - ProfitPlate">
      <MainCanvas />
      <HeaderTopAppBar />
      <SideNavBarSharedComponentJsonExecution />
    </div>
  );
}