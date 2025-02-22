/**
 * 环境变量
 * 以下划线 '_' 开头的字段表示只在build命令打包时有效，勿在项目中使用
 */
const envs = {
  development: {
    DOMAIN: "http://localhost",
    BASE_URL: "./", // 路由基础路径
    BASE_API: "http://localhost:8080",
    SYSTEM_API: "http://localhost:8080", // 接口基础路径/nginx接口转发路径
    BASE_FACILITY_API: "http://localhost:8080", // 基础设施运营平台的api
    WxAppConnectorLink: "http://plat.trytowish.cn/c?n=", // 企业微信设置页面路由name
    APP_RSA_PUBLIC_KEY: "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdHnzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ==",
    APP_RSA_PRIVATE_KEY: "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAqhHyZfSsYourNxaY7Nt+PrgrxkiA50efORdI5U5lsW79MmFnusUA355oaSXcLhu5xxB38SMSyP2KvuKNPuH3owIDAQABAkAfoiLyL+Z4lf4Myxk6xUDgLaWGximj20CUf+5BKKnlrK+Ed8gAkM0HqoTt2UZwA5E2MzS4EI2gjfQhz5X28uqxAiEA3wNFxfrCZlSZHb0gn2zDpWowcSxQAgiCstxGUoOqlW8CIQDDOerGKH5OmCJ4Z21v+F25WaHYPxCFMvwxpcw99EcvDQIgIdhDTIqD2jfYjPTY8Jj3EDGPbH2HHuffvflECt3Ek60CIQCFRlCkHpi7hthhYhovyloRYsM+IS9h/0BzlEAuO0ktMQIgSPT3aFAgJYwKpqRYKlLDVcflZFCKY7u3UP8iWi1Qw0Y=",
    APP_CLIENT_ID: "e5cd7e4891bf95d1d19206ce24a7b32e",
  },
  test: {
    DOMAIN: "http://plat.trytowish.cn",
    BASE_URL: "./", // 路由基础路径
    BASE_API: "http://plat.trytowish.cn/prod-api",
    SYSTEM_API: "http://plat.trytowish.cn/prod-api", // 接口基础路径/nginx接口转发路径
    BASE_FACILITY_API: "http://plat.trytowish.cn/prod-api", // 基础设施运营平台的api
    WxAppConnectorLink: "http://plat.trytowish.cn/c?n=", // 企业微信设置页面路由name
    _ISGZIP: false, // 是否开启gzip压缩
    _ISCDN: false, // 是否开启cdn加速
    APP_RSA_PUBLIC_KEY: "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdHnzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ==",
    APP_RSA_PRIVATE_KEY: "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAmc3CuPiGL/LcIIm7zryCEIbl1SPzBkr75E2VMtxegyZ1lYRD+7TZGAPkvIsBcaMs6Nsy0L78n2qh+lIZMpLH8wIDAQABAkEAk82Mhz0tlv6IVCyIcw/s3f0E+WLmtPFyR9/WtV3Y5aaejUkU60JpX4m5xNR2VaqOLTZAYjW8Wy0aXr3zYIhhQQIhAMfqR9oFdYw1J9SsNc+CrhugAvKTi0+BF6VoL6psWhvbAiEAxPPNTmrkmrXwdm/pQQu3UOQmc2vCZ5tiKpW10CgJi8kCIFGkL6utxw93Ncj4exE/gPLvKcT+1Emnoox+O9kRXss5AiAMtYLJDaLEzPrAWcZeeSgSIzbL+ecokmFKSDDcRske6QIgSMkHedwND1olF8vlKsJUGK3BcdtM8w4Xq7BpSBwsloE=",
    APP_CLIENT_ID: "e5cd7e4891bf95d1d19206ce24a7b32e",
  },
  production: {
    DOMAIN: "http://plat.trytowish.cn",
    BASE_URL: "./", // 路由基础路径
    BASE_API: "http://plat.trytowish.cn/prod-api",
    SYSTEM_API: "http://plat.trytowish.cn/prod-api", // 接口基础路径/nginx接口转发路径
    BASE_FACILITY_API: "http://plat.trytowish.cn/prod-api", // 基础设施运营平台的api
    WxAppConnectorLink: "http://plat.trytowish.cn/c?n=", // 企业微信设置页面路由name
    _ISGZIP: false, // 是否开启gzip压缩
    _ISCDN: false, // 是否开启cdn加速
    APP_RSA_PUBLIC_KEY: "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdHnzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ==",
    APP_RSA_PRIVATE_KEY: "MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAmc3CuPiGL/LcIIm7zryCEIbl1SPzBkr75E2VMtxegyZ1lYRD+7TZGAPkvIsBcaMs6Nsy0L78n2qh+lIZMpLH8wIDAQABAkEAk82Mhz0tlv6IVCyIcw/s3f0E+WLmtPFyR9/WtV3Y5aaejUkU60JpX4m5xNR2VaqOLTZAYjW8Wy0aXr3zYIhhQQIhAMfqR9oFdYw1J9SsNc+CrhugAvKTi0+BF6VoL6psWhvbAiEAxPPNTmrkmrXwdm/pQQu3UOQmc2vCZ5tiKpW10CgJi8kCIFGkL6utxw93Ncj4exE/gPLvKcT+1Emnoox+O9kRXss5AiAMtYLJDaLEzPrAWcZeeSgSIzbL+ecokmFKSDDcRske6QIgSMkHedwND1olF8vlKsJUGK3BcdtM8w4Xq7BpSBwsloE=",
    APP_CLIENT_ID: "e5cd7e4891bf95d1d19206ce24a7b32e",
  },
};

const env = Object.assign(
  { SYSTEM_NAME_ALL: "Orise充电站运营平台" },
  envs[process.env.VUE_APP_ENV || process.env.NODE_ENV]
);

module.exports = env;
