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
* Contains shape item data, such as the content or shape type of the shape. For information about the JSON properties, see [Data](https://developers.miro.com/reference/data).
*/
export class ShapeData {
    /**
    * The text you want to display on the shape.
    */
    'content'?: string = 'Hello';
    /**
    * Defines the geometric shape of the item when it is rendered on the board. Possible values: `rectangle`, `round_rectangle`, `circle`, `triangle`, `rhombus`, `parallelogram`, `trapezoid`, `pentagon`, `hexagon`, `octagon`, `wedge_round_rectangle_callout`, `star`, `flow_chart_predefined_process`, `cloud`, `cross`, `can`, `right_arrow`, `left_arrow`, `left_right_arrow`, `left_brace`, `right_brace`
    */
    'shape'?: ShapeData.ShapeEnum = ShapeData.ShapeEnum.Rectangle;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "shape",
            "baseName": "shape",
            "type": "ShapeData.ShapeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ShapeData.attributeTypeMap;
    }
}

export namespace ShapeData {
    export enum ShapeEnum {
        Rectangle = <any> 'rectangle',
        RoundRectangle = <any> 'round_rectangle',
        Circle = <any> 'circle',
        Triangle = <any> 'triangle',
        Rhombus = <any> 'rhombus',
        Parallelogram = <any> 'parallelogram',
        Trapezoid = <any> 'trapezoid',
        Pentagon = <any> 'pentagon',
        Hexagon = <any> 'hexagon',
        Octagon = <any> 'octagon',
        WedgeRoundRectangleCallout = <any> 'wedge_round_rectangle_callout',
        Star = <any> 'star',
        FlowChartPredefinedProcess = <any> 'flow_chart_predefined_process',
        Cloud = <any> 'cloud',
        Cross = <any> 'cross',
        Can = <any> 'can',
        RightArrow = <any> 'right_arrow',
        LeftArrow = <any> 'left_arrow',
        LeftRightArrow = <any> 'left_right_arrow',
        LeftBrace = <any> 'left_brace',
        RightBrace = <any> 'right_brace'
    }
}
