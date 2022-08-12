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
* Contains frame item data, such as the title, frame type, or frame format. For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
*/
export class FrameChanges {
    /**
    * Only custom frames are supported at the moment. Possible values: `custom`
    */
    'format'?: FrameChanges.FormatEnum = FrameChanges.FormatEnum.Custom;
    /**
    * Title of the frame. This title appears at the top of the frame.
    */
    'title'?: string = 'Sample frame title';
    /**
    * Only free form frames are supported at the moment. Possible values: `freeform`
    */
    'type'?: FrameChanges.TypeEnum = FrameChanges.TypeEnum.Freeform;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "format",
            "baseName": "format",
            "type": "FrameChanges.FormatEnum"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "FrameChanges.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return FrameChanges.attributeTypeMap;
    }
}

export namespace FrameChanges {
    export enum FormatEnum {
        Custom = <any> 'custom'
    }
    export enum TypeEnum {
        Freeform = <any> 'freeform'
    }
}
