import svgPaths from "./svg-ot4ujq12ze";
import imgProfilePicturePreview from "./55eaed062e68ceb12b6799e9aecc377c5a03f236.png";
import imgAb6AXuCnYfUnU98PyByV7SP0Jy1Dsyr9RQArvnBzdf52PI46StrxhcCsviqvr7ClluvBJcw0NNiWbN0BlzwZd1G7KeyfxSgKgf9MWlEakPeEulkdpRycznB3CqpEvQl9ZbPpRtcvOaj6OWzbqRizGu5ZQyFkMcLcz3FdwccPsFlsQXlJkuKMqXQDnridI15Om8VU3GzwsFp1AjJjWkr8CDrKlx22WdIpj1OBb5ZPj3Us4MeP61FhiWK from "./3e8f51e9b7244bcae7a651d01eb0ad840b89e65c.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[32px] tracking-[-0.32px] w-full">
        <p className="leading-[40px]">Account Settings</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[16px] w-full">
        <p className="leading-[24px]">Manage your personal profile and security preferences.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Container1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden className="absolute border-[#e5e2e1] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] whitespace-nowrap">
          <p className="leading-[33.6px]">Profile Information</p>
        </div>
      </div>
    </div>
  );
}

function ProfilePicturePreview() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Profile Picture Preview">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfilePicturePreview} />
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="h-[18px] relative shrink-0 w-[20px]" data-name="Shadow">
      <div className="absolute inset-[0_-15%_-38.89%_-15%]">
        <svg className="block size-full" fill="none" height="25" preserveAspectRatio="none" viewBox="0 0 26 25" width="26">
          <g filter="url(#filter0_dd_0_20)" id="Shadow">
            <path d={svgPaths.pc369400} fill="white" id="Icon" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25" id="filter0_dd_0_20" width="26" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_20" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
              <feBlend in2="effect1_dropShadow_0_20" mode="normal" result="effect2_dropShadow_0_20" />
              <feBlend in="SourceGraphic" in2="effect2_dropShadow_0_20" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute inset-px opacity-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Shadow />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f1edec] relative rounded-[9999px] shrink-0 size-[96px]" data-name="Background+Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <ProfilePicturePreview />
        <Container4 />
      </div>
      <div aria-hidden className="absolute border border-[#e5e2e1] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[12px]">Change Photo</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <Button />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">Full Name</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[16px] w-full">
          <p className="leading-[24px]">Eleanor Vance</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[11px] relative size-full">
          <Container7 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">Email Address</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[16px] w-full">
          <p className="leading-[24px]">eleanor.v@profitplate.com</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[11px] relative size-full">
          <Container9 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Container">
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start pb-[16px] relative size-full">
        <Container3 />
        <Container5 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f172a] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[24px] py-[10px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Save Profile</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e5e2e1] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end pt-[17px] relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function ProfileSection() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Profile Section">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.01px_0.41px_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Profile Section:shadow" />
        <Heading2 />
        <Container2 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div aria-hidden className="absolute border-[#e5e2e1] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] whitespace-nowrap">
          <p className="leading-[33.6px]">Security</p>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">Current Password</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(92,95,97,0.5)] w-full">
          <p className="leading-[normal]">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
          <Container12 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">New Password</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(92,95,97,0.5)] w-full">
          <p className="leading-[normal]">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
          <Container14 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Input3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] tracking-[0.28px] w-full">
        <p className="leading-[14px]">Confirm New Password</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(92,95,97,0.5)] w-full">
          <p className="leading-[normal]">••••••••</p>
        </div>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
          <Container16 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#6b7280] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <Input4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="max-w-[512px] relative shrink-0 w-[512px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] pb-[16px] relative size-full">
        <Container11 />
        <Container13 />
        <Container15 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(196,199,200,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[25px] py-[11px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Update Password</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#e5e2e1] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end pt-[17px] relative size-full">
        <Button2 />
      </div>
    </div>
  );
}

function SecuritySection() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Security Section">
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_0.01px_0.41px_0] rounded-[8px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.02),0px_2px_4px_-1px_rgba(0,0,0,0.02)]" data-name="Security Section:shadow" />
        <Heading3 />
        <Container10 />
        <HorizontalBorder1 />
      </div>
    </div>
  );
}

function LeftColumnProfileForm() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-start min-h-px relative w-[642.667px]" data-name="Left Column (Profile & Form)">
      <ProfileSection />
      <SecuritySection />
    </div>
  );
}

function MainCanvas() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Main - Canvas">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center pb-[64px] pt-[96px] px-[24px] relative size-full">
          <Container />
          <LeftColumnProfileForm />
        </div>
      </div>
    </div>
  );
}

function Container17() {
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

function Container18() {
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
      <Container17 />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
        <p className="leading-[14px]">Casa Thai — Casa 1</p>
      </div>
      <Container18 />
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

function Container19() {
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
      <Container19 />
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
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,248,248,0.8)] content-stretch flex h-[64px] items-center justify-between left-0 pb-px px-[24px] right-0 top-0" data-name="Header - TopAppBar">
      <div aria-hidden className="absolute border-[rgba(196,199,200,0.3)] border-b border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <LeftSideContextSelectors />
      <RightSideActions />
    </div>
  );
}

function MainContentWrapper() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[1087px] items-center justify-center min-h-[1087px] min-w-px relative" data-name="Main Content Wrapper">
      <MainCanvas />
      <HeaderTopAppBar />
    </div>
  );
}

function Container20() {
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

function Background() {
  return (
    <div className="bg-[#0f172a] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[40px]" data-name="Background">
      <Container20 />
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

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">Management Suite</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading />
      <Container22 />
    </div>
  );
}

function BrandHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Brand / Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[16px] relative size-full">
          <Background />
          <Container21 />
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

function Container23() {
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
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
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

function Container25() {
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
          <Container24 />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
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

function Container27() {
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
          <Container26 />
          <Container27 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
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

function Container29() {
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
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
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

function Container31() {
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
          <Container30 />
          <Container31 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
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

function Container33() {
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
          <Container32 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
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

function Container35() {
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
          <Container34 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Margin2() {
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

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1a1c1c] text-[14px] tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Settings</p>
        </div>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#f6f3f2] content-stretch flex items-center pl-[12px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[239px]" data-name="Link">
      <div aria-hidden className="absolute border-[#5d5f5f] border-r-4 border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Margin2 />
      <Container36 />
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

function Container37() {
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

function Container38() {
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
          <Container37 />
          <Container38 />
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
    <div className="absolute backdrop-blur-[12px] bg-[rgba(252,248,248,0.8)] content-stretch flex flex-col h-[1087px] items-start justify-between left-0 pr-px top-0 w-[256px]" data-name="SideNavBar (Shared Component JSON Execution)">
      <div aria-hidden className="absolute border-[rgba(196,199,200,0.3)] border-r border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <BrandHeaderMargin />
      <ScrollableNavigationList />
      <FooterActions />
    </div>
  );
}

export default function Settings() {
  return (
    <div className="content-stretch flex items-start justify-center pl-[256px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Settings">
      <MainContentWrapper />
      <SideNavBarSharedComponentJsonExecution />
    </div>
  );
}