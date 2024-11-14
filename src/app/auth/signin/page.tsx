import BackHeader from "@/components/backHeader";
import Eye from "../../../../public/icon/eye";
import EyeSlash from "../../../../public/icon/eye-slash";
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <div className="sticky left-0 right-0 top-0 z-[3]"><BackHeader/></div>
      {/* 컨텐츠 */}
      <div className="min-h-[calc(100vh_-_221px)]">
        <div className="px-4 mx-auto max-w-7xl">
            <form className="mx-auto w-full pt-12 pb-20">
                {/* 로고 */}
                <h2 className="pb-14 text-center text-[0]">
                  <span className="before:bg-[url('https://kream.co.kr/_nuxt/img/login_title.164fc57.png')] before:bg-no-repeat before:bg-[length:250px_56px] before:inline-block before:h-14 before:w-64 before:content-['']"></span>
                </h2>
                {/* 이메일 입력 */}
                <div className="pt-2.5 pb-3.5 relative">
                    {/* h3, input border-b text-[#f15746] 색 변환 */}
                    <h3 className="text-[13px] tracking-[-.07px] leading-[18px] font-bold">이메일 주소</h3>
                    <div className="relative">
                        <input type="email" placeholder="예) kream@kream.co.kr" tabIndex={1} autoComplete="off" className="h-[40px] pr-[30px] text-[15px] tracking-[-.15px] leading-[22px] py-2 w-full border-b border-solid border-[#ebebeb]"/>
                    </div>
                    <p className="text-[#f15746] block text-[11px] leading-4 absolute">이메일 주소를 정확히 입력해주세요.</p>
                </div>
                {/* 비밀번호 입력 */}
                <div className="pt-2.5 pb-3.5 relative">
                    {/* h3, input border-b text-[#f15746] 색 변환 */}
                    <h3 className="text-[13px] tracking-[-.07px] leading-[18px] font-bold">비밀번호</h3>
                    <div className="relative">
                        <input type="password" tabIndex={2} autoComplete="off" className="h-[40px] pr-[30px] text-[15px] tracking-[-.15px] leading-[22px] py-2 w-full border-b border-solid border-[#ebebeb]"/>
                        <button className="-mt-3 absolute right-0 top-1/2"><Eye className="w-5 h-5"/></button>
                    </div>
                    <p className="text-[#f15746] block text-[11px] leading-4 absolute"> 영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자) </p>
                </div>
                {/* 로그인 버튼 */}
                <div className="pt-5">
                  <button className="text-[#fff] bg-[#22222233] tracking-[-.16px] h-12 w-full rounded-[10px]">로그인</button>
                </div>
                {/* 회원 가입 */}
                <ul className="flex justify-evenly mt-5">
                  <li className="flex-auto items-start inline-flex">
                    <Link href="" className="px-[5px] inline-flex text-[13px] tracking-[-0.7px] m-auto"> 이메일 가입 </Link>
                  </li>
                </ul>
            </form>
        </div>
      </div>
    </div>
  );
}
