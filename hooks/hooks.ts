import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

export const useLifecycle = (options: {
  beforeMount?: () => void;
  mounted?: () => void;
  beforeUpdate?: () => void;
  updated?: () => void;
  beforeUnmount?: () => void;
  unmounted?: () => void;
}) => {
  if (options.beforeMount) onBeforeMount(options.beforeMount);
  if (options.mounted) onMounted(options.mounted);
  if (options.beforeUpdate) onBeforeUpdate(options.beforeUpdate);
  if (options.updated) onUpdated(options.updated);
  if (options.beforeUnmount) onBeforeUnmount(options.beforeUnmount);
  if (options.unmounted) onUnmounted(options.unmounted);
};
