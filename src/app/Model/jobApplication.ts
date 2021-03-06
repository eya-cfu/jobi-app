/**
 * Student Jobs API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface JobApplication { 
    studentId?: number;
    jobOfferId?: number;
    appId?: number;
    appDate?: string;
    motivation?: string;
    status?: JobApplication.StatusEnum;
}
export namespace JobApplication {
    export type StatusEnum = 'accepted' | 'refused' | 'processing';
    export const StatusEnum = {
        Accepted: 'accepted' as StatusEnum,
        Refused: 'refused' as StatusEnum,
        Processing: 'processing' as StatusEnum
    };
}