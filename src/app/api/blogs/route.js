
    
import fs from 'node:fs/promises';
import path from "node:path";


export async function GET(request) {
    const directoryPath = path.join(process.cwd(), 'blogdata'); // Specify the directory path
    try {
      const files = await fs.readdir(directoryPath);      
      return Response.json({data: files}, {status: 200});
    } catch (err) {
      return Response.json({message: "Failed to read directory"}, {status: 500});
    }
    
}
