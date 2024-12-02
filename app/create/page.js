import CreateForm from "@/components/CreateForm";
import { auth } from "@/auth";

export default async function Create() {
    const session = await auth();

    if(!session?.user) {
        return (<div className='text-base text-center font-normal font-sans'>You do not have permission to access this page!</div>)
    }

    return <CreateForm session={session} />
}