import {
  ofetch,
} from 'ofetch';

export default defineNuxtPlugin(() => {
  globalThis.$fetch = ofetch.create({})
});
