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
* For information about the JSON properties, see [Style](https://developers.miro.com/reference/style).
*/
export class ShapeStyle {
    /**
    * Defines the color of the border of the shape. Default: `#1a1a1a` (dark gray).
    */
    'borderColor'?: string;
    /**
    * Defines the opacity level of the shape border. Possible values: any number between `0.0` and `1.0`, where: `0.0`: the background color is completely transparent or invisible `1.0`: the background color is completely opaque or solid Default: `1.0` (solid color).
    */
    'borderOpacity'?: string;
    /**
    * Defines the style used to represent the border of the shape. Default: `normal`. Possible values: `normal`, `dotted`, `dashed`
    */
    'borderStyle'?: ShapeStyle.BorderStyleEnum;
    /**
    * Defines the thickness of the shape border, in dp. Default: `2.0`.
    */
    'borderWidth'?: string;
    /**
    * Hex value representing the color for the text within the shape item. Default: `#1a1a1a`.
    */
    'color'?: string;
    /**
    * Fill color for the shape. Hex values: `#f5f6f8` `#d5f692` `#d0e17a` `#93d275` `#67c6c0` `#23bfe7` `#a6ccf5` `#7b92ff` `#fff9b1` `#f5d128` `#ff9d48` `#f16c7f` `#ea94bb` `#ffcee0` `#b384bb` `#000000` Default: #ffffff.
    */
    'fillColor'?: string;
    /**
    * Opacity level of the fill color. Possible values: any number between `0` and `1`, where: `0.0`: the background color is completely transparent or invisible `1.0`: the background color is completely opaque or solid Default: `1.0` if `fillColor` provided, `0.0` if no `fillColor` provided. 
    */
    'fillOpacity'?: string;
    /**
    * Defines the font type for the text in the shape item. Default: `arial`. Possible values: `arial`, `abril_fatface`, `bangers`, `eb_garamond`, `georgia`, `graduate`, `gravitas_one`, `fredoka_one`, `nixie_one`, `open_sans`, `permanent_marker`, `pt_sans`, `pt_sans_narrow`, `pt_serif`, `rammetto_one`, `roboto`, `roboto_condensed`, `roboto_slab`, `caveat`, `times_new_roman`, `titan_one`, `lemon_tuesday`, `roboto_mono`, `noto_sans`, `plex_sans`, `plex_serif`, `plex_mono`, `spoof`, `tiempos_text`
    */
    'fontFamily'?: ShapeStyle.FontFamilyEnum;
    /**
    * Defines the font size, in dp, for the text on the shape. Default: `14`.
    */
    'fontSize'?: string;
    /**
    * Defines how the sticky note text is horizontally aligned. Default: `center`. Possible values: `left`, `right`, `center`
    */
    'textAlign'?: ShapeStyle.TextAlignEnum;
    /**
    * Defines how the sticky note text is vertically aligned. Default: `top`. Possible values: `top`, `middle`, `bottom`
    */
    'textAlignVertical'?: ShapeStyle.TextAlignVerticalEnum;

    /** @ignore */
    static discriminator: string | undefined = undefined;

    /** @ignore */
    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "borderColor",
            "baseName": "borderColor",
            "type": "string"
        },
        {
            "name": "borderOpacity",
            "baseName": "borderOpacity",
            "type": "string"
        },
        {
            "name": "borderStyle",
            "baseName": "borderStyle",
            "type": "ShapeStyle.BorderStyleEnum"
        },
        {
            "name": "borderWidth",
            "baseName": "borderWidth",
            "type": "string"
        },
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
            "type": "ShapeStyle.FontFamilyEnum"
        },
        {
            "name": "fontSize",
            "baseName": "fontSize",
            "type": "string"
        },
        {
            "name": "textAlign",
            "baseName": "textAlign",
            "type": "ShapeStyle.TextAlignEnum"
        },
        {
            "name": "textAlignVertical",
            "baseName": "textAlignVertical",
            "type": "ShapeStyle.TextAlignVerticalEnum"
        }    ];

    /** @ignore */
    static getAttributeTypeMap() {
        return ShapeStyle.attributeTypeMap;
    }
}

export namespace ShapeStyle {
    export enum BorderStyleEnum {
        Normal = <any> 'normal',
        Dotted = <any> 'dotted',
        Dashed = <any> 'dashed'
    }
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
    export enum TextAlignVerticalEnum {
        Top = <any> 'top',
        Middle = <any> 'middle',
        Bottom = <any> 'bottom'
    }
}
