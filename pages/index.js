import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faWhatsapp,
  faLinkedin,
  faGithub,
  faInternetExplorer,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <body className=" bg-slate-100 ">
      <body>
        <Head>
          <title>Chebanenko Aleksandr</title>
        </Head>
      </body>
      <main>
        <div className="mx-auto w-auto md:w-[960px] flex flex-col-reverse md:flex-row">
          <div className="w-auto md:w-[690px] p-16  bg-white">
            <h2 className="text-2xl text-sky-800 mb-4">ТЕХНИЧЕСКИЕ НАВЫКИ</h2>
            <h3 className="font-semibold text-xl">Языки</h3>
            <p className="mb-3">Ruby, JS, PHP</p>

            <h3 className="font-semibold text-xl">Технологии</h3>
            <p className="mb-3">
              Rails, React, Docker, Bootstrap, Sinatra, Tailwind CSS, ООП,
              Heroku.
            </p>
            <h3 className="font-semibold text-xl">Прочее</h3>
            <p className="mb-3">MySQL, PostgreSQL, Git, Linux, HTML5/CSS</p>
            <p className="mb-3">
              Добиваюсь результата, беру ответственность и веду задачи до
              завершения.
            </p>
            <p className="mb-3">
              Комфортно работаю в условиях неопределенности: предлагаю различные
              варианты решений и реализую оптимальный вариант
            </p>
            <p className="mb-16">
              Подстраиваюсь под меняющиеся требования. Люблю изучать новое и
              применять на практике
            </p>
            <p className="mb-3 font-bold">ОБРАЗОВАНИЕ</p>
            <p className="font-bold">
              Полный курс по JavaScript + React - с нуля до результата (Иван
              Петриченко)
            </p>
            <p className="mb-3 text-slate-400">
              JavaScript, React+Redux
              <br />
              2022
            </p>
            <p className="font-bold">курс Rails Diamond</p>
            <p className="mb-3 text-slate-400">
              Fullstack programmer (Ruby On <br />
              Rails + React) <br />
              2022
            </p>
            <p className="font-bold">курс Rubyschool.us</p>
            <p className="mb-3 text-slate-400">
              Ruby On Rails
              <br /> 2022
            </p>
            <p className="font-bold">
              Томский Государственный <br />
              университет систем
              <br /> управления и <br />
              радиоэлектроники
            </p>
            <p className="mb-3 text-slate-400">
              Компьютерный дизайн
              <br />
              Год окончания 2008
            </p>
            <p className="font-bold">
              Томский Государственный <br />
              университет систем
              <br /> управления и <br />
              радиоэлектроники
            </p>
            <p className="mb-3 text-slate-400">
              Оперотор ПК
              <br />
              Год окончания 2007
            </p>
          </div>
          <div className="text-white bg-cyan-500 md:w-2/3">
            <div className="bg-cyan-700 p-7 flex items-center flex-col text-center">
              <img
                className="w-2/3 rounded-full mb-3"
                src="/avatar.png"
                alt="Large avatar"
              />

              <h2 className="text-4xl font-bold mb-3">
                Чебаненко
                <br /> Александр
              </h2>
              <h3 className="text-2xl">
                Ruby on Rails <br /> разработчик
              </h3>
            </div>
            <div className="p-7 text-lg ">
              <p className="mb-3">
                <a href="mailto: chebanenko56@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-8" />
                  chebanenko56@gmail.com
                </a>
              </p>
              <p className="mb-3">
                <a href="tel: +905354138324">
                  <FontAwesomeIcon icon={faPhoneAlt} className="mr-8" />
                  +9 (0535) 413-83-24
                </a>
              </p>
              <p className="mb-3">
                <a href="https://wa.me/79829824582?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%20%D0%9C%D1%8B%20%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B%20%D1%82%D0%B5%D0%B1%D1%8F%20%D0%B2%D0%B7%D1%8F%D1%82%D1%8C%20%D0%B8%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B8%D1%82%D1%8C%20%D0%BE%D1%82%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B5%20%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8F!">
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-8" />
                  +7 (982) 982-45-82
                </a>
              </p>
              <p className="mb-3">
                <a href="https://t.me/ChebanenkoAlexander">
                  <FontAwesomeIcon icon={faTelegram} className="mr-8" />
                  @ChebanenkoAlexander
                </a>
              </p>
              <p className="mb-3">
                <a href="https://cv-red-nu.vercel.app/">
                  <FontAwesomeIcon icon={faInternetExplorer} className="mr-8" />
                  https://cv-red-nu.vercel.app/
                </a>
              </p>
              <p className="mb-3">
                <a href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D1%87%D0%B5%D0%B1%D0%B0%D0%BD%D0%B5%D0%BD%D0%BA%D0%BE-780770255/">
                  <FontAwesomeIcon icon={faLinkedin} className="mr-8" />
                  linkedin.com/in/александр-чебаненко...
                </a>
              </p>
              <p className="mb-8">
                <a href="https://github.com/ChebanenkoAlexander">
                  <FontAwesomeIcon icon={faGithub} className="mr-8" />
                  github.com/ChebanenkoAlexander
                </a>
              </p>
              <button onClick={() => window.print()} className="font-bold">СКАЧАТЬ PDF</button>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
