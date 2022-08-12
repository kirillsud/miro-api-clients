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

export class TagWithLinks {
    /**
    * Unique identifier of the tag.
    */
    'id'?: number;
    /**
    * Text of the tag
    */
    'title'?: string;
    /**
    * Background color of the tag. Possible values: `red`, `light_green`, `cyan`, `yellow`, `magenta`, `green`, `blue`, `gray`, `violet`, `dark_green`, `dark_blue`, `black`
    */
    'fillColor'?: TagWithLinks.FillColorEnum;
    'links'?: SelfLink;
    /**
    * Type of the object that is returned. In this case, type returns `tag`.
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
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "fillColor",
            "baseName": "fillColor",
            "type": "TagWithLinks.FillColorEnum"
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
        return TagWithLinks.attributeTypeMap;
    }
}

export namespace TagWithLinks {
    export enum FillColorEnum {
        Red = <any> 'red',
        LightGreen = <any> 'light_green',
        Cyan = <any> 'cyan',
        Yellow = <any> 'yellow',
        Magenta = <any> 'magenta',
        Green = <any> 'green',
        Blue = <any> 'blue',
        Gray = <any> 'gray',
        Violet = <any> 'violet',
        DarkGreen = <any> 'dark_green',
        DarkBlue = <any> 'dark_blue',
        Black = <any> 'black'
    }
}
