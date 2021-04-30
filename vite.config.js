import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'


export default defineConfig({
  plugins: [reactRefresh()],
  base: "context-api-like-redux-implement"
})
