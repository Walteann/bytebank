import type { Meta, StoryObj } from "@storybook/nextjs";
import ModalConfirmacao from "./ModalConfirmacao";
import { useState } from "react";
import Button from "../button/Button";

const meta: Meta<typeof ModalConfirmacao> = {
  title: "Componentes/Modal/ModalConfirmacao",
  component: ModalConfirmacao,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof ModalConfirmacao>;

// Componente wrapper para simular interação com estado
const Template = () => {
  const [confirmado, setConfirmado] = useState(false);

  return (
    <>
      <ModalConfirmacao
        titulo="Tem certeza?"
        descricao="Essa ação não poderá ser desfeita."
        onConfirmar={() => setConfirmado(true)}
      >
        {(abrirModal) => <Button value="Abrir Modal" onClick={abrirModal} />}
      </ModalConfirmacao>

      {confirmado && <p className="mt-4 text-green-600">Confirmado com sucesso!</p>}
    </>
  );
};

export const Padrao: Story = {
  render: Template,
};
