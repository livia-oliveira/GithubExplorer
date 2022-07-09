import { RepositoryItem } from "./RepositoryItem";


export function RepositoryList(){
    return(
        <section className="repository-List">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}