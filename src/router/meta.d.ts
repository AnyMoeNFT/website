import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    useDefaultHeader?: boolean;
    useDefaultFooter?: boolean;
  }
}
