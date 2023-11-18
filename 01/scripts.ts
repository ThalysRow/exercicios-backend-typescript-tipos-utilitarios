type Usuario = {
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  dataNacimento?: string;
};

type NovoUsuario = Omit<Usuario, "rg">;

const cadastrarUsuario = (info: Usuario): Usuario => {
  return info;
};

const novoCadastro = (info: Omit<Usuario, "rg">): NovoUsuario => {
  return info;
};
