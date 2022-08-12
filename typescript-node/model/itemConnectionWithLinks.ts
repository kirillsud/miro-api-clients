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

import { RelativeOffset } from './relativeOffset';
import { SelfLink } from './selfLink';

/**
* The starting point of the connector.
*/
export class ItemConnectionWithLinks {
    /**
    * Unique identifier (ID) of the item the connector is attached to.
    */
    'id'?: string;
    'links'?: SelfLink;
    'position'?: RelativeOffset;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "SelfLink"
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "RelativeOffset"
        }    ];

    static getAttributeTypeMap() {
        return ItemConnectionWithLinks.attributeTypeMap;
    }
}

