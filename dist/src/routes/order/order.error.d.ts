import { BadRequestException, NotFoundException } from '@nestjs/common';
export declare const OrderNotFoundException: NotFoundException;
export declare const ProductNotFoundException: NotFoundException;
export declare const OutOfStockSKUException: BadRequestException;
export declare const NotFoundCartItemException: NotFoundException;
export declare const SKUNotBelongToShopException: BadRequestException;
export declare const CannotCancelOrderException: BadRequestException;
export declare const CannotChangeOrderStatusException: BadRequestException;
