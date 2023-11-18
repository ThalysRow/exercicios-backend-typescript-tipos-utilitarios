type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  dataNacimento?: string;
};

type NovoUsuario = Omit<Usuario, "rg">;
type DadosUsuario = Required<NovoUsuario>;

const cadastrarUsuario = (info: Usuario): Usuario => {
  return info;
};

const novoCadastro = (info: DadosUsuario): DadosUsuario => {
  return info;
};
