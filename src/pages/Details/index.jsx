import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir Nota"></ButtonText>

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati ducimus et consectetur cumque asperiores doloremque a fugiat libero magnam animi tempore perspiciatis distinctio vel deleniti, soluta aspernatur necessitatibus, omnis nulla.</p>


          <Section title="Links úteis">
            <Links>
              <li>item 1</li>
              <li>item 2</li>
              <li>itme 3</li>
            </Links>
          </Section>

          <Section tilte="marcadores">
            <Tag title="express"></Tag>
            <Tag title="node.js"></Tag>
          </Section>

          <Button title="Voltar" />
        
        </Content>
      </main>
   
    </Container>
  );
}
