import {useLoaderData} from '@remix-run/react';
import {json, LoaderFunctionArgs} from '@remix-run/node';

export async function loader({request}: LoaderFunctionArgs) {
    return json({test: "firmast leht"});
}

export default function About() {
    const {test} = useLoaderData<typeof loader>();
    return (
        <>
            <h1>Hello {test}</h1>
        </>
    );
}