import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput";
import { ContainerForm, RowContainer, ScrollForm } from "./style";
import axios from "axios";

export function Home() {
  //hooks - state
  const [cep, SetCep] = useState();
  const [logradouro, SetLogradouro] = useState("");
  const [bairro, SetBairro] = useState("");
  const [cidade, SetCidade] = useState("");
  const [estado, SetEstado] = useState("");
  const [uf, SetUf] = useState("");

  //hooks - effect e functions
  useEffect(async () => {
      try {
        if (cep != "" && cep.length === 8) {
          const endereco = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`
          );

          if (endereco.error) {
            alert("Verifique o CEP");
            return;
          }

          SetLogradouro(endereco.data.logradouro);
          SetBairro(endereco.data.bairro);
          SetCidade(endereco.data.localidade);
          SetEstado(endereco.data.estado);
          SetUf(endereco.data.uf);
        }
      } catch (error) {
        console.log("Erro ao buscar o CEP");
        console.log(error);
      }


  }, [cep]);

  return (
    //Scroll Form
    //ContainerForm
    //BoxInput
    //Label
    //Input

    <ScrollForm>
      <ContainerForm>
        <BoxInput
          textLabel="Informar CEP:"
          placeholder="Cep..."
          KeyType="numeric"
          maxLenght={9}
          //O editable permite com o que algo seja editado neste 
          editable={true}
          fieldValue={cep}
          onChangeText={(tx) => {
            return SetCep(tx);
          }}
        />
      </ContainerForm>

      <ContainerForm>
        <BoxInput
          textLabel="Logradouro:"
          placeholder="Logradouro..."
          fieldValue={logradouro}
        />
      </ContainerForm>

      <ContainerForm>
        <BoxInput
          textLabel="Bairro:"
          placeholder="Bairro..."
          fieldValue={bairro}
        />
      </ContainerForm>

      <ContainerForm>
        <BoxInput
          textLabel="Cidade"
          placeholder="Cidade..."
          fieldValue={cidade}
        />
      </ContainerForm>

      <RowContainer>
        <BoxInput
          textLabel="Estado"
          placeholder="Estado..."
          fieldValue={estado}
        />

        <BoxInput
          textLabel="UF"
          placeholder="UF..."
          fieldValue={uf}
        />
      </RowContainer>
    </ScrollForm>
  )
}
