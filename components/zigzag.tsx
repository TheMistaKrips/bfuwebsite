import Image from 'next/image'
import khudenko from '@/components/img/khudenko.jpg';
import urow from '@/components/img/urow.jpg';
import savkin from '@/components/img/savkin.jpg';
import shpilev from '@/components/img/shpilev.jpg';

import pershin from '@/components/img/pershin.jpg';
import lena from '@/components/img/lena.jpg';
import vanya from '@/components/img/vanya.jpg';
import makl from '@/components/img/makl.jpg';

import tarach from '@/components/img/tarach.jpg';
import ulya from '@/components/img/ulya.jpg';
import veres from '@/components/img/veres.jpg';

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Каждый предмет уникален</h1>
            <p className="text-xl text-gray-400">Мы не несем ответственности за их магические свойства</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={khudenko} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Глушилка Худенко</h3>
                  <p className="text-xl text-gray-400 mb-4">В средневековье главным оружием всех ведьм была их возможность связываться друг с другом на расстоянии, и тогда силами людей было создано чудо инженерной мысли, которое решило исход противостояния</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={urow} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Шарф Юрова</h3>
                  <p className="text-xl text-gray-400 mb-4">С виду лёгкий, но невероятно прочный элемент брони, который обладает своей волей и разумом, способно повергать в шок врагов владельца </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={savkin} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Фигура Савкина</h3>
                  <p className="text-xl text-gray-400 mb-4">Этой фигуре тысячи лет. Никто не знает, откуда она взялась, но каждый уверен, что она живая, что она чувствует страх людей, находящихся вокруг. Некоторые утверждают, что слышали голоса в голове, когда находились рядом с этой фигурой</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={shpilev} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Очки Шпилевого</h3>
                  <p className="text-xl text-gray-400 mb-4">Магические очки, способные показать скрытое, расшифровать неизвестное и предвидеть будущее. Ранее эти очки принадлежали Верховному магу Эльфхейма</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={veres} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Берман Верещагиной</h3>
                  <p className="text-xl text-gray-400 mb-4">Об этой книге ходили лишь легенды. Говорят, что однажды один человек при помощи заклинаний из этой книги смог покорить целое королевство</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={tarach} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Волк Тарачкова</h3>
                  <p className="text-xl text-gray-400 mb-4">Зверь, носивший эту шкуру, терроризировал земли Эльфхейма на протяжении сотен лет, пока однажды один рыцарь Тарачковского ордена не поразил его</p>
                </div>
              </div>
            </div>
            
            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={lena} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Шляпа Лени</h3>
                  <p className="text-xl text-gray-400 mb-4">Обычная шляпа, которую нашли на Балтийской Косе. Сделана из ненатуральных материалов. Прикольная</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={ulya} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Ушки Юли</h3>
                  <p className="text-xl text-gray-400 mb-4">Обычные с виду ушки обладают способностью наделять своего владельца силой телепатии. Ушки сами выбирают себе хозяина. Последний владелец неизвестен</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={pershin} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Обложка Першина</h3>
                  <p className="text-xl text-gray-400 mb-4">Первые плакаты этого исполнителя были замечены ещё в средневековье. Тысячи человек, прослушавших его песни, утверждают, что в них заложен тайный смысл, который они, к сожалению, уловить не могут</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={makl} width={540} height={405} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Тоторо Маклаховой</h3>
                  <p className="text-xl text-gray-400 mb-4">Раньше это существо служило при дворе великих князей в качестве придворного мага, обладающего Великой силой и знаниями математики</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center" data-aos="fade-up">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={vanya} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 mb-3">Печать Вани</h3>
                  <p className="text-xl text-gray-400 mb-4">Королевская печать, принадлежавшая Великому королю Эльфхейма, известному как Винсет Вустерас, о достижениях которого ходили легенды</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
