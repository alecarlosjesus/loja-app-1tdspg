import {promises as fs} from "fs";
import { NextResponse } from "next/server";

//BASE DE DADOS
const file = await fs.readFile(process.cwd() + "/src/app/api/base/db.json", 'utf8');

export async function GET(request,{params}) {
  return NextResponse.json(JSON.parse(file));
}

export async function POST(request,response) {
  const body = await request.json();
  const usuarios = JSON.parse(file);

  console.log(body.userName);
  console.log(body.senha);

  for (let x = 0; x < usuarios.usuarios.length; x++) {
    const u = usuarios.usuarios[x];
    if(u.userName == body.userName && u.senha == body.senha){
      return NextResponse.json({ 'status': 'ok' });
    }
  }
      return NextResponse.json({ 'status': 'error' });
}