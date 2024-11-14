import Link from "next/link";
import Camera from "../../public/icon/camera";
import ShoppingBag from "../../public/icon/shopping-bag";
import Xcircle from "../../public/icon/x-circle";

export default function Header() {
    return (
        <div className="sticky top-0 left-0 right-0 z-[3] bg-[#fff]">

            {/* main_inner */}
            <div className="pt-2 pr-2 pb-2 pl-4 h-16 items-center flex justify-between min-w-[20.00rem]">
                <div className="mr-2 w-full">
                    <div className="bg-[#f4f4f4] rounded-lg h-11 pt-0 pr-8 pb-0 pl-2 relative">
                        <input type="text" placeholder="브랜드, 상품, 프로필, 태그 등" className="text-[0.94rem] leading-5 font-bold h-full w-full bg-transparent text-[#222]"/>
                        <button className="h-5 right-[0.63rem] top-[0.75rem] w-5 absolute"><Xcircle className="w-5 h-5"/></button>
                    </div>
                </div>
                <Link href="#" className="items-center flex h-10 justify-center relative w-10 flex-shrink-0"><Camera/></Link>
                <Link href="#" className="items-center flex h-10 justify-center relative w-10 flex-shrink-0"><ShoppingBag/></Link>
            </div>

        </div>
    );
}