import Link from "next/link";

export default function Sorting() {
  return (
    <div className="ml-auto mr-auto max-w-7xl">
      <ul className="flex justify-end py-3 px-4">
        <li className="inline-flex"><Link href="" className="text-[rgba(34,34,34,0.8)] text-[14px] tracking-[-0.21px] leading-[17px]">인기순</Link></li>
        {/* 가상요소 ::before로 구분 선 추가 */}
        <li className="inline-flex before:self-center before:bg-[#ebebeb] before:h-[10px] before:ml-3 before:mr-3 before:w-[1px]"><Link href="" className="text-[rgba(34,34,34,0.8)] text-[14px] tracking-[-0.21px] leading-[17px]">최신순</Link></li>
      </ul>
    </div>
  );
}
