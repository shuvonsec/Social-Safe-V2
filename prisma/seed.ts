import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.case.create({
    data: {
      name: "Sample Creator",
      email: "creator@example.com",
      platform: "Instagram",
      urgency: "Normal",
      message: "Demo seed case",
      status: "new",
      locale: "en-MY"
    }
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
