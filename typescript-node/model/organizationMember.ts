/**
 * Platform Tags
 * SCIM V1 API implemented by Miro
 *
 * The version of the OpenAPI document: v2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Response for search organization members by user emails
*/
export class OrganizationMember {
    /**
    * Flag is user active
    */
    'active'?: boolean;
    /**
    * User email
    */
    'email'?: string;
    /**
    * Id of the user
    */
    'id'?: string;
    /**
    * Last time when the user was active
    */
    'lastActivityAt'?: Date;
    /**
    * Name of the current user license in the organization
    */
    'license'?: OrganizationMember.LicenseEnum;
    /**
    * Time when the license was assigned to the user
    */
    'licenseAssignedAt'?: Date;
    /**
    * Name of the user role in the organization
    */
    'role'?: OrganizationMember.RoleEnum;
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "lastActivityAt",
            "baseName": "lastActivityAt",
            "type": "Date"
        },
        {
            "name": "license",
            "baseName": "license",
            "type": "OrganizationMember.LicenseEnum"
        },
        {
            "name": "licenseAssignedAt",
            "baseName": "licenseAssignedAt",
            "type": "Date"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "OrganizationMember.RoleEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OrganizationMember.attributeTypeMap;
    }
}

export namespace OrganizationMember {
    export enum LicenseEnum {
        Unknown = <any> 'UNKNOWN',
        Full = <any> 'FULL',
        Occasional = <any> 'OCCASIONAL',
        Free = <any> 'FREE',
        FreeRestricted = <any> 'FREE_RESTRICTED',
        FullTrial = <any> 'FULL_TRIAL'
    }
    export enum RoleEnum {
        Unknown = <any> 'UNKNOWN',
        OrganizationInternalAdmin = <any> 'ORGANIZATION_INTERNAL_ADMIN',
        OrganizationInternalUser = <any> 'ORGANIZATION_INTERNAL_USER',
        OrganizationExternalUser = <any> 'ORGANIZATION_EXTERNAL_USER',
        OrganizationTeamGuestUser = <any> 'ORGANIZATION_TEAM_GUEST_USER'
    }
}
