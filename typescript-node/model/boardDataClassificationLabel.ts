/**
 * Miro API
 * Miro API
 *
 * The version of the OpenAPI document: 0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class BoardDataClassificationLabel {
    /**
    * Label color
    */
    'color'?: string;
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

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
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
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return BoardDataClassificationLabel.attributeTypeMap;
    }
}

