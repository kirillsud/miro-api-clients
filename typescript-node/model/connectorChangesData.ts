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

import { Caption } from './caption';
import { ConnectorStyle } from './connectorStyle';
import { ItemConnectionChangesData } from './itemConnectionChangesData';

export class ConnectorChangesData {
    'captions'?: Array<Caption>;
    'endItem'?: ItemConnectionChangesData;
    /**
    * The path type of the connector line, defines curvature. Default: curved. Possible values: `straight`, `elbowed`, `curved`
    */
    'shape'?: ConnectorChangesData.ShapeEnum;
    'startItem'?: ItemConnectionChangesData;
    'style'?: ConnectorStyle;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "captions",
            "baseName": "captions",
            "type": "Array<Caption>"
        },
        {
            "name": "endItem",
            "baseName": "endItem",
            "type": "ItemConnectionChangesData"
        },
        {
            "name": "shape",
            "baseName": "shape",
            "type": "ConnectorChangesData.ShapeEnum"
        },
        {
            "name": "startItem",
            "baseName": "startItem",
            "type": "ItemConnectionChangesData"
        },
        {
            "name": "style",
            "baseName": "style",
            "type": "ConnectorStyle"
        }    ];

    static getAttributeTypeMap() {
        return ConnectorChangesData.attributeTypeMap;
    }
}

export namespace ConnectorChangesData {
    export enum ShapeEnum {
        Straight = <any> 'straight',
        Elbowed = <any> 'elbowed',
        Curved = <any> 'curved'
    }
}
