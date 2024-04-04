import { useRouter } from "next/router";

export default function GetNewsById() {
    const router = useRouter();

    return (
        <>
            <h1>News by {router.query.id}</h1>
        </>
    );
}
