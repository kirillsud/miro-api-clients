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
* Contains information about the style of a text item, such as the fill color or font family. For more information on the JSON properties, see [Style](https://developers.miro.com/reference/style).
*/
export class TextStyle {
    /**
    * Hex value representing the color for the text within the text item. Default: `#1a1a1a`
    */
    'color'?: string = '#1a1a1a';
    /**
    * Background color of the text item. Default: `#fff9b1` (light yellow)
    */
    'fillColor'?: string;
    /**
    * Opacity level of the background color. Possible values: any number between `0` and `1`, where:  `0`: the background color is completely transparent or invisible  `1`: the background color is completely opaque or solid Default: `1.0` (solid color) 
    */
    'fillOpacity'?: string = '1.0';
    /**
    * Font type for the text in the text item. Possible values: `arial`, `abril_fatface`, `bangers`, `eb_garamond`, `georgia`, `graduate`, `gravitas_one`, `fredoka_one`, `nixie_one`, `open_sans`, `permanent_marker`, `pt_sans`, `pt_sans_narrow`, `pt_serif`, `rammetto_one`, `roboto`, `roboto_condensed`, `roboto_slab`, `caveat`, `times_new_roman`, `titan_one`, `lemon_tuesday`, `roboto_mono`, `noto_sans`, `plex_sans`, `plex_serif`, `plex_mono`, `spoof`, `tiempos_text`
    */
    'fontFamily'?: TextStyle.FontFamilyEnum = TextStyle.FontFamilyEnum.Arial;
    /**
    * Font size, in dp.
    */
    'fontSize'?: string = '14';
    /**
    * Horizontal alignment for the item\'s content. Possible values: `left`, `right`, `center`
    */
    'textAlign'?: TextStyle.TextAlignEnum = TextStyle.TextAlignEnum.Center;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "fillColor",
            "baseName": "fillColor",
            "type": "string"
        },
        {
            "name": "fillOpacity",
            "baseName": "fillOpacity",
            "type": "string"
        },
        {
            "name": "fontFamily",
            "baseName": "fontFamily",
            "type": "TextStyle.FontFamilyEnum"
        },
        {
            "name": "fontSize",
            "baseName": "fontSize",
            "type": "string"
        },
        {
            "name": "textAlign",
            "baseName": "textAlign",
            "type": "TextStyle.TextAlignEnum"
        }    ];

    static getAttributeTypeMap() {
        return TextStyle.attributeTypeMap;
    }
}

export namespace TextStyle {
    export enum FontFamilyEnum {
        Arial = <any> 'arial',
        AbrilFatface = <any> 'abril_fatface',
        Bangers = <any> 'bangers',
        EbGaramond = <any> 'eb_garamond',
        Georgia = <any> 'georgia',
        Graduate = <any> 'graduate',
        GravitasOne = <any> 'gravitas_one',
        FredokaOne = <any> 'fredoka_one',
        NixieOne = <any> 'nixie_one',
        OpenSans = <any> 'open_sans',
        PermanentMarker = <any> 'permanent_marker',
        PtSans = <any> 'pt_sans',
        PtSansNarrow = <any> 'pt_sans_narrow',
        PtSerif = <any> 'pt_serif',
        RammettoOne = <any> 'rammetto_one',
        Roboto = <any> 'roboto',
        RobotoCondensed = <any> 'roboto_condensed',
        RobotoSlab = <any> 'roboto_slab',
        Caveat = <any> 'caveat',
        TimesNewRoman = <any> 'times_new_roman',
        TitanOne = <any> 'titan_one',
        LemonTuesday = <any> 'lemon_tuesday',
        RobotoMono = <any> 'roboto_mono',
        NotoSans = <any> 'noto_sans',
        PlexSans = <any> 'plex_sans',
        PlexSerif = <any> 'plex_serif',
        PlexMono = <any> 'plex_mono',
        Spoof = <any> 'spoof',
        TiemposText = <any> 'tiempos_text'
    }
    export enum TextAlignEnum {
        Left = <any> 'left',
        Right = <any> 'right',
        Center = <any> 'center'
    }
}
