import type { Meta } from "@storybook/nextjs";

const meta: Meta = {
  title: "Intro",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const VisaoGeral = () => {
  return (
    <div className="text-center p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Componentes do Bytebank</h1>
      <p className="text-lg text-gray-600 mb-10">
        Esta introdução apresenta os componentes reutilizáveis utilizados na interface do Bytebank. Eles garantem consistência visual, acessibilidade e melhor experiência para o usuário.
      </p>

      <div className="text-left space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Button</h2>
          <p className="text-gray-700">
            Componente de botão genérico, usado em ações primárias como salvar, enviar ou cancelar. Suporta diferentes variações de cor e tamanho.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">ButtonIcon</h2>
          <p className="text-gray-700">
            Variação do botão que permite adicionar um ícone ao lado do texto ou até ser usado como botão apenas com ícone. Ideal para ações rápidas ou de navegação.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">ModalConfirmacao</h2>
          <p className="text-gray-700">
            Modal usado para confirmar ações importantes, como exclusões ou redefinições. Exibe título, descrição e dois botões: confirmar e cancelar.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">InputSelect</h2>
          <p className="text-gray-700">
            Campo de seleção customizado com aparência amigável e acessível. Utilizado para selecionar opções como tipo de transação ou categoria.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">InputNumber</h2>
          <p className="text-gray-700">
            Campo de input formatado para aceitar apenas números. Ideal para entrada de valores financeiros com formatação correta (ex: R$ 1.000,00).
          </p>
        </section>
      </div>
    </div>
  );
};
