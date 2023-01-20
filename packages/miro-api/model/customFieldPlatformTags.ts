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
 * @internal
 * Array where each object represents a custom preview field. Preview fields are displayed on the bottom half of the app card in the compact view.
 */
export class CustomFieldPlatformTags {
  /**
   * Hex value representing the color that fills the background area of the preview field, when it\'s displayed on the app card.
   */
  'fillColor'?: string
  /**
   * The shape of the icon on the preview field.
   */
  'iconShape'?:
    | string
    | (typeof CustomFieldPlatformTags.IconShapeEnum)[keyof typeof CustomFieldPlatformTags.IconShapeEnum] =
    CustomFieldPlatformTags.IconShapeEnum.Round
  /**
   * A valid URL pointing to an image available online. The transport protocol must be HTTPS. Possible image file formats: JPG/JPEG, PNG, SVG.
   */
  'iconUrl'?: string
  /**
   * Hex value representing the color of the text string assigned to `value`.
   */
  'textColor'?: string
  /**
   * A short text displayed in a tooltip when clicking or hovering over the preview field.
   */
  'tooltip'?: string
  /**
   * The actual data value of the custom field. It can be any type of information that you want to convey.
   */
  'value'?: string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'fillColor',
      baseName: 'fillColor',
      type: 'string',
    },
    {
      name: 'iconShape',
      baseName: 'iconShape',
      type: 'CustomFieldPlatformTags.IconShapeEnum',
    },
    {
      name: 'iconUrl',
      baseName: 'iconUrl',
      type: 'string',
    },
    {
      name: 'textColor',
      baseName: 'textColor',
      type: 'string',
    },
    {
      name: 'tooltip',
      baseName: 'tooltip',
      type: 'string',
    },
    {
      name: 'value',
      baseName: 'value',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return CustomFieldPlatformTags.attributeTypeMap
  }
}

export namespace CustomFieldPlatformTags {
  export const IconShapeEnum = {
    Round: 'round',
    Square: 'square',
  } as const
}
