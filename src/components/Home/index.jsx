import {Container, Brand, Menu, Search, Content, NewNotes} from "./styles";
import {Header} from "../../components/Header";


export function Home (){
    return(
        <Container>
            <Header></Header>
            <Brand>
            <h1>Rocketnotes</h1>
            </Brand>
            <Menu></Menu>
            <Search></Search>
            <Content></Content>
            <NewNotes></NewNotes>
        </Container>
    );

};