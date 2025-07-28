import type { Meta, StoryObj } from "@storybook/nextjs";
import InputSelect from "./InputSelect";

const meta: Meta<typeof InputSelect> = {
  title: "Componentes/Form/InputSelect",
  component: InputSelect,
  tags: ["autodocs"],
  args: {
    options: [
      { label: "Depósito", value: "deposito" },
      { label: "Transferência", value: "transferencia" },
      { label: "Pagamento", value: "pagamento" },
    ],
    placeholder: "Selecione uma opção",
    className: 'w-[300px]'
  },
};

export default meta;
type Story = StoryObj<typeof InputSelect>;

export const Padrao: Story = {
  args: {
    onChange: (value) => console.log("Selecionado:", value),
  },
};

export const PreSelecionado: Story = {
  args: {
    value: "pagamento",
    onChange: (value) => console.log("Selecionado:", value),
  },
};