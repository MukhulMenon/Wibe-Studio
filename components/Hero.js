import React from 'react'
import Link from 'next/link'


const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/00F30SCTQbZtnpGaFw_ihyUTZJHDR-JhDpPJHnL_to76-f_8QCsjUHkO3JFfLkwPFU4eoE_R1gGApy_WiCYn4pe4_4oC-N9w2AfCsA=w345')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Wibe Studio
            </div>
            <div className={style.description}>
            Wibe studio is one of the largest NFT clothing collection on the WEB
            </div>
            <div className={style.ctaContainer}>
              <Link href="/collections/0x6A8fbdfb4Bf1e94aB500e14D04012f16E4a82ff3">
              <button className={style.accentedButton}>Explore</button></Link>
              <Link href="https://thirdweb.com/dashboard">
              <button className={style.button}>Create</button></Link>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/00F30SCTQbZtnpGaFw_ihyUTZJHDR-JhDpPJHnL_to76-f_8QCsjUHkO3JFfLkwPFU4eoE_R1gGApy_WiCYn4pe4_4oC-N9w2AfCsA=w345"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://openseauserdata.com/files/7c536adcc7b722a408c47865d745a842.jpg"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Sahil</div>
                <a
                  className="text-[#1868b7]"
                  href="https://testnets.opensea.io/assets/rinkeby/0x6a8fbdfb4bf1e94ab500e14d04012f16e4a82ff3/6"
                >
                  Wibe Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
