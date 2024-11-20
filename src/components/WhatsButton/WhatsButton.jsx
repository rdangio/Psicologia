import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="5514996923650"
      accountName="Cláudia Dangió"
      allowEsc
      allowClickAway
      notification
      notificationSound
      avatar="/Images/claudia-perfil.jpg"
      chatMessage="Olá! 🤗
Como posso te ajudar?"
      statusMessage="Psicóloga"
      placeholder="Escreva sua mensagem..."
    />
  );
};

export default Whatsapp;
