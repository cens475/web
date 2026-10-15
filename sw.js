// CENS 475 OFICIAL - cens475.github.io/web/ - v9 fondo blanco
const CACHE_NAME='cens475-web-v9';
const BASE='/web/';
self.addEventListener('install', e=>{self.skipWaiting()});
self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>caches.delete(k)))).then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch', e=>{
  const url = new URL(e.request.url);
  if(url.pathname.includes('pwa_icons') || url.pathname.includes('manifest')){
    e.respondWith(fetch(e.request,{cache:'no-store'}));
    return;
  }
  e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)));
});
