import { prismaClient } from "../src/config/prismaClient";


async function main () {

  const typeOrgan = [ "Coração", "Rins", "Pulmão", "Fígado", "Pâncreas", "Intestino"];
  const typeTissue = [ "Córnea", "Pele", "Válvula Cardíaca", "Tendões", "Ossos"];

  await prismaClient.organ.deleteMany();

  for(let i=0; i<typeOrgan.length;i++){
    await prismaClient.organ.create({
      data: {
        description: typeOrgan[i],
        organType: '1'
      }
    })
  }

  for(let i=0; i<typeTissue.length;i++){
    await prismaClient.organ.create({
      data: {
        description: typeTissue[i],
        organType: '0'
      }
    })
  }

 const tudo = await prismaClient.organ.findMany()
 console.log(tudo)

}

main()
.catch(e =>{
  console.error(e);
  process.exit(1);
})
.finally(async () => {
  await prismaClient.$disconnect();
})