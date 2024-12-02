import Character from "@/utils/schema";

export async function POST(request) {
    try {
        const res = await request.json();
        const searchName = res.searchName;
        const character = await Character.findOne({searchName: searchName});
        
        if(character) {
            return Response.json({message: 'Character already exists.', status: 409});
        }

        const newCharacter = await new Character(res);
        await newCharacter.save();

        return Response.json({message: "New Character created successfully.", status: 201});
    }
    catch(error) {
        console.log(error);
        return Response.json({message: 'Some error occured', status: 500});
    }
}