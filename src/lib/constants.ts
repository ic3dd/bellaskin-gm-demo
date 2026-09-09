export const WHATSAPP_NUMBER = "351969405974";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappBookingUrl(service?: string): string {
  const message = service
    ? `Olá! Gostaria de agendar uma sessão de ${service}. Podem ajudar-me com disponibilidade?`
    : "Olá! Gostaria de agendar uma consulta na Bella Skin. Podem ajudar-me com disponibilidade?";
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

export const INSTAGRAM_URL = "https://www.instagram.com/bellaskin_gm/";
export const TIKTOK_URL = "https://www.tiktok.com/@bellaskin24";

export const ADDRESS = "Av. Comandante Luís António da Silva nº 2, 2700-203 Amadora";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;
