import { defineComponent, h, reactive } from 'vue';

export interface Toast {
  id: number;
  title?: string;
  message: string;
  intent?: 'info' | 'success' | 'warning' | 'error';
  timeoutMs?: number;
}

const state = reactive({
  toasts: [] as Toast[],
  nextId: 1
});

export function useToasts() {
  function push(toast: Omit<Toast, 'id'>) {
    const id = state.nextId++;
    const t: Toast = { id, timeoutMs: 4000, intent: 'info', ...toast };
    state.toasts.push(t);
    if (t.timeoutMs && t.timeoutMs > 0) {
      setTimeout(() => remove(id), t.timeoutMs);
    }
  }
  function remove(id: number) {
    const idx = state.toasts.findIndex(t => t.id === id);
    if (idx >= 0) state.toasts.splice(idx, 1);
  }
  return { push, remove, toasts: state.toasts };
}

export default defineComponent({
  name: 'UiToastProvider',
  setup(_, { slots }) {
    return () => [
      slots.default?.(),
      h(
        'div',
        { class: 'fixed inset-0 pointer-events-none z-[60]' },
        [
          h(
            'div',
            { class: 'absolute right-4 top-4 flex w-96 flex-col gap-2' },
            state.toasts.map(t =>
              h(
                'div',
                {
                  key: t.id,
                  class:
                    'pointer-events-auto rounded-md border bg-white p-3 shadow-md dark:bg-slate-800',
                },
                [
                  t.title && h('div', { class: 'font-medium mb-1' }, t.title),
                  h('div', { class: 'text-sm opacity-90' }, t.message)
                ]
              )
            )
          )
        ]
      )
    ];
  }
});