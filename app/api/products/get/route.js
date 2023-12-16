import { NextRequest, NextResponse } from 'next/server'
const fs = require('fs');
const path = require('path');
 
export function GET(request) 
{
    const data = [];

    const folderPath = "./data/products/";
    const productFiles = fs.readdirSync(folderPath);

    productFiles.forEach((productFile) => 
    {
        const filePath = path.join(folderPath, productFile);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        try 
        {
            const jsonData = JSON.parse(fileContent);
            data.push(jsonData);
        } 
        catch (error) 
        {
            console.error(`Ошибка при обработке файла ${filePath}: ${error.message}`);
        }
    });

    return NextResponse.json(data, { status: 200 });
}