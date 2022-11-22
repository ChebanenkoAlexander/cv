import Head from "next/head";

export default function Home() {
  return (
    <body className=" bg-slate-100 ">
      <Head>
        <title>Chebanenko Aleksandr</title>
      </Head>

      <main>
        <div className="mx-auto w-auto md:w-[960px] flex flex-col md:flex-row">
          <div className="w-[690px] p-16  bg-white">
            <h2 className="text-2xl text-sky-800 mb-4">ТЕХНИЧЕСКИЕ НАВЫКИ</h2>
            <h3 className="font-semibold text-xl">Языки</h3>
            <p className="mb-3">Ruby, JS, PHP</p>

            <h3 className="font-semibold text-xl">Технологии</h3>
            <p className="mb-3">
              Rails, React+Redux, Docker, REST, API, RSpec, Bootstrap,
              MaterialUI, Nginx+Passenger, ООП, TDD, BDD, CI/CD, Heroku
            </p>
            <h3 className="font-semibold text-xl">Прочее</h3>
            <p className="mb-3">
              MySQL, PostgreSQL, Git, Linux, Bash, HTML5/CSS
            </p>
            <p className="mb-3">
              Добиваюсь результата, беру ответственность и веду задачи до
              завершения, нахожу нужные ресурсы и компромиссы
            </p>
            <p className="mb-3">
              Комфортно работаю в условиях неопределенности: предлагаю различные
              варианты решений и реализую оптимальный вариант
            </p>
            <p className="mb-16">
              Подстраиваюсь под меняющиеся требования. Люблю изучать новое и
              применять на практике
            </p>
            <h2 className="text-2xl text-sky-800 mb-4">
              ПРОФЕССИОНАЛЬНЫЕ ДОСТИЖЕНИЯ
            </h2>
            <div className="flex flex-row justify-between items-center">
              <h3 className="font-semibold text-xl">
                Руководитель по коммерции и развитию
              </h3>
              <div className="text-gray-400">2016 - н.в.</div>
            </div>
            <div className="text-gray-400 mb-3">ПАО "Т Плюс" </div>
            <p className="mb-3">
              Разработал ПО на Ruby и MySQL, которое выбирает участки тепловых
              сетей для реконструкции с максимальным экономическим эффектом на
              основе базы данных в ГИС ZULU Thermo. Ежегодная дополнительная
              EBITDA 200 млн. руб.
            </p>
            <p className="mb-3">
              Разработал ПО на VBA, которое на 2 месяца сократило разработку и
              согласование финансовой модели проекта с органами власти (быстрый
              пересчёт множества сценариев). В результате проект стартовал на
              год раньше, что принесло дополнительную EBITDA 400 млн. руб.
            </p>
            <p className="mb-3">
              Организовал команду для внедрения разработанного ПО при заключении
              аналогичных соглашений в г. Кирово-Чепецке, что принесло
              дополнительную прибыль 100 млн. руб.
            </p>
            <div className="flex flex-row justify-between items-center">
              <h3 className="font-semibold text-xl">
                Специалист сбытового подразделения
              </h3>
              <div className="text-gray-400">2009 - 2016</div>
            </div>
            <div className="text-gray-400 mb-3">АО "ЭнергосбыТ Плюс"</div>
            <p className="mb-3">
              Разработал ПО на VBA для ежемесячного формирования управленческой
              отчетности на основе выгрузки из биллинга, что на 5 дней сократило
              сроки формирования отчетных данных и исключило расхождения в
              информации.
            </p>
            <p className="mb-16">Участвовал во внедрении SAP, модуль SD</p>
            <h2 className="text-2xl text-sky-800 mb-4">ПРОЕКТЫ</h2>
            <p>
              <span className="text-xl text-sky-800">
                <a href="https://board.ovsyannikov.dev/">TaskManager </a>
              </span>
              - Канбан-доска для команды разработчиков
            </p>
            <p className="mb-3">
              Здесь можно создавать задачи, поручать их членам команды и
              перемещать их между колонками в соответствии с жизненным циклом
            </p>
            <p className="mb-3">Используемые технологии:</p>
            <p>
              Ruby on Rails, ReactJS, Redux, Docker, PostgreSQL, MaterialUI,
              TDD, API, Rspec, деплой на VPS, Nginx + Passenger
            </p>
          </div>
          <div className="text-white">
            <div className="bg-cyan-700 p-7 text-center">
              <h2 className="text-4xl font-bold mb-3">Чебаненко Александр</h2>
              <h3 className="text-2xl">
                Ruby on Rails <br /> разработчик
              </h3>
            </div>
            <div className="bg-cyan-500 p-7">
              <p className="text-centr">
                <a href="mailto: chebanenko56@gmail.com">
                  chebanenko56@gmail.com
                </a>
              </p>
              <p className="mb-3">
                <a href="tel: +905354138324">+9 (0535) 413-83-24</a>
              </p>
              <p className="mb-3">
                <a href="https://wa.me/79829824582?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%20%D0%9C%D1%8B%20%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B%20%D1%82%D0%B5%D0%B1%D1%8F%20%D0%B2%D0%B7%D1%8F%D1%82%D1%8C%20%D0%B8%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B8%D1%82%D1%8C%20%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F!">
                  +7 (982) 982-45-82
                </a>
              </p>
              <p className="mb-3">
                <a href="https://t.me/ChebanenkoAlexander">
                  @ChebanenkoAlexander
                </a>
              </p>
              <p className="mb-3">
                <a href="">вставть ссылку на сайт</a>
              </p>
              <p className="mb-3">
                <a href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%87%D0%B5%D0%B1%D0%B0%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE-780770255/">
                  linkedin.com/in/александр-чебаненко...
                </a>
              </p>
              <p className="mb-16">
                <a href="https://github.com/ChebanenkoAlexander">
                  github.com/ChebanenkoAlexander
                </a>
              </p>
              <p className="mb-3 font-bold">ОБРАЗОВАНИЕ</p>
              <p className="font-bold">курс Harvard University</p>
              <p className="mb-3 text-slate-200">
                CS50: Introduction to Computer <br />
                Science
                <br /> 11/2021 - 02/2022
              </p>
              <p className="font-bold">курс Dualboot Partners</p>
              <p className="mb-3 text-slate-200">
                Fullstack programmer (Ruby On <br />
                Rails + React, Redux) <br />
                09/2022 - 11/2022
              </p>
              <p className="font-bold">курс Rubyschool.us</p>
              <p className="mb-3 text-slate-200">
                Ruby On Rails
                <br /> 02/2022 - 04/2022
              </p>
              <p className="font-bold">
                Вятская государственная <br />
                сельскохозяйственная
                <br /> академия
              </p>
              <p className="mb-16 text-slate-200">
                Информатика,
                <br /> Информационные технологии
                <br /> в экономике (5.0/5.0)
                <br />
                1998 - 2003
              </p>

              <p className="mb-3 font-bold">ЯЗЫКИ</p>
              <p className="mb-16">English (B1)</p>
              <p className="font-bold">СКАЧАТЬ PDF</p>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
