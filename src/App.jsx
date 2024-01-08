import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import "./App.css"

function App() {
  const ref = useRef(null)
  const [openMenu, setOpenMenu] = useState(false)
  const toggleClass = "is-sticky"

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 0) {
        ref.current.classList.add(toggleClass)
      } else {
        ref.current.classList.remove(toggleClass)
      }
    }

    if (ref.current) {
      listener()
      window.addEventListener("scroll", listener)
    }

    return () => {
      window.removeEventListener("scroll", listener)
    }
  }, [ref])

  return (
    <main ref={ref}>
      <section className="flex flex-row justify-between h-screen first">
        <div className="flex flex-col items-start justify-end">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl text-sky-400"
          >
            alvaro riaño
          </motion.h1>
          <motion.h6
            initial={{ opacity: 0, x: -160 }}
            animate={{ opacity: 1, x: 20 }}
            transition={{ delay: 0.5 }}
            className="text-xl"
          >
            &lt;desarrollador front end&gt;
          </motion.h6>
        </div>
        <nav>
          <div className="md:hidden flex nav">
            <button
              className="navbar-burger p-2"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <motion.ul
            className="md:flex text-base nav hidden"
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <li>
              <a href="#">inicio</a>
            </li>
            <li>
              <a href="#formacion">formación</a>
            </li>
            <li>
              <a href="#tecnologias">tecnologías</a>
            </li>
            <li>
              <a href="#proyectos">proyectos</a>
            </li>
            <li>
              <a href="#experiencia">experiencia</a>
            </li>
            <li>
              <a href="#contacto">contacto</a>
            </li>
          </motion.ul>
        </nav>
      </section>
      <div className={`navbar-menu relative z-50 ${openMenu ? "" : "hidden"}`}>
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={() => setOpenMenu(false)}
        />
        <nav className="fixed top-[20vh] right-0 flex flex-col w-5/6 max-w-sm py-8 px-8 bg-white border-r overflow-y-auto">
          <div className="flex items-start justify-between">
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  onClick={() => setOpenMenu(false)}
                >
                  inicio
                </a>
              </li>
              <li>
                <a
                  href="#formacion"
                  onClick={() => setOpenMenu(false)}
                >
                  formación
                </a>
              </li>
              <li>
                <a
                  href="#tecnologias"
                  onClick={() => setOpenMenu(false)}
                >
                  tecnologías
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  onClick={() => setOpenMenu(false)}
                >
                  proyectos
                </a>
              </li>
              <li>
                <a
                  href="#experiencia"
                  onClick={() => setOpenMenu(false)}
                >
                  experiencia
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  onClick={() => setOpenMenu(false)}
                >
                  contacto
                </a>
              </li>
            </ul>
            <button
              className="navbar-close"
              onClick={() => setOpenMenu(false)}
            >
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
      <section
        className="second"
        id="formacion"
      >
        <h1 className="text-4xl font-thin">formación</h1>
        <ul className="p-6">
          <li className="mb-1">
            Diplomado en{" "}
            <span className="text-sky-400">Arqiotectira de Interiores</span> por
            la UPM.
          </li>
          <li className="mb-1">
            Bootcamp en
            <span className="text-sky-400">
              {" "}
              Desarrollo de Aplicaciones MERN Full Stack{" "}
            </span>
            en IRONHACK.
          </li>
          <li className="mb-1">
            Curso de <span className="text-sky-400">React</span> The Complete
            Guide 2024 en Udemy. (Incl.{" "}
            <span className="text-sky-400">React Router & Redux</span>)
          </li>
          <li className="mb-1">
            Curso Advanced <span className="text-sky-400">CSS</span> and Sass:
            <span className="text-sky-400">Flexbox, Grid, Animations</span> and
            More! en Udemy.
          </li>
          <li className="mb-1">
            Curso de <span className="text-sky-400">React PRO</span> en Udemy.
          </li>
          <li className="mb-1">
            Curso de <span className="text-sky-400">React</span> - Guía
            definitiva:{" "}
            <span className="text-sky-400">hooks, router, redux, next</span> en
            Udemy.
          </li>
          <li className="mb-1">
            {" "}
            Curso Aprende <span className="text-sky-400">
              HTML5 y CSS3
            </span>{" "}
            desde cero en Udemy.
          </li>
        </ul>
      </section>
      <section id="tecnologias">
        <h1 className="text-4xl font-thin">tecnologías</h1>
        <div className="p-6 grid">
          <div>Javascript</div>
          <div>ECMA6</div>
          <div>TypeScript</div>
          <div>HTML 5</div>
          <div>CSS 3</div>
          <div>ReactJS</div>
          <div>NextJS</div>
          <div>hooks</div>
          <div>React Router</div>
          <div>Tanstack React Query</div>
          <div>Redux Toolkit</div>
          <div>Zustand</div>
          <div>Tailwind CSS</div>
          <div>Flexbox</div>
          <div>Grid</div>
          <div>Framer Motion</div>
          <div>Jest</div>
          <div>Playwright</div>
          <div>Visual Studio Code</div>
          <div>Git</div>
          <div>GitHub</div>
          <div>NodeJS</div>
          <div>Express</div>
          <div>MongoDB</div>
          <div>Mongoose</div>
          <div>SQL</div>
          <div>PostgreSQL</div>
          <div>Firebase</div>
          <div>Firestore</div>
          <div>Firebase Auth</div>
          <div>Heroku</div>
          <div>Netlify</div>
          <div>Vercel</div>
          <div>Sass</div>
          <div>Bootstrap</div>
          <div>Atlas</div>
          <div>Compass</div>
          <div>Postman</div>
          <div>API REST</div>
        </div>
      </section>
      <section id="proyectos">
        <h1 className="text-4xl font-thin">proyectos</h1>
        <div className="p-6 grid-proyectos">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="max-w-sm bg-white border border-gray-200 shadow"
          >
            <a
              href="https://starlit-starburst-d6dfd2.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="object-cover border-y"
                src="/editorial.jpg"
                alt="editorial AR"
              />
            </a>
            <div className="p-5">
              <a
                href="https://starlit-starburst-d6dfd2.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h5 className="mb-2 text-2xl tracking-tight">Editorial AR</h5>
              </a>
              <p className="mb-3 font-normal">
                Crea tus listas de libros leídos y por leer.
              </p>
              <p className="mb-3 font-normal">
                Tecnologías: ReactJS, Zustand, Framer Motion, Jest, Playwright,
                Tailwind CSS.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="max-w-sm bg-white border border-gray-200 shadow"
          >
            <a
              href="https://jocular-sawine-5cf217.netlify.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="object-cover border-y"
                src="/photografy.jpg"
                alt="PhotograFy"
              />
            </a>
            <div className="p-5">
              <a
                href="https://jocular-sawine-5cf217.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h5 className="mb-2 text-2xl tracking-tight">Photografy</h5>
              </a>
              <p className="mb-3 font-normal">
                Encuentra y contrata un fotógrafo profesional o regístrate como
                fotógrafo, crea, mofica y borra tu perfil profesional.
              </p>
              <p className="mb-3 font-normal">
                Tecnologías: ReactJS, React Router, Tanstack React Query con
                Infinite Query, Firebase Auth, Firestore, React Bootstrap.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="max-w-sm bg-white border border-gray-200 shadow"
          >
            <a
              href="https://next-js-meetup-crud-14.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="object-cover border-y"
                src="/meetups-crud.jpg"
                alt="Meetup CRUD"
              />
            </a>
            <div className="p-5">
              <a
                href="https://next-js-meetup-crud-14.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h5 className="mb-2 text-2xl tracking-tight">Meetup CRUD</h5>
              </a>
              <p className="mb-3 font-normal">
                Encuentra, crea y modifica meetups.
              </p>
              <p className="mb-3 font-normal">
                Tecnologías: ReactJS, NextJS 14, React Bootstrap.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="max-w-sm bg-white border border-gray-200 shadow"
          >
            <a
              href="https://nextjs14-dashdoard.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="object-cover border-y"
                src="/next-dashboard.jpg"
                alt="Next 14 Dashboard"
              />
            </a>
            <div className="p-5">
              <a
                href="https://nextjs14-dashdoard.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <h5 className="mb-2 text-2xl tracking-tight">
                  Next 14 Dashboard
                </h5>
              </a>
              <p className="mb-3 font-normal">
                Tutorial oficial de NextJS 14 con autenticación y dashboard,
                clientes, facturas, etc
              </p>
              <p className="mb-3 font-normal">
                Tecnologías: ReactJS, NextJS 14, Next Auth, PostgreSQL.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <section id="experiencia">
        <h1 className="text-4xl font-thin">experiencia</h1>
        <p className="p-6">
          <span className="text-sky-400">12 años</span> de experiencia como{" "}
          <span className="text-sky-400">diseñador</span> de mobiliario, stands,
          imagen de marca, cartelería, etc. así como gestión de proyectos,
          seguimiento de obras y contacto con proveedores y clientes en
          Opticalia Visión Interior.
        </p>
      </section>
      <section id="contacto">
        <h1 className="text-4xl font-thin">contacto</h1>
        <ul className="p-6">
          <li>Teléfono: (+34) 669 70 85 32</li>
          <li>Email: echanovevaro@gmail.com</li>
        </ul>
      </section>
    </main>
  )
}

export default App
