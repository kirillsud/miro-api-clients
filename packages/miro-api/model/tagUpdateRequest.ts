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

export class TagUpdateRequest {
  /**
   * [Fill color for the tag](https://developers.miro.com/reference/rest-api-tag-data-model)
   */
  'fillColor'?: string | (typeof TagUpdateRequest.FillColorEnum)[keyof typeof TagUpdateRequest.FillColorEnum] =
    TagUpdateRequest.FillColorEnum.Red
  /**
   * [Text of the tag](https://developers.miro.com/reference/rest-api-tag-data-model)
   */
  'title'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'fillColor',
      baseName: 'fillColor',
      type: 'TagUpdateRequest.FillColorEnum',
    },
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TagUpdateRequest.attributeTypeMap
  }
}

export namespace TagUpdateRequest {
  export const FillColorEnum = {
    Red: 'red',
    LightGreen: 'light_green',
    Cyan: 'cyan',
    Yellow: 'yellow',
    Magenta: 'magenta',
    Green: 'green',
    Blue: 'blue',
    Gray: 'gray',
    Violet: 'violet',
    DarkGreen: 'dark_green',
    DarkBlue: 'dark_blue',
    Black: 'black',
  } as const
}
