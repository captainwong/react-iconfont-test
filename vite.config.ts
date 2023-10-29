import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5175,
    cors: true,
    // remote 
    // proxy: {
    //   //'/graphql': 'http://192.168.50.162:3000'
    //   '/graphql': 'http://localhost:3000',
    //   '/api': 'http://localhost:3000',
    // },
    // hmr: {
    //   // host: 'http://waterdrop-mobile.captainwong.cn'
    //   path: '/socket.io',
    //   port: 6173,
    //   clientPort: 443,
    // }

    // local
    proxy: {
      '/graphql': 'http://192.168.50.162:3000',
      //'/graphql': 'https://api.wx.hb3344.com/graphql',
      '/api': 'http://localhost:3000',
    },
  },
})
