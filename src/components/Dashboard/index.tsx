import { Summary } from "../Summary/Index";
import { TransactionTable } from "../TransactionTable";
import { Container } from "./styles";

export function Dashboard () {
    return (
        <Container>
            <Summary/>
            <TransactionTable/>
        </Container>
    );
}