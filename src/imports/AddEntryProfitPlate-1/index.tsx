import imgBackgroundImageContextForTheModalOverlay from "./dc88908de67efec5bdef07148e101d75f6c35146.png";

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[24px] tracking-[-0.6px] w-full">
          <p className="leading-[33.6px]">Invite New User</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#444748] text-[14px] w-full">
          <p className="leading-[21px]">Send an invitation to join the ProfitPlate management suite.</p>
        </div>
      </div>
    </div>
  );
}

function ModalHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modal Header">
      <div aria-hidden className="absolute border-[rgba(196,199,200,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.01px] items-start pb-[21px] pt-[20px] px-[24px] relative size-full">
        <Heading />
        <Container />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[12px] w-full">
        <p className="leading-[12px]">Full Name</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(68,71,72,0.5)] w-full">
          <p className="leading-[normal]">e.g. Jane Doe</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[13px] py-[11px] relative size-full">
          <Container1 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(196,199,200,0.6)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FullName() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Full Name">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[12px] w-full">
        <p className="leading-[12px]">Email Address</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(68,71,72,0.5)] w-full">
          <p className="leading-[normal]">jane.doe@example.com</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[13px] py-[11px] relative size-full">
          <Container2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(196,199,200,0.6)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function EmailAddress() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Email Address">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[12px] w-full">
        <p className="leading-[12px]">Role</p>
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

function Container4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[16px] w-full">
          <p className="leading-[24px]">Select a role...</p>
        </div>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Options">
      <div aria-hidden className="absolute border border-[rgba(196,199,200,0.6)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[13px] py-[9px] relative size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[429px] pr-[9px] py-[9px] relative rounded-[inherit] size-full">
            <Image />
          </div>
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return <div className="absolute bottom-[21.43%] right-[12px] top-[21.43%] w-[12px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Options />
      <Container5 />
    </div>
  );
}

function Role() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Role">
      <Label2 />
      <Container3 />
    </div>
  );
}

function ModalBodyForm() {
  return (
    <div className="relative shrink-0 w-full" data-name="Modal Body (Form)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <FullName />
        <EmailAddress />
        <Role />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Cancel</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#313030] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[8px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[20px] py-[8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#f4f0ef] text-[14px] text-center tracking-[0.28px] whitespace-nowrap">
          <p className="leading-[14px]">Send Invitation</p>
        </div>
      </div>
    </div>
  );
}

function ModalFooterActions() {
  return (
    <div className="bg-[rgba(252,248,248,0.5)] relative rounded-bl-[12px] rounded-br-[12px] shrink-0 w-full" data-name="Modal Footer (Actions)">
      <div aria-hidden className="absolute border-[rgba(196,199,200,0.1)] border-solid border-t inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center justify-end pb-[16px] pt-[17px] px-[24px] relative size-full">
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function InviteUserModalContentLayer() {
  return (
    <div className="bg-white max-w-[512px] relative rounded-[12px] shrink-0 w-[512px]" data-name="Invite User Modal Content (Layer 2)">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <ModalHeader />
        <ModalBodyForm />
        <ModalFooterActions />
      </div>
      <div aria-hidden className="absolute border border-[rgba(196,199,200,0.3)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_12px_24px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function DialogModalOverlayContainer() {
  return (
    <div className="absolute backdrop-blur-[5px] bg-[rgba(248,250,252,0.4)] content-stretch flex inset-0 items-center justify-center" data-name="Dialog - Modal Overlay Container">
      <div className="absolute bg-[rgba(49,48,48,0.1)] inset-0" data-name="Modal Backdrop for clicking outside to close (functional simulation)" />
      <InviteUserModalContentLayer />
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