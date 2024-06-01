import { Whatsapp } from "./floating-whatsapp.style.jsx";
import "./floating-whatsapp.style.jsx";

function WhatsApp() {
  return (
    <Whatsapp>
      <a
        href="https://api.whatsapp.com/send?phone=5511970601261&text=Olá,%20Tudo%20bem?%0AMe%20chamo%20Pedro%20Isidoro."
        target="_blank"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </Whatsapp>
  );
}

export default WhatsApp;
