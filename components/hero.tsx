import bfu from '@/components/img/about-img.jpg';
import Image from 'next/image'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-32 pb-10 md:pt-40 ">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Физмат</h1>
            <div>
              <Image src={bfu} data-aos="fade-up" />
            </div>
            <p className="text-xl text-gray-400 " data-aos="fade-up" data-aos-delay="200">Коллекция двернейших предметов со своей историей</p>
          </div>
        </div>
      </div>
    </section>
  )
}
