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

  // Variável para guardar o idioma atual (padrão pt)
  let currentLang = 'pt';

  // Atualiza currentLang ao clicar nos botões de idioma
  const buttons = document.querySelectorAll('#languageSwitcher button');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.getAttribute('data-lang');
    });
  });

  const { jsPDF } = window.jspdf;
  const btn = document.getElementById('btnDownload');

  btn.addEventListener('click', () => {
    const translations = {
      pt: {
        headerTitle: "Débora Brito",
        headerSubtitle: "Desenvolvedora Front-End em transição",
        objetivoTitle: "Objetivo",
        objetivoText: "Atuar como Desenvolvedora Front-End Júnior, aplicando meus conhecimentos em HTML, CSS, JavaScript e lógica de programação para criar interfaces funcionais e acessíveis.",
        habilidadesTitle: "Habilidades Técnicas",
        habilidadesList: [
          "HTML5, CSS3, JavaScript",
          "Git e GitHub",
          "Noções de React",
          "Lógica com C e Python (CS50)",
          "UI/UX • Figma",
          "Hardware e Redes"
        ],
        formacaoTitle: "Formação",
        formacaoText: "Tecnólogo em Análise e Desenvolvimento de Sistemas – Anhembi Morumbi (em andamento)",
        experienciaTitle: "Experiência",
        experienciaText: "Assistente analista de sistemas - Arklok (2022-2023):\nResponsável pelo atendimento e suporte a usuários, solução de problemas de hardware e software, além de auxiliar na manutenção da rede interna da empresa."
      },
      en: {
        headerTitle: "Débora Brito",
        headerSubtitle: "Front-End Developer in transition",
        objetivoTitle: "Objective",
        objetivoText: "To work as a Junior Front-End Developer, applying my knowledge in HTML, CSS, JavaScript and programming logic to create functional and accessible interfaces.",
        habilidadesTitle: "Technical Skills",
        habilidadesList: [
          "HTML5, CSS3, JavaScript",
          "Git and GitHub",
          "Basics of React",
          "Logic with C and Python (CS50)",
          "UI/UX • Figma",
          "Hardware and Networks"
        ],
        formacaoTitle: "Education",
        formacaoText: "Technologist in Systems Analysis and Development – Anhembi Morumbi (in progress)",
        experienciaTitle: "Experience",
        experienciaText: "Assistant systems analyst - Arklok (2022-2023):\nResponsible for user support, troubleshooting hardware and software issues, and assisting with internal network maintenance."
      }
    };

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

    // Gerar PDF com textos traduzidos
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text(t.headerTitle, leftMargin, y);
    y += 12;
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text(t.headerSubtitle, leftMargin, y);
    y += 15;

    addTitle(t.objetivoTitle);
    addParagraph(t.objetivoText);

    addTitle(t.habilidadesTitle);
    addBulletList(t.habilidadesList);

    addTitle(t.formacaoTitle);
    addParagraph(t.formacaoText);

    addTitle(t.experienciaTitle);
    addParagraphWithLineBreaks(t.experienciaText);

    doc.save(currentLang === 'pt' ? 'curriculo.pdf' : 'resume.pdf');
  });
};
