import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
    const users = await prisma.user.findUnique({
        where: {
            name_age: {
                name: "Toby",
                age: 20,
            },
        },
    });

    console.log(users);
}

main().catch(console.error)
    .finally(async () => {
        await prisma.$disconnect();
    });