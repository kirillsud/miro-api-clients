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
* Team invitation settings
*/
export class TeamInvitationSettings {
    /**
    *  * \"allowed\": Allow non-team collaborators for team * \"not_allowed\": Not Allow non-team collaborators for team 
    */
    'inviteExternalUsers'?: TeamInvitationSettings.InviteExternalUsersEnum;
    /**
    *  * \"only_org_admins\": Company admins only can invite * \"admins\":          Company admins and team admins can invite * \"all_members\":     All team members can invite 
    */
    'whoCanInvite'?: TeamInvitationSettings.WhoCanInviteEnum;

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "inviteExternalUsers",
            "baseName": "inviteExternalUsers",
            "type": "TeamInvitationSettings.InviteExternalUsersEnum"
        },
        {
            "name": "whoCanInvite",
            "baseName": "whoCanInvite",
            "type": "TeamInvitationSettings.WhoCanInviteEnum"
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return TeamInvitationSettings.attributeTypeMap;
    }
}

export namespace TeamInvitationSettings {
    export enum InviteExternalUsersEnum {
        Allowed = <any> 'allowed',
        NotAllowed = <any> 'not_allowed'
    }
    export enum WhoCanInviteEnum {
        OnlyOrgAdmins = <any> 'only_org_admins',
        Admins = <any> 'admins',
        AllMembers = <any> 'all_members'
    }
}
