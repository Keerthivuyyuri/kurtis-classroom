// import customer from "../assets/customer.jpg";
// // import norweg from "../assets/norweg.png";

// function Feedback() {
//   return (
//     <section className="overflow-hidden bg-[#3458F6] px-6 py-[45px] text-white">
//       <div className="mx-auto max-w-[980px]">
//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="text-[28px] font-extrabold leading-[34px]">
//             Our best customers
//           </h2>
//           <div className="mx-auto mt-3 h-[4px] w-[72px] bg-white"></div>
//         </div>

//         {/* Content */}
//         <div className="mt-[50px] grid items-start justify-center gap-[34px] lg:grid-cols-[430px_1px_430px]">
//           {/* Left */}
//           <div className="relative h-[250px] w-[430px]">
//   {/* Speech Bubble */}
//   <div className="absolute left-[-55px] top-[-10px] z-20 h-[78px] w-[340px] rounded-[18px] bg-white shadow-sm">
//     <p className="flex h-full items-center justify-center text-[18px] font-medium text-[#2B2929]">
//       I love these games!
//     </p>

//     {/* Bubble Tail */}
//     <div
//       className="absolute -bottom-[8px] right-[48px] h-[18px] w-[18px] rotate-45 bg-white"
//     ></div>
//   </div>

//   {/* Customer Image */}
//   <div className="absolute left-[250px] top-[54px]">
//     {/* White Circle */}
//     <div className="absolute left-[16px] top-[24px] z-30 h-[14px] w-[14px] rounded-full bg-white"></div>

//     <img
//       src={customer}
//       alt="Customer"
//       className="h-[130px] w-[130px] rounded-full object-cover"
//     />
//   </div>
// </div>

//           {/* Divider */}
//           <div className="hidden h-[210px] w-[1px] bg-white/70 lg:block"></div>

//           {/* Right */}
//           <div className="pt-[18px]">
//             <h3 className="text-[15px] font-extrabold">
//               Martha | Norwegian Air
//             </h3>

//             <p className="mt-5 text-[12px] font-medium leading-[1.4]">
//               Recusandae sunt voluptate repellat velit dolorem eos nostrum
//               cupiditate. Labore porro cupiditate reiciendis enim neque. Modi eos
//               autem expedita voluptatibus dignissimos repellat.
//               <br />
//               <br />
//               Sit et aut minus quod vitae. Aut obcaecati cupiditate neque dolore
//               amet beatae quasi aliquam.
//             </p>

//             {/* <div className="mt-7 flex h-[44px] w-[150px] items-center justify-center bg-[#2F4EE8]">
//               <img
//                 src={norweg}
//                 alt="Norwegian"
//                 className="h-[26px] w-auto object-contain"
//               />
//             </div> */}
//             <div className="mt-8 inline-block bg-[#2446E8] px-5 py-2 text-[20px] font-extrabold">
//               norwegian
//             </div>
//           </div>
//         </div>

//         {/* Dots */}
//         <div className="mt-[35px] flex justify-center gap-3">
//           <span className="h-[12px] w-[12px] rounded-full bg-white"></span>
//           <span className="h-[12px] w-[12px] rounded-full bg-[#FFC533]"></span>
//           <span className="h-[12px] w-[12px] rounded-full bg-white"></span>
//           <span className="h-[12px] w-[12px] rounded-full bg-white"></span>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Feedback;
import customer from "../assets/customer.jpg";

function Feedback() {
  return (
    <section className="overflow-hidden bg-[#3458F6] px-5 py-12 text-white sm:px-8 lg:px-6 lg:py-[45px]">
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[24px] font-extrabold leading-tight sm:text-[28px] lg:text-[28px]">
            Our best customers
          </h2>

          <div className="mx-auto mt-3 h-[4px] w-[72px] bg-white"></div>
        </div>

        {/* Content */}
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[430px_1px_430px] lg:justify-center lg:gap-[34px]">
          {/* Left */}
          <div className="relative mx-auto h-[220px] w-full max-w-[380px] lg:h-[250px] lg:max-w-[430px]">
            {/* Speech Bubble */}
            <div className="absolute left-0 top-0 z-20 h-[72px] w-[280px] rounded-[18px] bg-white shadow-sm sm:w-[320px] lg:left-[-55px] lg:top-[-10px] lg:h-[78px] lg:w-[340px]">
              <p className="flex h-full items-center justify-center text-[16px] font-medium text-[#2B2929] sm:text-[17px] lg:text-[18px]">
                I love these games!
              </p>

              <div className="absolute -bottom-[8px] right-[45px] h-[18px] w-[18px] rotate-45 bg-white"></div>
            </div>

            {/* Customer */}
            <div className="absolute right-0 top-[55px] lg:left-[250px] lg:top-[54px]">
              <div className="absolute left-[16px] top-[24px] z-30 h-[14px] w-[14px] rounded-full bg-white"></div>

              <img
                src={customer}
                alt="Customer"
                className="h-[110px] w-[110px] rounded-full object-cover sm:h-[120px] sm:w-[120px] lg:h-[130px] lg:w-[130px]"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-[210px] w-[1px] bg-white/70 lg:block"></div>

          {/* Right */}
          <div className="text-center lg:pt-[18px] lg:text-left">
            <h3 className="text-[15px] font-extrabold">
              Martha | Norwegian Air
            </h3>

            <p className="mx-auto mt-5 max-w-[420px] text-[13px] leading-[1.6] lg:mx-0 lg:text-[12px] lg:leading-[1.4]">
              Recusandae sunt voluptate repellat velit dolorem eos nostrum
              cupiditate. Labore porro cupiditate reiciendis enim neque. Modi
              eos autem expedita voluptatibus dignissimos repellat.
              <br />
              <br />
              Sit et aut minus quod vitae. Aut obcaecati cupiditate neque
              dolore amet beatae quasi aliquam.
            </p>

            <div className="mt-8 inline-block bg-[#2446E8] px-5 py-2 text-[18px] font-extrabold lg:text-[20px]">
              norwegian
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          <span className="h-[12px] w-[12px] rounded-full bg-white"></span>
          <span className="h-[12px] w-[12px] rounded-full bg-[#FFC533]"></span>
          <span className="h-[12px] w-[12px] rounded-full bg-white"></span>
          <span className="h-[12px] w-[12px] rounded-full bg-white"></span>
        </div>
      </div>
    </section>
  );
}

export default Feedback;