// Mostrar/esconder o quadro de tecnologias do cardápio
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
});

// Geração de PDF com jsPDF
window.onload = () => {
  const { jsPDF } = window.jspdf;
  const btn = document.getElementById('btnDownload');

  btn.addEventListener('click', () => {
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
      const lines = doc.splitTextToSize(text, maxWidth);
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

    // Conteúdo do PDF
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Débora Brito", leftMargin, y);
    y += 12;
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");
    doc.text("Desenvolvedora Front-End em transição", leftMargin, y);
    y += 15;

    addTitle("Objetivo");
    addParagraph("Atuar como Desenvolvedora Front-End Júnior, aplicando meus conhecimentos em HTML, CSS, JavaScript e lógica de programação para criar interfaces funcionais e acessíveis.");

    addTitle("Habilidades Técnicas");
    addBulletList([
      "HTML5, CSS3, JavaScript",
      "Git e GitHub",
      "Noções de React",
      "Lógica com C e Python (CS50)",
      "UI/UX • Figma",
      "Hardware e Redes"
    ]);

    addTitle("Formação");
    addParagraph("Tecnólogo em Análise e Desenvolvimento de Sistemas – Anhembi Morumbi (em andamento)");

    addTitle("Experiência");
    addParagraph("Assistente analista de sistemas - Arklok (2022-2023): Responsável pelo atendimento e suporte a usuários, solução de problemas de hardware e software, além de auxiliar na manutenção da rede interna da empresa.");

    doc.save('curriculo.pdf');
  });
};

