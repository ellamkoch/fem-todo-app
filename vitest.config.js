import { defineConfig} from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        clearMocks: true,
        setupFiles: ["./src/test"]
        // ...
        },
});
