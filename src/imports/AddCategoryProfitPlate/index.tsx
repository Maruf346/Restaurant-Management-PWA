import svgPaths from "./svg-p48u48zoo7";

function HtmlBodyPre() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2px] pt-px relative shrink-0 w-full" data-name="Html → Body → Pre">
      <div className="[word-break:break-word] flex flex-col font-['Nimbus_Mono_PS:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-black w-full">
        <p className="leading-[normal]">Not Found!</p>
      </div>
    </div>
  );
}

function BackgroundScreenContextSimulatedMenuRecipesScreenIframe() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start opacity-40 overflow-clip pb-[995px] pt-[13px] px-[8px]" data-name="Background Screen Context (Simulated Menu & Recipes Screen) → Iframe">
      <div aria-hidden className="absolute bg-white inset-0 mix-blend-saturation pointer-events-none" />
      <HtmlBodyPre />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] whitespace-nowrap">
        <p className="leading-[33.6px]">Add New Category</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Organize your menu by creating a new product group.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8.01px] items-start relative size-full">
        <Heading />
        <Container1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="11.6667" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667" width="11.6667">
        <g id="Container">
          <path d={svgPaths.p34536fc0} fill="#444748" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[9999px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[10px] pt-[4px] px-[4px] relative size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[#f6f3f2] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[17px] pt-[24px] px-[24px] relative size-full">
        <Container />
        <Button />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">Category Name</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#c4c7c8] text-[16px] w-full">
          <p className="leading-[normal]">e.g., Appetizers, Main Course, Beverages</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[15px] relative size-full">
          <Container3 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CategoryName() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Category Name">
      <Label />
      <Input />
    </div>
  );
}

function BodyForm() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body (Form)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[24px] relative size-full">
        <CategoryName />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[25px] py-[11px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f172a] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center pb-[11.5px] pt-[10.5px] px-[24px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Add Category</p>
        </div>
      </div>
    </div>
  );
}

function FooterActions() {
  return (
    <div className="bg-[#fcf8f8] relative shrink-0 w-full" data-name="Footer (Actions)">
      <div aria-hidden className="absolute border-[#f6f3f2] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start justify-end pb-[16px] pt-[17px] px-[24px] relative size-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function ModalCard() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.95)] max-w-[448px] relative rounded-[12px] shrink-0 w-[448px]" data-name="Modal Card">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Header />
        <BodyForm />
        <FooterActions />
      </div>
      <div aria-hidden className="absolute border border-[rgba(241,245,249,0.8)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_40px_-12px_rgba(15,23,42,0.08),0px_0px_0px_1px_rgba(241,245,249,0.5)]" />
    </div>
  );
}

function ModalOverlay() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(15,23,42,0.2)] content-stretch flex inset-0 items-center justify-center p-[40px]" data-name="Modal Overlay">
      <ModalCard />
    </div>
  );
}

export default function AddCategoryProfitPlate() {
  return (
    <div className="relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Add Category - ProfitPlate">
      <BackgroundScreenContextSimulatedMenuRecipesScreenIframe />
      <ModalOverlay />
    </div>
  );
}