import createLogger from 'redux-logger';

declare var process:any;

export default function logger():Redux.Middleware | undefined {
    if (process.env.NODE_ENV === "development") {
        return createLogger();
    }
}