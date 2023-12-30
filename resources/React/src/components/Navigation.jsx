import {Link} from "@inertiajs/react";
import NavigationLink from "./NavigationLink.jsx";

export default function Navigation() {
    return (
        <>
            <div className='w-[320px] p-2 px-4 flex flex-col gap-y-4 py-6 px-4'>
                <NavigationLink href="/products">Products</NavigationLink>
            </div>
        </>
    )
}
