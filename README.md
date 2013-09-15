extjs-url-attribute
===================

Extjs urs attribute support

This small override allows you to use in extjs, touch projects URL links like:
http://yourhost/services/room/{roomId}/folder/{folderId}/
Where roomId and folderId are dynamic params and all static part of the link (in this sample it is services/) will be inserted in one place.

Installation: 
Add class to your projec and include in app.js. All other will be done by extjs.

Usage:

Ext.Ajax.request({
    url: 'room/{roomId}/folder/{folderId}/',
    params: {
        roomId: 1,
        folderId: '123-ss-ww-111'
    }
});

This code will call URL http://yourhost/services/room/1/folder/123-ss-ww-111/ 
Note: if you don't need static part in front of your URL you just need to add '/' as first simbol.
The main issue you have to specify all params everytime. But if you have something static - you can use extraParams on proxy level.