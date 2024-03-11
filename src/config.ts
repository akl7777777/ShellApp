import Store from 'electron-store';

interface AppConfig {
    url: string;
}

const store = new Store<AppConfig>();

export function getConfig(): AppConfig {
    return {
        url: store.get('url', ''),
    };
}

export function setConfig(config: AppConfig): void {
    store.set('url', config.url);
}
