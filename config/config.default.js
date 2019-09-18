/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1563256961293_8778';

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://localhost:27017/eggBlog',
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['http://localhost:3000'],
  };

  config.cors = {
    //origin: '*',
    //allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true,
  };

  config.session = {
    renew: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
