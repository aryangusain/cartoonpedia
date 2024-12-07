import connectDB from "@/utils/connectDB";
import Character from "@/utils/schema";

export async function GET() {
    await connectDB();

    try {
        const characters = await Character.find();
        console.log('characters: ', characters);
        if(characters.length > 0) {
            return Response.json({characters: characters, message: 'characters fetched successfully', status: 200});
        }
        return Response.json({message: 'no characters exist.', status: 404});
    }
    catch(error) {
        console.log(error);
        return Response.json({message: 'some error occured.', status: 500});
    }
}