class fe {
  /**
   * @constructor
   * @param {Properties} property
   * @param {Normal} normal
   * @param {string} [space]
   */
  constructor(n, t, r) {
    this.property = n, this.normal = t, r && (this.space = r);
  }
}
fe.prototype.property = {};
fe.prototype.normal = {};
fe.prototype.space = null;
function On(e, n) {
  const t = {}, r = {};
  let l = -1;
  for (; ++l < e.length; )
    Object.assign(t, e[l].property), Object.assign(r, e[l].normal);
  return new fe(t, r, n);
}
function ce(e) {
  return e.toLowerCase();
}
class F {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   */
  constructor(n, t) {
    this.property = n, this.attribute = t;
  }
}
F.prototype.space = null;
F.prototype.boolean = !1;
F.prototype.booleanish = !1;
F.prototype.overloadedBoolean = !1;
F.prototype.number = !1;
F.prototype.commaSeparated = !1;
F.prototype.spaceSeparated = !1;
F.prototype.commaOrSpaceSeparated = !1;
F.prototype.mustUseProperty = !1;
F.prototype.defined = !1;
let gt = 0;
const g = q(), C = q(), Mn = q(), a = q(), S = q(), te = q(), L = q();
function q() {
  return 2 ** ++gt;
}
const Re = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: g,
  booleanish: C,
  commaOrSpaceSeparated: L,
  commaSeparated: te,
  number: a,
  overloadedBoolean: Mn,
  spaceSeparated: S
}, Symbol.toStringTag, { value: "Module" })), Oe = Object.keys(Re);
class Xe extends F {
  /**
   * @constructor
   * @param {string} property
   * @param {string} attribute
   * @param {number|null} [mask]
   * @param {string} [space]
   */
  constructor(n, t, r, l) {
    let i = -1;
    if (super(n, t), cn(this, "space", l), typeof r == "number")
      for (; ++i < Oe.length; ) {
        const o = Oe[i];
        cn(this, Oe[i], (r & Re[o]) === Re[o]);
      }
  }
}
Xe.prototype.defined = !0;
function cn(e, n, t) {
  t && (e[n] = t);
}
const mt = {}.hasOwnProperty;
function re(e) {
  const n = {}, t = {};
  let r;
  for (r in e.properties)
    if (mt.call(e.properties, r)) {
      const l = e.properties[r], i = new Xe(
        r,
        e.transform(e.attributes || {}, r),
        l,
        e.space
      );
      e.mustUseProperty && e.mustUseProperty.includes(r) && (i.mustUseProperty = !0), n[r] = i, t[ce(r)] = r, t[ce(i.attribute)] = r;
    }
  return new fe(n, t, e.space);
}
const In = re({
  space: "xlink",
  transform(e, n) {
    return "xlink:" + n.slice(5).toLowerCase();
  },
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
}), Ln = re({
  space: "xml",
  transform(e, n) {
    return "xml:" + n.slice(3).toLowerCase();
  },
  properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
});
function Fn(e, n) {
  return n in e ? e[n] : n;
}
function Dn(e, n) {
  return Fn(e, n.toLowerCase());
}
const Rn = re({
  space: "xmlns",
  attributes: { xmlnsxlink: "xmlns:xlink" },
  transform: Dn,
  properties: { xmlns: null, xmlnsXLink: null }
}), Tn = re({
  transform(e, n) {
    return n === "role" ? n : "aria-" + n.slice(4).toLowerCase();
  },
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: C,
    ariaAutoComplete: null,
    ariaBusy: C,
    ariaChecked: C,
    ariaColCount: a,
    ariaColIndex: a,
    ariaColSpan: a,
    ariaControls: S,
    ariaCurrent: null,
    ariaDescribedBy: S,
    ariaDetails: null,
    ariaDisabled: C,
    ariaDropEffect: S,
    ariaErrorMessage: null,
    ariaExpanded: C,
    ariaFlowTo: S,
    ariaGrabbed: C,
    ariaHasPopup: null,
    ariaHidden: C,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: S,
    ariaLevel: a,
    ariaLive: null,
    ariaModal: C,
    ariaMultiLine: C,
    ariaMultiSelectable: C,
    ariaOrientation: null,
    ariaOwns: S,
    ariaPlaceholder: null,
    ariaPosInSet: a,
    ariaPressed: C,
    ariaReadOnly: C,
    ariaRelevant: null,
    ariaRequired: C,
    ariaRoleDescription: S,
    ariaRowCount: a,
    ariaRowIndex: a,
    ariaRowSpan: a,
    ariaSelected: C,
    ariaSetSize: a,
    ariaSort: null,
    ariaValueMax: a,
    ariaValueMin: a,
    ariaValueNow: a,
    ariaValueText: null,
    role: null
  }
}), yt = re({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: Dn,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: te,
    acceptCharset: S,
    accessKey: S,
    action: null,
    allow: null,
    allowFullScreen: g,
    allowPaymentRequest: g,
    allowUserMedia: g,
    alt: null,
    as: null,
    async: g,
    autoCapitalize: null,
    autoComplete: S,
    autoFocus: g,
    autoPlay: g,
    blocking: S,
    capture: null,
    charSet: null,
    checked: g,
    cite: null,
    className: S,
    cols: a,
    colSpan: null,
    content: null,
    contentEditable: C,
    controls: g,
    controlsList: S,
    coords: a | te,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: g,
    defer: g,
    dir: null,
    dirName: null,
    disabled: g,
    download: Mn,
    draggable: C,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: g,
    formTarget: null,
    headers: S,
    height: a,
    hidden: g,
    high: a,
    href: null,
    hrefLang: null,
    htmlFor: S,
    httpEquiv: S,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: g,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: g,
    itemId: null,
    itemProp: S,
    itemRef: S,
    itemScope: g,
    itemType: S,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: g,
    low: a,
    manifest: null,
    max: null,
    maxLength: a,
    media: null,
    method: null,
    min: null,
    minLength: a,
    multiple: g,
    muted: g,
    name: null,
    nonce: null,
    noModule: g,
    noValidate: g,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: g,
    optimum: a,
    pattern: null,
    ping: S,
    placeholder: null,
    playsInline: g,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: g,
    referrerPolicy: null,
    rel: S,
    required: g,
    reversed: g,
    rows: a,
    rowSpan: a,
    sandbox: S,
    scope: null,
    scoped: g,
    seamless: g,
    selected: g,
    shadowRootClonable: g,
    shadowRootDelegatesFocus: g,
    shadowRootMode: null,
    shape: null,
    size: a,
    sizes: null,
    slot: null,
    span: a,
    spellCheck: C,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: a,
    step: null,
    style: null,
    tabIndex: a,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: g,
    useMap: null,
    value: C,
    width: a,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: S,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: a,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: a,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: g,
    // Lists. Use CSS to reduce space between items instead
    declare: g,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: a,
    // `<img>` and `<object>`
    leftMargin: a,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: a,
    // `<body>`
    marginWidth: a,
    // `<body>`
    noResize: g,
    // `<frame>`
    noHref: g,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: g,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: g,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: a,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: C,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: a,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: a,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: g,
    disableRemotePlayback: g,
    prefix: null,
    property: null,
    results: a,
    security: null,
    unselectable: null
  }
}), vt = re({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: Fn,
  properties: {
    about: L,
    accentHeight: a,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: a,
    amplitude: a,
    arabicForm: null,
    ascent: a,
    attributeName: null,
    attributeType: null,
    azimuth: a,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: a,
    by: null,
    calcMode: null,
    capHeight: a,
    className: S,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: a,
    diffuseConstant: a,
    direction: null,
    display: null,
    dur: null,
    divisor: a,
    dominantBaseline: null,
    download: g,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: a,
    enableBackground: null,
    end: null,
    event: null,
    exponent: a,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: a,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: te,
    g2: te,
    glyphName: te,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: a,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: a,
    horizOriginX: a,
    horizOriginY: a,
    id: null,
    ideographic: a,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: a,
    k: a,
    k1: a,
    k2: a,
    k3: a,
    k4: a,
    kernelMatrix: L,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: a,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: a,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: a,
    overlineThickness: a,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: a,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: S,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: a,
    pointsAtY: a,
    pointsAtZ: a,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: L,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: L,
    rev: L,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: L,
    requiredFeatures: L,
    requiredFonts: L,
    requiredFormats: L,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: a,
    specularExponent: a,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: a,
    strikethroughThickness: a,
    string: null,
    stroke: null,
    strokeDashArray: L,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: a,
    strokeOpacity: a,
    strokeWidth: null,
    style: null,
    surfaceScale: a,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: L,
    tabIndex: a,
    tableValues: null,
    target: null,
    targetX: a,
    targetY: a,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: L,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: a,
    underlineThickness: a,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: a,
    values: null,
    vAlphabetic: a,
    vMathematical: a,
    vectorEffect: null,
    vHanging: a,
    vIdeographic: a,
    version: null,
    vertAdvY: a,
    vertOriginX: a,
    vertOriginY: a,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: a,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
}), bt = /^data[-\w.:]+$/i, fn = /-[a-z]/g, wt = /[A-Z]/g;
function jn(e, n) {
  const t = ce(n);
  let r = n, l = F;
  if (t in e.normal)
    return e.property[e.normal[t]];
  if (t.length > 4 && t.slice(0, 4) === "data" && bt.test(n)) {
    if (n.charAt(4) === "-") {
      const i = n.slice(5).replace(fn, xt);
      r = "data" + i.charAt(0).toUpperCase() + i.slice(1);
    } else {
      const i = n.slice(4);
      if (!fn.test(i)) {
        let o = i.replace(wt, St);
        o.charAt(0) !== "-" && (o = "-" + o), n = "data" + o;
      }
    }
    l = Xe;
  }
  return new l(r, n);
}
function St(e) {
  return "-" + e.toLowerCase();
}
function xt(e) {
  return e.charAt(1).toUpperCase();
}
const Un = On([Ln, In, Rn, Tn, yt], "html"), Ze = On([Ln, In, Rn, Tn, vt], "svg");
var be = {}, Te = {};
function Ct(e, n) {
  for (var t = n, r = 0; r < e.length; r++) {
    var l = r === e.length - 1, i = e.charAt(r), o = t[i] || (t[i] = { chars: {} });
    l && (o.self = e), t = o.chars;
  }
}
function dn(e) {
  if (e.length === 0)
    return be;
  for (var n = {}, t = 0, r = e; t < r.length; t++) {
    var l = r[t];
    Ct(l, n);
  }
  return n;
}
function kt(e) {
  if (e.length === 0)
    return Te;
  for (var n = {}, t = 0, r = e; t < r.length; t++) {
    var l = r[t];
    n[l] = !0;
  }
  return n;
}
var ve = {}, pn = {
  type: "String",
  optional: !0
};
function Et(e) {
  var n = {
    type: "NoArgument",
    optional: !1
  };
  function t(o) {
    if (n.type && n.type !== o && n.type !== "NoArgument")
      throw new Error('Conflicting pseudo-class argument type: "'.concat(n.type, '" vs "').concat(o, '".'));
    n.type = o;
  }
  for (var r = 0, l = e; r < l.length; r++) {
    var i = l[r];
    i === "NoArgument" && (n.optional = !0), i === "Formula" && t("Formula"), i === "FormulaOfSelector" && (t("Formula"), n.ofSelector = !0), i === "String" && t("String"), i === "Selector" && t("Selector");
  }
  return n;
}
function Nt(e) {
  for (var n = {}, t = 0, r = Object.keys(e); t < r.length; t++) {
    var l = r[t], i = e[l];
    if (i)
      for (var o = 0, s = i; o < s.length; o++) {
        var c = s[o];
        (n[c] || (n[c] = [])).push(l);
      }
  }
  return n;
}
function hn(e) {
  for (var n = Nt(e), t = {}, r = 0, l = Object.keys(n); r < l.length; r++) {
    var i = l[r], o = n[i];
    o && (t[i] = Et(o));
  }
  return t;
}
var Se = function() {
  return Se = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
    }
    return e;
  }, Se.apply(this, arguments);
}, At = {}, je = { wildcard: !0 };
function Pt(e) {
  return e ? typeof e == "boolean" ? je : e : At;
}
function Ot(e, n) {
  return function(t, r) {
    return n(e(t), e(r));
  };
}
function Mt(e) {
  return function(n, t) {
    var r = e(n, t);
    if (!r)
      throw new Error("Syntax definition cannot be null or undefined.");
    return r;
  };
}
function gn(e, n) {
  return function(t, r) {
    return r === !0 ? e : n(t === !0 ? e : t, r);
  };
}
function ne(e) {
  return function(n, t) {
    if (!t || !n)
      return t;
    if (typeof t != "object" || t === null)
      throw new Error("Unexpected syntax definition extension type: ".concat(t, "."));
    for (var r = Se({}, n), l = 0, i = Object.entries(t); l < i.length; l++) {
      var o = i[l], s = o[0], c = o[1], f = e[s];
      r[s] = f(n[s], c);
    }
    return r;
  };
}
function z(e, n) {
  return n !== void 0 ? n : e;
}
function Me(e, n) {
  return n ? e ? e.concat(n) : n : e;
}
function mn(e, n) {
  if (!n)
    return e;
  if (!e)
    return n;
  for (var t = Se({}, e), r = 0, l = Object.entries(n); r < l.length; r++) {
    var i = l[r], o = i[0], s = i[1];
    if (!s) {
      delete t[o];
      continue;
    }
    var c = e[o];
    if (!c) {
      t[o] = s;
      continue;
    }
    t[o] = c.concat(s);
  }
  return t;
}
var de = Mt(ne({
  baseSyntax: z,
  tag: gn(je, ne({
    wildcard: z
  })),
  ids: z,
  classNames: z,
  namespace: gn(je, ne({
    wildcard: z
  })),
  combinators: Me,
  attributes: ne({
    operators: Me,
    caseSensitivityModifiers: Me,
    unknownCaseSensitivityModifiers: z
  }),
  pseudoClasses: ne({
    unknown: z,
    definitions: mn
  }),
  pseudoElements: ne({
    unknown: z,
    notation: z,
    definitions: Ot(function(e) {
      return Array.isArray(e) ? { NoArgument: e } : e;
    }, mn)
  })
})), _n = {
  tag: {},
  ids: !0,
  classNames: !0,
  combinators: [],
  pseudoElements: {
    unknown: "reject",
    notation: "singleColon",
    definitions: ["first-letter", "first-line"]
  },
  pseudoClasses: {
    unknown: "reject",
    definitions: {
      NoArgument: ["link", "visited", "active"]
    }
  }
}, Bn = de(_n, {
  tag: { wildcard: !0 },
  combinators: [">", "+"],
  attributes: {
    unknownCaseSensitivityModifiers: "reject",
    operators: ["=", "~=", "|="]
  },
  pseudoElements: {
    definitions: ["before", "after"]
  },
  pseudoClasses: {
    unknown: "reject",
    definitions: {
      NoArgument: ["hover", "focus", "first-child"],
      String: ["lang"]
    }
  }
}), Ue = de(Bn, {
  namespace: {
    wildcard: !0
  },
  combinators: ["~"],
  attributes: {
    operators: ["^=", "$=", "*="]
  },
  pseudoElements: {
    notation: "both"
  },
  pseudoClasses: {
    definitions: {
      NoArgument: [
        "root",
        "last-child",
        "first-of-type",
        "last-of-type",
        "only-child",
        "only-of-type",
        "empty",
        "target",
        "enabled",
        "disabled",
        "checked",
        "indeterminate"
      ],
      Formula: ["nth-child", "nth-last-child", "nth-of-type", "nth-last-of-type"],
      Selector: ["not"]
    }
  }
}), _e = de(Ue, {
  combinators: ["||"],
  attributes: {
    caseSensitivityModifiers: ["i", "I", "s", "S"]
  },
  pseudoClasses: {
    definitions: {
      NoArgument: [
        "any-link",
        "local-link",
        "target-within",
        "scope",
        "current",
        "past",
        "future",
        "focus-within",
        "focus-visible",
        "read-write",
        "read-only",
        "placeholder-shown",
        "default",
        "valid",
        "invalid",
        "in-range",
        "out-of-range",
        "required",
        "optional",
        "blank",
        "user-invalid"
      ],
      Formula: ["nth-col", "nth-last-col"],
      String: ["dir"],
      FormulaOfSelector: ["nth-child", "nth-last-child"],
      Selector: ["current", "is", "where", "has"]
    }
  }
}), It = de(_e, {
  pseudoElements: {
    unknown: "accept"
  },
  pseudoClasses: {
    unknown: "accept"
  },
  attributes: {
    unknownCaseSensitivityModifiers: "accept"
  }
}), yn = {
  css1: _n,
  css2: Bn,
  css3: Ue,
  "selectors-3": Ue,
  "selectors-4": _e,
  latest: _e,
  progressive: It
};
function ae(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e === "-" || e === "_" || e === "\\" || e >= " ";
}
function vn(e) {
  return e >= "a" && e <= "z" || e >= "A" && e <= "Z" || e >= "0" && e <= "9" || e === "-" || e === "_" || e >= " ";
}
function ue(e) {
  return e >= "a" && e <= "f" || e >= "A" && e <= "F" || e >= "0" && e <= "9";
}
var Lt = {
  " ": !0,
  "	": !0,
  "\n": !0,
  "\r": !0,
  "\f": !0
}, Ft = {
  '"': !0,
  "'": !0
}, Ie = {
  0: !0,
  1: !0,
  2: !0,
  3: !0,
  4: !0,
  5: !0,
  6: !0,
  7: !0,
  8: !0,
  9: !0
}, Dt = 6, Le = "css-selector-parser parse error: ";
function Rt(e) {
  e === void 0 && (e = {});
  var n = e.syntax, t = n === void 0 ? "latest" : n, r = e.substitutes, l = e.strict, i = l === void 0 ? !0 : l, o = typeof t == "object" ? t : yn[t];
  o.baseSyntax && (o = de(yn[o.baseSyntax], o));
  var s = o.tag ? [!0, !!Pt(o.tag).wildcard] : [!1, !1], c = s[0], f = s[1], b = !!o.ids, E = !!o.classNames, M = !!o.namespace, D = o.namespace && (o.namespace === !0 || o.namespace.wildcard === !0);
  if (M && !c)
    throw new Error("".concat(Le, "Namespaces cannot be enabled while tags are disabled."));
  var H = !!r, T = o.combinators ? dn(o.combinators) : be, X = o.attributes ? [
    !0,
    o.attributes.operators ? dn(o.attributes.operators) : be,
    o.attributes.caseSensitivityModifiers ? kt(o.attributes.caseSensitivityModifiers) : Te,
    o.attributes.unknownCaseSensitivityModifiers === "accept"
  ] : [!1, be, Te, !1], Z = X[0], ke = X[1], Qe = X[2], Je = X[3], rt = Je || Object.keys(Qe).length > 0, Ee = o.pseudoClasses ? [
    !0,
    o.pseudoClasses.definitions ? hn(o.pseudoClasses.definitions) : ve,
    o.pseudoClasses.unknown === "accept"
  ] : [!1, ve, !1], lt = Ee[0], ot = Ee[1], it = Ee[2], le = o.pseudoElements ? [
    !0,
    o.pseudoElements.notation === "singleColon" || o.pseudoElements.notation === "both",
    !o.pseudoElements.notation || o.pseudoElements.notation === "doubleColon" || o.pseudoElements.notation === "both",
    o.pseudoElements.definitions ? hn(Array.isArray(o.pseudoElements.definitions) ? { NoArgument: o.pseudoElements.definitions } : o.pseudoElements.definitions) : ve,
    o.pseudoElements.unknown === "accept"
  ] : [!1, !1, !1, ve, !1], qe = le[0], at = le[1], ut = le[2], Ne = le[3], en = le[4], j = "", _ = j.length, x = 0, m = "", h = function(u) {
    return m === u;
  }, he = function() {
    return h("*") || ae(m);
  }, ee = function(u) {
    x = u, m = j.charAt(x);
  }, y = function() {
    x++, m = j.charAt(x);
  }, B = function() {
    var u = m;
    return x++, m = j.charAt(x), u;
  };
  function $(u) {
    var d = Math.min(_ - 1, x), w = new Error("".concat(Le).concat(u, " Pos: ").concat(d, "."));
    throw w.position = d, w.name = "ParserError", w;
  }
  function p(u, d) {
    if (!u)
      return $(d);
  }
  var Ae = function() {
    p(x < _, "Unexpected end of input.");
  }, G = function() {
    return x >= _;
  }, oe = function(u) {
    p(x < _, 'Expected "'.concat(u, '" but end of input reached.')), p(m === u, 'Expected "'.concat(u, '" but "').concat(m, '" found.')), x++, m = j.charAt(x);
  };
  function Pe(u) {
    var d = nn(u, x);
    if (d)
      return x += d.length, m = j.charAt(x), d;
  }
  function nn(u, d) {
    var w = j.charAt(d), v = u[w];
    if (v) {
      var O = nn(v.chars, d + 1);
      if (O)
        return O;
      if (v.self)
        return v.self;
    }
  }
  function ge() {
    for (var u = B(), d = 1; ue(m) && d < Dt; )
      u += B(), d++;
    return ft(), String.fromCharCode(parseInt(u, 16));
  }
  function st(u) {
    var d = "";
    for (oe(u); x < _; ) {
      if (h(u))
        return y(), d;
      h("\\") ? (y(), h(u) ? (d += u, y()) : m === `
` || m === "\f" ? y() : m === "\r" ? (y(), h(`
`) && y()) : ue(m) ? d += ge() : (d += m, y())) : (d += m, y());
    }
    return d;
  }
  function P() {
    if (!ae(m))
      return null;
    for (var u = ""; h("-"); )
      u += m, y();
    for (u === "-" && !vn(m) && !h("\\") && $("Identifiers cannot consist of a single hyphen."), i && u.length >= 2 && $("Identifiers cannot start with two hyphens with strict mode on."), Ie[m] && $("Identifiers cannot start with hyphens followed by digits."); x < _; )
      if (vn(m))
        u += B();
      else if (h("\\"))
        y(), Ae(), ue(m) ? u += ge() : u += B();
      else
        break;
    return u;
  }
  function ct() {
    for (var u = ""; x < _ && !h(")"); )
      if (h("\\")) {
        if (y(), G() && !i)
          return (u + "\\").trim();
        Ae(), ue(m) ? u += ge() : u += B();
      } else
        u += B();
    return u.trim();
  }
  function ft() {
    if (m === " " || m === "	" || m === "\f" || m === `
`) {
      y();
      return;
    }
    m === "\r" && y(), m === `
` && y();
  }
  function N() {
    for (; Lt[m]; )
      y();
  }
  function tn(u) {
    u === void 0 && (u = !1), N();
    for (var d = [me(u)]; h(","); )
      y(), N(), d.push(me(u));
    return {
      type: "Selector",
      rules: d
    };
  }
  function dt() {
    oe("["), N();
    var u;
    if (h("|")) {
      p(M, "Namespaces are not enabled."), y();
      var d = P();
      p(d, "Expected attribute name."), u = {
        type: "Attribute",
        name: d,
        namespace: { type: "NoNamespace" }
      };
    } else if (h("*")) {
      p(M, "Namespaces are not enabled."), p(D, "Wildcard namespace is not enabled."), y(), oe("|");
      var w = P();
      p(w, "Expected attribute name."), u = {
        type: "Attribute",
        name: w,
        namespace: { type: "WildcardNamespace" }
      };
    } else {
      var v = P();
      if (p(v, "Expected attribute name."), u = {
        type: "Attribute",
        name: v
      }, h("|")) {
        var O = x;
        if (y(), ae(m)) {
          p(M, "Namespaces are not enabled.");
          var W = P();
          p(W, "Expected attribute name."), u = {
            type: "Attribute",
            name: W,
            namespace: { type: "NamespaceName", name: v }
          };
        } else
          ee(O);
      }
    }
    if (p(u.name, "Expected attribute name."), N(), G() && !i)
      return u;
    if (h("]"))
      y();
    else {
      if (u.operator = Pe(ke), p(u.operator, "Expected a valid attribute selector operator."), N(), Ae(), Ft[m])
        u.value = {
          type: "String",
          value: st(m)
        };
      else if (H && h("$")) {
        y();
        var V = P();
        p(V, "Expected substitute name."), u.value = {
          type: "Substitution",
          name: V
        };
      } else {
        var K = P();
        p(K, "Expected attribute value."), u.value = {
          type: "String",
          value: K
        };
      }
      if (N(), G() && !i)
        return u;
      if (!h("]")) {
        var R = P();
        if (p(R, "Expected end of attribute selector."), u.caseSensitivityModifier = R, p(rt, "Attribute case sensitivity modifiers are not enabled."), p(Je || Qe[u.caseSensitivityModifier], "Unknown attribute case sensitivity modifier."), N(), G() && !i)
          return u;
      }
      oe("]");
    }
    return u;
  }
  function rn() {
    for (var u = ""; Ie[m]; )
      u += B();
    return p(u !== "", "Formula parse error."), parseInt(u);
  }
  var pt = function() {
    return h("-") || h("+") || Ie[m];
  };
  function ht() {
    if (h("e") || h("o")) {
      var u = P();
      if (u === "even")
        return N(), [2, 0];
      if (u === "odd")
        return N(), [2, 1];
    }
    var d = null, w = 1;
    if (h("-") && (y(), w = -1), pt() && (h("+") && y(), d = rn(), !h("\\") && !h("n")))
      return [0, d * w];
    d === null && (d = 1), d *= w;
    var v;
    if (h("\\") ? (y(), ue(m) ? v = ge() : v = B()) : v = B(), p(v === "n", 'Formula parse error: expected "n".'), N(), h("+") || h("-")) {
      var O = h("+") ? 1 : -1;
      return y(), N(), [d, O * rn()];
    } else
      return [d, 0];
  }
  function ln(u, d, w) {
    var v;
    if (h("(")) {
      if (y(), N(), H && h("$")) {
        y();
        var O = P();
        p(O, "Expected substitute name."), v = {
          type: "Substitution",
          name: O
        };
      } else if (w.type === "String")
        v = {
          type: "String",
          value: ct()
        }, p(v.value, "Expected ".concat(d, " argument value."));
      else if (w.type === "Selector")
        v = tn(!0);
      else if (w.type === "Formula") {
        var W = ht(), V = W[0], K = W[1];
        if (v = {
          type: "Formula",
          a: V,
          b: K
        }, w.ofSelector && (N(), h("o") || h("\\"))) {
          var R = P();
          p(R === "of", "Formula of selector parse error."), N(), v = {
            type: "FormulaOfSelector",
            a: V,
            b: K,
            selector: me()
          };
        }
      } else
        return $("Invalid ".concat(d, " signature."));
      if (N(), G() && !i)
        return v;
      oe(")");
    } else
      p(w.optional, "Argument is required for ".concat(d, ' "').concat(u, '".'));
    return v;
  }
  function ie() {
    if (h("*"))
      return p(f, "Wildcard tag name is not enabled."), y(), { type: "WildcardTag" };
    if (ae(m)) {
      p(c, "Tag names are not enabled.");
      var u = P();
      return p(u, "Expected tag name."), {
        type: "TagName",
        name: u
      };
    } else
      return $("Expected tag name.");
  }
  function on() {
    if (h("*")) {
      var u = x;
      if (y(), !h("|") || (y(), !he()))
        return ee(u), ie();
      p(M, "Namespaces are not enabled."), p(D, "Wildcard namespace is not enabled.");
      var d = ie();
      return d.namespace = { type: "WildcardNamespace" }, d;
    } else if (h("|")) {
      p(M, "Namespaces are not enabled."), y();
      var d = ie();
      return d.namespace = { type: "NoNamespace" }, d;
    } else if (ae(m)) {
      var w = P();
      if (p(w, "Expected tag name."), !h("|"))
        return p(c, "Tag names are not enabled."), {
          type: "TagName",
          name: w
        };
      var u = x;
      if (y(), !he())
        return ee(u), {
          type: "TagName",
          name: w
        };
      p(M, "Namespaces are not enabled.");
      var d = ie();
      return d.namespace = { type: "NamespaceName", name: w }, d;
    } else
      return $("Expected tag name.");
  }
  function me(u) {
    var d, w;
    u === void 0 && (u = !1);
    var v = { type: "Rule", items: [] };
    if (u) {
      var O = Pe(T);
      O && (v.combinator = O, N());
    }
    for (; x < _; )
      if (he())
        p(v.items.length === 0, "Unexpected tag/namespace start."), v.items.push(on());
      else if (h("|")) {
        var W = x;
        if (y(), he())
          p(v.items.length === 0, "Unexpected tag/namespace start."), ee(W), v.items.push(on());
        else {
          ee(W);
          break;
        }
      } else if (h(".")) {
        p(E, "Class names are not enabled."), y();
        var V = P();
        p(V, "Expected class name."), v.items.push({ type: "ClassName", name: V });
      } else if (h("#")) {
        p(b, "IDs are not enabled."), y();
        var K = P();
        p(K, "Expected ID name."), v.items.push({ type: "Id", name: K });
      } else if (h("["))
        p(Z, "Attributes are not enabled."), v.items.push(dt());
      else if (h(":")) {
        var R = !1, an = !1;
        y(), h(":") && (p(qe, "Pseudo elements are not enabled."), p(ut, "Pseudo elements double colon notation is not enabled."), R = !0, y());
        var I = P();
        if (p(R || I, "Expected pseudo-class name."), p(!R || I, "Expected pseudo-element name."), p(I, "Expected pseudo-class name."), p(!R || en || Object.prototype.hasOwnProperty.call(Ne, I), 'Unknown pseudo-element "'.concat(I, '".')), an = qe && (R || !R && at && Object.prototype.hasOwnProperty.call(Ne, I)), an) {
          var ye = (d = Ne[I]) !== null && d !== void 0 ? d : en && pn, un = {
            type: "PseudoElement",
            name: I
          }, Y = ln(I, "pseudo-element", ye);
          Y && (p(Y.type !== "Formula" && Y.type !== "FormulaOfSelector", "Pseudo-elements cannot have formula argument."), un.argument = Y), v.items.push(un);
        } else {
          p(lt, "Pseudo-classes are not enabled.");
          var ye = (w = ot[I]) !== null && w !== void 0 ? w : it && pn;
          p(ye, 'Unknown pseudo-class: "'.concat(I, '".'));
          var Y = ln(I, "pseudo-class", ye), sn = {
            type: "PseudoClass",
            name: I
          };
          Y && (sn.argument = Y), v.items.push(sn);
        }
      } else
        break;
    if (v.items.length === 0)
      return G() ? $("Expected rule but end of input reached.") : $('Expected rule but "'.concat(m, '" found.'));
    if (N(), !G() && !h(",") && !h(")")) {
      var O = Pe(T);
      N(), v.nestedRule = me(), v.nestedRule.combinator = O;
    }
    return v;
  }
  return function(u) {
    if (typeof u != "string")
      throw new Error("".concat(Le, "Expected string input."));
    return j = u, _ = j.length, x = 0, m = j.charAt(0), tn();
  };
}
var k = function() {
  return k = Object.assign || function(e) {
    for (var n, t = 1, r = arguments.length; t < r; t++) {
      n = arguments[t];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
    }
    return e;
  }, k.apply(this, arguments);
};
function A(e) {
  return function(n, t) {
    var r;
    return r = {}, r[n] = function(l) {
      return k({ type: e }, l);
    }, r[t] = function(l) {
      return typeof l == "object" && l !== null && l.type === e;
    }, r;
  };
}
k(k(k(k(k(k(k(k(k(k(k(k(k(k(k(k({}, A("Selector")("selector", "isSelector")), A("Rule")("rule", "isRule")), A("TagName")("tagName", "isTagName")), A("Id")("id", "isId")), A("ClassName")("className", "isClassName")), A("WildcardTag")("wildcardTag", "isWildcardTag")), A("NamespaceName")("namespaceName", "isNamespaceName")), A("WildcardNamespace")("wildcardNamespace", "isWildcardNamespace")), A("NoNamespace")("noNamespace", "isNoNamespace")), A("Attribute")("attribute", "isAttribute")), A("PseudoClass")("pseudoClass", "isPseudoClass")), A("PseudoElement")("pseudoElement", "isPseudoElement")), A("String")("string", "isString")), A("Formula")("formula", "isFormula")), A("FormulaOfSelector")("formulaOfSelector", "isFormulaOfSelector")), A("Substitution")("substitution", "isSubstitution"));
const Tt = Rt({ syntax: "selectors-4" });
function jt(e) {
  if (typeof e != "string")
    throw new TypeError("Expected `string` as selector, not `" + e + "`");
  return Tt(e);
}
const $n = "֑-߿יִ-﷽ﹰ-ﻼ", zn = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", Ut = new RegExp("^[^" + zn + "]*[" + $n + "]"), _t = new RegExp("^[^" + $n + "]*[" + zn + "]");
function Bt(e) {
  const n = String(e || "");
  return Ut.test(n) ? "rtl" : _t.test(n) ? "ltr" : "neutral";
}
function $t(e) {
  return "children" in e ? Hn(e) : "value" in e ? e.value : "";
}
function zt(e) {
  return e.type === "text" ? e.value : "children" in e ? Hn(e) : "";
}
function Hn(e) {
  let n = -1;
  const t = [];
  for (; ++n < e.children.length; )
    t[n] = zt(e.children[n]);
  return t.join("");
}
const Wn = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Kt;
    if (typeof e == "function")
      return xe(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Ht(e) : Wt(e);
    if (typeof e == "string")
      return Vt(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Ht(e) {
  const n = [];
  let t = -1;
  for (; ++t < e.length; )
    n[t] = Wn(e[t]);
  return xe(r);
  function r(...l) {
    let i = -1;
    for (; ++i < n.length; )
      if (n[i].apply(this, l))
        return !0;
    return !1;
  }
}
function Wt(e) {
  const n = (
    /** @type {Record<string, unknown>} */
    e
  );
  return xe(t);
  function t(r) {
    const l = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let i;
    for (i in e)
      if (l[i] !== n[i])
        return !1;
    return !0;
  }
}
function Vt(e) {
  return xe(n);
  function n(t) {
    return t && t.type === e;
  }
}
function xe(e) {
  return n;
  function n(t, r, l) {
    return !!(Xt(t) && e.call(
      this,
      t,
      typeof r == "number" ? r : void 0,
      l || void 0
    ));
  }
}
function Kt() {
  return !0;
}
function Xt(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const Vn = [], Zt = !0, Be = !1, Kn = "skip";
function Gt(e, n, t, r) {
  let l;
  typeof n == "function" && typeof t != "function" ? (r = t, t = n) : l = n;
  const i = Wn(l), o = r ? -1 : 1;
  s(e, void 0, [])();
  function s(c, f, b) {
    const E = (
      /** @type {Record<string, unknown>} */
      c && typeof c == "object" ? c : {}
    );
    if (typeof E.type == "string") {
      const D = (
        // `hast`
        typeof E.tagName == "string" ? E.tagName : (
          // `xast`
          typeof E.name == "string" ? E.name : void 0
        )
      );
      Object.defineProperty(M, "name", {
        value: "node (" + (c.type + (D ? "<" + D + ">" : "")) + ")"
      });
    }
    return M;
    function M() {
      let D = Vn, H, T, X;
      if ((!n || i(c, f, b[b.length - 1] || void 0)) && (D = Yt(t(c, b)), D[0] === Be))
        return D;
      if ("children" in c && c.children) {
        const Z = (
          /** @type {UnistParent} */
          c
        );
        if (Z.children && D[0] !== Kn)
          for (T = (r ? Z.children.length : -1) + o, X = b.concat(Z); T > -1 && T < Z.children.length; ) {
            const ke = Z.children[T];
            if (H = s(ke, T, X)(), H[0] === Be)
              return H;
            T = typeof H[1] == "number" ? H[1] : T + o;
          }
      }
      return D;
    }
  }
}
function Yt(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Zt, e] : e == null ? Vn : [e];
}
function Qt(e, n, t, r) {
  let l, i, o;
  typeof n == "function" && typeof t != "function" ? (i = void 0, o = n, l = t) : (i = n, o = t, l = r), Gt(e, i, s, l);
  function s(c, f) {
    const b = f[f.length - 1], E = b ? b.children.indexOf(c) : void 0;
    return o(c, E, b);
  }
}
function Jt(e, n) {
  const t = e.schema, r = e.language, l = e.direction, i = e.editableOrEditingHost;
  let o;
  if (n.type === "element") {
    const f = n.properties.xmlLang || n.properties.lang, b = n.properties.type || "text", E = bn(n);
    f != null && (e.language = String(f)), t && t.space === "html" ? (n.properties.contentEditable === "true" && (e.editableOrEditingHost = !0), n.tagName === "svg" && (e.schema = Ze), E === "rtl" ? o = E : /* Explicit `[dir=ltr]`. */ E === "ltr" || // HTML with an invalid or no `[dir]`.
    E !== "auto" && n.tagName === "html" || // `input[type=tel]` with an invalid or no `[dir]`.
    E !== "auto" && n.tagName === "input" && b === "tel" ? o = "ltr" : (E === "auto" || n.tagName === "bdi") && (n.tagName === "textarea" ? o = Fe($t(n)) : n.tagName === "input" && (b === "email" || b === "search" || b === "tel" || b === "text") ? o = n.properties.value ? Fe(String(n.properties.value)) : "ltr" : Qt(n, c)), o && (e.direction = o)) : e.editableOrEditingHost && (e.editableOrEditingHost = !1);
  }
  return s;
  function s() {
    e.schema = t, e.language = r, e.direction = l, e.editableOrEditingHost = i;
  }
  function c(f) {
    if (f.type === "text")
      return o = Fe(f.value), o ? Be : void 0;
    if (f !== n && f.type === "element" && (f.tagName === "bdi" || f.tagName === "script" || f.tagName === "style" || f.tagName === "textare" || bn(f)))
      return Kn;
  }
}
function Fe(e) {
  const n = Bt(e);
  return n === "neutral" ? void 0 : n;
}
function bn(e) {
  const n = e.type === "element" && typeof e.properties.dir == "string" ? e.properties.dir.toLowerCase() : void 0;
  return n === "auto" || n === "ltr" || n === "rtl" ? n : void 0;
}
function $e(e) {
  const n = [], t = String(e || "");
  let r = t.indexOf(","), l = 0, i = !1;
  for (; !i; ) {
    r === -1 && (r = t.length, i = !0);
    const o = t.slice(l, r).trim();
    (o || !i) && n.push(o), l = r + 1, r = t.indexOf(",", l);
  }
  return n;
}
function qt(e, n) {
  const t = n || {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (t.padRight ? " " : "") + "," + (t.padLeft === !1 ? "" : " ")
  ).trim();
}
function ze(e) {
  const n = String(e || "").trim();
  return n ? n.split(/[ \t\n\r\f]+/g) : [];
}
function er(e) {
  return e.join(" ").trim();
}
function nr(e, n, t) {
  const r = jn(t, e.name), l = n.properties[r.property];
  let i = tr(l, r);
  if (!e.value)
    return i !== void 0;
  e.value.type;
  let o = e.value.value;
  if (e.caseSensitivityModifier === "i" && (o = o.toLowerCase(), i && (i = i.toLowerCase())), i !== void 0)
    switch (e.operator) {
      case "=":
        return o === i;
      case "$=":
        return o === i.slice(-o.length);
      case "*=":
        return i.includes(o);
      case "^=":
        return o === i.slice(0, o.length);
      case "|=":
        return o === i || o === i.slice(0, o.length) && i.charAt(o.length) === "-";
      case "~=":
        return (
          // For all other values (including comma-separated lists), return whether this
          // is an exact match.
          o === i || // If this is a space-separated list, and the query is contained in it, return
          // true.
          ze(i).includes(o)
        );
    }
  return !1;
}
function tr(e, n) {
  if (e != null)
    if (typeof e == "boolean") {
      if (e)
        return n.attribute;
    } else if (Array.isArray(e)) {
      if (e.length > 0)
        return (n.commaSeparated ? qt : er)(e);
    } else
      return String(e);
}
const rr = [];
function lr(e, n) {
  return /** @type {Readonly<Array<string>>} */ (n.properties.className || rr).includes(e.name);
}
function or(e, n) {
  return n.properties.id === e.name;
}
function ir(e, n) {
  return e.name === n.tagName;
}
function ar(e, n) {
  return function(t, r) {
    let l = wn(t, "tag");
    const i = wn(
      r ?? "*",
      "range"
    ), o = [];
    let s = -1;
    for (; ++s < i.length; ) {
      const c = i[s].toLowerCase();
      if (!n && c === "*")
        continue;
      let f = -1;
      const b = [];
      for (; ++f < l.length; )
        if (e(l[f].toLowerCase(), c)) {
          if (!n)
            return (
              /** @type {IsFilter extends true ? Tags : Tag|undefined} */
              l[f]
            );
          o.push(l[f]);
        } else
          b.push(l[f]);
      l = b;
    }
    return (
      /** @type {IsFilter extends true ? Tags : Tag|undefined} */
      n ? o : void 0
    );
  };
}
const ur = ar(function(e, n) {
  const t = e.split("-"), r = n.split("-");
  let l = 0, i = 0;
  if (r[i] !== "*" && t[l] !== r[i])
    return !1;
  for (l++, i++; i < r.length; ) {
    if (r[i] === "*") {
      i++;
      continue;
    }
    if (!t[l])
      return !1;
    if (t[l] === r[i]) {
      l++, i++;
      continue;
    }
    if (t[l].length === 1)
      return !1;
    l++;
  }
  return !0;
}, !0);
function wn(e, n) {
  const t = e && typeof e == "string" ? [e] : e;
  if (!t || typeof t != "object" || !("length" in t))
    throw new Error(
      "Invalid " + n + " `" + t + "`, expected non-empty string"
    );
  return t;
}
const sr = {}.hasOwnProperty;
function J(e, n) {
  const t = e.type === "element" && sr.call(e.properties, n) && e.properties[n];
  return t != null && t !== !1;
}
const cr = /[ \t\n\f\r]/g;
function fr(e) {
  return typeof e == "object" ? e.type === "text" ? Sn(e.value) : !1 : Sn(e);
}
function Sn(e) {
  return e.replace(cr, "") === "";
}
const dr = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]), xn = 48, pr = 57;
function hr(e) {
  if (e = e.trim().toLowerCase(), e === "even")
    return [2, 0];
  if (e === "odd")
    return [2, 1];
  let n = 0, t = 0, r = i(), l = o();
  if (n < e.length && e.charAt(n) === "n" && (n++, t = r * (l ?? 1), s(), n < e.length ? (r = i(), s(), l = o()) : r = l = 0), l === null || n < e.length)
    throw new Error(`n-th rule couldn't be parsed ('${e}')`);
  return [t, r * l];
  function i() {
    return e.charAt(n) === "-" ? (n++, -1) : (e.charAt(n) === "+" && n++, 1);
  }
  function o() {
    const c = n;
    let f = 0;
    for (; n < e.length && e.charCodeAt(n) >= xn && e.charCodeAt(n) <= pr; )
      f = f * 10 + (e.charCodeAt(n) - xn), n++;
    return n === c ? null : f;
  }
  function s() {
    for (; n < e.length && dr.has(e.charCodeAt(n)); )
      n++;
  }
}
function gr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mr = {
  trueFunc: function() {
    return !0;
  },
  falseFunc: function() {
    return !1;
  }
};
const Cn = /* @__PURE__ */ gr(mr);
function yr(e) {
  const n = e[0], t = e[1] - 1;
  if (t < 0 && n <= 0)
    return Cn.falseFunc;
  if (n === -1)
    return (i) => i <= t;
  if (n === 0)
    return (i) => i === t;
  if (n === 1)
    return t < 0 ? Cn.trueFunc : (i) => i >= t;
  const r = Math.abs(n), l = (t % r + r) % r;
  return n > 1 ? (i) => i >= t && i % r === l : (i) => i <= t && i % r === l;
}
function kn(e) {
  return yr(hr(e));
}
const En = {}.hasOwnProperty;
function vr(e, n) {
  const t = n || {};
  function r(l, ...i) {
    let o = r.invalid;
    const s = r.handlers;
    if (l && En.call(l, e)) {
      const c = String(l[e]);
      o = En.call(s, c) ? s[c] : r.unknown;
    }
    if (o)
      return o.call(this, l, ...i);
  }
  return r.handlers = t.handlers || {}, r.invalid = t.invalid, r.unknown = t.unknown, r;
}
const br = kn.default || kn, wr = vr("name", {
  handlers: {
    "any-link": Sr,
    blank: xr,
    checked: Cr,
    dir: kr,
    disabled: Xn,
    empty: Er,
    enabled: Nr,
    "first-child": Ar,
    "first-of-type": Pr,
    has: Or,
    is: Zn,
    lang: Ir,
    "last-child": Lr,
    "last-of-type": Fr,
    not: Dr,
    "nth-child": Rr,
    "nth-last-child": Tr,
    "nth-last-of-type": jr,
    "nth-of-type": Ur,
    "only-child": _r,
    "only-of-type": Br,
    optional: $r,
    "read-only": zr,
    "read-write": Gn,
    required: Yn,
    root: Hr,
    scope: Wr
  },
  invalid: Mr,
  unknown: Vr
});
function Sr(e, n) {
  return (n.tagName === "a" || n.tagName === "area" || n.tagName === "link") && J(n, "href");
}
function U(e, n) {
  if (e.shallow)
    throw new Error("Cannot use `:" + n.name + "` without parent");
}
function xr(e, n) {
  return !Qn(n, t);
  function t(r) {
    return r.type === "element" || r.type === "text" && !fr(r);
  }
}
function Cr(e, n) {
  return n.tagName === "input" || n.tagName === "menuitem" ? !!((n.properties.type === "checkbox" || n.properties.type === "radio") && J(n, "checked")) : n.tagName === "option" ? J(n, "selected") : !1;
}
function kr(e, n, t, r, l) {
  return e.argument, e.argument.type, l.direction === e.argument.value;
}
function Xn(e, n) {
  return (n.tagName === "button" || n.tagName === "input" || n.tagName === "select" || n.tagName === "textarea" || n.tagName === "optgroup" || n.tagName === "option" || n.tagName === "menuitem" || n.tagName === "fieldset") && J(n, "disabled");
}
function Er(e, n) {
  return !Qn(n, t);
  function t(r) {
    return r.type === "element" || r.type === "text";
  }
}
function Nr(e, n) {
  return !Xn(e, n);
}
function Ar(e, n, t, r, l) {
  return U(l, e), l.elementIndex === 0;
}
function Pr(e, n, t, r, l) {
  return U(l, e), l.typeIndex === 0;
}
function Ce(e) {
  let n = e._cachedFn;
  if (!n) {
    const t = e.argument;
    if (t.type !== "Formula")
      throw new Error(
        "Expected `nth` formula, such as `even` or `2n+1` (`of` is not yet supported)"
      );
    n = br(t.a + "n+" + t.b), e._cachedFn = n;
  }
  return n;
}
function Or(e, n, t, r, l) {
  e.argument, e.argument.type;
  const i = {
    ...l,
    // Not found yet.
    found: !1,
    // One result is enough.
    one: !0,
    results: [],
    rootQuery: e.argument,
    scopeElements: [n],
    // Do walk deep.
    shallow: !1
  };
  return pe(i, { type: "root", children: n.children }), i.results.length > 0;
}
function Mr() {
}
function Zn(e, n, t, r, l) {
  e.argument, e.argument.type;
  const i = {
    ...l,
    // Not found yet.
    found: !1,
    // One result is enough.
    one: !0,
    results: [],
    rootQuery: e.argument,
    scopeElements: [n],
    // Do walk deep.
    shallow: !1
  };
  return pe(i, n), i.results[0] === n;
}
function Ir(e, n, t, r, l) {
  return e.argument, e.argument.type, l.language !== "" && l.language !== void 0 && ur(l.language, $e(e.argument.value)).length > 0;
}
function Lr(e, n, t, r, l) {
  return U(l, e), !!(l.elementCount && l.elementIndex === l.elementCount - 1);
}
function Fr(e, n, t, r, l) {
  return U(l, e), typeof l.typeIndex == "number" && typeof l.typeCount == "number" && l.typeIndex === l.typeCount - 1;
}
function Dr(e, n, t, r, l) {
  return !Zn(e, n, t, r, l);
}
function Rr(e, n, t, r, l) {
  const i = Ce(e);
  return U(l, e), typeof l.elementIndex == "number" && i(l.elementIndex);
}
function Tr(e, n, t, r, l) {
  const i = Ce(e);
  return U(l, e), !!(typeof l.elementCount == "number" && typeof l.elementIndex == "number" && i(l.elementCount - l.elementIndex - 1));
}
function jr(e, n, t, r, l) {
  const i = Ce(e);
  return U(l, e), typeof l.typeCount == "number" && typeof l.typeIndex == "number" && i(l.typeCount - 1 - l.typeIndex);
}
function Ur(e, n, t, r, l) {
  const i = Ce(e);
  return U(l, e), typeof l.typeIndex == "number" && i(l.typeIndex);
}
function _r(e, n, t, r, l) {
  return U(l, e), l.elementCount === 1;
}
function Br(e, n, t, r, l) {
  return U(l, e), l.typeCount === 1;
}
function $r(e, n) {
  return !Yn(e, n);
}
function zr(e, n, t, r, l) {
  return !Gn(e, n, t, r, l);
}
function Gn(e, n, t, r, l) {
  return n.tagName === "input" || n.tagName === "textarea" ? !J(n, "readOnly") && !J(n, "disabled") : !!l.editableOrEditingHost;
}
function Yn(e, n) {
  return (n.tagName === "input" || n.tagName === "textarea" || n.tagName === "select") && J(n, "required");
}
function Hr(e, n, t, r, l) {
  return !!((!r || r.type === "root") && l.schema && (l.schema.space === "html" || l.schema.space === "svg") && (n.tagName === "html" || n.tagName === "svg"));
}
function Wr(e, n, t, r, l) {
  return l.scopeElements.includes(n);
}
function Qn(e, n) {
  const t = e.children;
  let r = -1;
  for (; ++r < t.length; )
    if (n(t[r]))
      return !0;
  return !1;
}
function Vr(e) {
  const n = (
    /** @type {AstPseudoClass} */
    e
  );
  throw new Error("Unknown pseudo-selector `" + n.name + "`");
}
function Kr(e, n, t, r, l) {
  for (const i of e.items)
    if (i.type === "Attribute") {
      if (!nr(i, n, l.schema))
        return !1;
    } else if (i.type === "Id") {
      if (!or(i, n))
        return !1;
    } else if (i.type === "ClassName") {
      if (!lr(i, n))
        return !1;
    } else if (i.type === "PseudoClass") {
      if (!wr(i, n, t, r, l))
        return !1;
    } else {
      if (i.type === "PseudoElement")
        throw new Error("Invalid selector: `::" + i.name + "`");
      if (i.type === "TagName" && !ir(i, n))
        return !1;
    }
  return !0;
}
const Xr = [];
function pe(e, n) {
  n && Jn(e, [], n, void 0, void 0, n);
}
function De(e, n, t) {
  const r = e[n];
  r ? r.push(t) : e[n] = [t];
}
function Zr(e, n, t, r) {
  const l = we(n.descendant, n.directChild);
  let i, o = -1;
  const s = { count: 0, types: /* @__PURE__ */ new Map() }, c = { count: 0, types: /* @__PURE__ */ new Map() };
  for (; ++o < t.children.length; )
    Nn(s, t.children[o]);
  for (o = -1; ++o < t.children.length; ) {
    const f = t.children[o], b = f.type === "element" ? f.tagName.toUpperCase() : void 0;
    if (e.elementIndex = c.count, e.typeIndex = b && c.types.get(b) || 0, e.elementCount = s.count, e.typeCount = b ? s.types.get(b) : 0, "children" in f) {
      const E = we(l, i), M = Jn(
        e,
        E,
        t.children[o],
        o,
        t,
        r
      );
      i = we(M.generalSibling, M.adjacentSibling);
    }
    if (e.one && e.found)
      break;
    Nn(c, t.children[o]);
  }
}
function Gr(e, n, t, r, l) {
  const i = {
    adjacentSibling: void 0,
    descendant: void 0,
    directChild: void 0,
    generalSibling: void 0
  };
  let o = -1;
  for (; ++o < n.length; ) {
    const s = n[o];
    if (e.one && e.found)
      break;
    if (e.shallow && s.nestedRule)
      throw new Error("Expected selector without nesting");
    if (Kr(s, t, r, l, e)) {
      const c = s.nestedRule;
      if (c) {
        const f = c.combinator === "+" ? "adjacentSibling" : c.combinator === "~" ? "generalSibling" : c.combinator === ">" ? "directChild" : "descendant";
        De(i, f, c);
      } else
        e.found = !0, e.results.includes(t) || e.results.push(t);
    }
    s.combinator === void 0 ? De(i, "descendant", s) : s.combinator === "~" && De(i, "generalSibling", s);
  }
  return i;
}
function we(e, n) {
  return e && n && e.length > 0 && n.length > 0 ? [...e, ...n] : e && e.length > 0 ? e : n && n.length > 0 ? n : Xr;
}
function Nn(e, n) {
  if (n.type === "element") {
    const t = n.tagName.toUpperCase(), r = (e.types.get(t) || 0) + 1;
    e.count++, e.types.set(t, r);
  }
}
function Jn(e, n, t, r, l, i) {
  let o = {
    adjacentSibling: void 0,
    descendant: void 0,
    directChild: void 0,
    generalSibling: void 0
  };
  const s = Jt(e, t);
  if (t.type === "element") {
    let c = e.rootQuery.rules;
    l && l !== i && (c = e.rootQuery.rules.filter(
      (f) => f.combinator === void 0 || f.combinator === ">" && l === i
    )), o = Gr(
      e,
      // Try the root rules for this element too.
      we(n, c),
      t,
      r,
      l
    );
  }
  return "children" in t && !e.shallow && !(e.one && e.found) && Zr(e, o, t, i), s(), o;
}
function Yr(e, n, t) {
  const r = Ge(e, n, t);
  return r.one = !0, r.shallow = !0, pe(r, n || void 0), r.results.length > 0;
}
function se(e, n, t) {
  const r = Ge(e, n, t);
  return r.one = !0, pe(r, n || void 0), r.results[0];
}
function He(e, n, t) {
  const r = Ge(e, n, t);
  return pe(r, n || void 0), r.results;
}
function Ge(e, n, t) {
  return {
    direction: "ltr",
    editableOrEditingHost: !1,
    elementCount: void 0,
    elementIndex: void 0,
    found: !1,
    language: void 0,
    one: !1,
    // State of the query.
    results: [],
    rootQuery: jt(e),
    schema: t === "svg" ? Ze : Un,
    scopeElements: n ? n.type === "root" ? n.children : [n] : [],
    shallow: !1,
    typeIndex: void 0,
    typeCount: void 0
  };
}
const Qr = (e) => (...n) => {
  const t = e(...n);
  let r = t.next();
  do {
    if (r.done)
      return r.value;
    if (r.value == null)
      return;
    r = t.next(r.value);
  } while (!r.done);
}, An = /[#.]/g;
function Jr(e, n) {
  const t = e || "", r = {};
  let l = 0, i, o;
  for (; l < t.length; ) {
    An.lastIndex = l;
    const s = An.exec(t), c = t.slice(l, s ? s.index : t.length);
    c && (i ? i === "#" ? r.id = c : Array.isArray(r.className) ? r.className.push(c) : r.className = [c] : o = c, l += c.length), s && (i = s[0], l++);
  }
  return {
    type: "element",
    // @ts-expect-error: tag name is parsed.
    tagName: o || n || "div",
    properties: r,
    children: []
  };
}
const We = {}.hasOwnProperty;
function qn(e, n, t) {
  const r = t && tl(t);
  function l(i, o, ...s) {
    let c = -1, f;
    if (i == null) {
      f = { type: "root", children: [] };
      const b = (
        /** @type {Child} */
        o
      );
      s.unshift(b);
    } else if (f = Jr(i, n), f.tagName = f.tagName.toLowerCase(), r && We.call(r, f.tagName) && (f.tagName = r[f.tagName]), qr(o))
      s.unshift(o);
    else {
      let b;
      for (b in o)
        We.call(o, b) && el(e, f.properties, b, o[b]);
    }
    for (; ++c < s.length; )
      Ve(f.children, s[c]);
    return f.type === "element" && f.tagName === "template" && (f.content = { type: "root", children: f.children }, f.children = []), f;
  }
  return l;
}
function qr(e) {
  if (e === null || typeof e != "object" || Array.isArray(e))
    return !0;
  if (typeof e.type != "string")
    return !1;
  const n = (
    /** @type {Record<string, unknown>} */
    e
  ), t = Object.keys(e);
  for (const r of t) {
    const l = n[r];
    if (l && typeof l == "object") {
      if (!Array.isArray(l))
        return !0;
      const i = (
        /** @type {Array<unknown>} */
        l
      );
      for (const o of i)
        if (typeof o != "number" && typeof o != "string")
          return !0;
    }
  }
  return !!("children" in e && Array.isArray(e.children));
}
function el(e, n, t, r) {
  const l = jn(e, t);
  let i = -1, o;
  if (r != null) {
    if (typeof r == "number") {
      if (Number.isNaN(r))
        return;
      o = r;
    } else
      typeof r == "boolean" ? o = r : typeof r == "string" ? l.spaceSeparated ? o = ze(r) : l.commaSeparated ? o = $e(r) : l.commaOrSpaceSeparated ? o = ze($e(r).join(" ")) : o = Pn(l, l.property, r) : Array.isArray(r) ? o = r.concat() : o = l.property === "style" ? nl(r) : String(r);
    if (Array.isArray(o)) {
      const s = [];
      for (; ++i < o.length; ) {
        const c = (
          /** @type {number | string} */
          Pn(l, l.property, o[i])
        );
        s[i] = c;
      }
      o = s;
    }
    if (l.property === "className" && Array.isArray(n.className)) {
      const s = (
        /** @type {number | string} */
        o
      );
      o = n.className.concat(s);
    }
    n[l.property] = o;
  }
}
function Ve(e, n) {
  let t = -1;
  if (n != null)
    if (typeof n == "string" || typeof n == "number")
      e.push({ type: "text", value: String(n) });
    else if (Array.isArray(n))
      for (; ++t < n.length; )
        Ve(e, n[t]);
    else if (typeof n == "object" && "type" in n)
      n.type === "root" ? Ve(e, n.children) : e.push(n);
    else
      throw new Error("Expected node, nodes, or string, got `" + n + "`");
}
function Pn(e, n, t) {
  if (typeof t == "string") {
    if (e.number && t && !Number.isNaN(Number(t)))
      return Number(t);
    if ((e.boolean || e.overloadedBoolean) && (t === "" || ce(t) === ce(n)))
      return !0;
  }
  return t;
}
function nl(e) {
  const n = [];
  let t;
  for (t in e)
    We.call(e, t) && n.push([t, e[t]].join(": "));
  return n.join("; ");
}
function tl(e) {
  const n = {};
  let t = -1;
  for (; ++t < e.length; )
    n[e[t].toLowerCase()] = e[t];
  return n;
}
const rl = [
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "solidColor",
  "textArea",
  "textPath"
], Q = qn(Un, "div");
qn(Ze, "g", rl);
const ll = "address,article,aside,blockquote,canvas,dd,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,li,main,nav,noscript,ol,output,p,pre,section,table,tfoot,ul,video".split(
  ","
), ol = ["div", "section", "article", "main"], Ke = (e, n = 0) => e.type !== "element" && e.type !== "root" || e.children.length === 0 ? n + 1 : Math.max(...e.children.map((t) => Ke(t, n + 1))), il = (e, n) => Ke(e) - Ke(n), Ye = (e) => e != null && e.type === "element";
function al(e, n) {
  return e.type !== "element" ? e : Q(e.tagName, e.properties, [
    Q(n.tagName, n.properties, [...e.children])
  ]);
}
function ul(e) {
  const n = e.children.filter((t, r) => t.type !== "text" || r != 0 && r != e.children.length - 1 ? !0 : !t.value.match(/^\s+$/));
  return Q(e.tagName, e.properties, n);
}
function et(e, n) {
  if (n.children.includes(e))
    return n;
  let t;
  const r = n.children.filter(Ye);
  for (const l of r)
    if (t = et(e, l), t !== void 0)
      return t;
}
const sl = (e, n) => {
  const t = `${e.properties.id}`, r = se(`[href="#${t}"]`, n);
  return r === void 0 && console.warn(
    `Failed to find matching footnote reference for #${t} using selector [href="#${t}"]`
  ), r;
};
function cl(e, n) {
  const t = `${e.properties.id}`, r = /fn[-:][\da-zA-Z]+$/.test(t), l = se(`[data-footnotes] [id="${t}"], .footnotes [id="${t}"]`, n) != null, i = se(`[href="#${t}"]`, n) != null;
  if (/[a-zA-Z]+$/.test(t)) {
    const o = se(`[href="#${t}"]`, n);
    o && o.properties && (o.properties.class = (o.properties.class || "") + " annotation");
  }
  return r && l && i;
}
function fl(e, n) {
  const t = ul(e), r = Ye(t.children[0]) ? t.children : [Q("p")].concat(t.children);
  r[0].children.unshift(Q("sup", { class: "Sidenote-number" }, [n + " "]));
  const o = /[a-zA-Z]+$/.test(`${e.properties.id}`) ? "Sidenote annotation" : "Sidenote";
  return Q(`aside.${o}`, { ...e.properties, role: "doc-footnote" }, [
    `
 `,
    ...r.map(
      (s) => al(s, Q("small", { class: "Sidenote-small" }, []))
    ),
    `
 `
  ]);
}
function dl(e, n) {
  const t = ol.map(
    (l) => `${l}:has([id="${e}"])`
  ).join(", "), r = He(t, n).sort(il);
  return r.length === 0 && n.type === "root" ? n : (r.length === 0 && console.warn(
    `Failed to find logical section parent with selector: ${t}`
  ), r[0]);
}
function pl(e, n) {
  const t = ll.map((r) => `${r}:has([id="${e}"])`).join(", ");
  return n.children.filter(Ye).find(
    (r) => Yr(t, r)
  );
}
const nt = (e) => e.type === "text" ? e.value : e.type === "comment" ? "" : e.children.map(nt).join("");
function tt(e, n) {
  const t = et(e, n);
  if (!t)
    return;
  const r = t == null ? void 0 : t.children.indexOf(e);
  if (r !== -1)
    return t.children.splice(r, 1)[0];
}
const hl = Qr(function* (n, t) {
  if (!cl(n, t))
    return;
  const r = yield sl(n, t), l = String(r.properties.id), i = yield fl(n, nt(r)), o = yield dl(l, t), s = yield pl(l, o), c = o.children.indexOf(s);
  o.children.splice(c + 1, 0, { type: "text", value: `
 ` }, i), tt(n, t);
});
function gl(e) {
  if (He(".footnotes li, [data-footnotes] li", e).reverse().forEach((r) => hl(r, e)), He(".footnotes li, [data-footnotes] li", e).length === 0) {
    const r = se(".footnotes, [data-footnotes]", e);
    r && tt(r, e);
  } else
    console.warn("Some footnotes were not transformed.");
  return e;
}
function ml() {
  return gl;
}
export {
  ml as default
};
