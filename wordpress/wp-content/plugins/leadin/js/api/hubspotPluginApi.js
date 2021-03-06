import { onMessage, postMessage } from '../lib/Interframe';

function createHandler(key) {
  return onMessage.bind(null, key);
}

export const onClearQueryParam = createHandler('leadin_clear_query_param');
export const onConnect = createHandler('leadin_connect_portal');
export const onDisableNavigation = createHandler('leadin_disable_navigation');
export const onDisconnect = createHandler('leadin_disconnect_portal');
export const onEnterFullScreen = createHandler('leadin_enter_fullscreen');
export const onExitFullScreen = createHandler('leadin_exit_fullscreen');
export const onGetAssetsPayload = createHandler('leadin_get_assets_payload');
export const onGetDomain = createHandler('leadin_get_wp_domain');
export const onInitNavigation = createHandler('leadin_init_navigation');
export const onInterframeReady = createHandler('leadin_interframe_ready');
export const onMarkAsOutdated = createHandler('leadin_mark_outdated');
export const onPageReload = createHandler('leadin_page_reload');
export const onUpgrade = createHandler('leadin_upgrade');

export function changeRoute(route) {
  postMessage('leadin_change_route', route, null, () => location.reload(true));
}
