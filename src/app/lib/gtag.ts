// Google Analytics Tracking ID
export const GA_TRACKING_ID = 'G-RMX1N907MW';

// Хуудас бүр рүү орж ирэхэд track хийх
export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Хэрэглэгч event trigger хийхэд track хийх
type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export const event = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
