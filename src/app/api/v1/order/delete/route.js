import prisma from "@/libs/prisma";

export async function DELETE() {
  try {
    const deletedData = await prisma.orders.deleteMany();
    if (deletedData) {
      return Response.json({ status: 200, isDeleted: true });
    }
  } catch (error) {
    return Response.json({ status: 500, error: 'Something went wrong' });
  }
}
