import BackHeader from "@/components/backHeader";
import Footer from "@/components/footer";

export default function ProfileEdit() {
    return <div>
        <div><BackHeader/></div>
        <div className="flex">
            <div className="flex-1">
                <div className="px-4 pb-20">
                    {/* 유저 프로필 */}
                    <div className="items-center justify-center pt-5 pb-7 bg-[#fff] flex">
                        <input type="file" className="hidden"/>
                        <div className="rounded-full h-20 overflow-hidden w-20 flex-none">
                            <img src="https://kream.co.kr/_nuxt/img/blank_profile.538b7ac.png" alt="사용자 이미지" className="h-full w-full object-cover"/>
                        </div>
                    </div>
                    {/* 프로필 정보 */}
                    <div className="max-w-[480px]">
                        <h4 className="text-[18px] tracking-[-.27px] font-bold ">프로필 정보</h4>
                        <div className="border-b border-solid border-[#ebebeb] flex-col pt-[25px] pb-3 relative ">
                            <h5 className="text-[#22222280] text-[13px] font-normal tracking-[-.07px]">username</h5>
                            <div className="items-center flex justify-center w-full">
                                <p className="pr-[58px] flex-1 text-[16px] tracking-[-.16px] overflow-hidden py-2 text-ellipsis whitespace-nowrap"> maeilyy </p>
                                <button className="absolute right-0 border border-solid border-[#d3d3d3] text-[#222222] rounded-[10px] text-[12px] h-[34px] tracking-[-.06px] px-3.5"> 변경 </button>
                            </div>
                        </div>
                        <div className="border-b border-solid border-[#ebebeb] flex-col pt-[25px] pb-3 relative ">
                            <h5 className="text-[#22222280] text-[13px] font-normal tracking-[-.07px]">phone_number</h5>
                            <div className="items-center flex justify-center w-full">
                                <p className="pr-[58px] flex-1 text-[16px] tracking-[-.16px] overflow-hidden py-2 text-ellipsis whitespace-nowrap"> 010-1234-5678 </p>
                                <button className="absolute right-0 border border-solid border-[#d3d3d3] text-[#222222] rounded-[10px] text-[12px] h-[34px] tracking-[-.06px] px-3.5"> 변경 </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}