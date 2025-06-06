import { BadRequestException, NotFoundException } from '@nestjs/common';
export declare const NotFoundSKUException: NotFoundException;
export declare const OutOfStockSKUException: BadRequestException;
export declare const ProductNotFoundException: NotFoundException;
export declare const NotFoundCartItemException: NotFoundException;
export declare const InvalidQuantityException: BadRequestException;
