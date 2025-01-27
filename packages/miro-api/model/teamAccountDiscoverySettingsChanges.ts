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
 * Team account discovery settings
 */
export class TeamAccountDiscoverySettingsChanges {
  /**
   *  * \"hidden\":  Only invited users can see and access the team. * \"request\": Members of organization can find and request to join with admin approval. * \"join\":    Members of organization can find and join.
   */
  'accountDiscovery'?:
    | string
    | (typeof TeamAccountDiscoverySettingsChanges.AccountDiscoveryEnum)[keyof typeof TeamAccountDiscoverySettingsChanges.AccountDiscoveryEnum]

  /** @ignore */
  static discriminator: string | undefined = undefined

  /** @ignore */
  static attributeTypeMap: Array<{name: string; baseName: string; type: string}> = [
    {
      name: 'accountDiscovery',
      baseName: 'accountDiscovery',
      type: 'TeamAccountDiscoverySettingsChanges.AccountDiscoveryEnum',
    },
  ]

  /** @ignore */
  static getAttributeTypeMap() {
    return TeamAccountDiscoverySettingsChanges.attributeTypeMap
  }
}

export namespace TeamAccountDiscoverySettingsChanges {
  export const AccountDiscoveryEnum = {
    Hidden: 'hidden',
    Request: 'request',
    Join: 'join',
  } as const
}
