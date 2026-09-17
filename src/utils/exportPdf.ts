import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const TOTAL = 14;

/**
 * Export all slides as a landscape PDF.
 * Strategy: temporarily show each slide one-by-one, capture with html2canvas, add to jsPDF.
 */
export async function exportSlidesToPdf(
  stageEl: HTMLDivElement,
  onProgress?: (current: number, total: number) => void,
) {
  const slides = stageEl.querySelectorAll<HTMLElement>('.slide');
  if (slides.length === 0) return;

  // Save original classes
  const originalClasses = Array.from(slides).map(s => s.className);

  // Hide all slides first
  slides.forEach(s => {
    s.className = s.className
      .replace(/\bis-active\b/g, '')
      .replace(/\bis-leaving-left\b/g, '')
      .replace(/\bis-leaving-right\b/g, '')
      .replace(/\bis-enter-from-right\b/g, '')
      .replace(/\bis-enter-from-left\b/g, '');
    s.style.transition = 'none';
    s.style.animation = 'none';
  });

  // Disable animations on all children
  const allAnimated = stageEl.querySelectorAll<HTMLElement>('.anim-in, .anim-in-2, .anim-in-3, .anim-in-4, .anim-in-5');
  allAnimated.forEach(el => {
    el.style.animation = 'none';
    el.style.opacity = '1';
    el.style.transform = 'none';
  });

  const stageRect = stageEl.getBoundingClientRect();
  const width = stageRect.width;
  const height = stageRect.height;

  // Create PDF in landscape with dimensions matching the stage
  const pdf = new jsPDF({
    orientation: width >= height ? 'landscape' : 'portrait',
    unit: 'px',
    format: [width, height],
    hotfixes: ['px_scaling'],
  });

  for (let i = 0; i < Math.min(TOTAL, slides.length); i++) {
    onProgress?.(i + 1, TOTAL);

    // Show only current slide
    slides.forEach(s => {
      s.classList.remove('is-active');
      s.style.opacity = '0';
      s.style.pointerEvents = 'none';
      s.style.transform = 'none';
    });
    slides[i].classList.add('is-active');
    slides[i].style.opacity = '1';
    slides[i].style.pointerEvents = 'all';
    slides[i].style.transform = 'translateX(0) scale(1)';

    // Force reflow
    slides[i].getBoundingClientRect();

    // Small delay to let browser paint
    await new Promise(r => setTimeout(r, 100));

    const canvas = await html2canvas(stageEl, {
      width,
      height,
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#111111',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/jpeg', 0.92);

    if (i > 0) {
      pdf.addPage([width, height], width >= height ? 'landscape' : 'portrait');
    }

    pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
  }

  // Restore original slide classes and clear inline styles
  slides.forEach((s, i) => {
    s.className = originalClasses[i];
    s.style.transition = '';
    s.style.animation = '';
    s.style.opacity = '';
    s.style.pointerEvents = '';
    s.style.transform = '';
  });

  allAnimated.forEach(el => {
    el.style.animation = '';
    el.style.opacity = '';
    el.style.transform = '';
  });

  pdf.save('Enter-pro-Guide.pdf');
}
