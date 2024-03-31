import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
//   server: {
//     open: true, //permite abrir el servidor en cualquier dipoitivo automaticamente si esta conectado en un mismo wifi, con solo colocar el network en el dispoitivo
//     host: true
//   }
// 
})
