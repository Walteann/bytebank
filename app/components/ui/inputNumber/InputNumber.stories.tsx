import type { Meta, StoryObj } from "@storybook/nextjs";
import InputNumber from "./InputNumber";

const meta: Meta<typeof InputNumber> = {
  title: "Componentes/Form/InputNumber",
  component: InputNumber,
  tags: ["autodocs"],
  args: {
    id: "exemplo",
    label: "Valor",
    placeholder: "Digite um valor",
    monetary: false,
    value: 0,
    className: 'w-[300px]'
  },
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Padrao: Story = {
  args: {
    value: 123,
  },
};

export const Monetario: Story = {
  args: {
    monetary: true,
    value: 123.45,
  },
};

export const SemLabel: Story = {
  args: {
    label: undefined,
    placeholder: "R$ 0,00",
    monetary: true,
  },
};
