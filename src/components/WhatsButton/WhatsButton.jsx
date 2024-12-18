import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  return (
    <div className="hidden md:block">
      <FloatingWhatsApp
        darkMode
        phoneNumber="5514997030269"
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
        chatboxHeight={300}
      />
    </div>
  );
};

export default Whatsapp;
