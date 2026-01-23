import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const bgName = env.VITE_APP_BRIDEGROOM;
  const bName = env.VITE_APP_BRIDE;

  const firstName = {
    bridegroom: bgName.replace(/ /g, "").slice(1, 3),
    bride: bName.replace(/ /g, "").slice(1, 3),
  };

  const weddingDate = `${env.VITE_APP_YEAR}년 ${env.VITE_APP_MONTH}월 ${env.VITE_APP_DAY}일 ${env.VITE_APP_WEEK}`;

  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: `${firstName.bridegroom} ♥ ${firstName.bride} 결혼합니다!`,
            ogTitle: `${firstName.bridegroom} ♥ ${firstName.bride} 결혼합니다!`,
            ogSiteName: `${firstName.bridegroom} ♥ ${firstName.bride} 결혼합니다!`,
            ogDescription: weddingDate,
            ogUrl: env.VITE_APP_URL || "https://marry-a.pages.dev/"
          },
        },
      }),
    ],
  }
})