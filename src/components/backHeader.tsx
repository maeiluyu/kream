import Link from "next/link";
import ArrowLeft from "../../public/icon/arrow-left";

export default function BackHeader() {
    return <div className="h-11 pt-2 pr-2 pb-2 pl-4">
        <div>
            <Link href="" className="flex"><ArrowLeft className="w-[22px] h-[22px]"/></Link>
        </div>
    </div>
}