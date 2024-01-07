import prisma from '@/libs/prisma';

export async function POST(request) {
  const { name, password } = await request.json();

  const user = await prisma.user.findMany({
    where: {
      name,
      password,
    },
  });

  if (user.length === 0) {
    return Response.json({ status: 401, error: 'Invalid username or password' });
  }

  return Response.json({ status: 200, data: user[0].name, message: 'Login success' });
}
