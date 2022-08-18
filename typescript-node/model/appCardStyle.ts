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


/**
* Contains information about the style of an app card item, such as the fill color. For information about the JSON properties, see [Style](https://developers.miro.com/reference/style).
*/
export class AppCardStyle {
    /**
    * Hex value of the border color of the app card. Default: `#2d9bf0`.
    */
    'fillColor'?: string;

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fillColor",
            "baseName": "fillColor",
            "type": "string"
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return AppCardStyle.attributeTypeMap;
    }
}

