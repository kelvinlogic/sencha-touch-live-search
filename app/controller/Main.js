Ext.define('MenuSearch.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.data.proxy.JsonP','Ext.util.DelayedTask'],
    
    config: {
        refs: {
            list: 'main list',
            card: 'card'
        },
        control: {
            'main searchfield':{
                keyup: 'searchOnKeyUp'
            },
            list:{
                itemsingletap:'showDetails'
            }
        }
    },
    showDetails: function(list, idx, el, record){
        var card = this.getCard(),
            details = Ext.create('MenuSearch.view.MenuDetails',{
                title: record.get('name')
            });
        card.push(details);
        details.setData(record.data);

    },
    searchOnKeyUp: function(text,e, eOpts) {
        var me = this,
            list = this.getList();
        if(!me.task){
            me.task = Ext.create('Ext.util.DelayedTask', function(){
                var store = Ext.data.StoreManager.lookup('Menus');
                list.setMasked({
                    xtype: 'loadmask',
                    message: 'searching...'
                });
                Ext.data.JsonP.request({
                    url: 'http://sages-media.com/api/public_api/menu_search_api/search.php',
                    method:'GET',
                    callbackKey: 'request',
                    params: {
                        key: 'qw1234jkl',
                        q: text.getValue()
                    },
                    success: function(data){
                        store.setData(data);
                        list.setMasked(false);
                        console.log(store.getCount());

                    }
                });
            });
        }
        me.task.delay(500);
    }
});
