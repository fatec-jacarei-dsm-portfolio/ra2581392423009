import { motion } from 'framer-motion'
import { Cpu, Database, Workflow } from 'lucide-react'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectsSection } from './components/ProjectsSection'
import { SectionTitle } from './components/SectionTitle'

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Hero />

      <main>
        <section className="section" id="atuacao">
          <div className="container">
            <SectionTitle
              overline="ÁREA DE ATUAÇÃO"
              title="Experiência orientada por produtividade e estrutura"
              description="Atuação em automação de processos, manipulação de dados, integração entre sistemas e desenvolvimento de soluções que reduzem esforço manual e aumentam eficiência."
            />

            <div className="expertise-grid">
              <motion.article
                className="expertise-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <Workflow size={22} />
                <h3>RPA e automação</h3>
                <p>
                  Desenvolvimento de soluções com foco em otimização de processos,
                  eliminação de tarefas repetitivas e ganho real de produtividade.
                </p>
              </motion.article>

              <motion.article
                className="expertise-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                <Cpu size={22} />
                <h3>Python e integrações</h3>
                <p>
                  Experiência com Python, Selenium, Pandas, OpenPyXL, PyAutoGUI e
                  consumo de APIs para automações robustas e conectadas.
                </p>
              </motion.article>

              <motion.article
                className="expertise-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.16 }}
              >
                <Database size={22} />
                <h3>Dados e serviços</h3>
                <p>
                  Manipulação de Excel e PDF, integração com banco de dados e uso de
                  serviços em nuvem para soluções escaláveis e organizadas.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        <ProjectsSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

export default App