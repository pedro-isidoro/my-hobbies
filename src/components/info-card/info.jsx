import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/Theme-context";
import { Modal } from "../modal/GenericModal";
import { InfoSection } from "./info.style";

export function InfoCard() {
    const { theme } = useContext(ThemeContext);
    const [openModal, setOpenModal] = useState(false)
    
    return (
      <InfoSection
        color={theme.color}
        background={theme.background_general_color}
        icon_color={theme.icon_color}
        button={theme.background_header_footer_color}
      >
        <h2 className="title">Sobre Mim</h2>
        <div className="info">
          <img src="/images/info/me-dreamWorks.webp" alt="IA Image about me" />
          <div className="info-text">
            <p>
              Me chamo Pedro Isidoro, tenho 20 anos. Sou um estudante de TI e
              como a maioria das pessoas tenho alguns Hobbies que gosto. E
              decidi criar essa Landing Page para mostrar e mantê-los em
              registro.
            </p>
            <button onClick={() => setOpenModal(true)}>Portfólio</button>
          </div>
          <Modal
            isOpen={openModal}
            setModalClosed={() => setOpenModal(!openModal)}
          >
            <p>
              Em um projeto com tecnologias um pouco mais avançadas, desenvolvi
              meu próprio portfólio
            </p>
            <iframe
              src="https://pedro-isidoros-portfolio.vercel.app"
              loading="lazy"
            />
          </Modal>
        </div>
      </InfoSection>
    );
}