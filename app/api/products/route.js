import fsPromises from 'fs/promises';
import { NextResponse } from 'next/server'
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'json/products.json');

export async function GET() {
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    return NextResponse.json(objectData)
}

export async function POST(request) {
  
  try {
    const res = await request.json();
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);

    const { name, price, amount } = res;
    const lastId = objectData.products[objectData.products.length - 1].id;

    const newData = {
      name,
      price,
      amount,
      id: lastId + 1
    };

    objectData.products.push(newData);
    const updatedData = JSON.stringify(objectData);
    await fsPromises.writeFile(dataFilePath, updatedData);

    return NextResponse.json({ 
      error: false,
      message: 'Producto guardado' 
    });

  } catch (error) {
    return NextResponse.json({ 
      error: true,
      message: 'Error guardando producto' 
    });
  }
}

export async function PUT(request) {
  try { 
    const res = await request.json();
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData);
    let newData = objectData.products.slice();
    res.forEach((item) => {
      const index = objectData.products.findIndex((product) => product.id === item.id)
      newData[index] = {...newData[index], amount: newData[index].amount - item.amount};
    })

    const updatedData = JSON.stringify({products: newData});
    await fsPromises.writeFile(dataFilePath, updatedData);

    return NextResponse.json({ 
      error: false,
      message: 'Compra realizada con éxito' 
    });

  } catch (error) {
    return NextResponse.json({ 
      error: true,
      message: 'Error en la compra' 
    });
  }
}