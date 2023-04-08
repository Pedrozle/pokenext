import styles from "@/styles/pages/todo.module.css";

export async function getStaticProps() {
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos");

    const data = await resp.json();

    console.log({ props: { data } });

    return { props: { data } };
}

export default function Todos({ data }: any) {
    return (
        <>
            <h1>Tarefas para fazer:</h1>
            <ul className={styles.todolist}>
                {data.map((prop: any) => (
                    <li key={prop.id}>{prop.title}</li>
                ))}
            </ul>
        </>
    );
}
