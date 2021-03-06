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

/**
 * All properties are required.
 */
export interface User { 
    /**
     * must be a number of 6 digits
     */
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    tel?: number;
    /**
     * (M) for male, (F) for female, (X) for other
     */
    gender?: string;
}