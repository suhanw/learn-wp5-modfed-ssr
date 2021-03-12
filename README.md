# Run locally

1. Install Node.js 14.15.3
2. Run `git clone https://github.com/suhanw/learn-wp5-modfed-ssr.git`
3. `npm install` in `./remote`
4. `npm run dev` in `./remote` will start `webpack-dev-server` on port `8081` and build server bundle in `./remote/build/server/`
5. `npm install` in `./host`
6. `npm run dev` in `./host` will start `webpack-dev-server` on port `8080`, build and start SSR server on port `3000`
7. Go to `http://localhost:3000`
