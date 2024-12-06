import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  return (
    <div className="hidden md:block">
      <FloatingWhatsApp
        darkMode
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
        // className="custom-whatsapp" // Adiciona uma classe personalizada
        // className="fixed bottom-5 left-5 right-auto sm:left-5 md:right-5 lg:left-5 xl:left-5"
        chatboxHeight={300}
      />
    </div>
  );
};

export default Whatsapp;
