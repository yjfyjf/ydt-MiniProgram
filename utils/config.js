
let baseUrl, payUrl, staticPath, quickPayHtml, h5Container, group, environmentUrl, shopBaseUrl;
// 本地
if (process.env.NODE_ENV === 'development') {
	console.log('开发环境');
	baseUrl = 'https://yidiantong.cc/edu';
	environmentUrl = '';
	shopBaseUrl = '';
    payUrl = '';
    staticPath = '';
    quickPayHtml = '';
    h5Container = '';
    group = {
        gradeProductId: ''
    };
    payUrl = '';
    staticPath = '';
    quickPayHtml = '';
    h5Container = '';
    group = {
        gradeProductId: ''
    };
}

// 生产
if (process.env.NODE_ENV === 'production') {
	console.log('生产环境');
	baseUrl = 'https://yidiantong.cc/edu';
	environmentUrl = '';
	shopBaseUrl = '';
    payUrl = '';
    staticPath = '';
    quickPayHtml = '';
    h5Container = '';
    group = {
        gradeProductId: ''
    };
}
export default {
    baseUrl:baseUrl,
	environmentUrl: environmentUrl,
	shopBaseUrl: shopBaseUrl,
    payUrl: payUrl,
    staticPath: staticPath,
    group: group,
    quickPayHtml: quickPayHtml,
    h5Container: h5Container,
    apiParam: {
        version: '1.0'
    },
    ver: 'V 1.0.0',
    salt: '',
    tokenSalt: 'd6dc25845c8e1b0b8a23d5463c0dc759',
    qqMapKey: 'EX2BZ-KLPK2-GXQUO-CMLZT-XXDX5-6MB52'
};
