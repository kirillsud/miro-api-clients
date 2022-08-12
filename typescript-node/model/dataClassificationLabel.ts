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
* Data classification labels
*/
export class DataClassificationLabel {
    /**
    * Label color
    */
    'color'?: string;
    /**
    * Label is default
    */
    '_default'?: boolean;
    /**
    * Label description
    */
    'description'?: string;
    /**
    * Label id
    */
    'id'?: string;
    /**
    * Label name
    */
    'name'?: string;
    /**
    * Label order number
    */
    'orderNumber'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "orderNumber",
            "baseName": "orderNumber",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return DataClassificationLabel.attributeTypeMap;
    }
}

