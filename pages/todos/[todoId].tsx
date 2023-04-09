import Link from "next/link";

export async function getStaticProps(context: any) {
    const { params } = context;
    const data = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
    );

    const todo = await data.json();

    return {
        props: { todo },
    };
}

export async function getStaticPaths() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");

    const data = await response.json();

    const paths = data.map((todo: any) => {
        return {
            params: {
                todoId: `${todo.id}`,
            },
        };
    });

    return { paths, fallback: false };
}

export default function Todo({ todo }: any) {
    return (
        <>
            <Link href="/todos">Voltar</Link>
            <h1>Exibindo o Todo: {todo.id} </h1>
            <h2>Titulo: {todo.title}</h2>
            <h3>Usuario: {todo.userId}</h3>
            <p>
                Comentario: la la la{" "}
                <Link href={`/todos/${todo.id}/comments/1`}>Detalhes</Link>
            </p>
            <p>status: {todo.completed ? "yes" : "no"}</p>
        </>
    );
}
