import svgPaths from "./svg-5xhsha53na";
import imgBackgroundImageContextForTheModalOverlay from "./dc88908de67efec5bdef07148e101d75f6c35146.png";

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] whitespace-nowrap">
          <p className="leading-[33.6px]">Add Purchase Entry</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Container">
          <path d={svgPaths.p15494480} fill="#444748" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[6px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modal Header">
      <div aria-hidden className="absolute border-[#f1edec] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[17px] relative size-full">
        <Heading />
        <Button />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">Ingredient Name</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#747878] text-[16px] w-full">
          <p className="leading-[normal]">Search ingredients...</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[41px] pr-[13px] py-[13px] relative size-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g id="Container">
          <path d={svgPaths.p8a35e00} fill="#747878" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[12px] top-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[5px] relative shrink-0 w-[10px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="5" preserveAspectRatio="none" viewBox="0 0 10 5" width="10">
        <g id="Container">
          <path d="M5 5L0 0H10L5 5V5" fill="#747878" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SimulatedDropdownArrow() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center pr-[12px] right-0 top-0" data-name="Simulated dropdown arrow">
      <Container5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input />
      <Container3 />
      <SimulatedDropdownArrow />
    </div>
  );
}

function IngredientNameField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Ingredient Name Field">
      <Label />
      <Container1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">Purchase Quantity</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[13px] overflow-clip right-[28px] top-[13px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">0.00</p>
      </div>
    </div>
  );
}

function Container9() {
  return <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="Container" />;
}

function RectangleAlignStretch() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
        <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex items-center left-[13px] right-[13px] top-[11px]" data-name="Container">
      <Container9 />
      <RectangleAlignStretch />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container7 />
        <Container8 />
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[292.02px]" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">Unit</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="image">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="image">
          <path d="M7.2 9.6L12 14.4L16.8 9.6" id="Vector" stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[16px] w-full">
          <p className="leading-[24px]">kg</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[13px] pr-[41px] py-[11px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[120.98px] pr-[9px] py-[11px] relative rounded-[inherit] size-full">
            <Image />
          </div>
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return <div className="h-[17.9px] relative shrink-0 w-[9px]" data-name="Container" />;
}

function Container13() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center pr-[12px] right-0 top-0" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Options />
      <Container13 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative self-stretch shrink-0 w-[153.98px]" data-name="Container">
      <Label2 />
      <Container11 />
    </div>
  );
}

function QuantityAndUnitRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Quantity and Unit Row">
      <Container6 />
      <Container10 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">Purchase Price</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[33px] overflow-clip right-[28px] top-[13px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b7280] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">0.00</p>
      </div>
    </div>
  );
}

function Container19() {
  return <div className="flex-[1_0_0] h-[24px] min-w-px relative" data-name="Container" />;
}

function RectangleAlignStretch1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Rectangle:align-stretch">
        <div className="h-full min-w-[15px] opacity-0 relative shrink-0 w-[15px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex items-center left-[33px] right-[13px] top-[11px]" data-name="Container">
      <Container19 />
      <RectangleAlignStretch1 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[46px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container17 />
        <Container18 />
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#747878] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">$</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[12px] top-0" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input2 />
      <Container20 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative self-stretch" data-name="Container">
      <Label3 />
      <Container16 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">Date</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-px items-start leading-[0] not-italic px-px relative self-stretch shrink-0 text-[#1c1b1b] text-[16px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">mm</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">dd</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">/</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[24px]">yyyy</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px overflow-clip relative" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Image1() {
  return <div className="h-[15px] relative shrink-0 w-[16px]" data-name="image" />;
}

function ButtonMenu() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip p-[2px] relative shrink-0 size-[20px]" data-name="Button menu">
      <Image1 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container25 />
        <ButtonMenu />
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-[41px] pr-[13px] py-[11px] relative size-full">
          <Container24 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 18 20" width="18">
        <g id="Container">
          <path d={svgPaths.p2a946800} fill="#747878" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center left-0 pl-[12px] top-0" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Input3 />
      <Container26 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative self-stretch" data-name="Container">
      <Label4 />
      <Container23 />
    </div>
  );
}

function PriceAndDateRow() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Price and Date Row">
      <Container15 />
      <Container22 />
    </div>
  );
}

function FormContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[8px] relative size-full">
        <IngredientNameField />
        <QuantityAndUnitRow />
        <PriceAndDateRow />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[25px] py-[11px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f172a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Add Entry</p>
        </div>
      </div>
    </div>
  );
}

function ModalActions() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modal Actions">
      <div aria-hidden className="absolute border-[#f1edec] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end pt-[17px] relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function ModalPanel() {
  return (
    <div className="bg-white max-w-[512px] relative rounded-[12px] shrink-0 w-[512px]" data-name="Modal Panel">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] overflow-clip p-[25px] relative rounded-[inherit] size-full">
        <ModalHeader />
        <FormContent />
        <ModalActions />
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_24px_-12px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function DialogModalOverlayContainer() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(248,250,252,0.4)] content-stretch flex inset-0 items-center justify-center" data-name="Dialog - Modal Overlay Container">
      <div className="absolute bg-[rgba(49,48,48,0.1)] inset-0" data-name="Modal Backdrop for clicking outside to close (functional simulation)" />
      <ModalPanel />
    </div>
  );
}

export default function AddEntryProfitPlate() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(252, 248, 248) 0%, rgb(252, 248, 248) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Add Entry - ProfitPlate">
      <div className="absolute h-[1024px] left-0 top-0 w-[1280px]" data-name="Background Image context for the modal overlay">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-23.41%] max-w-none top-0 w-[146.81%]" src={imgBackgroundImageContextForTheModalOverlay} />
        </div>
      </div>
      <DialogModalOverlayContainer />
    </div>
  );
}