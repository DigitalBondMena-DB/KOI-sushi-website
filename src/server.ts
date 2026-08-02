// import {
//   AngularNodeAppEngine,
//   createNodeRequestHandler,
//   isMainModule,
//   writeResponseToNodeResponse,
// } from '@angular/ssr/node';
// import express from 'express';
// import { join } from 'node:path';

// const browserDistFolder = join(import.meta.dirname, '../browser');

// const app = express();
// const angularApp = new AngularNodeAppEngine();

// app.use(
//   express.static(browserDistFolder, {
//     maxAge: '1y',
//     index: false,
//     redirect: false,
//   }),
// );

// app.use((req, res, next) => {
//   angularApp
//     .handle(req)
//     .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
//     .catch(next);
// });

// if (isMainModule(import.meta.url) || process.env['pm_id']) {
//   const port = process.env['PORT'] || 4000;
//   app.listen(port, (error) => {
//     if (error) {
//       throw error;
//     }

//     console.log(`Node Express server listening on http://localhost:${port}`);
//   });
// }

// export const reqHandler = createNodeRequestHandler(app);
import { AngularAppEngine, createRequestHandler } from '@angular/ssr'
import { getContext, getTrustProxyHeaders } from '@netlify/angular-runtime/app-engine.js'

const angularAppEngine = new AngularAppEngine({

  trustProxyHeaders: getTrustProxyHeaders(),
});

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext()

  // Example API endpoints can be defined here.
  // Uncomment and define endpoints as necessary.
  // const pathname = new URL(request.url).pathname
  // if (pathname === '/api/hello') {
  //   return Response.json({ message: 'Hello from the API' });
  // }

  const result = await angularAppEngine.handle(request, context)
  return result || new Response('Not found', { status: 404 })
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler)
