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
* Contains geometrical information about the item, such as its width or height. For information about the JSON properties, see [Geometry](https://developers.miro.com/reference/geometry).
*/
export class GeometryPlatformContainers {
    /**
    * Height of the item, in pixels.
    */
    'height'?: number;
    /**
    * Rotation angle of an item, in degrees, relative to the board. You can rotate items clockwise (right) and counterclockwise (left) by specifying positive and negative values, respectively.
    */
    'rotation'?: number;
    /**
    * Width of the item, in pixels.
    */
    'width'?: number;

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "height",
            "baseName": "height",
            "type": "number"
        },
        {
            "name": "rotation",
            "baseName": "rotation",
            "type": "number"
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number"
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return GeometryPlatformContainers.attributeTypeMap;
    }
}

