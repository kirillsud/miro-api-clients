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

export class BoardExportJobId {
  /**
   * Unique identifier of the board export job.
   */
  'jobId': string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'jobId',
      baseName: 'jobId',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return BoardExportJobId.attributeTypeMap
  }
}
