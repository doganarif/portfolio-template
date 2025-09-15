export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackPDFDownload = (pdfName) => {
  trackEvent('file_download', 'PDF', pdfName, 1);
};

export const trackPDFView = (pdfName) => {
  trackEvent('pdf_view', 'PDF', pdfName, 1);
};