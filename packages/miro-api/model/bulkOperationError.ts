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

import {BulkOperationErrorContext} from './bulkOperationErrorContext'

/**
 * @internal
 * Error information with details about operation failure
 */
export class BulkOperationError {
  /**
   * Type of the error
   */
  'type'?: string
  /**
   * Code of the error
   */
  'code'?: string
  /**
   * Description of the error
   */
  'message': string
  'context'?: BulkOperationErrorContext
  /**
   * Status code of the error
   */
  'status'?: number

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
    },
    {
      name: 'code',
      baseName: 'code',
      type: 'string',
    },
    {
      name: 'message',
      baseName: 'message',
      type: 'string',
    },
    {
      name: 'context',
      baseName: 'context',
      type: 'BulkOperationErrorContext',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'number',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return BulkOperationError.attributeTypeMap
  }
}
