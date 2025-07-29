document.addEventListener('DOMContentLoaded', () => {
  const toggleLink = document.getElementById('toggleCardapioInfo');
  const infoBox = document.getElementById('cardapioInfo');

  toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    const isOpen = infoBox.classList.contains('show');
    if (isOpen) {
      infoBox.classList.remove('show');
      toggleLink.setAttribute('aria-expanded', 'false');
    } else {
      infoBox.classList.add('show');
      toggleLink.setAttribute('aria-expanded', 'true');
    }
  });

  let currentLang = 'pt';

  const buttons = document.querySelectorAll('#languageSwitcher button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
      translatePage(currentLang);
    });
  });

  const translations = {
    pt: {
      headerTitle: "Débora Brito",
      headerSubtitle: "Desenvolvedora Front-End em transição",
      portfolioTitle: "Portfólio de Conhecimentos",
      portfolioDesc: "Acesse meus projetos e exemplos práticos em cada área:",
      htmlCss: "HTML5 & CSS3",
      projetoHtmlCss: "Projeto geral de HTML5 & CSS3",
      cardapioEspetinhos: "Cardápio com QR Code",
      tecnologiasUsadasTexto: "(clique aqui para ver as tecnologias usadas)",
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
      tecnologiasUsadasTexto: "(click here to see used technologies)",
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
    const t = translations[lang] || translations.pt;

    document.querySelector('header h1').textContent = t.headerTitle;
    document.querySelector('header p').textContent = t.headerSubtitle;

    document.querySelector('section:nth-of-type(1) h2').textContent = t.portfolioTitle;
    document.querySelector('section:nth-of-type(1) > p').textContent = t.portfolioDesc;

    const ul = document.querySelector('section:nth-of-type(1) ul');
    const lis = ul.querySelectorAll('li');

    lis[0].querySelector('span.no-link').textContent = t.htmlCss;

    const submenuLis = lis[0].querySelectorAll('ul.submenu li');
    submenuLis[0].querySelector('a').textContent = t.projetoHtmlCss;

    // Atualiza apenas o link principal do cardápio com id
    const cardapioLink = document.getElementById('cardapioLink');
    if(cardapioLink) cardapioLink.textContent = t.cardapioEspetinhos;

    // Atualiza o texto do toggle para tecnologias usadas
    if(toggleLink) toggleLink.textContent = t.tecnologiasUsadasTexto;

    const techBox = document.getElementById('cardapioInfo');
    if(techBox){
      const techLis = techBox.querySelectorAll('ul li');
      techLis[0].textContent = t.techList1;
      techLis[1].textContent = t.techList2;
      techLis[2].textContent = t.techList3;
      techLis[3].textContent = t.techList4;
      techLis[4].textContent = t.techList5;
      techLis[5].textContent = t.techList6;
    }

    lis[1].querySelector('a').textContent = t.javascript;
    lis[2].querySelector('a').textContent = t.nocoesReact;
    lis[3].querySelector('a').textContent = t.logica;
    lis[4].querySelector('a').textContent = t.uiUx;
    lis[5].querySelector('a').textContent = t.hardwareRedes;

    document.querySelector('section:nth-of-type(2) h2').textContent = t.formacaoTitle;
    document.querySelector('section:nth-of-type(2) p').textContent = t.formacaoDesc;

    document.querySelector('section:nth-of-type(3) h2').textContent = t.experienciaTitle;
    document.querySelector('section:nth-of-type(3) p').innerHTML = t.experienciaDesc;

    document.querySelector('section:nth-of-type(4) button').textContent = t.btnDownload;

    document.querySelector('footer p').textContent = t.footerText;
  }

  translatePage(currentLang);

  const { jsPDF } = window.jspdf;
  const btn = document.getElementById('btnDownload');

  btn.addEventListener('click', () => {
    const t = translations[currentLang] || translations.pt;

    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;
    let y = 20;
    const leftMargin = 10;
    const maxWidth = 190;

    function addTitle(text) {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text(text, leftMargin, y);
      y += 10;
    }

    function addParagraph(text) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      const lines = doc.splitTextToSize(text.replace(/\n/g, " "), maxWidth);
      lines.forEach(line => {
        if (y > pageHeight - 20) {
          doc.addPage();
          y = 20;
        }
        doc.text(line, leftMargin, y);
        y += 7;
      });
      y += 5;
    }

    function addParagraphWithLineBreaks(text) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      const paragraphs = text.split('\n');
      paragraphs.forEach(paragraph => {
        const lines = doc.splitTextToSize(paragraph, maxWidth);
        lines.forEach(line => {
          if (y > pageHeight - 20) {
            doc.addPage();
            y = 20;
          }
          doc.text(line, leftMargin, y);
          y += 7;
        });
        y += 5;
      });
    }

    function addBulletList(items) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      items.forEach(item => {
        if (y > pageHeight - 20) {
          doc.addPage();
          y = 20;
        }
        doc.text("• " + item, leftMargin + 5, y);
        y += 7;
      });
      y += 5;
    }

    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(t.headerTitle, leftMargin, y);
    y += 12;
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(t.headerSubtitle, leftMargin, y);
    y += 15;

    addTitle(t.objetivoTitle || "Objetivo");
    addParagraph(t.objetivoText || "Atuar como Desenvolvedora Front-End Júnior...");

    addTitle(t.habilidadesTitle || "Habilidades Técnicas");
    addBulletList(t.habilidadesList || [
      "HTML5, CSS3, JavaScript",
      "Git e GitHub",
      "Noções de React",
      "Lógica com C e Python (CS50)",
      "UI/UX • Figma",
      "Hardware e Redes"
    ]);

    addTitle(t.formacaoTitle);
    addParagraph(t.formacaoDesc);

    addTitle(t.experienciaTitle);
    addParagraphWithLineBreaks(t.experienciaDesc);

    doc.save(currentLang === 'pt' ? 'curriculo.pdf' : 'resume.pdf');
  });
});
