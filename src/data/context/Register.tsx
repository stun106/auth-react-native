import { createContext, ReactNode, useState } from "react";

export const RegisterContext = createContext<{
  register: Register;
  handleOnChangeDoc: (field: string, value: string) => void;
  handleAddNewEndereco: (endereco: Endereco) => void;
}>({
  register: {
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    endereco: []
  },
  handleOnChangeDoc: () => { },
  handleAddNewEndereco: () => {}
});

export const RegisterProviders = ({ children }: { children: ReactNode }) => {
  const [register, setRegister] = useState<Register>({
    nome: '',
    email: '',
    cpf: '',
    senha: '',
    endereco: []
  });

  const handleOnChangeDoc = (field: string, value: string) => {
    setRegister(prevState => ({
      ...prevState,
      [field]: value
    }));
  };

  const handleAddNewEndereco = (novoEndereco: Endereco) => {
    setRegister((prevState: any) => ({
      ...prevState,
      endereco: prevState.endereco.length <= 2 ? [...prevState.endereco, novoEndereco] : [...prevState.endereco]
    }));
  };

  return (
    <RegisterContext.Provider value={{ register, handleOnChangeDoc, handleAddNewEndereco }}>
      {children}
    </RegisterContext.Provider>
  );
};
