import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.case.create({
    data: {
      name: "Demo Creator",
      email: "demo@socialsafe.my",
      platform: "Instagram",
      urgency: "Normal",
      message: "Seeded case for testing seeding pipeline.",
      status: "resolved"
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
