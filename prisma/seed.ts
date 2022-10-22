import { prisma } from '../src/config/prismaClient';

async function main() {
	const typeOrgan = [ 'Coração', 'Rins', 'Pulmão', 'Fígado', 'Pâncreas', 'Intestino' ];
	const typeTissue = [ 'Córnea', 'Pele', 'Válvula Cardíaca', 'Tendões', 'Ossos' ];

	//npx prisma db seed
	//orgãos
	await prisma.organ.deleteMany();

	for (let i = 0; i < typeOrgan.length; i++) {
		await prisma.organ.create({
			data: {
				description: typeOrgan[i],
				organType: '1'
			}
		});
	}

	for (let i = 0; i < typeTissue.length; i++) {
		await prisma.organ.create({
			data: {
				description: typeTissue[i],
				organType: '0'
			}
		});
	}

	const allOrgan = await prisma.organ.findMany();
	console.log(allOrgan);

	//tipo sanguíneo

	const bloodType = [ 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-' ];

  for (let i = 0; i < bloodType.length; i++) {
		await prisma.bloodType.create({
			data: {
				description: bloodType[i],
			}
		});
	}


	//tipos usuário
	const typeUser = [ 'Admin', 'Donor', 'Receiver', 'Organization' ];
	for (let i = 0; i < typeUser.length; i++) {
		await prisma.userType.create({
			data: {
				accessType: typeUser[i],
			}
		});
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
