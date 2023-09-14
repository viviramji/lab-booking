import { PrismaClient } from '@prisma/client'
import type { PageServerLoad } from './$types';

const client = new PrismaClient();

export const load: PageServerLoad = () => {
    return {
        users: [
          { id: 1, name: 'John Doe' },
          { id: 2, name: 'Victor R' },
        ]
    };
};
