/**
 * User: pavel
 * Date: 6/5/13
 * Time: 11:02 AM
 */
Ext.define('app.util.ConnectionUtil', {
	override: 'Ext.data.Connection',

	setupUrl: function (options, url) {
		var urlResult = this.callParent(arguments),
			reqParams = {},
			// this is allows you to simplify your URL and have all static part in one place
			serverURL = '/services/';

		// We merge all params from extraParams and then from params to use them after that for replacement in URL	
		if (options.proxy !== undefined) {
			reqParams = options.proxy.extraParams;
		}
		if (options.params !== undefined) {
			reqParams = Ext.Object.merge(options.params, reqParams);
		}

		urlResult = new Ext.Template(urlResult).apply(reqParams);
		if (urlResult.indexOf('ext') === -1 && urlResult.substring(0, 1) !== '/') {
            urlResult = serverURL + urlResult;
		}

		return urlResult;
	}
});
