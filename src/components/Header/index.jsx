import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout} from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/diogoSaints.png" alt="foto do usuario" />

        <div>
          <span>Bem-Vindo</span>
          <strong>Diogo Santos</strong>
        </div>
      </Profile>
    
    <Logout>
        <RiShutDownLine/>
    </Logout>

    </Container>
  );
}
