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

import { BoardPermissionsPolicy } from './boardPermissionsPolicy';
import { BoardSharingPolicyChange } from './boardSharingPolicyChange';

/**
* Defines the permissions policies and sharing policies for the board. For more information, see [Permissions policy](https://developers.miro.com/reference/rest-api-policy-data-model).
*/
export class BoardPolicyChange {
    'permissionsPolicy'?: BoardPermissionsPolicy;
    'sharingPolicy'?: BoardSharingPolicyChange;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "permissionsPolicy",
            "baseName": "permissionsPolicy",
            "type": "BoardPermissionsPolicy"
        },
        {
            "name": "sharingPolicy",
            "baseName": "sharingPolicy",
            "type": "BoardSharingPolicyChange"
        }    ];

    static getAttributeTypeMap() {
        return BoardPolicyChange.attributeTypeMap;
    }
}

