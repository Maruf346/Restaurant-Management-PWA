function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[69.214px] text-center tracking-[-1.3843px] whitespace-nowrap">
        <p className="leading-[83.057px]">ProfitPlate</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[1.154px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[25.955px] text-center whitespace-nowrap">
        <p className="leading-[41.529px]">Management Suite</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10.108px] items-start relative size-full">
        <Heading />
        <Container1 />
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[20.188px] tracking-[0.4038px] w-full">
        <p className="leading-[20.188px]">{`Email `}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#747878] text-[23.071px] w-full">
          <p className="leading-[normal]">Enter your email or username</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[11.536px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24.513px] py-[21.63px] relative size-full">
          <Container3 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.442px] border-solid inset-0 pointer-events-none rounded-[11.536px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[11.536px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1c1b1b] text-[20.188px] tracking-[0.4038px] w-full">
        <p className="leading-[20.188px]">Password</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#747878] text-[23.071px] w-full">
          <p className="leading-[normal]">Enter your password</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[11.536px] shrink-0 w-full" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24.513px] py-[21.63px] relative size-full">
          <Container5 />
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e2e8f0] border-[1.442px] border-solid inset-0 pointer-events-none rounded-[11.536px]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-end pb-[1.442px] pt-[2.884px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5c5f61] text-[20.188px] text-right whitespace-nowrap">
        <p className="leading-[30.281px]">Forgot Password?</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[11.536px] items-start pb-[11.536px] relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input1 />
      <Container6 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f172a] relative rounded-[11.536px] shrink-0 w-full" data-name="Button">
      <div aria-hidden className="absolute border-[1.442px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[11.536px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center px-[24.513px] py-[18.746px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20.188px] text-center text-white tracking-[0.4038px] whitespace-nowrap">
            <p className="leading-[20.188px]">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="relative shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[23.071px] items-start relative size-full">
        <Container2 />
        <Container4 />
        <Button />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white relative rounded-[17.304px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border-[1.442px] border-[rgba(255,255,255,0.8)] border-solid inset-0 pointer-events-none rounded-[17.304px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[47.585px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.2px_-0.64px_0] rounded-[17.304px] shadow-[0px_5.768px_8.652px_-1.442px_rgba(0,0,0,0.02),0px_2.884px_5.768px_-1.442px_rgba(0,0,0,0.02)]" data-name="Overlay+Shadow" />
        <Form />
      </div>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="bg-white relative rounded-[16.8px] shrink-0 w-[672px]" data-name="Card Container">
      <div className="content-stretch flex flex-col gap-[44.8px] items-start overflow-clip p-[68.6px] relative rounded-[inherit] size-full">
        <Container />
        <BackgroundBorder />
        <div className="absolute bg-white h-[1.4px] left-[1.4px] opacity-50 right-[1.4px] top-[1.4px]" data-name="Subtle Top Lighting Effect" />
      </div>
      <div aria-hidden className="absolute border-[#e5e2e1] border-[1.4px] border-solid inset-0 pointer-events-none rounded-[16.8px] shadow-[0px_5.6px_28px_-2.8px_rgba(0,0,0,0.05),0px_0px_1.4px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[1.19px] px-[40px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 250, 252) 0%, rgb(248, 250, 252) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Login Page">
      <CardContainer />
    </div>
  );
}