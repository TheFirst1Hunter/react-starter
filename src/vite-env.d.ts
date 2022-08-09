/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_PRIMARY_COLOR: string;
    readonly VITE_SECONDARY_COLOR: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
