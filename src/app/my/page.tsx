import BackHeader from "@/components/backHeader";
import Footer from "@/components/footer";
import Link from "next/link";

export default function MyPage() {
    return <div>
        <div><BackHeader/></div>

        <div>
            <div>
                <div>
                    <div>
                        {/* 여기부터 패딩 적용 */}
                        <div>
                            {/* 프로필 이미지 영역 */}
                            <div>
                                <img src="#" alt="" />
                                {/* 가상요소 ::after존재 */}
                            </div>
                            {/* 유저 정보 영역 */}
                            <div>
                                {/* 유저네임 영역 */}
                                <div>
                                    <strong>username</strong>
                                    <p>ma*****@naver.com</p>
                                </div>
                                {/* 버튼 영역 */}
                                <div>
                                    <Link href=""> 프로필 관리 </Link>
                                    <Link href="">로그아웃</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
}