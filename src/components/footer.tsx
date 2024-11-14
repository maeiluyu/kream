import Link from "next/link";

export default function Footer() {
    return (
      <nav className="bg-[#fff] bottom-0 h-[calc(50px_+_env(safe-area-inset-bottom))] left-0 pb-[env(safe-area-inset-bottom)] fixed right-0 w-full z-[1000]">
          <ul className="flex h-full justify-between relative">
              <li className="h-full flex-1">
                  <Link href="#" className="items-center inline-flex h-full justify-center flex-col w-full">
                      <div className="h-6 text-center w-auto">
                          <img src="https://kream.co.kr/_nuxt/assets/tabbar-bottom-home-on.37e680e6.svg" alt="HOME" className="align-top" />
                      </div>
                      <span className="text-neutral-800/[0.5] block text-[0.56rem] mt-1 text-center w-full cursor-pointer">HOME</span>
                  </Link>
              </li>
              <li className="h-full flex-1">
                  <Link href="/" className="items-center inline-flex h-full justify-center flex-col w-full">
                      <div className="h-6 text-center w-auto">
                          <img src="https://kream.co.kr/_nuxt/assets/tabbar-bottom-style-off.1bf7aec7.svg" alt="STYLE" className="align-top" />
                      </div>
                      <span className="text-neutral-800/[0.5] block text-[0.56rem] mt-1 text-center w-full cursor-pointer">STYLE</span>
                  </Link>
              </li>
              <li className="h-full flex-1">
                  <Link href="#" className="items-center inline-flex h-full justify-center flex-col w-full">
                      <div className="h-6 text-center w-auto">
                          <img src="https://kream.co.kr/_nuxt/assets/tabbar-bottom-shop-off.274ff438.svg" alt="SHOP" className="align-top" />
                      </div>
                      <span className="text-neutral-800/[0.5] block text-[0.56rem] mt-1 text-center w-full cursor-pointer">SHOP</span>
                  </Link>
              </li>
              <li className="h-full flex-1">
                  <Link href="#" className="items-center inline-flex h-full justify-center flex-col w-full">
                      <div className="h-6 text-center w-auto">
                          <img src="https://kream.co.kr/_nuxt/assets/tabbar-bottom-saved-off.64416a68.svg" alt="SAVED" className="align-top" />
                      </div>
                      <span className="text-neutral-800/[0.5] block text-[0.56rem] mt-1 text-center w-full cursor-pointer">SAVED</span>
                  </Link>
              </li>
              <li className="h-full flex-1">
                  <Link href="#" className="items-center inline-flex h-full justify-center flex-col w-full">
                      <div className="h-6 text-center w-auto">
                          <img src="https://kream.co.kr/_nuxt/assets/tabbar-bottom-my-off.c8e425d8.svg" alt="MY" className="align-top" />
                      </div>
                      <span className="text-neutral-800/[0.5] block text-[0.56rem] mt-1 text-center w-full cursor-pointer">MY</span>
                  </Link>
              </li>
          </ul>
      </nav>
    );
  }
  