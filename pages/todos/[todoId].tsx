import Link from "next/link";

import { useRouter } from "next/router";

export default function Todo() {
    const router = useRouter();

    const todoId = router.query.todoId;

    return (
        <>
            <Link href="/todos">Voltar</Link>
            <h1>Exibindo o Todo: {todoId} </h1>
            <p>
                Comentario: la la la{" "}
                <Link href={`/todos/${todoId}/comments/1`}>Detalhes</Link>
            </p>
        </>
    );
}
