import { ForbiddenException, UnprocessableEntityException } from '@nestjs/common';
export declare const UserAlreadyExistsException: UnprocessableEntityException;
export declare const CannotUpdateAdminUserException: ForbiddenException;
export declare const CannotDeleteAdminUserException: ForbiddenException;
export declare const CannotSetAdminRoleToUserException: ForbiddenException;
export declare const RoleNotFoundException: UnprocessableEntityException;
export declare const CannotUpdateOrDeleteYourselfException: ForbiddenException;
