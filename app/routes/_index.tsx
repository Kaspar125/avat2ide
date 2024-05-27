import {json, LoaderFunctionArgs} from '@remix-run/node';
import {useLoaderData} from '@remix-run/react';

export async function loader({request}: LoaderFunctionArgs) {
    return json({test: "index page"});
}

export default function About() {
    const {test} = useLoaderData<typeof loader>();
    return (
        <>
            <h1>Hello {test}</h1>
        </>
    );
}