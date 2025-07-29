(() => {
  const translations = {
    pt: {
      headerTitle: "Débora Brito",
      headerSubtitle: "Desenvolvedora Front-End em transição",
      portfolioTitle: "Portfólio de Conhecimentos",
      portfolioDesc: "Acesse meus projetos e exemplos práticos em cada área:",
      htmlCss: "HTML5 & CSS3",
      projetoHtmlCss: "Projeto geral de HTML5 & CSS3",
      cardapioEspetinhos: "Cardápio com QR Code",
      tecnologiasUsadas: "Tecnologias usadas:",
      techList1: "HTML5 – Estrutura da página",
      techList2: "CSS3 – Estilização visual e responsividade",
      techList3: "JavaScript – Manipulação dinâmica do conteúdo e interação",
      techList4: "JSON – Dados do cardápio carregados dinamicamente",
      techList5: "QRCode.js – Geração do QR Code",
      techList6: "GitHub Pages – Hospedagem gratuita do projeto",
      javascript: "JavaScript",
      nocoesReact: "Noções de React",
      logica: "Lógica com C e Python (CS50)",
      uiUx: "UI/UX com Figma",
      hardwareRedes: "Hardware e Redes",
      formacaoTitle: "Formação",
      formacaoDesc: "Tecnólogo em Análise e Desenvolvimento de Sistemas – Anhembi Morumbi (em andamento)",
      experienciaTitle: "Experiência",
      experienciaDesc: "Assistente analista de sistemas - Arklok (2022-2023): Responsável pelo atendimento e suporte a usuários, solução de problemas de hardware e software, além de auxiliar na manutenção da rede interna da empresa.",
      btnDownload: "Baixar currículo em PDF",
      footerText: "Débora Brito © 2025"
    },
    en: {
      headerTitle: "Débora Brito",
      headerSubtitle: "Front-End Developer in transition",
      portfolioTitle: "Portfolio of Skills",
      portfolioDesc: "Access my projects and practical examples in each area:",
      htmlCss: "HTML5 & CSS3",
      projetoHtmlCss: "General HTML5 & CSS3 project",
      cardapioEspetinhos: "Menu with QR Code",
      tecnologiasUsadas: "Technologies used:",
      techList1: "HTML5 – Page structure",
      techList2: "CSS3 – Visual styling and responsiveness",
      techList3: "JavaScript – Dynamic content manipulation and interaction",
      techList4: "JSON – Menu data loaded dynamically",
      techList5: "QRCode.js – QR Code generation",
      techList6: "GitHub Pages – Free project hosting",
      javascript: "JavaScript",
      nocoesReact: "Basics of React",
      logica: "Logic with C and Python (CS50)",
      uiUx: "UI/UX with Figma",
      hardwareRedes: "Hardware and Networks",
      formacaoTitle: "Education",
      formacaoDesc: "Technologist in Systems Analysis and Development – Anhembi Morumbi (in progress)",
      experienciaTitle: "Experience",
      experienciaDesc: "Assistant systems analyst - Arklok (2022-2023): Responsible for user support, troubleshooting hardware and software issues, and assisting with internal network maintenance.",
      btnDownload: "Download resume as PDF",
      footerText: "Débora Brito © 2025"
    }
  };

  function translatePage(lang) {
    document.querySelector('header h1').textContent = translations[lang].headerTitle;
    document.querySelector('header p').textContent = translations[lang].headerSubtitle;

    document.querySelector('section:nth-of-type(1) h2').textContent = translations[lang].portfolioTitle;
    document.querySelector('section:nth-of-type(1) > p').textContent = translations[lang].portfolioDesc;

    const linkCardapio = document.getElementById('linkCardapio');
    if (linkCardapio) {
      linkCardapio.textContent = translations[lang].cardapioEspetinhos;
    }

    const toggleLink = document.getElementById('toggleCardapioInfo');
    if (toggleLink) {
      toggleLink.textContent = lang === 'pt' ? "(clique aqui para ver as tecnologias usadas)" : "(click here to see used technologies)";
    }

    const techBox = document.getElementById('cardapioInfo');
    if (techBox) {
      const techLis = techBox.querySelectorAll('ul li');
      techLis[0].textContent = translations[lang].techList1;
      techLis[1].textContent = translations[lang].techList2;
      techLis[2].textContent = translations[lang].techList3;
      techLis[3].textContent = translations[lang].techList4;
      techLis[4].textContent = translations[lang].techList5;
      techLis[5].textContent = translations[lang].techList6;
    }

    const menuLinks = [
      {selector: 'a[href="javascript.html"]', text: translations[lang].javascript},
      {selector: 'a[href="react.html"]', text: translations[lang].nocoesReact},
      {selector: 'a[href="logica.html"]', text: translations[lang].logica},
      {selector: 'a[href="ui-ux.html"]', text: translations[lang].uiUx},
      {selector: 'a[href="hardware-redes.html"]', text: translations[lang].hardwareRedes}
    ];
    menuLinks.forEach(item => {
      const el = document.querySelector(item.selector);
      if (el) el.textContent = item.text;
    });

    document.querySelector('section:nth-of-type(2) h2').textContent = translations[lang].formacaoTitle;
    document.querySelector('section:nth-of-type(2) p').textContent = translations[lang].formacaoDesc;

    document.querySelector('section:nth-of-type(3) h2').textContent = translations[lang].experienciaTitle;
    document.querySelector('section:nth-of-type(3) p').innerHTML = translations[lang].experienciaDesc;

    document.querySelector('section:nth-of-type(4) button').textContent = translations[lang].btnDownload;

    document.querySelector('footer p').textContent = translations[lang].footerText;
  }

  function setupEventListeners() {
    const languageButtons = document.querySelectorAll('#languageSwitcher button');
    languageButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        translatePage(btn.getAttribute('data-lang'));
      });
    });

    const toggleLink = document.getElementById('toggleCardapioInfo');
    const infoBox = document.getElementById('cardapioInfo');
    if (toggleLink && infoBox) {
      toggleLink.addEventListener('click', (e) => {
        e.preventDefault();
        infoBox.classList.toggle('show');
        toggleLink.setAttribute('aria-expanded', infoBox.classList.contains('show'));
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    translatePage('pt');
    setupEventListeners();
  });
})();
