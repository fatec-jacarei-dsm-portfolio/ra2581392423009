import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'censo-demografico-2022',
    title: 'Censo Demográfico 2022',
    subtitle: 'Visualização geográfica de setores censitários',
    description:
      'Projeto voltado para visualização de setores censitários com interface moderna e navegação orientada por mapa. Desenvolvido com foco em organização visual, interpretação de dados e experiência do usuário.',
    technologies: ['React', 'TypeScript', 'Mapas', 'Visualização de Dados'],
    cover: 'projects/projeto1.png',
    githubUrl:
      'https://github.com/IgorSantosL/DesenvolvimentoWeb2/tree/main/Atividade%208',
    publishedAt: '2025-06-01',
    featured: true,
  },
  {
    id: 'jornada-scrum',
    title: 'Jornada Scrum',
    subtitle: 'Plataforma educativa sobre Scrum',
    description:
      'Sistema web educativo com conteúdos, quizzes e certificação, criado para apoiar o aprendizado de metodologias ágeis. O projeto prioriza clareza visual, navegação fluida e aplicação prática de conceitos de Scrum.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Scrum', 'UX'],
    cover: 'projects/projeto2.png',
    githubUrl: 'https://github.com/octacodeteam/ABP1',
    publishedAt: '2025-05-01',
  },
  {
    id: 'bd-queimadas',
    title: 'ABP2 - BDQueimadas',
    subtitle: 'Monitoramento e visualização de queimadas',
    description:
      'Aplicação focada em visualização de área queimada, risco de fogo e focos de calor, com objetivo de facilitar a leitura de informações ambientais e apoiar análise de dados em contexto geográfico.',
    technologies: ['Banco de Dados', 'Visualização', 'Dados Ambientais'],
    cover: 'projects/projeto3.png',
    githubUrl: 'https://github.com/octacodeteam/ABP2',
    publishedAt: '2025-04-01',
  },
  {
    id: 'sistema-bancario',
    title: 'Sistema Bancário',
    subtitle: 'Gerenciamento de investimentos e relatórios',
    description:
      'Sistema para controle bancário e gerenciamento de investimentos, incluindo organização de dados, regras de negócio e geração de relatórios. Projeto com foco em estrutura, lógica e confiabilidade.',
    technologies: ['Python', 'Banco de Dados', 'Relatórios'],
    cover: 'projects/projeto4.png',
    githubUrl: 'https://github.com/IgorSantosL/Sistema-Bancario/tree/main',
    publishedAt: '2025-03-01',
  },
]