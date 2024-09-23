// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

export default defineConfig(({ mode }) => {
  const lectureCount = 27;
  let rootDir = __dirname; // 기본값은 프로젝트 루트
  const rollupInputs = {};

  // mode에 따라 root 디렉토리를 설정하고 rollupInputs 생성
  for (let i = 2; i <= lectureCount; i++) {
    const lectureName = `lecture${i}`;
    const lecturePath = path.resolve(__dirname, `src/${lectureName}`);
    
    if (mode === lectureName) {
      rootDir = lecturePath;
    }

    // 해당 lecture 디렉토리가 존재하는 경우에만 rollupInputs에 추가
    if (fs.existsSync(path.join(lecturePath, 'index.html'))) {
      rollupInputs[lectureName] = path.resolve(__dirname, `src/${lectureName}/index.html`);
    }
  }

  return {
    root: rootDir,
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@stores': path.resolve(rootDir, 'stores'),
        '@lib': path.resolve(rootDir, 'lib'),
        '@hooks': path.resolve(rootDir, 'hooks'),
      },
    },
    build: {
      rollupOptions: {
        input: rollupInputs,
      },
    },
  };
});