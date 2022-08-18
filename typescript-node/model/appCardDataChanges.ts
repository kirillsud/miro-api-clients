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

import { CustomField } from './customField';

/**
* For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
*/
export class AppCardDataChanges {
    /**
    * A short text description to add context about the app card.
    */
    'description'?: string;
    /**
    * Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.
    */
    'fields'?: Array<CustomField>;
    /**
    * Status indicating whether an app card is connected and in sync with the source. When the source for the app card is deleted, the status returns `disabled`. Possible values: `disconnected`, `connected`, `disabled`
    */
    'status'?: AppCardDataChanges.StatusEnum = AppCardDataChanges.StatusEnum.Disconnected;
    /**
    * A short text header to identify the app card.
    */
    'title'?: string = 'sample app card item';

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "Array<CustomField>"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AppCardDataChanges.StatusEnum"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return AppCardDataChanges.attributeTypeMap;
    }
}

export namespace AppCardDataChanges {
    export enum StatusEnum {
        Disconnected = <any> 'disconnected',
        Connected = <any> 'connected',
        Disabled = <any> 'disabled'
    }
}
