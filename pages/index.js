import Head from "next/head";

export default function Home() {
  return (
    <body>
      <Head>
        <title>Chebanenko Aleksandr</title>
      </Head>

      <main>
        <div className="mx-auto w-[960px] flex flex-row">
          <div className="w-[690px]">
            <h2 className="text-2xl text-sky-800">ТЕХНИЧЕСКИЕ НАВЫКИ</h2>
            <h3 className="font-semibold text-xl">Языки</h3>
            <p>Ruby, JS, PHP</p>
            <h3 className="font-semibold text-xl">Технологии</h3>
            <p>
              Rails, React+Redux, Docker, REST, API, RSpec, Bootstrap,
              MaterialUI, Nginx+Passenger, ООП, TDD, BDD, CI/CD, Heroku
            </p>
            <h3 className="font-semibold text-xl">Прочее</h3>
            <p>MySQL, PostgreSQL, Git, Linux, Bash, HTML5/CSS</p>
            <p>
              Добиваюсь результата, беру ответственность и веду задачи до
              завершения, нахожу нужные ресурсы и компромиссы
            </p>
            <p>
              Комфортно работаю в условиях неопределенности: предлагаю различные
              варианты решений и реализую оптимальный вариант
            </p>
            <p>
              Подстраиваюсь под меняющиеся требования. Люблю изучать новое и
              применять на практике
            </p>
            <h2 className="text-2xl text-sky-800">
              ПРОФЕССИОНАЛЬНЫЕ ДОСТИЖЕНИЯ
            </h2>
            <div className="flex flex-row justify-between items-center">
              <h3 className="font-semibold text-xl">
                Руководитель по коммерции и развитию
              </h3>
              <div className="text-gray-400">2016 - н.в.</div>
            </div>
            <div className="text-gray-400">ПАО "Т Плюс" </div>
            <p>
              Разработал ПО на Ruby и MySQL, которое выбирает участки тепловых
              сетей для реконструкции с максимальным экономическим эффектом на
              основе базы данных в ГИС ZULU Thermo. Ежегодная дополнительная
              EBITDA 200 млн. руб.
            </p>
            <p>
              Разработал ПО на VBA, которое на 2 месяца сократило разработку и
              согласование финансовой модели проекта с органами власти (быстрый
              пересчёт множества сценариев). В результате проект стартовал на
              год раньше, что принесло дополнительную EBITDA 400 млн. руб.
            </p>
            <p>
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
            <div className="text-gray-400">АО "ЭнергосбыТ Плюс"</div>
            <p>
              Разработал ПО на VBA для ежемесячного формирования управленческой
              отчетности на основе выгрузки из биллинга, что на 5 дней сократило
              сроки формирования отчетных данных и исключило расхождения в
              информации.
            </p>
            <p>Участвовал во внедрении SAP, модуль SD</p>
            <h2 className="text-2xl text-sky-800">ПРОЕКТЫ</h2>
            <p>
              <span className="text-xl text-sky-800">
                <a href="https://board.ovsyannikov.dev/">TaskManager </a>
              </span>
              - Канбан-доска для команды разработчиков
            </p>
            <p>
              Здесь можно создавать задачи, поручать их членам команды и
              перемещать их между колонками в соответствии с жизненным циклом
            </p>
            <p>Используемые технологии:</p>
            <p>
              Ruby on Rails, ReactJS, Redux, Docker, PostgreSQL, MaterialUI,
              TDD, API, Rspec, деплой на VPS, Nginx + Passenger
            </p>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold text-center">Чебаненко Александр</h2>
            <h3 className="text-2xl">Ruby on Rails <br/> разработчик</h3>
          </div>
        </div>
      </main>
    </body>
  );
}
