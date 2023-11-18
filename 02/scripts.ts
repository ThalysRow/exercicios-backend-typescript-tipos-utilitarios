type Item = {
  nome: string;
  descricao: string;
  valor: number;
};

type Cartao = {
  numero: number;
  validade: string;
  nome: string;
  cvv: number;
};

type Carrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  tipoTransacao: "credito" | "Debito";
  cartao: Cartao;
};

type Transacao = "credito" | "debito";

type Pagamento = Lowercase<Transacao>;

type Endereco = {
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
};

// Pode ser assim:

type NovoCarrinho = {
  item: Item;
  qtd: number;
  desconto: number;
  frete: number;
  endereco: Endereco;
  transacao: Pagamento;
  cartao: Cartao;
};

// Ou assim:

type NovoCarrinho2 = Omit<Carrinho, "tipoTransacao"> & {
  endereco: Endereco;
  transacao: Pagamento;
};
