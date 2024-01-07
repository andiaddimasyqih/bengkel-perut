import prisma from '@/libs/prisma';

export async function POST(request) {
  const { user_id, food_id, quantity } = await request.json();

  const data = { user_id, food_id, quantity };

  const checkOrder = await prisma.orders.findMany({
    where: {
      user_id,
      food_id,
    },
  });

  if (checkOrder.length > 0) {
    await prisma.orders.update({
      where: {
        id: checkOrder[0].id,
      },
      data: {
        quantity: checkOrder[0].quantity + 1,
      },
    });
  } else {
    await prisma.orders.create({ data });
  }
  return Response.json({ status: 200, isCreated: true });
}

export async function PATCH(request) {
  const { user_id, food_id, quantity } = await request.json();

  const existingOrder = await prisma.orders.findFirst({
    where: {
      user_id,
      food_id,
    },
  });

  if (existingOrder) {
    try {
      await prisma.orders.update({
        where: {
          user_id_food_id: {
            user_id,
            food_id,
          },
        },
        data: {
          quantity,
        },
      });
    } catch (error) {
      return Response.json({ status: 500, error: 'Something went wrong' });
    }
    return Response.json({ status: 200, isUpdated: true });
  } else {
    await prisma.orders.create({
      data: {
        user_id,
        food_id,
        quantity,
      },
    });
    return Response.json({ status: 200, isCreated: true });
  }
}

export async function DELETE(request) {
  const { user_id, food_id } = await request.json();

  try {
    let deletedData;
    if (!food_id) {
      deletedData = await prisma.orders.deleteMany({
        where: {
          user_id,
        },
      });
    } else {
      deletedData = await prisma.orders.delete({
        where: {
          user_id_food_id: {
            user_id,
            food_id,
          },
        },
      });
    }
    if (deletedData) {
      return Response.json({ status: 200, isDeleted: true });
    }
  } catch (error) {
    return Response.json({ status: 500, error: 'Something went wrong' });
  }
  console.log('oi');
}
