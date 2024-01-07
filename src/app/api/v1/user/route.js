export async function POST(request) {
  const { id } = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      id,
    }
  });

  return Response.json(user);
}

export async function PUT(request) {
  const { id, name, address, phone, email } = await request.json();

  const user = await prisma.user.update({
    where: {
      id
    },
    data: {
      name,
      address,
      phone,
      email
    }
  });

  if (!user) {
    return Response.json({ status: 500, error: 'Something went wrong' });
  }

  return Response.json({ status: 200, isUpdated: true });
}