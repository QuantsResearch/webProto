declare var process:any;

interface Config {
    apiPath: string,
    apiTimeout: number
}

const config:Config = (() => {
    if (process.env.NODE_ENV === "production") {
        return {
            apiPath:"/sample/",
            apiTimeout:3100
        }
    } else {
        return {
            apiPath:"/sample/",
            apiTimeout:3000
        }
    }
})();

export default config;