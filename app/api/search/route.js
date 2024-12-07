import connectDB from "@/utils/connectDB";
import createSearchName from "@/utils/createSearchName";
import Character from "@/utils/schema";

export async function POST(request) {
    await connectDB();
    
    try {
        const res = await request.json();
        const searchName = await createSearchName(res.searchName);
        console.log(searchName);

        const character = await Character.findOne({searchName: searchName});
        
        if(!character) {
            return Response.json({message: 'Character does not exist.', status: 404});
        }

        return Response.json({character: character, message: "New Character created successfully.", status: 200});
    }
    catch(error) {
        console.log(error);
        return Response.json({message: 'Some error occured', status: 500});
    }
}