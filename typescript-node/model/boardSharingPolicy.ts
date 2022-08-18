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
* Defines the public-level, organization-level, and team-level access for the board. The access level that a user gets depends on the highest level of access that results from considering the public-level, team-level, organization-level, and direct sharing access. For more information, see [Sharing policy](https://developers.miro.com/reference/rest-api-policy-data-model#sharing-policy).
*/
export class BoardSharingPolicy {
    /**
    * Defines the public-level access to the board. Possible values: `private`, `view`, `edit`, `comment`
    */
    'access'?: BoardSharingPolicy.AccessEnum;
    /**
    * Defines the user role when inviting a user via the invite to team and board link. For Enterprise users, the `inviteToAccountAndBoardLinkAccess` parameter is always set to `no_access`. Possible values: `viewer`, `commenter`, `editor`, `coowner`, `owner`, `guest`, `no_access`
    */
    'inviteToAccountAndBoardLinkAccess'?: BoardSharingPolicy.InviteToAccountAndBoardLinkAccessEnum = BoardSharingPolicy.InviteToAccountAndBoardLinkAccessEnum.NoAccess;
    /**
    * Defines the organization-level access to the board. If the board is created for a team that does not belong to an organization, the `organizationAccess` parameter is always set to the default value. Possible values: `private`, `view`, `comment`, `edit`
    */
    'organizationAccess'?: BoardSharingPolicy.OrganizationAccessEnum = BoardSharingPolicy.OrganizationAccessEnum.Private;
    /**
    * Defines the team-level access to the board. Possible values: `private`, `view`, `comment`, `edit`
    */
    'teamAccess'?: BoardSharingPolicy.TeamAccessEnum;

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "access",
            "baseName": "access",
            "type": "BoardSharingPolicy.AccessEnum"
        },
        {
            "name": "inviteToAccountAndBoardLinkAccess",
            "baseName": "inviteToAccountAndBoardLinkAccess",
            "type": "BoardSharingPolicy.InviteToAccountAndBoardLinkAccessEnum"
        },
        {
            "name": "organizationAccess",
            "baseName": "organizationAccess",
            "type": "BoardSharingPolicy.OrganizationAccessEnum"
        },
        {
            "name": "teamAccess",
            "baseName": "teamAccess",
            "type": "BoardSharingPolicy.TeamAccessEnum"
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return BoardSharingPolicy.attributeTypeMap;
    }
}

export namespace BoardSharingPolicy {
    export enum AccessEnum {
        Private = <any> 'private',
        View = <any> 'view',
        Edit = <any> 'edit',
        Comment = <any> 'comment'
    }
    export enum InviteToAccountAndBoardLinkAccessEnum {
        Viewer = <any> 'viewer',
        Commenter = <any> 'commenter',
        Editor = <any> 'editor',
        Coowner = <any> 'coowner',
        Owner = <any> 'owner',
        Guest = <any> 'guest',
        NoAccess = <any> 'no_access'
    }
    export enum OrganizationAccessEnum {
        Private = <any> 'private',
        View = <any> 'view',
        Comment = <any> 'comment',
        Edit = <any> 'edit'
    }
    export enum TeamAccessEnum {
        Private = <any> 'private',
        View = <any> 'view',
        Comment = <any> 'comment',
        Edit = <any> 'edit'
    }
}
