import {Container, Title} from "@/ui";
import {ChooseTheme} from "@/components";

export const IndexPage = (): JSX.Element => {
    return (
        <section>
            <Container>
                <Title>Choose Your Side</Title>
                <ChooseTheme/>
            </Container>
        </section>
    )
}