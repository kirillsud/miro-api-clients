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

export class BoardExportJobStatus {
  /**
   * Indicates the current state of the board export job. Possible values:  `CREATED`: the job has been created but not yet started. Retry the status call after some time. `IN_PROGRESS`: the job is in progress, and the results are not ready yet. Retry the status call after some time. `FINISHED`: the job is complete. You can now get results for the board export job.
   */
  'jobStatus': string

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'jobStatus',
      baseName: 'jobStatus',
      type: 'string',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return BoardExportJobStatus.attributeTypeMap
  }
}
