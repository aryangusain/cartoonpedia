'use client';

import { UploadDropzone } from "@/utils/uploadThing";

function ImageUpload({ character, setCharacter }) {

  return (
    <div className="w-full">
      <UploadDropzone
        endpoint="imageUploader"
        appearance={{
            container: "cursor-pointer px-0 py-0 w-full max-h-fit",
            button: "w-full",
            label: "text-xs",
            allowedContent: "text-xs",
            uploadIcon: "",
        }}
        onClientUploadComplete={async (res) => {
          const imageUrl = res[0].serverData.fileUrl;
          console.log("Files: ", imageUrl);
          setCharacter({...character, image: imageUrl});
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  )
}

export default ImageUpload