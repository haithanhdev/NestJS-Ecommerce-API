import { Prisma } from '@prisma/client';
export declare function isUniqueConstraintPrismaError(error: any): error is Prisma.PrismaClientKnownRequestError;
export declare function isNotFoundPrismaError(error: any): error is Prisma.PrismaClientKnownRequestError;
export declare function isForeignKeyConstraintPrismaError(error: any): error is Prisma.PrismaClientKnownRequestError;
export declare const generateOTP: () => string;
export declare const generateRandomFilename: (filename: string) => string;
export declare const generateCancelPaymentJobId: (paymentId: number) => string;
export declare const generateRoomUserId: (userId: number) => string;
