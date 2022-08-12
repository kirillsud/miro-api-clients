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

import { SelfLink } from './selfLink';

export class BoardMemberWithLinks {
    /**
    * Unique identifier (ID) of the user.
    */
    'id'?: number;
    /**
    * Name of the user.
    */
    'name'?: string;
    /**
    * Role of the board member. Possible values: `viewer`, `commenter`, `editor`, `coowner`, `owner`, `guest`
    */
    'role'?: BoardMemberWithLinks.RoleEnum;
    'links'?: SelfLink;
    /**
    * Type of the object that is returned. In this case, `type` returns `board_member`.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "BoardMemberWithLinks.RoleEnum"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "SelfLink"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BoardMemberWithLinks.attributeTypeMap;
    }
}

export namespace BoardMemberWithLinks {
    export enum RoleEnum {
        Viewer = <any> 'viewer',
        Commenter = <any> 'commenter',
        Editor = <any> 'editor',
        Coowner = <any> 'coowner',
        Owner = <any> 'owner',
        Guest = <any> 'guest'
    }
}
