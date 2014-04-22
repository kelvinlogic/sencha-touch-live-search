Ext.define('MenuSearch.view.MenuDetails', {
    extend: 'Ext.Container',
    requires:[
        'Ext.dataview.List'
    ],
    xtype: 'menuDetails',
    config: {
        styleHtmlContent:true,
        scrollable: true,

        tpl: '<div class="details_container"><img src="{image}"/><div class="headingPrice">ksh: {price}</div><div class="details">{content}</div></div> '

    }
});