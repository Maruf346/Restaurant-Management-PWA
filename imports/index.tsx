import svgPaths from "./svg-6nkybhjzc4";

function Container() {
  return (
    <div className="h-[12px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13.5 12" width="13.5">
        <g id="Container">
          <path d={svgPaths.p172c6aa0} fill="#5D5F5F" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5d5f5f] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Casa Thai — Casa 1</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="bg-[rgba(93,95,95,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container />
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[12px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13.5 12" width="13.5">
        <g id="Container">
          <path d={svgPaths.p172c6aa0} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Casa Thai — Casa 2</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container2 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[12px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13.5 12" width="13.5">
        <g id="Container">
          <path d={svgPaths.p172c6aa0} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Bangkok Bowl — North</p>
      </div>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container4 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[12px] relative shrink-0 w-[13.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 13.5 12" width="13.5">
        <g id="Container">
          <path d={svgPaths.p172c6aa0} fill="#5C5F61" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[14px] tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Little India — Central</p>
      </div>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative size-full">
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <ItemLink />
        <ItemLink1 />
        <ItemLink2 />
        <ItemLink3 />
      </div>
    </div>
  );
}

export default function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[12px] bg-[rgba(252,248,248,0.8)] content-stretch flex flex-col gap-[8px] items-start p-[9px] relative rounded-[12px] size-full" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(196,199,200,0.3)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 left-0 rounded-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[256px]" data-name="Overlay+Shadow" />
      <List />
    </div>
  );
}