import prisma from "@/libs/prisma";

export async function GET() {
  const modes = await prisma.mode.findMany();
  return Response.json({ status: 200, modes });
}

export async function POST(request) {
  const { name } = await request.json();

  const mode = await prisma.mode.update({
    where: {
      id: 'clqj0aetu0000fwg3vqmvo8sa'
    },
    data: {
      name,
    }
  });

  if (mode) {
    return Response.json({ status: 200, isUpdated: true });
  }

  return Response.json({ status: 500, error: 'Something went wrong' });
}