
    
import fs from 'node:fs/promises';
import path from "node:path";


export async function GET(req, {params}) {
  const { slug } = params;
    const directoryPath = path.join(process.cwd(), 'blogdata', slug); // Specify the directory path
    console.log(directoryPath)
    try {
      let files = await fs.readFile(directoryPath, "utf-8");
      // files = JSON.parse(files)
      return Response.json({data: files}, {status: 200});
    } catch (err) {
        return Response.json({message: "Failed to read file"}, {status: 500});
    }

    
}
