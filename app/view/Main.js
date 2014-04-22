Ext.define('MenuSearch.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.field.Search',
        'Ext.dataview.List'
    ],
    config: {
        layout:'fit',
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                ui: 'gray',
                items:[
                    {xtype: 'spacer'},
                    {
                        xtype: 'searchfield',
                        name: 'search',
                        placeHolder:'search...'
                    },
                    {xtype: 'spacer'}
                ]
            },
            {
                xtype :'list',
                itemTpl: '<div class="image"><img src="{image}">{name:ellipsis(23)}<p>{price} ksh</p></div>',
                store: 'Menus'
            }
        ]
    }
});
